function solution(hp) {
    var answer = 0;    
    // 개미의 종류 입력
    var ants = [5, 3, 1];
    // 최소병력 구성해서 -> answer
    for (let i = 0; i < ants.length; i++) {
        answer += parseInt(hp / ants[i]);
        hp -= ants[i] * parseInt(hp / ants[i]);
    }    
    // 결괏값 반환
    return answer;
}