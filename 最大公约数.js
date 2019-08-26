function gcd(a, b) {
    if (a % b === 0) {
        return b;
    }
    return arguments.callee(b, a % b);
}
console.log(gcd(28, 12)); // 4
console.log(gcd(7890, 123456)); // 6
console.log(gcd(5, 13)); // 1 （公约数为1说明两数互质）
