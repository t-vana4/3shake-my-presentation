---
theme: ../../themes/3shake
title: Geake Platform — エンタープライズAIの"インフラ"を再定義する
layout: cover
transition: slide-left
---

# Geake Platform

## エンタープライズAIの"インフラ"を再定義する

<br>

<div style="font-size: 18px; color: rgba(255,255,255,0.8);">
  株式会社スリーシェイク ｜ Investor Pitch Deck
</div>

---

# ワンライナー

<div class="box box-blue" style="font-size: 28px; text-align: center; padding: 32px;">
  日本のエンタープライズ企業に、<br><strong>セキュリティ・ガバナンスと現場の自由を両立する</strong><br>統合AIプラットフォームを提供する
</div>

<br>

<div style="text-align: center;">
  <div class="bubble bubble-blue-outline bubble-tail-bottom" style="display: inline-block; font-size: 24px; padding: 20px 40px;">
    <span class="marker-blue"><strong>AIを禁止するのではなく、可視化して制御する</strong></span>
  </div>
</div>

<!--
Geake Platformの核心メッセージ。AIを禁止するのではなく、安全に活用できる仕組みを提供する。
-->

---
layout: section
---

# 01

## 市場課題 — Why Now?

---

# 生成AI市場の爆発的成長

<span class="label label-blue-fill" style="font-size: 20px; padding: 6px 20px;">Market Size</span>

<br>

<div class="flex flex-center gap-lg" style="margin-top: 16px;">
  <div style="flex: 1; text-align: center;">
    <div class="box box-blue" style="padding: 16px 12px;">
      <div style="font-size: 14px;">法人向け生成AI市場</div>
      <div style="font-size: 36px; font-weight: 700;">720億円</div>
      <div style="font-size: 14px; opacity: 0.8;">2026年</div>
    </div>
    <span class="note">MIC Research</span>
  </div>
  <div style="flex: 1; text-align: center;">
    <div class="box box-navy" style="padding: 16px 12px;">
      <div style="font-size: 14px;">日本AI市場全体</div>
      <div style="font-size: 36px; font-weight: 700;">4.19兆円</div>
      <div style="font-size: 14px; opacity: 0.8;">2029年</div>
    </div>
    <span class="note">IDC Japan</span>
  </div>
  <div style="flex: 1; text-align: center;">
    <div class="box box-blue" style="padding: 16px 12px;">
      <div style="font-size: 14px;">AIエージェント基盤</div>
      <div style="font-size: 36px; font-weight: 700;">135億円</div>
      <div style="font-size: 14px; opacity: 0.8;">2029年</div>
    </div>
    <span class="note">ITR / CAGR 142.8%</span>
  </div>
  <div style="flex: 1; text-align: center;">
    <div class="box box-navy" style="padding: 16px 12px;">
      <div style="font-size: 14px;">グローバル Enterprise AI</div>
      <div style="font-size: 36px; font-weight: 700;">$4,171億</div>
      <div style="font-size: 14px; opacity: 0.8;">2033年</div>
    </div>
    <span class="note">CAGR 40.7%</span>
  </div>
</div>

<br>

<div style="text-align: center;">
  <span class="marker-blue"><strong>エンタープライズ生成AIは、次の10年の最大の成長市場</strong></span>
</div>

<!--
市場データを提示して、投資機会の大きさを伝える。数字で語る。
-->

---

# エンタープライズの「AIジレンマ」

<div class="flex gap-lg" style="margin-top: 20px;">
  <div style="flex: 1; text-align: center;">
    <div class="flow-box flow-blue-fill" style="width: 100%; font-size: 18px; padding: 16px; justify-content: center;">
      経営層・情報システム部
    </div>
    <div class="box box-blue-outline" style="margin-top: 12px; font-size: 18px; text-align: left;">
      <strong>守りの姿勢</strong><br>
      ・情報漏洩リスクを懸念<br>
      ・コンプライアンス遵守<br>
      ・シャドーIT対策が急務<br>
      ・「とりあえず禁止」の判断
    </div>
  </div>
  <div style="display: flex; align-items: center; margin-top: 50px;">
    <span class="arrow arrow-lg arrow-blue">VS</span>
  </div>
  <div style="flex: 1; text-align: center;">
    <div class="flow-box flow-navy-fill" style="width: 100%; font-size: 18px; padding: 16px; justify-content: center;">
      現場エンジニア・事業部
    </div>
    <div class="box box-navy-outline" style="margin-top: 12px; font-size: 18px; text-align: left; border-color: var(--color-navy);">
      <strong>攻めの姿勢</strong><br>
      ・生産性を上げたい<br>
      ・最新のAIツールを使いたい<br>
      ・最新LLMを活用したい<br>
      ・「使わないと競争に負ける」
    </div>
  </div>
