function solution(food) {
    let leftPart = '';
    let rightPart = '';

    // 물의 양을 제외한 나머지 음식에 대해 처리
    for (let i = 1; i < food.length; i++) {
        const count = Math.floor(food[i] / 2); // 각 음식의 절반씩
        leftPart += i.toString().repeat(count); // 왼쪽 선수의 음식
        rightPart = i.toString().repeat(count) + rightPart; // 오른쪽 선수의 음식
    }

    // 대회에 사용할 음식 배치 문자열 생성
    return leftPart + '0' + rightPart; // 중앙에 물('0')을 추가
}