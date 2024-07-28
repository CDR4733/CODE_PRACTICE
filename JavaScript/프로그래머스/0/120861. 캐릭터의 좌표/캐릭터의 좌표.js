function solution(keyinput, board) {
    var answer = [];
    
    // 1. 초기 좌표 세팅
    var x = 0;
    var y = 0;
    
    // 2. 키보드 입력
    for (let i = 0; i < keyinput.length; i++) {
        // 3. 좌표 이동
        // 3-1. right 입력시
        if (keyinput[i] == "right") {
            if (x !== +(board[0] - 1) / 2) {
                x++;
            }
        }
        // 3-2. left 입력시
        if (keyinput[i] == "left") {
            if (x !== -(board[0] - 1) / 2) {
                x--;
            }
        }
        // 3-3. up 입력시
        if (keyinput[i] == "up") {
            if (y !== +(board[1] - 1) / 2) {
                y++;
            }
        }
        // 3-4. down 입력시
        if (keyinput[i] == "down") {
            if (y !== -(board[1] - 1) / 2) {
                y--;
            }
        }
    }
    
    // 3. 결과 반환
    answer = [x, y];
    return answer;
}