function delay(milliseconds) {
  return new Promise(function (resolve, rejected) {
    setTimeout(resolve, milliseconds)
  })
}

const promise = delay(2000).then(function () {
  console.log("Log 1")
})

console.log("Log 2")
