function solution(n) {
    return (n + '').split('').reverse().map(n => parseInt(n));
}