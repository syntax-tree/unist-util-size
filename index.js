'use strict'

var convert = require('unist-util-is/convert')

module.exports = size

function size(node, test) {
  var is = convert(test)
  var children = node && node.children
  var length = (children && children.length) || 0
  var count = 0
  var index = -1
  var child

  while (++index < length) {
    child = children[index]

    if (is(child, index, node)) {
      count++
    }

    count += size(child, test)
  }

  return count
}
