'use strict';

module.exports = size;

function size(node) {
  var children = node && node.children;
  var length = (children && children.length) || 0;
  var count = length;
  var index = -1;

  while (++index < length) {
    count += size(children[index]);
  }

  return count;
}