</div>

<br>

<div style="text-align: center;">
  <span class="marker-blue"><strong>この対立構造が、エンタープライズAI導入の最大のボトルネック</strong></span>
</div>

<!--
守りと攻めの対立。この構造的課題を解決することが事業機会。
-->

---

# シャドーAIの脅威

禁止しても、現場は使っている。

<div class="flex flex-col gap-sm" style="margin-top: 10px;">
  <div class="flex gap-lg">
    <div style="flex: 1;">
      <div><span class="step step-blue">1</span> <strong>個人アカウントでChatGPTを利用</strong></div>
      <span class="note" style="margin-left: 65px;">機密コードが外部に送信されるリスク</span>
    </div>
  </div>
  <div class="flex gap-lg">
    <div style="flex: 1;">
      <div><span class="step step-blue">2</span> <strong>無許可のAPI連携が増殖</strong></div>
      <span class="note" style="margin-left: 65px;">誰がどのモデルにどんなデータを送っているか不明</span>
    </div>
  </div>
  <div class="flex gap-lg">
    <div style="flex: 1;">
      <div><span class="step step-blue">3</span> <strong>コスト管理が不可能に</strong></div>
      <span class="note" style="margin-left: 65px;">部署ごとのAI利用費用が把握できない</span>
    </div>
  </div>
</div>

<br>

<div class="box box-blue" style="text-align: center; font-size: 22px;">
  必要なのは「禁止」ではなく、<strong>安全に使える仕組み</strong>
</div>

<!--
シャドーAI問題の深刻さを訴求。禁止では解決しない。
-->

---

# 既存ソリューションの限界

<span class="label label-blue-fill" style="font-size: 18px; padding: 6px 16px;">Market Gap</span>

<div class="flex gap-lg" style="margin-top: 16px;">
  <div style="flex: 1;">
    <div class="box box-blue-outline" style="font-size: 18px;">
      <strong>Azure OpenAI / Amazon Bedrock</strong><br>
      <span class="note">LLMアクセスは提供するが、<br>開発者ツール統合やガバナンス機能は限定的</span>
    </div>
  </div>
  <div style="flex: 1;">
    <div class="box box-blue-outline" style="font-size: 18px;">
      <strong>ChatGPT Enterprise</strong><br>
      <span class="note">チャットUIに特化。<br>Cursor / Claude Code等の開発者ツール非対応</span>
    </div>
  </div>
  <div style="flex: 1;">
    <div class="box box-blue-outline" style="font-size: 18px;">
      <strong>国内SaaS (exaBase等)</strong><br>
      <span class="note">日本語対応は強いが、<br>エージェント拡張性・マルチツール対応に課題</span>
    </div>
  </div>
</div>

<br>

<div style="text-align: center;">
  <div class="box box-blue" style="display: inline-block; font-size: 22px; padding: 16px 40px;">
    <strong>ガバナンス</strong> × <strong>マルチツール対応</strong> × <strong>エージェント拡張性</strong><br>
    <span style="font-size: 18px;">3つを同時に満たすプロダクトが存在しない</span>
  </div>
</div>

<!--
市場のギャップを明確に示す。この空白地帯がGeake Platformの事業機会。
-->

---
layout: section
---

# 02

## ソリューション — What We Build

---

# Geake Platform 全体像

<span class="label label-blue-fill" style="font-size: 18px; padding: 6px 16px;">Architecture Overview</span>

