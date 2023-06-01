// Write your solution here!
const cats = [
    "Milo", "Otis", "Garfield"
]
function destructivelyAppendCat(newCat) {
    cats.push(newCat)
}
destructivelyAppendCat("Murphy")

function destructivelyPrependCat(newCat) {
    cats.unshift(newCat)
}
destructivelyPrependCat("Sasha")

function destructivelyRemoveLastCat() {
    cats.pop()
}
destructivelyRemoveLastCat()

function destructivelyRemoveFirstCat() {
    cats.shift()
}
destructivelyRemoveFirstCat()

function appendCat(newCat) {
    return [...cats, newCat]
}
appendCat("Murphy")

function prependCat(newCat) {
    return [newCat, ...cats]
}
prependCat("Sasha")

function removeLastCat() {
    return cats.slice(0,-1)
}
removeLastCat()

function removeFirstCat() {
    return cats.slice(1)
}
removeFirstCat()