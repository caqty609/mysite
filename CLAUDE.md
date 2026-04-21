# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

megumi oishi（大石メグミ）のポートフォリオサイト。純粋な HTML / CSS / JavaScript の静的サイト。ビルドツール・パッケージマネージャー・フレームワーク不使用。

## ファイル構成と役割

| ファイル | 役割 |
|---|---|
| `index.html` | 全コンテンツを1ファイルに収めたシングルページ |
| `style.css` | 全スタイル。CSS 変数で色を一元管理 |
| `script.js` | ヒーローアニメーションのみ担当 |

## デザイントークン（style.css の `:root`）

```css
--bg: #f7f2ec;       /* ページ背景（クリーム） */
--primary: #e8896a;  /* メインカラー（サーモンピンク） */
--text: #333;
--light-text: #888;
```

色を変更するときは `:root` の変数を変えること。個別セレクタに直接色を書かない。

## ヒーローアニメーションの仕組み

`script.js` が `setTimeout` で3段階に切り替える：

1. **初期状態** — `#faceSad`（困り顔）と `balloon-sad` を表示、`#faceHappy` は `.face-unit--hidden`（`opacity:0` + `position:absolute`）
2. **2秒後** — `#faceSad` に `.face-unit--gone` を付加してフェードアウト。`#faceHappy` の `.face-unit--hidden` を除去し `.face-unit--visible` を付加。`#connectorNi` に `.show` を付加
3. **3.8秒後** — `#balloonHappy` に `.balloon--fade` を付加して吹き出しのみフェードアウト

タイミングを変えるには `script.js` の `setTimeout` の第2引数（ミリ秒）を修正する。

## セクション構成

`index.html` はすべてのセクションを1ファイルに持つ：

- `.header` — ロゴ＋ナビ
- `.hero` — アニメーション（困った→助かった→笑顔のみ）
- `#works` — 作品グリッド（2列、`.work-card` を複製して増減）
- `#about` — 左カラム（写真・スキル）＋右カラム（テキスト）の2カラムグリッド
- `#contact` — SNSアイコン（SVGインライン）
- `.footer` — ロゴ＋ナビ＋コピーライト

## 作業上の注意

- **画像プレースホルダー** — `.work-thumb`・`.about-photo` はグレーのダミー。実画像に替えるときは `<img>` タグを中に入れて `div` の背景色を外す
- **連絡先リンク** — `mailto:your@email.com` と X・Instagram の `href="#"` は本番前に実際の値へ差し替えが必要
- **フォント** — Google Fonts（Noto Sans JP）をCDN読み込み。オフライン確認時は表示が変わる場合がある
- **ページ追加** — works・about・contact の個別ページを作る場合は同じ CSS 変数・クラス命名規則を引き継ぐ
