function solution(brown, yellow) {
    const total = brown + yellow; // 전체 격자 수
    for (let height = 3; height <= Math.sqrt(total); height++) {
        if (total % height === 0) { // height가 total의 약수인지 확인
            const width = total / height; // 가로 길이 계산
            if ((width - 2) * (height - 2) === yellow) { // 노란색 격자 수 확인
                return [width, height]; // 결과 반환
            }
        }
    }
    return []; // 조건을 만족하는 경우가 없으면 빈 배열 반환
}
