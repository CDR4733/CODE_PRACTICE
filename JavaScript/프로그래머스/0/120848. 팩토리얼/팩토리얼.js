function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}

function solution(n) {
    var answer = 0;
    for (let i = 1; i < 12; i++) {
        if (n < factorial(i)) {
            answer = i - 1;
            break;
        }
    }
    return answer;
}