function solution(n) {
    var answer = 0;
    if(n ** (1/2) == parseInt(n ** (1/2))) {
        answer = 1;
    } else {
        answer = 2;
    }
    return answer;
}