
const survey = () => {
    throw new Error(`survey has failed`)
  }

  
try {
  survey()
} catch (err) {
  console.log(`Error:`, err)
}
