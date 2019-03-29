# litto

**li**st **t**o **to**do-list.

## 概要

Markdownのリストをチェックリストに変換するためのライブラリです。
JavaScript APIとしてもCLIコマンドとしても使うことができます。

## 使い方

yarnやnpmを使ってインストールできます。

```
yarn add litto
or
npm install --save litto
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
$  npx litto ./hoge.md
# foo.md

-   [ ] foo
-   [ ] bar
```

また、`--write`オプションを使うことでファイルを上書きすることができます。

```sh
$ npx litto --write ./hoge.md
```

### JavaScriptのAPIとして使う

WIP

## ライセンス

MIT
