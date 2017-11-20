const wasm = require('./main.rs')

wasm.initialize({noExitRuntime: true}).then(module => {
  const multiply = module.cwrap('multiply', 'number', ['number', 'number'])
  const threadMultiply = module.cwrap('thread_multiply', 'number', ['number', 'number'])
  document.write("<p>Result of 3 * 2 from Web Assembly = " + multiply(3, 2) + "</p>")
  document.write("<strong>Awesome! Tomorrow we will try substractions.</strong>")
  document.write("<p>Threads are not supported yet. They throw an error in console.</p>")
  threadMultiply(3, 2)
})