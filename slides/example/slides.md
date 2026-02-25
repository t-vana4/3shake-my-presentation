---
theme: ../../themes/3shake
title: 3-SHAKE Slidev テーマ サンプル
transition: fade
---

# 3-SHAKE Slidev テーマ

サンプルプレゼンテーション

2025年3月

---

# テキストと引用の表示例

本文テキストは Noto Sans JP で表示されます。
遠くからでも読みやすいサイズを意識しています。

> 引用テキストはこのように表示されます

---

# TypeScript のコード表示

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

# プロジェクト一覧をテーブルで表示

| プロジェクト | 状態 | 担当 |
|---|---|---|
| Reckoner | 稼働中 | チームA |
| Firestore | 開発中 | チームB |
| SRE支援 | 稼働中 | チームC |

---

# バッジで状態を表現する

<div class="flex gap-lg">
  <span class="badge badge-green">Green</span>
  <span class="badge badge-blue">Blue</span>
  <span class="badge badge-yellow">Yellow</span>
  <span class="badge badge-navy">Navy</span>
</div>

<br>

<br>

<br>

<div class="flex flex-wrap">
  <span class="label label-green">Green</span>
  <span class="label label-blue">Blue</span>
  <span class="label label-green-fill">Fill</span>
  <span class="label label-blue-outline">Outline</span>
</div>

---

# ボックスで情報を強調する

<div class="box box-green-outline">
グリーンアウトラインのボックスです
</div>

<div class="box box-navy">
ネイビーのボックスです（白文字）
</div>

---

# フローチャートで処理の流れを示す

<div class="flex flex-center gap-lg" style="margin-top: 32px;">
  <div class="flow-box flow-green">入力</div>
  <span class="arrow arrow-green">→</span>
  <div class="flow-box flow-blue-fill">処理</div>
  <span class="arrow arrow-blue">→</span>
  <div class="flow-box flow-navy-fill">出力</div>
</div>

---

# ステップ番号で手順を示す

<div class="flex flex-col gap-lg">
  <div><span class="step step-green">1</span> 要件定義を行う</div>
  <div><span class="step step-blue">2</span> 設計・実装を進める</div>
  <div><span class="step step-yellow">3</span> テスト・デプロイ</div>
</div>

---

# マーカーで重要箇所を強調する

<span class="marker-green">グリーンのマーカー</span>で重要な部分を強調できます。
<span class="marker-blue">ブルーのマーカー</span>も使えます。

---

# 吹き出しでコメントを表現する

<div class="bubble bubble-green-outline bubble-tail-bottom">
グリーンの吹き出し（下向き）
</div>

<br>

<div class="bubble bubble-blue bubble-tail-top">
ブルーの吹き出し（上向き・塗り）
</div>

---

# ナンバーリストでメッセージを列挙する

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

# メトリクスで数値を示す

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

## グラフサンプル

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
layout: section
---

# 02

## レイアウトパターン例

---

# 期待と現実のギャップ

AIコーディングで10倍速くなると思ったのに

<div class="flex gap-lg" style="margin-top: 32px;">
  <div class="box box-gray-outline" style="flex: 1;">
    <div style="font-weight: 700; font-size: 24px; margin-bottom: 12px;">期待</div>
    <div style="font-size: 20px; line-height: 1.8;">AIエージェントで10倍以上の生産性<br>複雑なタスクも自動化<br>コーディング時間の大幅削減</div>
  </div>
  <div class="box box-green" style="flex: 1;">
    <div style="font-weight: 700; font-size: 24px; margin-bottom: 12px;">現実</div>
    <div style="font-size: 20px; line-height: 1.8;">2〜3倍程度で頭打ち<br>場合によっては遅くなることすら<br>「AI疲れ」という新たな問題</div>
  </div>
</div>

---

# エンジニアリングの本質

AIが「How（実装）」を担うほど、人間は「What / Why」に集中する

