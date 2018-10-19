require('raf/polyfill')

global.Promise = require('bluebird')
global.Promise.config({
  // NOTE all default to false
  warnings: true,
  longStackTraces: true,
  cancellation: false,
  monitoring: false,
})

const { JSDOM } = require('jsdom')
const dom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost/',
})
const { window } = dom

global.window = window
global.document = window.document
global.navigator = {
  userAgent: 'node.js',
}

// Enzyme
const Adapter = require('enzyme-adapter-react-16')
const Enzyme = require('enzyme')
Enzyme.configure({ adapter: new Adapter() })

// const React = require('react')
// const MyComponent = () => {
//   return <div>Hello</div>
// }

// const wrapper = Enzyme.mount(<MyComponent bar="baz" />)
