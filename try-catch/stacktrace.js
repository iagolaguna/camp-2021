class MyNewError extends Error {
  constructor(message) {
    super(message)
  }
}

function fn1() {
  console.log("fn1")
  fn2()
}

function fn2() {
  console.log("fn2")
  fn3()
}

function fn3() {
  throw new MyNewError("error")
  console.log("fn3")
  fn4()
}

function fn4() {
  console.log("fn4")
}

fn1()
