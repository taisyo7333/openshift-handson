// app.js

const express = require('express');
const fs = require('fs');
const path = require('path');
const os = require('os');
const app = express();
const port = 3000;

// EJS テンプレートエンジンの設定
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ミドルウェアの設定
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// ホスト名の取得
const hostname = os.hostname();

// ルートの設定
app.get('/', (req, res) => {
  res.render('index', { submitted: false, hostname: hostname });
});

app.post('/submit', (req, res) => {
  const inputText = req.body.inputText;
  console.log('入力された文字列:', inputText);

  // ファイルに出力
  fs.appendFile('log.txt', `入力された文字列: ${inputText}\n`, (err) => {
    if (err) throw err;
    console.log('メッセージがlog.txtに保存されました。');
  });

  // 提出後に EJS テンプレートをレンダリング
  res.render('index', { submitted: true, submittedText: inputText, hostname: hostname });
});

// サーバーの起動
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});