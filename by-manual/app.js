var express = require('express');
/*
Node は多くのコンパイル済みのモジュールを備えています。 そのうちの多くは以降のドキュメントに記述されています。 モジュールを使用するもっとも一般的な方法は、 require('name') を呼びその戻り値をモジュールと同名のローカル変数に代入することです。
→つまりexpressファイルの読み込み、この場合mode_modulesの中にexpressフォルダがあるからフォルダを読みに行っていっている。

require()のメリット
require()は、jsをモジュール化する仕組みです。
require()とは何か？何が便利なのか - Qiita : http://qiita.com/uryyyyyyy/items/b10b012703b5396ded5a

おんなじ"ディレクトリにある"ファイルのはずなのにmode_modulesを読み込んでるのなんでだろう→まあ支障ないから良いか


実践Node.jsプログラミング(p50)
require関数は引数としてあなたが使いたいモジュールへのパスを受け取る。Nodeはそのモジュールを探し出すルックアップを同期的に実行し、そのファイルの内容をロードする。
→具体的な動作に分かりがあってよい
 */

var app = express();
/*
じゃあ、こっちは？上記の説明をみるとexpress変数にはロードされた内容が入っている？

読み込んだモジュール内の関数は.演算子で呼び出せます。
Node.jsのモジュールの使い方| Node.js入門 | [Smart] : http://rfs.jp/sb/javascript/node/04module.html

とあるから、expressそのものの代表関数みたいなものがある？
→仮説検証の為にexpressフォルダを覗いてみよう
そんな気もするけどよく分からん…？

expressオブジェクトをappとしてインスタンス作成したようだが…正確な理解をしてない可能性大今後の課題
 */

// HTTPリクエストを受け取る部分
app.get('/', function (req, res) {
  res.send('Hello World!');
});

/*
app.METHOD(PATH, HANDLER)
各部分の意味は次のとおりです。

app は、express のインスタンスです。
METHOD は、HTTP 要求メソッド です。
PATH は、サーバー上のパスです。
HANDLER は、ルートが一致したときに実行される関数です。
Express の基本的なルーティング : http://expressjs.com/ja/starter/basic-routing.html
 */

/*
HTTP 要求メソッド
とりあえずgetがアクセスするよ〜メソッドとおぼえておけば良い

 */
app.get(
  '/book', //PATH サーバ上のパス
  function (req, res) {
    res.send('Book!');
    console.log("req.originalUrl:" + req.originalUrl);
    console.log("res.hostname:" + req.hostname);


    } //HANDLER 実行される関数
  /*
    req:要求オブジェクト Express 4.x - API リファレンス : http://expressjs.com/ja/4x/api.html#req
    URLアクセス時の受取り値 cookieとかqueryとか
    res:応答オブジェクト Express 4.x - API リファレンス : http://expressjs.com/ja/4x/api.html#res
    アクセス後の返答値？…だとおもう
   */
);


app.get('/HW', function (req, res) {
  res.send('HELLO WORLD!');
});
// サーバーを起動する部分
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