<div style="margin-top: 6px;">
  <div class="flex flex-center gap-sm">
    <div class="flow-box flow-gray" style="min-width: 90px; font-size: 14px; padding: 8px 16px;">Cursor</div>
    <div class="flow-box flow-gray" style="min-width: 90px; font-size: 14px; padding: 8px 16px;">Claude Code</div>
    <div class="flow-box flow-gray" style="min-width: 90px; font-size: 14px; padding: 8px 16px;">Geake Chat</div>
    <div class="flow-box flow-gray" style="min-width: 90px; font-size: 14px; padding: 8px 16px;">Open Hands</div>
  </div>

  <div style="text-align: center; margin: 4px 0;">
    <span class="arrow arrow-sm arrow-blue" style="font-size: 24px;">&#x25BC;</span>
  </div>

  <div class="flex flex-center">
    <div class="flow-box flow-blue-fill" style="width: 90%; font-size: 17px; padding: 10px;">
      <strong>Geake AI Gateway</strong> — APIエンドポイント / トラフィック制御 / ログ記録
    </div>
  </div>

  <div style="text-align: center; margin: 4px 0;">
    <span class="arrow arrow-sm arrow-blue" style="font-size: 24px;">&#x25BC;</span>
  </div>

  <div class="flex flex-center gap-sm">
    <div class="flow-box flow-blue" style="flex: 1; font-size: 13px; padding: 10px 8px; flex-direction: column;">
      <strong>Geake ID</strong>
      <div>認証・認可 / RBAC</div>
    </div>
    <div class="flow-box flow-blue" style="flex: 1; font-size: 13px; padding: 10px 8px; flex-direction: column;">
      <strong>Geake Plane</strong>
      <div>AIアプリ実行基盤</div>
    </div>
    <div class="flow-box flow-blue" style="flex: 1; font-size: 13px; padding: 10px 8px; flex-direction: column;">
      <strong>Geake Chain</strong>
      <div>エージェント / MCP</div>
    </div>
    <div class="flow-box flow-blue" style="flex: 1; font-size: 13px; padding: 10px 8px; flex-direction: column;">
      <strong>Geake Explorer</strong>
      <div>利用状況可視化</div>
    </div>
  </div>

  <div style="text-align: center; margin: 4px 0;">
    <span class="arrow arrow-sm arrow-blue" style="font-size: 24px;">&#x25BC;</span>
  </div>

  <div class="flex flex-center gap-sm">
    <div class="flow-box flow-navy-fill" style="min-width: 100px; font-size: 14px; padding: 8px 16px;">OpenAI</div>
    <div class="flow-box flow-navy-fill" style="min-width: 100px; font-size: 14px; padding: 8px 16px;">Anthropic</div>
    <div class="flow-box flow-navy-fill" style="min-width: 100px; font-size: 14px; padding: 8px 16px;">Google AI</div>
    <div class="flow-box flow-navy-fill" style="min-width: 100px; font-size: 14px; padding: 8px 16px;">その他LLM</div>
  </div>
</div>

<div style="text-align: right; margin-top: 4px;">
  <span class="note" style="font-size: 14px;">全て顧客環境内（VPC / Cloud Run）にデプロイ</span>
</div>

<!--
プロダクト全体のアーキテクチャを俯瞰。レイヤー構造で整理。
-->

---

# Geake ID — 統合認証・認可

<span class="label label-blue-fill" style="font-size: 18px; padding: 6px 16px;">Identity & Access Management</span>

<div class="box box-blue-outline" style="font-size: 24px; text-align: center;">
  <strong>「誰が・どのツールで・どのモデルを」</strong> — 全てを一元管理
</div>

<br>

<div class="flex gap-lg" style="margin-top: 8px;">
  <div style="flex: 1; text-align: center;">
    <span class="badge badge-blue" style="width: 100px; height: 100px; font-size: 14px; line-height: 1.3;">SSO<br>連携</span>
    <div class="note" style="margin-top: 8px;">既存IdPとシームレスに統合</div>
  </div>
  <div style="flex: 1; text-align: center;">
    <span class="badge badge-blue" style="width: 100px; height: 100px; font-size: 14px; line-height: 1.3;">RBAC<br>制御</span>
    <div class="note" style="margin-top: 8px;">部署・役職単位で利用権限を設定</div>
  </div>
  <div style="flex: 1; text-align: center;">
    <span class="badge badge-blue" style="width: 100px; height: 100px; font-size: 14px; line-height: 1.3;">利用<br>ログ</span>
    <div class="note" style="margin-top: 8px;">全リクエストを記録・監査可能</div>
  </div>
  <div style="flex: 1; text-align: center;">
    <span class="badge badge-blue" style="width: 100px; height: 100px; font-size: 14px; line-height: 1.3;">コスト<br>配賦</span>
    <div class="note" style="margin-top: 8px;">部署別のAIコストを可視化</div>
  </div>
