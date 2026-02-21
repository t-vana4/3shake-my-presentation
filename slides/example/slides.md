---
theme: ../../themes/3shake
title: 3-SHAKE Slidev テーマ サンプル
transition: slide-left
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

<br>

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

<div class="flex flex-col gap-lg">
  <div><span class="step step-green">1</span> 要件定義を行う</div>
  <div><span class="step step-blue">2</span> 設計・実装を進める</div>
  <div><span class="step step-yellow">3</span> テスト・デプロイ</div>
</div>

<br>

<p>
  <span class="marker-green">グリーンのマーカー</span>で重要な部分を強調できます。
  <span class="marker-blue">ブルーのマーカー</span>も使えます。
</p>

---

# 吹き出し

<div class="bubble bubble-green-outline bubble-tail-bottom">
グリーンの吹き出し（下向き）
</div>

<br>

<div class="bubble bubble-blue bubble-tail-top">
ブルーの吹き出し（上向き・塗り）
</div>

---

# ナンバーリスト

キーメッセージ

<div class="numbered-list">
  <div class="nl-row">
    <div class="nl-label">項目1</div>
    <div class="nl-desc">説明文1</div>
  </div>
  <div class="nl-row">
    <div class="nl-label">項目2</div>
    <div class="nl-desc">説明文2</div>
  </div>
  <div class="nl-row">
    <div class="nl-label">項目3</div>
    <div class="nl-desc">説明文3</div>
  </div>
</div>

---

# メトリクス

キーメッセージ

<br>

<div class="metrics">
  <div class="metric">
    <div class="metric-value"><span class="metric-num">100</span><span class="metric-unit">%</span></div>
    <div class="metric-label">ラベル1</div>
  </div>
  <div class="metric">
    <div class="metric-value"><span class="metric-num">200</span><span class="metric-unit">件</span></div>
    <div class="metric-label">ラベル2</div>
  </div>
  <div class="metric">
    <div class="metric-value"><span class="metric-num">3.5</span></div>
    <div class="metric-label">ラベル3</div>
  </div>
</div>

---
layout: section
---

# 01

## セクション区切り

---
layout: line-chart
labels: ["1月", "2月", "3月", "4月"]
series:
  - name: 売上
    color: green
    data: [100, 130, 150, 180]
  - name: 利益
    color: dark
    data: [20, 30, 40, 60]
  - name: コスト
    color: yellow
    data: [80, 85, 85, 95]
---

# 折れ線グラフ

全指標が改善傾向

---
layout: horizontal-bar
items:
  - label: 営業
    value: 400
  - label: 開発
    value: 300
  - label: マーケ
    value: 200
  - label: 管理
    value: 100
---

# 横棒グラフ

営業部門がトップ

---
layout: stacked-bar
items:
  - label: モバイル
    value: 55
  - label: PC
    value: 35
  - label: タブレット
    value: 10
---

# 100%積み上げ棒

モバイルユーザーが過半数

---
layout: vertical-bar
items:
  - label: "2021"
    value: 100
  - label: "2022"
    value: 150
  - label: "2023"
    value: 200
  - label: "2024"
    value: 250
  - label: "2025"
    value: 300
---

# 縦棒グラフ

2025年が過去最高

<br>

---
layout: cover
---

# ご清聴ありがとうございました
