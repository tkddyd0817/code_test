function solution(array, commands) {
    // 결과를 저장할 배열을 초기화합니다.
    var answer = [];

    // commands 배열을 순회합니다.
    for (var i = 0; i < commands.length; i++) {
        // commands의 i번째 원소를 각각 i, j, k로 분리합니다.
        var command = commands[i];
        var iIndex = command[0] - 1; // 시작 인덱스 (0-based index로 변환)
        var jIndex = command[1]; // 끝 인덱스 (slice는 끝 인덱스를 포함하지 않음)
        var kIndex = command[2] - 1; // k번째 원소 (0-based index로 변환)

        // array에서 iIndex부터 jIndex까지 잘라냅니다.
        var slicedArray = array.slice(iIndex, jIndex);
        
        // 잘라낸 배열을 정렬합니다.
        slicedArray.sort((a, b) => a - b); // 오름차순 정렬

        // 정렬된 배열에서 kIndex 번째 원소를 answer에 추가합니다.
        answer.push(slicedArray[kIndex]);
    }

    // 최종 결과를 반환합니다.
    return answer;
}

// 예시 입력으로 함수를 테스트합니다.
console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));
// 출력: [5, 6, 3]