function solution(X, Y) {
    var answer = '';
    
    // 0. 입력 실수 방지
    X = String(X);
    Y = String(Y);
    
    // 1. 겹치는 숫자를 9부터 0까지 answer에 기록
    for (let i = 0; i < 10; i++) {
        let standard = String(9 - i);
        let countX = X.split(standard).length - 1;
        let countY = Y.split(standard).length - 1;        
        let count = Math.min(countX, countY);
        answer += standard.repeat(count);
    }    
    
    // 2. 짝꿍이 없거나 공통 숫자가 0으로만 구성된 경우 처리
    if(answer == '') {
        answer = '-1';
        return answer;
    } else if(Number(answer) == 0) {
        answer = '0';
        return answer;
    }
        
    return answer;
}