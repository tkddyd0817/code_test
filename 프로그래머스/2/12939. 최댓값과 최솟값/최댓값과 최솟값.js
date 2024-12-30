function solution(s) {
    // 문자열을 공백으로 나누어 숫자로 변환한 배열 생성
    const numbers = s.split(' ').map(Number);
    
    // 최소값과 최대값 찾기
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    
    // 결과 문자열 생성
    return `${min} ${max}`;
}