</div>

<br>

<span class="marker-blue"><strong>情シス部門が求める「可視化と制御」を実現</strong></span>

<!--
Geake IDの4つの主要機能。企業のガバナンス要件に対応。
-->

---

# Geake AI Gateway — 統合APIエンドポイント

<span class="label label-blue-fill" style="font-size: 18px; padding: 6px 16px;">AI Gateway</span>

<div class="flex gap-lg" style="margin-top: 16px;">
  <div style="flex: 1;">
    <div class="box box-blue-outline" style="font-size: 18px;">
      <strong>OpenAI互換API</strong><br>
      <span class="note">既存コードの変更なしでエンドポイント切替のみ</span>
    </div>
    <div class="box box-blue-outline" style="font-size: 18px;">
      <strong>開発者ツール対応</strong><br>
      <span class="note">Cursor / Claude Code 等をそのまま利用可能</span>
    </div>
  </div>
  <div style="flex: 1;">
    <div class="box box-blue-outline" style="font-size: 18px;">
      <strong>マルチLLMルーティング</strong><br>
      <span class="note">OpenAI, Anthropic, Google AI を一元的に利用</span>
    </div>
    <div class="box box-blue-outline" style="font-size: 18px;">
      <strong>トラフィック制御</strong><br>
      <span class="note">レートリミット・コスト上限・モデル制限</span>
    </div>
  </div>
</div>

<br>

<span class="marker-blue"><strong>現場のエンジニアは普段の開発ツールをそのまま使える</strong></span>

<!--
Gatewayの価値：現場は何も変えなくてよい。これが導入のハードルを下げる。
-->

---

# Plane / Chain — 拡張性 & エージェント

<div class="flex gap-lg">
  <div style="flex: 1;">
    <span class="label label-blue-fill" style="font-size: 18px; padding: 6px 16px;">Geake Plane</span>
    <div class="box box-blue-outline" style="margin-top: 8px; font-size: 17px;">
      <strong>AIアプリ実行基盤</strong>
      <div style="margin-top: 12px;"><span class="step step-blue" style="width: 30px; height: 30px; font-size: 13px;">1</span> Geake Chat（チャット型AIアプリ）</div>
      <div style="margin-top: 10px;"><span class="step step-blue" style="width: 30px; height: 30px; font-size: 13px;">2</span> Open Hands等のOSSエージェント</div>
      <div style="margin-top: 10px;"><span class="step step-blue" style="width: 30px; height: 30px; font-size: 13px;">3</span> 独自AIアプリのデプロイ基盤</div>
      <div style="margin-top: 10px;"><span class="step step-blue" style="width: 30px; height: 30px; font-size: 13px;">4</span> 統一ガバナンス下で安全に実行</div>
    </div>
  </div>
  <div style="flex: 1;">
    <span class="label label-blue-fill" style="font-size: 18px; padding: 6px 16px;">Geake Chain</span>
    <div class="box box-blue-outline" style="margin-top: 8px; font-size: 17px;">
      <strong>エージェント基盤</strong>
      <div style="margin-top: 12px;"><span class="step step-blue" style="width: 30px; height: 30px; font-size: 13px;">1</span> MCP（Model Context Protocol）対応</div>
      <div style="margin-top: 10px;"><span class="step step-blue" style="width: 30px; height: 30px; font-size: 13px;">2</span> A2A（Agent-to-Agent）連携</div>
      <div style="margin-top: 10px;"><span class="step step-blue" style="width: 30px; height: 30px; font-size: 13px;">3</span> 外部ツール連携の自動化</div>
      <div style="margin-top: 10px;"><span class="step step-blue" style="width: 30px; height: 30px; font-size: 13px;">4</span> 利用傾向分析</div>
    </div>
  </div>
</div>

<br>

<span class="marker-blue"><strong>「安全に動かせる」から導入できる。「繋がる」からもっと活用できる。</strong></span>

<!--
Plane（管理・可視化）とChain（エージェント拡張）の2軸で価値を提供。
-->

---

# 技術アーキテクチャの優位性

<span class="label label-blue-fill" style="font-size: 18px; padding: 6px 16px;">Technical Moat</span>

