function isPrime(num) {
    if (num < 2) return false; // 0과 1은 소수가 아님
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false; // 나누어 떨어지면 소수가 아님
    }
    return true; // 소수임
}

function solution(nums) {
    let answer = 0;
    const n = nums.length;

    // 3개의 수를 선택하는 조합을 생성
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                if (isPrime(sum)) {
                    answer++; // 소수인 경우 카운트
                }
            }
        }
    }

    return answer;
}