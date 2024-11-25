function solution(n) {
    // 1. n을 3진법으로 변환
    let ternary = '';
    while (n > 0) {
        ternary = (n % 3).toString() + ternary; // 나머지를 앞에 추가
        n = Math.floor(n / 3); // n을 3으로 나눈 몫으로 업데이트
    }

    // 2. 3진법 문자열을 뒤집기
    let reversedTernary = ternary.split('').reverse().join('');

    // 3. 뒤집은 3진법 문자열을 10진법으로 변환
    let answer = parseInt(reversedTernary, 3);

    return answer;
}