<div class="flex flex-col gap-sm" style="margin-top: 8px;">
  <div class="box box-blue-outline" style="font-size: 18px; padding: 12px 20px;">
    <strong><span class="marker-blue">顧客環境内デプロイ（クローズド構築）</span></strong><br>
    <span class="note" style="font-size: 14px;">データが顧客のVPC/Cloud Runから外に出ない。金融・医療・官公庁にも対応可能</span>
  </div>
  <div class="box box-blue-outline" style="font-size: 18px; padding: 12px 20px;">
    <strong><span class="marker-blue">Cloud Runベースのサーバーレスアーキテクチャ</span></strong><br>
    <span class="note" style="font-size: 14px;">スケーラブル・低運用コスト。顧客のGoogle Cloud上にワンクリックデプロイ</span>
  </div>
  <div class="box box-blue-outline" style="font-size: 18px; padding: 12px 20px;">
    <strong><span class="marker-blue">OpenTelemetryネイティブな可観測性</span></strong><br>
    <span class="note" style="font-size: 14px;">全AIリクエストのトレーシング・メトリクス・ログを統合収集</span>
  </div>
</div>

<div style="text-align: center; margin-top: 12px;">
  <span class="note-blue">SRE企業だからこそ実現できる、プロダクション品質のAIインフラ</span>
</div>

<!--
技術的な差別化要因。顧客環境デプロイは特にエンタープライズで強い訴求力。
-->

---
layout: section
---

# 03

## 競争優位性

---

# 競合比較マトリクス

<span class="label label-blue-fill" style="font-size: 18px; padding: 6px 16px;">Competitive Landscape</span>

<div class="table-blue" style="margin-top: 6px;">

| 評価項目 | Geake | Azure OpenAI | Bedrock | ChatGPT Ent. | exaBase |
|---|---|---|---|---|---|
| データ主権 | **◎** | △ | △ | × | × |
| 開発者ツール対応 | **◎** | △ | △ | × | × |
| 統合認証・ガバナンス | **◎** | ○ | ○ | △ | △ |
| エージェント対応 | **○** | △ | ○ | △ | ○ |
| 日本企業特化 | **◎** | △ | △ | △ | ◎ |
| 導入・運用支援 | **◎** | △ | △ | × | ○ |

</div>

<br>

<span class="marker-blue"><strong>データ主権 × 開発者ツール対応 × 日本企業特化 の組み合わせは唯一</strong></span>

<!--
比較表で競合との差を一目で理解できるように。
-->

---

# Geake Platform 独自のポジショニング

<div style="text-align: center;">
  <div class="box box-blue" style="display: inline-block; font-size: 26px; padding: 20px 48px;">
    開発者ツールを企業のガバナンス下で安全に使える<br><strong>唯一のプラットフォーム</strong>
  </div>
</div>

<div class="flex flex-center gap-lg" style="margin-top: 24px;">
  <div class="flex flex-col" style="text-align: center;">
    <span class="badge badge-lg badge-blue" style="width: 140px; height: 140px; font-size: 16px; line-height: 1.4;">顧客環境内<br>クローズド<br>構築</span>
    <span class="note" style="margin-top: 8px;">データ主権の確保</span>
  </div>
  <div style="display: flex; align-items: center; margin-bottom: 50px;">
    <span class="arrow arrow-blue" style="font-size: 36px;">×</span>
  </div>
  <div class="flex flex-col" style="text-align: center;">
    <span class="badge badge-lg badge-blue" style="width: 140px; height: 140px; font-size: 16px; line-height: 1.4;">API<br>Gateway<br>統合</span>
    <span class="note" style="margin-top: 8px;">マルチツール対応</span>
  </div>
  <div style="display: flex; align-items: center; margin-bottom: 50px;">
    <span class="arrow arrow-blue" style="font-size: 36px;">×</span>
  </div>
  <div class="flex flex-col" style="text-align: center;">
    <span class="badge badge-lg badge-blue" style="width: 140px; height: 140px; font-size: 16px; line-height: 1.4;">SRE<br>運用品質</span>
    <span class="note" style="margin-top: 8px;">エンタープライズ信頼性</span>
  </div>
</div>

<br>

<div style="text-align: center;">
  <span class="note-blue">3つの掛け合わせが、参入障壁の高い独自ポジショニングを形成</span>
</div>

<!--
差別化の3要素を掛け合わせで表現。単体では模倣可能でも、組み合わせが参入障壁。
-->

---
layout: section
---

# 04

## ビジネスモデル & GTM

---

# 収益モデル

