# VueProject

Vue 3 + Vite で作成したポートフォリオサイトです。
コンポーネント分割、データ分離、スクロール演出の directive 化により、保守しやすい構成に整理しています。

## 技術スタック

- Vue 3
- Vite
- Yarn

## 主な構成

```text
src/
  App.vue                         # ページ全体のレイアウト
  main.js                         # Vueアプリ起動
  assets/main.css                 # 全体スタイル・レスポンシブ対応
  components/                     # UIコンポーネント
  composables/useSectionNavigation.js
  data/siteContent.js             # 表示テキスト・画像・リンク設定
  directives/reveal.js            # スクロール表示アニメーション
```

## セットアップ

```sh
yarn install
```

## 開発サーバー起動

```sh
yarn dev
```

## 本番ビルド

```sh
yarn build
```

## ビルド確認

```sh
yarn preview
```

## Vercel 設定

Vercel でデプロイする場合は以下を設定します。

- Framework Preset: `Vite`
- Install Command: `yarn install`
- Build Command: `yarn build`
- Output Directory: `dist`
- Root Directory: リポジトリ直下の場合は空欄または `./`

## メモ

- Contact は Google Form を別タブで開く構成です。
- 表示文言や画像差し替えは `src/data/siteContent.js` を編集します。
- 画像ファイルは既存資産を残しつつ、使用箇所をデータ側で管理しています。
