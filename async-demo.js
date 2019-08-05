setTimeout(() => {
  console.log('after waiting for 0 ms')
}, 0)

setTimeout(() => {
  console.log('after waiting for 100 ms')
}, 100)

setTimeout(() => {
  console.log('after waiting for 1000 ms')
}, 1000)

console.log(Date.now())


console.log('right away')
