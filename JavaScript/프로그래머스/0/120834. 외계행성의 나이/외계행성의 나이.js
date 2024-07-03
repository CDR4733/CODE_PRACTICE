function solution(age) {
    var answer = '';
    var abc = 'abcdefghij';
    answer = age.toString().split("").map((e) => abc[Number(e)]).join("")    
    return answer;
}