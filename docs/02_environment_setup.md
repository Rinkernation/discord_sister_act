# 02. ローカル開発環境の構築手順

このドキュメントでは、ボットを自分のPCで動かすための手順をまとめます。

## 1. 必要なツール
- Node.js (v20以上推奨)
- Docker Desktop (VOICEVOXエンジン用)

## 2. トークンの取得
以下のサービスからトークンを取得し、`.env` ファイルに設定します。

- **Discord Bot Token**: [Discord Developer Portal](https://discord.com/developers/applications) から取得
- **Gemini API Key**: [Google AI Studio](https://aistudio.google.com/) から取得

## 3. インストールと起動
ターミナルで以下のコマンドを実行します。

```bash
# パッケージのインストール
npm install

# 開発モードでボットを起動
npm run dev
```

## 4. トラブルシューティング
（起動しない場合や、よくあるエラーの解決方法をここに追記していきます）
