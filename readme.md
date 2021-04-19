# unist-util-size

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**unist**][unist] utility to calculate the number of nodes in a tree.

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c):
Node 12+ is needed to use it and it must be `import`ed instead of `require`d.

[npm][]:

```sh
npm install unist-util-size
```

## Use

```js
import {h} from 'hastscript'
import {size} from 'unist-util-size'

var tree = h('div', [
  h('p', [
    'Some ',
    h('strong', 'importance'),
    ' and ',
    h('em', 'emphasis'),
    '.'
  ]),
  h('pre', h('code', 'bar()'))
])

console.log(size(tree)) // => 11
console.log(size(tree, 'element')) // => 5
```

## API

This package exports the following identifiers: `size`.
There is no default export.

### `size(tree[, test])`

Calculate the number of nodes in [`tree`][node].

###### Parameters

*   `tree` ([`Node`][node]) — [Tree][] to traverse
*   `test` ([`Test`][is], optional) — [`is`][is]-compatible test (such as a
    node type)

##### Returns

`number` — Number of [exclusive descendants][descendant] passing `test` in
`tree`.

## Related

*   [`unist-util-source`](https://github.com/syntax-tree/unist-util-source)
    — Get the source of a node or position

## Contribute

See [`contributing.md` in `syntax-tree/.github`][contributing] for ways to get
started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organisation, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/syntax-tree/unist-util-size/workflows/main/badge.svg

[build]: https://github.com/syntax-tree/unist-util-size/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/unist-util-size.svg

[coverage]: https://codecov.io/github/syntax-tree/unist-util-size

[downloads-badge]: https://img.shields.io/npm/dm/unist-util-size.svg

[downloads]: https://www.npmjs.com/package/unist-util-size

[size-badge]: https://img.shields.io/bundlephobia/minzip/unist-util-size.svg

[size]: https://bundlephobia.com/result?p=unist-util-size

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/syntax-tree/unist/discussions

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[contributing]: https://github.com/syntax-tree/.github/blob/HEAD/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/HEAD/support.md

[coc]: https://github.com/syntax-tree/.github/blob/HEAD/code-of-conduct.md

[unist]: https://github.com/syntax-tree/unist

[is]: https://github.com/syntax-tree/unist-util-is

[node]: https://github.com/syntax-tree/unist#node

[tree]: https://github.com/syntax-tree/unist#tree

[descendant]: https://github.com/syntax-tree/unist#descendant
