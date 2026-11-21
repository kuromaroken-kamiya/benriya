#!/usr/bin/env bash
# pages/ のデザイン案から、WordPress に貼るファイルと画像を wordpress/ に集める。
# デザイン案を差し替えたら、もう一度これを実行する。
set -euo pipefail
cd "$(dirname "$0")/../.."
python3 wordpress/tools/build_top_block.py
dst=wordpress/固定ページ
rm -rf "$dst" && mkdir -p "$dst"
cp pages/01_top/top_wp-block.html          "$dst/01_トップページ.html"
cp pages/09_company/company_wp-block.html  "$dst/02_店舗概要.html"
cp pages/10_area/area_wp-block.html        "$dst/03_対応エリア.html"
cp pages/11_faq/faq_wp-block.html          "$dst/04_よくある質問.html"
cp pages/12_contact/contact_wp-block.html  "$dst/05_お問い合わせ.html"
cp pages/13_partner/partner_wp-block.html  "$dst/06_パートナー募集.html"
img=wordpress/アップロードする画像/treasureking
rm -rf wordpress/アップロードする画像 && mkdir -p "$img"
cp pages/01_top/assets/img/* "$img/"
echo "done: $(ls "$dst" | wc -l) pages, $(ls "$img" | wc -l) images"
