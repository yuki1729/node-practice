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

// サーバーを起動する部分
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