<span class="label label-blue-fill" style="font-size: 18px; padding: 6px 16px;">Revenue Model</span>

<div class="flex gap-lg" style="margin-top: 20px;">
  <div style="flex: 1;">
    <div class="flow-box flow-blue-fill" style="width: 100%; font-size: 18px; padding: 16px;">
      <strong>顧客環境クローズド構築</strong>
    </div>
    <div class="box box-blue-outline" style="margin-top: 12px; font-size: 18px;">
      ・顧客のGoogle Cloudプロジェクト内に構築<br>
      ・インフラ構築・運用までを提供<br>
      ・エンタープライズ向け専用環境
    </div>
  </div>
  <div style="display: flex; align-items: center; margin-top: 50px;">
    <span class="arrow arrow-blue">+</span>
  </div>
  <div style="flex: 1;">
    <div class="flow-box flow-blue-fill" style="width: 100%; font-size: 18px; padding: 16px;">
      <strong>Google Cloud利用料レベニューシェア</strong>
    </div>
    <div class="box box-blue-outline" style="margin-top: 12px; font-size: 18px;">
      ・Geake Platform経由のCloud利用料の一部<br>
      ・利用量に比例する継続的ストック収益<br>
      ・顧客のAI活用が進むほど収益が拡大
    </div>
  </div>
</div>

<br>

<span class="marker-blue"><strong>クローズド構築 + Usage-Basedのモデルで継続的収益を実現</strong></span>

<!--
2つの収益源：クローズド構築＋レベニューシェア。利用が増えるほど収益が伸びる構造。
-->

---

# GTM戦略

<span class="label label-blue-fill" style="font-size: 18px; padding: 6px 16px;">Go-to-Market</span>

<div class="flex flex-col gap-sm" style="margin-top: 20px;">
  <div>
    <div><span class="step step-blue" style="width: 36px; height: 36px; font-size: 16px;">1</span> <strong>Sreake既存顧客クロスセル</strong></div>
    <div class="box box-blue-outline" style="margin-top: 4px; font-size: 16px; padding: 10px 20px;">
      SRE支援で構築した信頼関係を活用 <span class="note">— クラウドネイティブ導入済み企業 → AI基盤の自然な拡張</span>
    </div>
  </div>
  <div>
    <div><span class="step step-blue" style="width: 36px; height: 36px; font-size: 16px;">2</span> <strong>NTTデータとの資本業務提携</strong></div>
    <div class="box box-blue-outline" style="margin-top: 4px; font-size: 16px; padding: 10px 20px;">
      NTTデータの大手顧客基盤へアクセス <span class="note">— 2024年11月に10億円の資金調達及び提携締結</span>
    </div>
  </div>
  <div>
    <div><span class="step step-blue" style="width: 36px; height: 36px; font-size: 16px;">3</span> <strong>Google Cloudマーケットプレイス</strong></div>
    <div class="box box-blue-outline" style="margin-top: 4px; font-size: 16px; padding: 10px 20px;">
      Google Cloud利用企業への直接リーチ <span class="note">— マーケットプレイス経由で調達プロセスを簡素化</span>
    </div>
  </div>
</div>

<!--
3つのGTMチャネル。既存アセットを最大限活用する戦略。
-->

---
layout: section
---

# 05

## マーケットサイズ

---

# TAM / SAM / SOM

<span class="label label-blue-fill" style="font-size: 18px; padding: 6px 16px;">Market Sizing</span>

<div class="flex flex-center gap-xl" style="margin-top: 24px;">
  <div style="flex: 1; text-align: center;">
    <div class="box box-navy" style="padding: 20px 16px;">
      <div style="font-size: 16px; font-weight: 700;">TAM</div>
      <div style="font-size: 42px; font-weight: 700;">4.19兆円</div>
      <div style="font-size: 14px; opacity: 0.8;">日本AI市場 / 2029年</div>
    </div>
    <span class="note">IDC Japan</span>
  </div>
  <div style="flex: 1; text-align: center;">
    <div class="box box-blue" style="padding: 20px 16px;">
      <div style="font-size: 16px; font-weight: 700;">SAM</div>
      <div style="font-size: 42px; font-weight: 700;">720億円</div>
      <div style="font-size: 14px; opacity: 0.8;">法人向け生成AI / 2026年</div>
    </div>
    <span class="note">MIC Research</span>
  </div>
  <div style="flex: 1; text-align: center;">
    <div class="box box-blue" style="padding: 20px 16px;">
      <div style="font-size: 16px; font-weight: 700;">SOM</div>
      <div style="font-size: 36px; font-weight: 700;">50〜100億円</div>
      <div style="font-size: 14px; opacity: 0.8;">AI基盤+ガバナンス / 2026年</div>
    </div>
    <span class="note">自社推定</span>
  </div>
