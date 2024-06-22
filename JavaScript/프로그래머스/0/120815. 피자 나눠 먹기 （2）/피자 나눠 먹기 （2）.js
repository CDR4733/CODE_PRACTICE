function solution(n) {
    var answer = 0;
    var pizza = 0;
    do {
        answer += 1; // 1판 추가        
        pizza += 6; // 1판 시켰으니 6조각 추가
    } while(pizza % n !== 0) // 공평하게 나눠먹으면 반복문 종료
    return answer;
}