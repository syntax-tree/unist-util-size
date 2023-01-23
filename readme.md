# unist-util-size

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[unist][] utility to calculate the number of nodes in a tree.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`size(tree[, test])`](#sizetree-test)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This is a tiny utility that you can use to count nodes (that pass a test) in a
tree.

## When should I use this?

This is super tiny but a sometimes common problem.
You can use [`unist-util-visit`][unist-util-visit] yourself as well.

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+ and 16.0+), install with [npm][]:

```sh
npm install unist-util-size
```

In Deno with [`esm.sh`][esmsh]:

```js
import {size} from 'https://esm.sh/unist-util-size@3'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {size} from 'https://esm.sh/unist-util-size@3?bundle'
</script>
```

## Use

```js
import {h} from 'hastscript'
import {size} from 'unist-util-size'

const tree = h('div', [
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

This package exports the identifier [`size`][api-size].
There is no default export.

### `size(tree[, test])`

Calculate the number of nodes in `tree`.

###### Parameters

*   `tree`  ([`Node`][node])
    — tree to traverse
*   `test`  ([`Test`][test])
    — `unist-util-is` compatible test (such as a node type)

###### Returns

Number of exclusive descendants of `tree` that pass `test` (`number`).

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

Projects maintained by the unified collective are compatible with all maintained
versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
Our projects sometimes work with older versions, but this is not guaranteed.

## Related

*   [`unist-util-source`](https://github.com/syntax-tree/unist-util-source)
    — get the source of a node or position

## Contribute

See [`contributing.md`][contributing] in [`syntax-tree/.github`][health] for
ways to get started.
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

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[license]: license

[author]: https://wooorm.com

[health]: https://github.com/syntax-tree/.github

[contributing]: https://github.com/syntax-tree/.github/blob/main/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/main/support.md

[coc]: https://github.com/syntax-tree/.github/blob/main/code-of-conduct.md

[unist]: https://github.com/syntax-tree/unist

[node]: https://github.com/syntax-tree/unist#node

[unist-util-visit]: https://github.com/syntax-tree/unist-util-visit

[test]: https://github.com/syntax-tree/unist-util-is#test

[api-size]: #sizetree-test
