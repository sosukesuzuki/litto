# litto

**li**st **t**o **to**do-list.

## 概要

Markdownのリストをチェックリストに変換するためのライブラリです。
JavaScript APIとしてもCLIコマンドとしても使うことができます。

## 使い方

npmを使ってインストールできます。

```
npm install -g litto
```

### CLIコマンドとして使う

以下のようなMarkdownファイル(`foo.md`)を作ります。

```md
# foo.md

- foo
- bar
```

そしてfileのパスを指定して`litto`コマンドを使うとリストをチェックリストに変換したものが出力されます。

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

### JavaScriptのAPIとして使う

WIP

## TODO

- [ ] テスト書く
- [ ] 型定義書く

## ライセンス

MIT
