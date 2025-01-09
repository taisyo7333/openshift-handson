# ベースイメージの取得
# このUBIはRHEL8をベースに、さらにNode.js関連のモジュールをインストール済み
# Node.jsモジュールも含めてRed Hatが動作サポートしてくれる
FROM registry.access.redhat.com/ubi8/nodejs-18:latest

# コンテナ起動した後に遷移させる作業ディレクトリの設定
# コンテナ内の/usr/src/appに移動する
WORKDIR /usr/src/app

# このアプリで必要なNode.jsの追加ライブラリをインストール
# ユーザが独自に追加したライブラリについては当然ながらRed Hatの動作サポート範疇外である
RUN npm install express ejs

# node.jsアプリケーションの動作に必要なソースコードをコンテナ内の作業ディレクトリに転送
COPY . .

# コンテナを立ち上げた後に発動して欲しいコマンドを記載。
# コマンド毎に区切って記載しないといけない。
# node index.jsはNode.jsアプリの起動コマンド。
CMD ["node", "index.js"]