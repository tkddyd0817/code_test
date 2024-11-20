function solution(price, money, count) {
    // 총 필요한 금액을 계산
    let totalCost = 0;
    for (let i = 1; i <= count; i++) {
        totalCost += price * i; // N번째 이용료는 price * N
    }

    // 부족한 금액 계산
    let shortfall = totalCost - money;

    // 부족한 금액이 0보다 작으면 0을 반환, 그렇지 않으면 부족한 금액 반환
    return shortfall > 0 ? shortfall : 0;
}