# 3shake-my-presentation

[Slidev](https://sli.dev/) で作成した vana4 のプレゼンテーション資料を管理するリポジトリです。

## ディレクトリ構成

```
.
├── slides/                          # プレゼンテーション資料
│   ├── example/                     # 3shake テーマのサンプル
│   │   ├── public/                  # 画像などの静的ファイル
│   │   └── slides.md                # スライド本体
│   └── why-is-pm-training-so-difficult/  # PMの育成はなぜ難しいのか？
│       ├── public/
│       └── slides.md
├── themes/                          # カスタムテーマ
│   └── 3shake/                      # 3shake テーマ
│       ├── layouts/                 # レイアウト (cover, default, section)
│       ├── public/                  # ロゴ画像
│       └── styles/                  # CSS
├── package.json
└── pnpm-lock.yaml
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

## 新しいスライドの追加

1. `slides/` 配下にディレクトリを作成
2. `slides.md` を作成し、frontmatter でテーマを指定

```markdown
---
theme: ../../themes/3shake
title: スライドタイトル
---
```

3. `SLIDES` 環境変数でパスを指定して起動

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
