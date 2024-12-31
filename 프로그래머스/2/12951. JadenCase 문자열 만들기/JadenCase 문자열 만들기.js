function solution(s) {
    // 문자열을 공백을 기준으로 나눕니다.
    const words = s.split(' ');
    
    // 각 단어에 대해 JadenCase로 변환합니다.
    const jadenCasedWords = words.map(word => {
        if (word.length === 0) return ''; // 빈 문자열 처리
        // 첫 문자 대문자, 나머지 소문자 변환
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });
    
    // 변환된 단어들을 공백으로 다시 합칩니다.
    return jadenCasedWords.join(' ');
}