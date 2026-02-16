---
theme: ../../themes/3shake
title: 3-SHAKE Slidev テーマ サンプル
transition: fade
---

# 3-SHAKE Slidev テーマ

サンプルプレゼンテーション

2025年3月

---

# コンテンツスライド

## テキストとリスト

- 箇条書き1
- 箇条書き2
- 箇条書き3

> 引用テキストはこのように表示されます

---

# コードブロック

## TypeScript の例

```typescript
interface User {
  name: string;
  email: string;
}

function greet(user: User): string {
  return `Hello, ${user.name}!`;
}
```

---

# テーブル

## プロジェクト一覧

| プロジェクト | 状態 | 担当 |
|---|---|---|
| Reckoner | 稼働中 | チームA |
| Firestore | 開発中 | チームB |
| SRE支援 | 稼働中 | チームC |

---

# ユーティリティクラス

## バッジ

<div class="flex gap-lg">
  <span class="badge badge-green">Green</span>
  <span class="badge badge-blue">Blue</span>
  <span class="badge badge-yellow">Yellow</span>
  <span class="badge badge-navy">Navy</span>
</div>

## ラベル

<div class="flex flex-wrap">
  <span class="label label-green">Green</span>
  <span class="label label-blue">Blue</span>
  <span class="label label-green-fill">Fill</span>
  <span class="label label-blue-outline">Outline</span>
</div>

---

# ボックスとフローチャート

<div class="box box-green-outline">
グリーンアウトラインのボックスです
</div>

<div class="box box-navy">
ネイビーのボックスです（白文字）
</div>

<div class="flex flex-center gap-lg" style="margin-top: 32px;">
  <div class="flow-box flow-green">入力</div>
  <span class="arrow arrow-green">→</span>
  <div class="flow-box flow-blue-fill">処理</div>
  <span class="arrow arrow-blue">→</span>
  <div class="flow-box flow-navy-fill">出力</div>
</div>

---

# ステップとマーカー

<div style="margin-bottom: 24px;">
  <span class="step step-green">1</span> 要件定義を行う<br/>
  <span class="step step-blue">2</span> 設計・実装を進める<br/>
  <span class="step step-yellow">3</span> テスト・デプロイ
</div>

<p>
  <span class="marker-green">グリーンのマーカー</span>で重要な部分を強調できます。
  <span class="marker-blue">ブルーのマーカー</span>も使えます。
</p>

---
layout: section
---

# 01

## セクション区切り

---

# 吹き出し

<div class="bubble bubble-green-outline bubble-tail-bottom">
グリーンの吹き出し（下向き）
</div>

<div class="bubble bubble-blue bubble-tail-top">
ブルーの吹き出し（上向き・塗り）
</div>

---
layout: cover
---

# ご清聴ありがとうございました

お問い合わせは info@3-shake.com まで
