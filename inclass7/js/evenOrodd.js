function evenOrOdd(a, b, c) {
    if (a % 2 === 0 && b % 2 === 0 && c % 2 === 0) return 'even';
    if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0) return 'odd';
    return 'even/odd';
}

console.log(evenOrOdd(1, 3, 11));
console.log(evenOrOdd(2, 5, 8));
