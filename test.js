'use strict'

var test = require('tape')
var h = require('hastscript')
var size = require('.')

test('unist-util-size', function(t) {
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

  t.equal(size(tree), 11, 'complete tree')
  t.equal(size(tree.children[0]), 7, 'parent node with mixed children')
  t.equal(size(tree.children[0].children[1]), 1, 'parent of text')
  t.equal(size(tree.children[0].children[0]), 0, 'text node')

  t.equal(size(tree, 'element'), 5, 'test')

  t.end()
})
