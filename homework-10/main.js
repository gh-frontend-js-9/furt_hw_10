
async function asynkFunk() {
    const url = `https://api.github.com/gists/public`;
    try {
        console.log('start.........')
        const response = await fetch(url)
        const data = await response.json()
        console.log('Data:', data)
    } catch (error) {
        console.log(error)
    }
}
asynkFunk()















