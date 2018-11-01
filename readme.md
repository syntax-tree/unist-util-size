# unist-util-size [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

Calculate the number of nodes in a [**Unist**][unist] tree.

## Installation

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
The result is excluding the given node itself.

## Contribute

See [`contributing.md` in `syntax-tree/unist`][contributing] for ways to get
started.

This organisation has a [Code of Conduct][coc].  By interacting with this
repository, organisation, or community you agree to abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/syntax-tree/unist-util-size.svg

[travis]: https://travis-ci.org/syntax-tree/unist-util-size

[codecov-badge]: https://img.shields.io/codecov/c/github/syntax-tree/unist-util-size.svg

[codecov]: https://codecov.io/github/syntax-tree/unist-util-size

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[unist]: https://github.com/syntax-tree/unist

[node]: https://github.com/syntax-tree/unist#node

[contributing]: https://github.com/syntax-tree/unist/blob/master/contributing.md

[coc]: https://github.com/syntax-tree/unist/blob/master/code-of-conduct.md
