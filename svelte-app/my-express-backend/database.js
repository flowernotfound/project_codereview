const sqlite3 = require("sqlite3").verbose();

// 新しいデータベースファイルを作成（なければ）
let db = new sqlite3.Database("./mydb.sqlite3", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the SQLite database.");
});

// テーブルを作成（なければ）
db.run(
  `CREATE TABLE IF NOT EXISTS code_reviews (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  code TEXT NOT NULL,
  comments TEXT
);`,
  (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Table created.");
  }
);

// データベースを閉じる（アプリケーション終了時など）
// db.close();
