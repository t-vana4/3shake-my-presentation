# 3shake-my-presentation

[Slidev](https://sli.dev/) で作成した vana4 のプレゼンテーション資料を管理するリポジトリです。

## ディレクトリ構成

```
.
├── .github/workflows/deploy.yml              # GitHub Pages デプロイ用ワークフロー
├── assets/                                   # 共通アセット（全スライドで共有）
│   └── common/                               # プロフィール画像など
├── scripts/generate-index.mjs                # トップページ生成スクリプト
├── slides/                                   # プレゼンテーションスライド
│   ├── example/                              # 3shake テーマのサンプル
│   │   ├── public/                           # 画像などの静的ファイル
│   │   │   └── common -> ../../../assets/common  # 共通アセットへのシンボリックリンク
│   │   └── slides.md                         # スライド本体
│   ├── why-is-pm-training-so-difficult/
│   │   ├── public/
│   │   │   └── common -> ../../../assets/common
│   │   └── slides.md
│   └── ...
├── themes/                                   # カスタムテーマ
│   └── 3shake/                               # 3shake テーマ
│       ├── layouts/                          # レイアウト (cover, default, section)
│       ├── package.json                      # テーマ設定（カラー・フォント）
│       ├── public/                           # ロゴ画像
│       ├── setup/                            # Slidev セットアップ
│       │   └── shiki.ts                      # シンタックスハイライト設定
│       └── styles/                           # CSS
├── package.json
├── pnpm-lock.yaml
└── pnpm-workspace.yaml
```

## セットアップ

```bash
pnpm install
```

## 使い方

### 開発サーバーの起動

```bash
# デフォルト (slides/example/slides.md)
pnpm dev

# スライドを指定して起動
SLIDES=slides/why-is-pm-training-so-difficult/slides.md pnpm dev
```

### ビルド

```bash
SLIDES=slides/why-is-pm-training-so-difficult/slides.md pnpm build
```

### PDF エクスポート

```bash
SLIDES=slides/why-is-pm-training-so-difficult/slides.md pnpm export
```

## 共通アセット

複数のスライドで使う画像（プロフィール画像など）は `assets/common/` に配置し、各スライドの `public/common` からシンボリックリンクで参照します。

### Markdown での参照方法

```html
<img src="/common/profile.png" />
```

### 共通アセットの追加

`assets/common/` にファイルを追加するだけで、全スライドから `/common/ファイル名` で参照できます。

## 新しいスライドの追加

1. `slides/` 配下にディレクトリを作成
2. `public/` ディレクトリを作成し、共通アセットへのシンボリックリンクを追加

```bash
mkdir -p slides/<slide-name>/public
ln -s ../../../assets/common slides/<slide-name>/public/common
```

3. `slides.md` を作成し、frontmatter でテーマを指定

```markdown
---
theme: ../../themes/3shake
title: スライドタイトル
transition: slide-left
---
```

4. `SLIDES` 環境変数でパスを指定して起動

## GitHub Pages での公開

mainブランチにpushすると GitHub Actions で全スライドが自動ビルドされ、GitHub Pages にSPAとして公開されます。

### URL

| ページ | URL |
|--------|-----|
| トップ（一覧） | `https://t-vana4.github.io/3shake-my-presentation/` |
| 各スライド | `https://t-vana4.github.io/3shake-my-presentation/<slide-name>/` |

トップページではカード形式でスライドが一覧表示され、クリックするとモーダル内でスライドを操作（ページ送り）できます。

### 仕組み

- `slides/` 配下の各ディレクトリを `slidev build` でSPAとしてビルド
- `scripts/generate-index.mjs` がスライド一覧のインデックスページを生成
- 各カードは iframe によるライブプレビューを表示

### GitHub リポジトリ側の設定

Settings > Pages で **Source** を **GitHub Actions** に設定してください。

## AI によるスライド作成 (Claude Code)

本リポジトリには [Slidev スキル](https://sli.dev/guide/work-with-ai) が導入されています（`.claude/skills/slidev`）。
Claude Code 上で Slidev の構文・機能を活用したスライド作成の支援を受けられます。

```bash
# スキルのインストール（導入済み）
npx skills add slidevjs/slidev
```

### プロンプト例

- 「○○についてのプレゼンテーションを作成して」
- 「クリックアニメーションでリスト項目を順番に表示して」
- 「Mermaid でアーキテクチャ図を追加して」
- 「two-cols レイアウトで左にコード、右に説明を配置して」
