function createString(min, max, step) {
    let result = '';
    for (let i = min; i <= max; i += step) {
        result += i + ' ';
    }
    return result.trim();
}

console.log(createString(0, 20, 5));
