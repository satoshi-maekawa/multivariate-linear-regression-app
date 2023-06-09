# multivariate-linear-regression-app
重回帰分析アプリ
# 多変量重回帰分析アプリケーション

このアプリケーションは、与えられた入力データ（x1, x2, x3, x4）に基づいて目的変数（y）を予測するアプリケーションです。

## 技術スタック

- フロントエンド: React.js
- バックエンド: Express.js
- データベース: PostgreSQL, Knex.js
- 多変量重回帰分析: ml-regression-multivariate-linear

## プロジェクト構成

```
/
├── client/        # フロントエンドのコード
│   ├── src/       # ソースコード
│   ├── package.json  # フロントエンドの依存関係
│   
└── server/        # バックエンドのコード
    ├── src/       # ソースコード
    ├── migrations/ # データベースマイグレーション
    ├── seeds/     # データベースの初期データ
    ├── package.json  # バックエンドの依存関係
  
```

## セットアップ

### ローカルでの実行

1. プロジェクトをクローンします。

```bash
git clone https://github.com/your-username/multivariate-linear-regression-app.git
```

2. 必要な依存関係をインストールします。

```bash
cd multivariate-linear-regression-app/client
npm install
cd ../server
npm install
```

3. データベースを設定します。まずPostgreSQLを起動し、次にマイグレーションとシードを実行します。

```bash
npm run knex migrate:latest
npm run knex seed:run
```

4. フロントエンドとバックエンドの両方を起動します。

```bash
# サーバー側で
npm run server
# クライアント側で
cd ../client
npm start
```
