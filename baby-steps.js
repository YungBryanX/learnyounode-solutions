var inputs = process.argv.slice(2);
var sum = inputs.reduce(
    (one, two) => Number(one) + Number(two)
)
console.log(sum);