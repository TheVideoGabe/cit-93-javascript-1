const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('unable to get puzzle')
    }
}

// convert getcountry to an async function that uses await
// convert getlocation to an async function that uses await

const getCountry = async (countryCode) => {
    const response = await fetch(`https://restcountries.com/v3.1/all`)

         if (response.status === 200) {
             const data = await response.json()
             return data.find((country) => country.cca2 === countryCode)
         } else {
             throw new Error('Unable to fetch country')
         }
 }

 const getLocation = async () => {
    const response = await fetch(`https://ipinfo.io/json?9fba1556259b4a`)
         if (response.status === 200) {
             const data = response.json()
             return data
         } else {
             throw new Error('Unable to fetch location')
         }
 }

