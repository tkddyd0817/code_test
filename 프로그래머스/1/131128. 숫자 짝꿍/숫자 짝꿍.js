function solution(X, Y) {
    // 각 숫자의 등장 횟수를 저장할 배열
    const countX = new Array(10).fill(0);
    const countY = new Array(10).fill(0);
    
    // X와 Y의 각 숫자 등장 횟수 세기
    for (const digit of X) {
        countX[digit]++;
    }
    for (const digit of Y) {
        countY[digit]++;
    }
    
    // 공통으로 나타나는 숫자와 그 개수를 저장할 배열
    const commonDigits = [];
    
    // 0부터 9까지의 숫자에 대해 공통으로 나타나는 숫자 찾기
    for (let i = 0; i <= 9; i++) {
        const commonCount = Math.min(countX[i], countY[i]);
        for (let j = 0; j < commonCount; j++) {
            commonDigits.push(i);
        }
    }
    
    // 공통 숫자가 없으면 -1 반환
    if (commonDigits.length === 0) {
        return "-1";
    }
    
    // 공통 숫자가 0으로만 구성되어 있으면 0 반환
    if (commonDigits.length === countY[0] && commonDigits[0] === 0) {
        return "0";
    }
    
    // 공통 숫자를 내림차순으로 정렬
    commonDigits.sort((a, b) => b - a);
    
    // 결과 문자열 만들기
    return commonDigits.join('');
}

