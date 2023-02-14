# Sample GraphQL server for selection

Wantedly のフロントエンドエンジニア採用の技術選考のための GraphQL サーバーです。
ここで使用している技術スタックは Wantedly 社内で使用しているものと必ずしも一致するものではありません。

## Usage

リポジトリを clone できたら、まず下記のコマンドを実行して、サーバーのセットアップを行ってください。

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
