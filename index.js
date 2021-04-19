import {convert} from 'unist-util-is'

export function size(node, test) {
  var is = convert(test)
  return fastSize(node)

  function fastSize(node) {
    var children = node && node.children
    var count = 0
    var index = -1

    if (children && children.length > 0) {
      while (++index < children.length) {
        if (is(children[index], index, node)) count++
        count += fastSize(children[index])
      }
    }

    return count
  }
}
