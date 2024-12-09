function solution(a, b) {
    // 2016년 각 월의 일수
    const monthDays = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    // 1월 1일이 금요일이므로, 금요일을 0으로 설정
    const daysOfWeek = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    
    // 1월 1일부터 a월 b일까지의 총 일수 계산
    let totalDays = 0;
    
    // a월 이전의 모든 월의 일수를 더함
    for (let i = 1; i < a; i++) {
        totalDays += monthDays[i];
    }
    
    // a월의 b일을 더함
    totalDays += b;
    
    // 1월 1일이 금요일이므로, totalDays를 7로 나눈 나머지를 이용해 요일 계산
    const dayOfWeekIndex = (totalDays - 1) % 7; // -1을 하는 이유는 1월 1일이 포함되기 때문
    return daysOfWeek[dayOfWeekIndex];
}