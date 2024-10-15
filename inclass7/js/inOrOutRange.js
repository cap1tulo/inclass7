function inOrOutRange(x, y, number) {
    return number >= x && number <= y ? 'In range' : 'Out of range';
}

console.log(inOrOutRange(5, 10, 8));
