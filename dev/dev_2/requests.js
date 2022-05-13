'use strict'
const getPerson = async () => {
    const response = await fetch('https://randomuser.me/api/?nat=us');
    if (response.status === 200) {
        const data = await response.json()
        return data
    } else {
        throw new Error('Something went Wrong...')
    }
}