<div class="flex gap-lg" style="margin-top: 32px;">
  <div class="box box-blue-outline" style="flex: 1;">
    <div style="font-weight: 700; font-size: 24px; color: var(--color-blue);">プログラミング</div>
    <div style="font-size: 20px; line-height: 1.8;">既知の解法を正確に実装する</div>
    <div style="font-size: 18px; line-height: 1.8; margin-top: 8px; color: var(--color-gray);">・仕様が決まっている<br>・入出力が明確<br>・正解がある</div>
    <div style="font-size: 18px; margin-top: 12px;"><span class="note-blue">→ AIが最も得意な領域</span></div>
  </div>
  <div class="box box-green-outline" style="flex: 1;">
    <div style="font-weight: 700; font-size: 24px; color: var(--color-green);">エンジニアリング</div>
    <div style="font-size: 20px; line-height: 1.8;">未知の問題を試行錯誤で探索する</div>
    <div style="font-size: 18px; line-height: 1.8; margin-top: 8px; color: var(--color-gray);">・何を作るべきかが不明確<br>・作ってみないとわからない<br>・正解がない中で判断する</div>
    <div style="font-size: 18px; margin-top: 12px;"><span class="note-green">→ 人間の仕事として残る</span></div>
  </div>
</div>

---

# ボトルネックの上流化

暗黙知を取り出しAIが扱える形に変換する

<div class="flex flex-center" style="margin-top: 48px; gap: 24px;">
  <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
    <div class="flow-box flow-blue-fill" style="font-size: 18px;">実装</div>
    <span class="note-blue">AIで解決</span>
  </div>
  <span class="arrow arrow-gray">→</span>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
    <div class="flow-box flow-green-fill" style="font-size: 18px;">要件定義</div>
    <span class="note-green">AIで改善</span>
  </div>
  <span class="arrow arrow-gray">→</span>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
    <div class="flow-box flow-yellow-fill" style="font-size: 18px;">企画・仮説</div>
    <span class="note-yellow">AIで支援</span>
  </div>
  <span class="arrow arrow-gray">→</span>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
    <div class="flow-box flow-navy-fill" style="font-size: 18px;">顧客の声</div>
    <span class="note-navy" style="font-weight: 700;">ボトルネック</span>
  </div>
</div>

---

# アンラーニングの重要性

これまでの「常識」を問い直す

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 16px;">
  <div class="box box-gray-outline" style="padding: 16px 20px;">
    <div style="font-size: 18px;"><span class="step step-green" style="width: 36px; height: 36px; font-size: 16px;">1</span> <strong>「タスクは1個ずつ順番にやるもの」</strong></div>
    <div style="font-size: 14px; margin-top: 15px; color: var(--color-gray);">AIエージェントで部下を無制限に持てる状態に。100件あるなら100件同時に仕掛ける</div>
  </div>
  <div class="box box-gray-outline" style="padding: 16px 20px;">
    <div style="font-size: 18px;"><span class="step step-green" style="width: 36px; height: 36px; font-size: 16px;">2</span> <strong>「自分はToDoをこなす側」</strong></div>
    <div style="font-size: 14px; margin-top: 15px; color: var(--color-gray);">AIがToDoを実行する側になった以上、人間はToDoを生み出す側にならなければいけない</div>
  </div>
  <div class="box box-gray-outline" style="padding: 16px 20px;">
    <div style="font-size: 18px;"><span class="step step-green" style="width: 36px; height: 36px; font-size: 16px;">3</span> <strong>「作業を速くすれば全体が良くなる」</strong></div>
    <div style="font-size: 14px; margin-top: 15px; color: var(--color-gray);">個別タスクの効率化は3倍程度で頭打ち。全体のアウトプット構造を変える必要がある</div>
  </div>
  <div class="box box-gray-outline" style="padding: 16px 20px;">
    <div style="font-size: 18px;"><span class="step step-green" style="width: 36px; height: 36px; font-size: 16px;">4</span> <strong>「5人で半年」というプロジェクト粒度</strong></div>
    <div style="font-size: 14px; margin-top: 15px; color: var(--color-gray);">チームで半年かけていた規模を1人にアサインし直す。タスクの粒度を10〜20倍に引き上げる</div>
  </div>
</div>

---

# 導入効果の実績

3つの指標で改善を確認

<br>

<div class="metrics">
  <div class="metric">
    <div class="metric-value"><span class="metric-num">3.2</span><span class="metric-unit">倍</span></div>
    <div class="metric-label">開発スループット</div>
  </div>
  <div class="metric">
    <div class="metric-value"><span class="metric-num">40</span><span class="metric-unit">%</span></div>
    <div class="metric-label">レビュー工数削減</div>
  </div>
  <div class="metric">
    <div class="metric-value"><span class="metric-num">92</span><span class="metric-unit">%</span></div>
    <div class="metric-label">チーム満足度</div>
  </div>
</div>

---
layout: cover
---

# ご清聴ありがとうございました
