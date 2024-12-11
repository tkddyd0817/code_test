function solution(k, m, score) {
    // 사과 점수를 내림차순으로 정렬
    score.sort((a, b) => b - a);
    
    let answer = 0;
    // 상자에 담을 수 있는 사과의 개수
    const boxCount = Math.floor(score.length / m);
    
    // 각 상자에 대해 이익 계산
    for (let i = 0; i < boxCount; i++) {
        // 각 상자의 가장 낮은 점수는 m * i + (m - 1) 번째 사과의 점수
        const lowestScore = score[(i + 1) * m - 1];
        answer += lowestScore * m;
    }
    
    return answer;
}