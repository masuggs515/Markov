/** Command-line tool to generate Markov text. */
const fs = require('fs')
const axios = require('axios');
const markov = require('./markov');

function printText(text) {
    let mm = new markov.MarkovMachine(text)
    console.log(mm.makeText())
}

let fileText = (path) => {
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) {
            console.log(`Error reading ${path}\n`, err.message)
            process.exit(1)
        } else {
            printText(data)
        }
    })
}

async function urlText(path) {
    try {
        let url = await axios.get(path)
        printText(url.data)
    } catch (err) {
        console.log(`Error fetching ${path}\n`, err.message)
        process.exit(1)
    }
}



const path = process.argv.slice(2)
if (path[0] == 'file') {
    fileText(path[1])
} else if (path[0] == 'url') {
    urlText(path[1])
} else {
    console.log(`Error: ${path[0]} is not valid input.`)
    process.exit(1)
}