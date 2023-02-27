# Sample GraphQL server for selection

Wantedly のフロントエンドエンジニア採用の技術選考のための GraphQL サーバーです。
ここで使用している技術スタックは Wantedly 社内で使用しているものと必ずしも一致するものではありません。

## Usage

リポジトリを clone できたら、まず下記のコマンドを実行して、サーバーのセットアップを行ってください。
次が実行されます。

- `.env.sample` を `.env` にコピー
- `yarn install` で依存パッケージのインストール
- `prisma` を使った データベース(SQLite) のセットアップ
  - このとき、DBをリセットしても問題ないか？というプロンプトが表示されたら `y` を押して処理を実行してください。

```
./script/bootstrap
```

完了したら次のコマンドでサーバーを起動します。

```
yarn dev
```

デフォルトでは http://localhost:4000/graphql でサーバーが立ち上がります。(.env に記述する環境変数により host と port は変更可能です。)

### Playground

ブラウザで http://localhost:4000/graphql にアクセスすると GraphQL の playground が開きます。このページで定義されている type や query の確認ができます。また中央のペインで query を呼び出すことができます。Query のテストやデバッグに活用ください。

![playground](/docs/images/graphql-playground.png)

### Prisma studio

`yarn prisma studio` を実行すると http://localhost:5555 に Prisma studio というアプリケーションが立ち上がります。ここで db (sqlite) 内にあるデータの確認ができます。中にどんなデータが入っているかを確認するために活用ください。

![prisma-studio](/docs/images/prisma-studio.png)

## その他

- Q. 定義されている型情報はどこで確認できますか？
- A. `src/graphq/generated/schema.graphql` で GraphQL のスキーマを確認できます。または playground の左ペインの "Documentation" で確認することができます。
- Q. うまく動かないのですが…
- A. 弊社の採用担当者にメッセージでその旨を伝えてください。またはこのリポジトリに issue を作成して、状況を報告してください。なるべく速く対応します。

※ このリポジトリのコードは不定期でアップデートされます。基本的な機能に影響はないようにアップデートしますがご注意ください。
