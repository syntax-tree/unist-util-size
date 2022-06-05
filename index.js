/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 *
 * @typedef {import('unist-util-is').Type} Type
 * @typedef {import('unist-util-is').Props} Props
 * @typedef {import('unist-util-is').TestFunctionAnything} TestFunctionAnything
 */

import {convert} from 'unist-util-is'

/** @type {Array<Node>} */
let empty

/**
 * Calculate the number of nodes in `node`.
 *
 * @param {Node} node
 *   Tree to traverse.
 * @param {null|undefined|Type|Props|TestFunctionAnything|Array<Type|Props|TestFunctionAnything>} [test]
 *   `unist-util-is`-compatible test (such as a node type).
 * @returns {number}
 *   Number of exclusive descendants that pass `test` in `tree`.
 */
export function size(node, test) {
  const is = convert(test)

  return fastSize(node)

  /**
   * @param {Node} node
   */
  function fastSize(node) {
    /** @type {Array<Node>} */
    // @ts-expect-error Looks like a parent.
    const children = (node && node.children) || empty
    let count = 0
    let index = -1

    if (children && children.length > 0) {
      while (++index < children.length) {
        // @ts-expect-error Looks like a parent.
        if (is(children[index], index, node)) count++
        count += fastSize(children[index])
      }
    }

    return count
  }
}
