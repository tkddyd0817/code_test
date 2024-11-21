function solution(s) {
    // 문자열의 길이가 4 또는 6인지 확인
    if (s.length !== 4 && s.length !== 6) {
        return false;
    }
    
    // 문자열이 숫자로만 구성되어 있는지 확인
    for (let i = 0; i < s.length; i++) {
        if (isNaN(s[i])) {
            return false; // 숫자가 아닌 경우 false 반환
        }
    }
    
    return true; // 모든 조건을 만족하는 경우 true 반환
}