function solution(s) {
    // 문자열을 배열로 변환한 후, 정렬하고 다시 문자열로 변환
    var answer = s.split('').sort().reverse().join('');
    return answer;
}
