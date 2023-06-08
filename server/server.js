require('dotenv').config();
const express = require('express');
const cors = require('cors');
const knex = require('knex');
// とうとう機械学習ライブラリの使用までたどり着いた！！
const MLR = require('ml-regression-multivariate-linear');

const db = knex({
  client: 'pg',
  connection: process.env.NODE_ENV === 'production' ? process.env.DATABASE_URL : {
    host: '127.0.0.1',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }
});

const app = express();
app.use(cors());

app.get('/predict', async (req, res) => {
  // データベースから全てのサンプルデータを取得
  const samples = await db.select().table('samples');
  console.log(samples);

  // ----------------------ここから下を差し替えれば色んなモデル流用できそう

  // 重回帰分析の参考資料
  // https://github.com/mljs/regression-multivariate-linear/blob/master/README.md

  const x = samples.map(sample => [sample.x1, sample.x2, sample.x3, sample.x4]);
  const y = samples.map(sample => [sample.y]);
  console.log(x);
  console.log(y);

  // 重回帰分析を行う
  const mlr = new MLR(x, y);

  // 説明変数を取得
  const x1 = parseFloat(req.query.x1);
  const x2 = parseFloat(req.query.x2);
  const x3 = parseFloat(req.query.x3);
  const x4 = parseFloat(req.query.x4);

  // テスト
  // const x1 = 20;
  // const x2 = 50;
  // const x3 = 4;
  // const x4 = 3;

  // 目的変数を予測
  const yPredicted = mlr.predict([x1, x2, x3, x4]);
  // ----------------------ここから上を差し替えれば色んなモデル流用できそう

  // 小数点二桁表示(本当は有効数字が良いかも)
  yPredicted[0] = (Math.round(yPredicted[0] * 100)) / 100;
  console.log(yPredicted);

  res.json({ y: yPredicted[0] });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
