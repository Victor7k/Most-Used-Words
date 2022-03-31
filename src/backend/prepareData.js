module.exports = rows => {
    return new Promise((resolver, reject) => {
        try {
            const words = rows
                .filter(filterValidRow)
                .map(removePunctuation)
                .map(removeTags)
                .reduce(mergeRows)
                .split(' ') // Transformou num Array novamente.
                .map(word => word.toLowerCase())
                .map(word => word.replace('"', ''))

            resolver(words)
        } catch (e) {
            reject(e)
        }
    })
}

function filterValidRow(row) {
    const notNumber = !parseInt(row.trim())
    const notEmpty = !!row.trim() // '!!' transformou num boolean
    const notInterval = !row.includes('-->')
    return notNumber && notEmpty && notInterval
}

// Quer encontrar este conjunto de caracteres dentro do texto e substitui-los por um espaço em branco.
const removePunctuation = row => row.replace(/[,?!.-]/g, '') // Entre um [] representa um conjunto de caracteres numa Regex.
const removeTags = row => row.replace(/(<[^>]+)>/g, '').trim()
const mergeRows = (fullText, row) => `${fullText} ${row}` // Juntou todas as linhas num grande texto.