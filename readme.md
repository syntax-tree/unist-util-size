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

[npm][]:

```bash
npm install unist-util-size
```

## Usage

```js
var h = require('hastscript')
var size = require('unist-util-size')

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
console.log(size(tree.children[0])) // => 7
console.log(size(tree.children[0].children[0])) // => 0
```

## API

### `size(tree)`

Calculate the number of nodes in [`node`][node].
The result is the number of [exclusive descendants][descendant].

## Contribute

See [`contributing.md` in `syntax-tree/.github`][contributing] for ways to get
started.
See [`support.md`][support] for ways to get help.

This project has a [Code of Conduct][coc].
By interacting with this repository, organisation, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/syntax-tree/unist-util-size.svg

[build]: https://travis-ci.org/syntax-tree/unist-util-size

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/unist-util-size.svg

[coverage]: https://codecov.io/github/syntax-tree/unist-util-size

[downloads-badge]: https://img.shields.io/npm/dm/unist-util-size.svg

[downloads]: https://www.npmjs.com/package/unist-util-size

[size-badge]: https://img.shields.io/bundlephobia/minzip/unist-util-size.svg

[size]: https://bundlephobia.com/result?p=unist-util-size

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/join%20the%20community-on%20spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/syntax-tree

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[contributing]: https://github.com/syntax-tree/.github/blob/master/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/master/support.md

[coc]: https://github.com/syntax-tree/.github/blob/master/code-of-conduct.md

[unist]: https://github.com/syntax-tree/unist

[node]: https://github.com/syntax-tree/unist#node

[descendant]: https://github.com/syntax-tree/unist#descendant