</div>

<br>

<div style="text-align: center;">
  <span class="marker-blue"><strong>AIエージェント基盤市場は CAGR 142.8%で急成長中（ITR）</strong></span>
</div>

<!--
TAM→SAM→SOMの段階的な市場規模。投資家が最も注目するスライド。
-->

---
layout: section
---

# 06

## ロードマップ

---

# プロダクトロードマップ

<span class="label label-blue-fill" style="font-size: 18px; padding: 6px 16px;">Roadmap</span>

<div class="flex gap-lg" style="margin-top: 20px;">
  <div style="flex: 1;">
    <div class="flow-box flow-blue-fill" style="width: 100%; font-size: 20px; padding: 14px;">
      Phase 1: MVP
    </div>
    <div class="box box-blue-outline" style="margin-top: 12px; font-size: 17px;">
      <div><span class="step step-blue" style="width: 28px; height: 28px; font-size: 12px;">1</span> Geake AI Gateway リリース</div>
      <div style="margin-top: 10px;"><span class="step step-blue" style="width: 28px; height: 28px; font-size: 12px;">2</span> Geake ID 基本認証機能</div>
      <div style="margin-top: 10px;"><span class="step step-blue" style="width: 28px; height: 28px; font-size: 12px;">3</span> Geake Chat / Geake Explorer</div>
      <div style="margin-top: 10px;"><span class="step step-blue" style="width: 28px; height: 28px; font-size: 12px;">4</span> NTTデータへの先行導入</div>
    </div>
  </div>
  <div style="display: flex; align-items: center; margin-top: 50px;">
    <span class="arrow arrow-blue">→</span>
  </div>
  <div style="flex: 1;">
    <div class="flow-box flow-blue-fill" style="width: 100%; font-size: 20px; padding: 14px;">
      Phase 2: MMP
    </div>
    <div class="box box-blue-outline" style="margin-top: 12px; font-size: 17px;">
      <div><span class="step step-blue" style="width: 28px; height: 28px; font-size: 12px;">1</span> Geake Plane アプリ実行基盤</div>
      <div style="margin-top: 10px;"><span class="step step-blue" style="width: 28px; height: 28px; font-size: 12px;">2</span> Geake Chain エージェント基盤</div>
      <div style="margin-top: 10px;"><span class="step step-blue" style="width: 28px; height: 28px; font-size: 12px;">3</span> MCP / A2A 対応</div>
      <div style="margin-top: 10px;"><span class="step step-blue" style="width: 28px; height: 28px; font-size: 12px;">4</span> Google Cloudマケプレ公開</div>
    </div>
  </div>
</div>

<br>

<div style="text-align: center;">
  <span class="note-blue">MVP正式版は Google Cloud Next Tokyo 26 でお披露目予定</span>
</div>

<!--
Phase1でPMF検証、Phase2で本格展開。NTTデータ連携がスケールの起点。
-->

---

# NTTデータ展開計画

<span class="label label-blue-fill" style="font-size: 18px; padding: 6px 16px;">Strategic Partnership</span>

<div class="box box-blue-outline" style="font-size: 22px; text-align: center; padding: 24px;">
  2024年11月 — NTTデータ・SCSKから<strong style="font-size: 28px; color: var(--color-blue);">10億円</strong>の資金調達及び資本業務提携
</div>

<br>

<div class="flex gap-lg" style="margin-top: 8px;">
  <div style="flex: 1;">
    <div><span class="step step-blue">1</span> <strong>導入フェーズ</strong></div>
    <div class="note" style="margin-left: 56px;">NTTデータ環境へのGeake Platform導入</div>
  </div>
  <div style="flex: 1;">
    <div><span class="step step-blue">2</span> <strong>フィードバック回収</strong></div>
    <div class="note" style="margin-left: 56px;">利用状況の収集と改善点の特定</div>
  </div>
  <div style="flex: 1;">
    <div><span class="step step-blue">3</span> <strong>収益化フェーズ</strong></div>
    <div class="note" style="margin-left: 56px;">フィードバックを基にした収益モデルの確立</div>
  </div>
