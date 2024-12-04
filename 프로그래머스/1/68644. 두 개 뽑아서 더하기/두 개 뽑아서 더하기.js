function solution(numbers) {
    const result = new Set();  // 중복을 피하기 위해 Set 사용
    const n = numbers.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {  // j는 항상 i보다 크도록 설정
            const sumValue = numbers[i] + numbers[j];
            result.add(sumValue);  // 합을 Set에 추가
        }
    }

    // Set을 배열로 변환하고 오름차순 정렬하여 반환
    return Array.from(result).sort((a, b) => a - b);
}