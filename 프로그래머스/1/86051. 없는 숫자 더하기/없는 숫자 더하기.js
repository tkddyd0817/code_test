function solution(numbers) {
    // 0부터 9까지의 모든 숫자 합 계산
    const totalSum = 45; // 0 + 1 + 2 + ... + 9 = 45
    // numbers 배열의 요소 합 계산
    const numbersSum = numbers.reduce((acc, num) => acc + num, 0);
    // 찾지 못한 숫자들의 합은 전체 합에서 numbers의 합을 뺀 값
    return totalSum - numbersSum;
}