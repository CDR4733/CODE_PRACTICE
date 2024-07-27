function solution(n) {
    var answer = [];
    var d = 2;
    // n이 1이 될 때까지 나누기
    while (n > 1) {
        if (n % d == 0) {
            answer.push(d);
            n = n / d;
        } else {
            d = d + 1;
        }
    }
    // 중복 제거
    answer = [...new Set(answer)];
    return answer;
}