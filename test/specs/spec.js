/* eslint-disable no-undef */
const assert = require('assert')

afterEach(() => {
  browser.reloadSession()
})

describe('basic tests', () => {
  it('Open Custom title and change "left title"', () => {
    $('~App').click()
    $('~Activity').click()
    $('~Custom Title').click()
    let selector1 = 'new UiSelector().text("Left is best").className("android.widget.EditText")'
    let selector2 = 'new UiSelector().className("android.widget.EditText")'
    let selector3 = 'new UiSelector().className("android.widget.TextView")'
    $(`android=${selector1}`).clearValue()
    $(`android=${selector2}`).setValue('DIMA')
    $('~Change Left').click()
    assert.strictEqual($(`android=${selector3}`).getText(), 'DIMA')
  })

  it('Open Hello World and check that "Hello, World!" is present', () => {
    $('~App').click()
    $('~Activity').click()
    $('~Hello World').click()
    assert.strictEqual($('~Hello, World!').getText(), 'Hello, World!')
  })

  it('should check text of icon Accessibility', () => {
    const accessibility = $('~Accessibility')
    assert.strictEqual(accessibility.getText(), 'Accessibility')
  })
})
