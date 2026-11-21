"""pages/01_top/index.html から WordPress のカスタムHTMLブロック用ファイルを作る。

使い方: python3 wordpress/tools/build_top_block.py
出力:   pages/01_top/top_wp-block.html

- デザイン案のヘッダー／フッターは外す（WordPressテーマのものを使うため。他ページと同じ）
- CSS はすべて #tktop の中だけに効くようにする
- 画像は /wp-content/uploads/treasureking/ に置く前提でパスを置き換える
- 仮リンク（#）を固定ページのURLに置き換える
"""
import re, pathlib, sys

ROOT = pathlib.Path(__file__).resolve().parents[2]
SRC = ROOT / "pages/01_top/index.html"
OUT = ROOT / "pages/01_top/top_wp-block.html"
IMG_BASE = "/wp-content/uploads/treasureking/"

# リンクの文言 → URL（まだ無いページは予定のスラッグ）
LINKS = {
    "お問い合わせ": "/contact/",
    "パートナー募集": "/partner/",
    "ハチの巣駆除のページ": "/hachi/",
    "不用品回収・買取のページ": "/fuyouhin-kaitori/",
    "草刈り・伐採のページ": "/kusakari-bassai/",
    "法人のお客様へ": "/houjin/",
    "ブログ一覧を見る": "/blog/",
    "トップページ": "/",
    "問い合わせ": "/contact/",
    "店舗概要": "/company/",
    "対応エリア": "/area/",
    "よくある質問": "/faq/",
}

s = SRC.read_text(encoding="utf-8")
css = re.search(r"<style>(.*?)</style>", s, re.S).group(1)
body = re.search(r"<body>(.*)</body>", s, re.S).group(1)

# ヘッダー・フッターを外す
body, nh = re.subn(r"<header\b.*?</header>", "", body, flags=re.S)
body, nf = re.subn(r"<footer\b.*?</footer>", "", body, flags=re.S)
assert nh == 2 and nf == 2, (nh, nf)

# PC側の id="contact" を別名にして、PC側のリンクもそちらへ
sp, pc = body.split('<div class="view-pc"', 1)
pc = '<div class="view-pc"' + pc
pc = pc.replace('id="contact"', 'id="contact-pc"').replace('href="#contact"', 'href="#contact-pc"')
body = sp + pc

# 画像パス
body = body.replace('src="assets/img/', 'src="' + IMG_BASE)

# 仮リンクの置き換え
def fix_link(m):
    tag, inner = m.group(1), m.group(2)
    text = re.sub(r"<[^>]+>", "", inner).strip()
    for k, v in LINKS.items():
        if text.startswith(k):
            return tag.replace('href="#"', f'href="{v}"') + inner + "</a>"
    return m.group(0)
body = re.sub(r'(<a\b[^>]*href="#"[^>]*>)(.*?)</a>', fix_link, body, flags=re.S)

# CSS を #tktop の中に閉じ込める
def scope(block):
    out = []
    for rule in re.finditer(r"([^{}]+)\{([^{}]*)\}", block):
        sel, decl = rule.group(1).strip(), rule.group(2)
        if sel == "body":
            continue
        sels = []
        for x in sel.split(","):
            x = x.strip()
            sels.append("#tktop" if x in ("html", ":root") else f"#tktop {x}")
        out.append(",".join(sels) + "{" + decl + "}")
    return "\n".join(out)

parts = []
pos = 0
for m in re.finditer(r"@media([^{]+)\{((?:[^{}]*\{[^{}]*\})*)\s*\}", css):
    parts.append(scope(css[pos:m.start()]))
    parts.append(f"@media{m.group(1)}{{\n{scope(m.group(2))}\n}}")
    pos = m.end()
parts.append(scope(css[pos:]))
scoped = "\n".join(p for p in parts if p.strip())

# WordPress の中で崩れないための追加
extra = """
#tktop{background:#fff}
#tktop .rp{width:100%;max-width:1280px}
#tktop .w{width:auto;max-width:1080px;margin-left:auto;margin-right:auto;padding-left:20px;padding-right:20px}
#tktop img{max-width:100%}
#tktop .view-pc{overflow-x:visible}
"""

out = f"""<!-- wp:html -->
<style>
{scoped}
{extra.strip()}
</style>
<div id="tktop">
{body.strip()}
</div>
<!-- /wp:html -->
"""
OUT.write_text(out, encoding="utf-8")
left = len(re.findall(r'href="#"', body))
print(f"wrote {OUT.relative_to(ROOT)}  ({len(out)//1024} KB)  残りの仮リンク: {left}")
