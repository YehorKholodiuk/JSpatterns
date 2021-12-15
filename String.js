function logPerson(s, name, age) {
    if (age < 0) {
        age = 'not born yet'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Yehor'
const personName2 = 'Oxana'
const personAge = 36
const personAge2 = -10

const output = logPerson`Name: ${personName}, Age: ${personAge}!`
const output2 = logPerson`Name: ${personName2}, Age: ${personAge2}!`

console.log(output)
console.log(output2)