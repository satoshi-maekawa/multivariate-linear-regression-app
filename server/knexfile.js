// Update with your config settings.


require('dotenv').config();
// dotenvの使い方メモ
// .envの中身が下記の場合
// KEY1=VALUE1
// KEY2=VALUE2
// KEY3=VALUE3
// console.log(process.env.KEY1);  //=> VALUE1
// console.log(process.env.KEY2);  //=> VALUE2
// console.log(process.env.KEY3);  //=> VALUE3

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};
