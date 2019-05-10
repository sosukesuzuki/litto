# litto

**li**st **t**o **to**do-list.

## Overview

litto is the CLI tool to convert list to check-list in Markdown.

## Install

You can install it with npm.

```
npm install -g litto
```

## Usage

Create the Markdown file named `foo.md` like below:

```md
# foo.md

- foo
- bar
```

If you call litto command with `foo.md`'s path, the text converted to check-list will be outputted to console.

```sh
$ litto ./foo.md
# foo.md

-   [ ] foo
-   [ ] bar
```

If you use `--write`, you can rewrite the file with converted text.

```sh
$ litto --write ./hoge.md
hoge.md
Done.
```

If you use `--format`, you can format the text with [Prettier](https://github.com/prettier/prettier).

```sh
$ litto --format ./foo.md
# foo.md

- [ ] foo
- [ ] bar
```

## License

MIT
