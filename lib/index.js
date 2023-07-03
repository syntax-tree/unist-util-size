/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist-util-is').Test} Test
 */

import {convert} from 'unist-util-is'

/** @type {Array<Node>} */
let empty

/**
 * Calculate the number of nodes in `tree`.
 *
 * @param {Node} tree
 *   Tree to traverse.
 * @param {Test} [test]
 *   `unist-util-is` compatible test (such as a node type).
 * @returns {number}
 *   Number of exclusive descendants of `tree` that pass `test`.
 */
export function size(tree, test) {
  const is = convert(test)

  return fastSize(tree)

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
        const child = children[index]
        // @ts-expect-error Looks like a parent.
        if (is(child, index, node)) count++
        count += fastSize(child)
      }
    }

    return count
  }
}
