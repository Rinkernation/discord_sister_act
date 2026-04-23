# Project Antigravity: Discord Sister AI Bot

## 概要
Project Antigravityは、Discordコミュニティ（主にサバイバルMMO向け）に、Googleの最新AIモデル「Gemini」と音声合成エンジン「VOICEVOX」を組み合わせた、フルボイスの「妹分AI」を召喚するプロジェクトです。

ただのチャットボットではなく、TypeScriptを用いた堅牢な設計と、Google Cloud Platform（GCP）によるスケーラブルなインフラ構成を採用し、実用性と技術学習の両立を目指しています。

## 技術スタック
エンジニアとしてのスキルセットを証明するため、以下のモダンな構成を採用しています。

| カテゴリ | 採用技術 |
| :--- | :--- |
| **Language** | TypeScript (Node.js) |
| **Library** | discord.js |
| **AI (LLM)** | Google Gemini 1.5 Pro (Vertex AI / Google AI SDK) |
| **Voice Synthesis** | VOICEVOX (Local / Container API) |
| **Infrastructure** | Google Cloud Run (Containerized Execution) |
| **Database** | Cloud Firestore (Conversation History / Status Management) |
| **Secret Management** | Secret Manager |

## 主要機能
- **リアルタイムAI対話**: Gemini Proによる文脈を理解した自然な会話。システムプロンプトにより「お兄ちゃんを慕う妹」というキャラクター性を一貫。
- **フルボイス応答**: VOICEVOXとの連携により、テキストだけでなくボイスチャット（VC）上での発話を実現。
- **文脈維持**: Firestoreを活用し、過去の会話履歴に基づいたパーソナライズされた応答。
- **コミュニティ活性化**: サバイバルゲーム中の拠点作業や待機時間におけるエンターテインメントの提供。

## アーキテクチャ図


## 今後の展望 (Roadmap)
1. **好感度システムの構築**: Firestoreにユーザーごとの「好感度」を蓄積し、数値によってAIの応答内容や声色が変化する仕組みの実装。
2. **ゲーム内イベント連携**: ゲーム内の特定の出来事（拠点の防衛成功など）をトリガーにした自動発言機能。
3. **フロントエンド開発**: Reactを用いた、ボットの設定や好感度を確認できるWebダッシュボードの構築。

---