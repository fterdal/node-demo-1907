const {
  makeFinn,
  instructorNames,
} = require('./names')

makeFinn()

instructorNames.forEach(name => {
  console.log(`Hello ${name}`)
})
