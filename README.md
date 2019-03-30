# litto

**li**st **t**o **to**do-list.

## 概要

Markdown のリストをチェックリストに変換するためのライブラリです。
JavaScript API としても CLI コマンドとしても使うことができます。

## 使い方

npm を使ってインストールできます。

```
npm install -g litto
```

### CLI コマンドとして使う

以下のような Markdown ファイル(`foo.md`)を作ります。

```md
# foo.md

- foo
- bar
```

そして file のパスを指定して`litto`コマンドを使うとリストをチェックリストに変換したものが出力されます。

```sh
$ litto ./foo.md
# foo.md

-   [ ] foo
-   [ ] bar
```

また、`--write`オプションを使うことでファイルを上書きすることができます。

```sh
$ npx litto --write ./hoge.md
```

また、`--format`オプションを使うことで、[Prettier](https://github.com/prettier/prettier)によるフォーマットをかけることができます。

```sh
$ litto --format ./foo.md
# foo.md

- [ ] foo
- [ ] bar
```

### JavaScript の API として使う

WIP

## TODO

- [ ] テスト書く
- [ ] 型定義書く

## ライセンス

MIT
