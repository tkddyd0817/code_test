function solution(players, callings) {
    // 선수 이름과 인덱스를 매핑하는 딕셔너리 생성
    const playerIndex = {};
    for (let i = 0; i < players.length; i++) {
        playerIndex[players[i]] = i;
    }

    // 호출된 선수에 대해 순위 업데이트
    for (const calling of callings) {
        const index = playerIndex[calling];
        
        // 호출된 선수가 1등이 아닌 경우에만 처리
        if (index > 0) {
            const frontPlayer = players[index - 1]; // 바로 앞선 선수의 이름
            
            // 선수 순위 변경
            players[index] = frontPlayer;
            players[index - 1] = calling;
            
            // 인덱스 업데이트
            playerIndex[calling] = index - 1;
            playerIndex[frontPlayer] = index;
        }
    }

    return players;
}