</div>

<br>

<span class="marker-blue"><strong>NTTデータの数千社の顧客基盤が、Geake Platformの最大の成長ドライバー</strong></span>

<!--
NTTデータとの提携は、GTMの最大の武器。具体的な展開ステップで実現性を示す。
-->

---
layout: section
---

# 07

## チーム

---

# Why 3-shake?

<span class="label label-blue-fill" style="font-size: 18px; padding: 6px 16px;">Why Us</span>

<div class="flex flex-center gap-sm" style="margin-top: 16px;">
  <div class="flow-box flow-blue" style="font-size: 16px; padding: 14px 20px; text-align: center; flex-direction: column;">
    <div><strong>SRE</strong></div>
    <div style="font-size: 13px;">インフラ運用のプロ</div>
  </div>
  <span class="arrow arrow-sm arrow-blue" style="margin-top: 25px;">→</span>
  <div class="flow-box flow-blue" style="font-size: 16px; padding: 14px 20px; text-align: center; flex-direction: column;">
    <div><strong>クラウドネイティブ</strong></div>
    <div style="font-size: 13px;">K8s / GCPの深い知見</div>
  </div>
  <span class="arrow arrow-sm arrow-blue" style="margin-top: 25px;">→</span>
  <div class="flow-box flow-blue-fill" style="font-size: 16px; padding: 14px 20px; text-align: center; flex-direction: column;">
    <div><strong>AIインフラ</strong></div>
    <div style="font-size: 13px;">エンタープライズAI基盤</div>
  </div>
</div>

<div class="flex flex-col gap-sm" style="margin-top: 16px;">
  <div class="box box-blue-outline" style="font-size: 18px; padding: 14px 20px;">
    <span class="marker-blue"><strong>自然な技術進化</strong></span> — SRE → クラウドネイティブ → AIインフラは必然の流れ
  </div>
  <div class="box box-blue-outline" style="font-size: 18px; padding: 14px 20px;">
    <span class="marker-blue"><strong>運用品質の DNA</strong></span> — プロダクション環境を安定稼働させてきた実績
  </div>
  <div class="box box-blue-outline" style="font-size: 18px; padding: 14px 20px;">
    <span class="marker-blue"><strong>エンタープライズ信頼</strong></span> — 大手企業との取引実績・信頼関係を既に保有
  </div>
</div>

<!--
なぜスリーシェイクがこのプロダクトを作るべきなのか。技術的な必然性を訴求。
-->

---

# 会社概要

<span class="label label-blue-fill" style="font-size: 18px; padding: 6px 16px;">Company Overview</span>

<div class="flex gap-lg" style="margin-top: 12px;">
  <div style="flex: 1;">
    <div class="flex flex-col gap-sm">
      <div class="box box-blue-outline" style="font-size: 18px; padding: 14px 20px;">
        <strong>設立</strong>: 2015年
      </div>
      <div class="box box-blue-outline" style="font-size: 18px; padding: 14px 20px;">
        <strong>従業員数</strong>: 176名
      </div>
      <div class="box box-blue-outline" style="font-size: 18px; padding: 14px 20px;">
        <strong>累計資金調達</strong>: 23.5億円（シリーズB）
      </div>
    </div>
  </div>
  <div style="flex: 1;">
    <div style="text-align: center;">
      <div class="box box-blue" style="padding: 20px 16px;">
        <div style="font-size: 16px;">売上高</div>
        <div style="font-size: 42px; font-weight: 700;">22億円</div>
        <div style="font-size: 16px; opacity: 0.8;">成長率 170%</div>
      </div>
    </div>
    <div class="note" style="text-align: center; margin-top: 8px;">
      NTTデータ・SCSKとの資本業務提携（2024年11月）<br>
      SRE支援「Sreake」で確立した技術ブランド
    </div>
  </div>
</div>

<br>

<span class="marker-blue"><strong>高成長スタートアップ × エンタープライズ信頼の両立</strong></span>

<!--
企業としての実績と成長性。投資家が重視する数字を端的に示す。
-->

---
layout: cover
---

# エンタープライズAIの
# "インフラ"を、共に創る

## Geake Platform

<!--
クロージング。ビジョンを改めて提示し、投資家の記憶に残す。
-->
