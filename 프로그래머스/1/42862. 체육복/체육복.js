function solution(n, lost, reserve) {
    // 체육복을 가진 학생의 상태를 배열로 초기화
    const students = Array(n).fill(1); // 모든 학생이 기본적으로 체육복 1개를 가지고 있다고 가정

    // 도난당한 학생의 체육복 수를 1개 줄임
    lost.forEach(student => {
        students[student - 1] -= 1; // lost 배열은 1부터 시작하므로 인덱스는 student - 1
    });

    // 여벌 체육복을 가진 학생의 체육복 수를 1개 늘림
    reserve.forEach(student => {
        students[student - 1] += 1; // reserve 배열도 1부터 시작
    });

    // 체육복을 빌려주는 로직
    for (let i = 0; i < n; i++) {
        if (students[i] === 0) { // 체육복이 없는 학생
            if (i > 0 && students[i - 1] === 2) { // 앞 학생이 여벌 체육복을 가진 경우
                students[i - 1]--; // 앞 학생의 체육복 수를 줄임
                students[i]++; // 현재 학생의 체육복 수를 늘림
            } else if (i < n - 1 && students[i + 1] === 2) { // 뒤 학생이 여벌 체육복을 가진 경우
                students[i + 1]--; // 뒤 학생의 체육복 수를 줄임
                students[i]++; // 현재 학생의 체육복 수를 늘림
            }
        }
    }

    // 체육복을 가진 학생 수를 계산
    return students.filter(count => count > 0).length;
}