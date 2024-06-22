function solution(n) {
    var answer = [];
    for(let i = 0; i < n; i++) {
        if (2 * i + 1 <= n) {
            answer.push(2 * i + 1);
        } else {
            break;
        }
    }
    return answer;
}