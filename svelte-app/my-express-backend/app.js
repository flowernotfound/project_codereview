const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

// body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// SQLiteの設定
let db = new sqlite3.Database("./mydb.sqlite3");

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// 新しく追加するコード投稿API
app.post("/api/code", (req, res) => {
  const code = req.body.code;
  if (!code) {
    return res.status(400).send("Code is required");
  }

  const sql = "INSERT INTO code_reviews (code) VALUES (?)";
  db.run(sql, [code], function (err) {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send({ id: this.lastID });
  });
});

// 修正後のコード
app.get("/api/code", (req, res) => {
  db.all(
    "SELECT * FROM code_reviews ORDER BY created_at DESC",
    [],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(rows);
    }
  );
});

// 新しく追加するコメント投稿API
app.post("/api/comments", (req, res) => {
  const { code_review_id, comment } = req.body;
  if (!code_review_id || !comment) {
    return res.status(400).send("Code review ID and comment are required");
  }

  const sql = "INSERT INTO comments (code_review_id, comment) VALUES (?, ?)";
  db.run(sql, [code_review_id, comment], function (err) {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send({ id: this.lastID });
  });
});

app.get("/api/comments", (req, res) => {
  db.all("SELECT * FROM comments ORDER BY created_at DESC", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// サーバー起動
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
