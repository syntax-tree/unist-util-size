'use strict'

var is = require('unist-util-is')

module.exports = size

function size(node, test) {
  var children = node && node.children
  var length = (children && children.length) || 0
  var count = 0
  var index = -1
  var child

  while (++index < length) {
    child = children[index]

    if (is(test, child, index, node)) {
      count++
    }

    count += size(child, test)
  }

  return count
}
