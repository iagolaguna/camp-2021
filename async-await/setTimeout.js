const delay = (milliseconds) =>
  new Promise((resolve, rejected) => {
    setTimeout(() => resolve(1), milliseconds)
  })

async function run() {
  const promise = await delay(2000)
  console.log(`Promise:`, promise)
}

run()