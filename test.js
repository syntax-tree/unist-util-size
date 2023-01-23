import assert from 'node:assert/strict'
import test from 'node:test'
import {h} from 'hastscript'
import {size} from './index.js'
import * as mod from './index.js'

test('size', () => {
  assert.deepEqual(
    Object.keys(mod).sort(),
    ['size'],
    'should expose the public api'
  )

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

  assert.equal(size(tree), 11, 'complete tree')
  const p = tree.children[0]
  assert(p)
  assert(p.type === 'element')
  assert.equal(size(p), 7, 'parent node with mixed children')
  assert.equal(size(p.children[1]), 1, 'parent of text')
  assert.equal(size(p.children[0]), 0, 'text node')

  assert.equal(size(tree, 'element'), 5, 'test')
})
