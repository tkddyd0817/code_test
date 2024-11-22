function solution(arr1, arr2) {
    // 행렬의 행과 열의 크기를 가져옵니다.
    const rows = arr1.length;
    const cols = arr1[0].length;

    // 결과를 저장할 빈 배열을 생성합니다.
    var answer = Array.from({ length: rows }, () => Array(cols).fill(0));

    // 두 행렬의 각 요소를 더합니다.
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            answer[i][j] = arr1[i][j] + arr2[i][j];
        }
    }

    return answer;
}