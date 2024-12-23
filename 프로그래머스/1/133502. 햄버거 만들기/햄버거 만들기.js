function solution(ingredient) {
    let answer = 0;
    const stack = [];

    for (let item of ingredient) {
        stack.push(item); // 현재 재료를 스택에 추가

        // 스택이 4개 이상일 때 햄버거 완성 여부 확인
        if (stack.length >= 4) {
            // 마지막 4개의 재료가 햄버거 구성인지 체크
            if (stack[stack.length - 1] === 1 &&  // 빵
                stack[stack.length - 2] === 3 &&  // 고기
                stack[stack.length - 3] === 2 &&  // 야채
                stack[stack.length - 4] === 1) {  // 빵
                // 햄버거가 완성되면 카운트 증가
                answer++;
                // 완성된 햄버거 재료 제거
                stack.splice(stack.length - 4, 4);
            }
        }
    }

    return answer;
}