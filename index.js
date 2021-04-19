/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 *
 * @typedef {import('unist-util-is').Type} Type
 * @typedef {import('unist-util-is').Props} Props
 * @typedef {import('unist-util-is').TestFunctionAnything} TestFunctionAnything
 */

import {convert} from 'unist-util-is'

/** @type {Array.<Node>} */
var empty

/**
 * @param {Node} node
 * @param {null|undefined|Type|Props|TestFunctionAnything|Array<Type|Props|TestFunctionAnything>} [test]
 * @returns {number}
 */
export function size(node, test) {
  var is = convert(test)

  return fastSize(node)

  /**
   * @param {Node} node
   */
  function fastSize(node) {
    /** @type {Array.<Node>} */
    // @ts-ignore Looks like a parent.
    var children = (node && node.children) || empty
    var count = 0
    var index = -1

    if (children && children.length > 0) {
      while (++index < children.length) {
        // @ts-ignore Looks like a parent.
        if (is(children[index], index, node)) count++
        count += fastSize(children[index])
      }
    }

    return count
  }
}
