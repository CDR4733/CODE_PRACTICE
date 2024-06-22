function solution(slice, n) {
    var answer = 0;
    var pizza = 0;
    do {
        answer += 1; // 피자 1판 추가!
        pizza += slice; // 1판 속 slice 조각 추가!
    } while (pizza < n) // 모두 최소 1조각 이상 먹으면 종료!
    return answer;
}