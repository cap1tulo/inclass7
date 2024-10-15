function seriesSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += 1 / (i * i);
    }
    return sum.toFixed(2);
}

console.log(seriesSum(5));
