function solution(s) {
    const result = [];
    const lastIndex = {};  // 각 문자의 마지막 인덱스를 저장할 객체

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char in lastIndex) {
            // 이전에 등장한 인덱스와 현재 인덱스의 차이를 계산
            result.push(i - lastIndex[char]);
        } else {
            result.push(-1);  // 처음 등장하는 문자
        }

        // 현재 문자의 인덱스를 업데이트
        lastIndex[char] = i;
    }

    return result;
}