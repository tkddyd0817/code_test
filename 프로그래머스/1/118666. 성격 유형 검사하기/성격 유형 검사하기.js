function solution(survey, choices) {
    const scoreMap = {
        1: 3,  // 매우 비동의
        2: 2,  // 비동의
        3: 1,  // 약간 비동의
        4: 0,  // 모르겠음
        5: 1,  // 약간 동의
        6: 2,  // 동의
        7: 3   // 매우 동의
    };
    
    // 성격 유형의 점수를 저장할 객체
    const scores = {
        'R': 0, 'T': 0,
        'C': 0, 'F': 0,
        'J': 0, 'M': 0,
        'A': 0, 'N': 0
    };

    // 각 질문에 대해 점수를 계산
    for (let i = 0; i < survey.length; i++) {
        const [disagree, agree] = survey[i].split('');
        const choice = choices[i];
        const score = scoreMap[choice];

        if (choice < 4) { // 비동의 관련 선택지를 선택한 경우
            scores[disagree] += score;
        } else if (choice > 4) { // 동의 관련 선택지를 선택한 경우
            scores[agree] += score;
        }
    }

    // 결과를 저장할 배열
    const result = [];

    // 각 지표에 대해 점수를 비교하여 성격 유형 결정
    result.push(scores['R'] >= scores['T'] ? 'R' : 'T');
    result.push(scores['C'] >= scores['F'] ? 'C' : 'F');
    result.push(scores['J'] >= scores['M'] ? 'J' : 'M');
    result.push(scores['A'] >= scores['N'] ? 'A' : 'N');

    return result.join('');
}