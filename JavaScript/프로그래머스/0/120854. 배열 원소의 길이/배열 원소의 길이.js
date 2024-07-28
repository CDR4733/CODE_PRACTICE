function solution(strlist) {
    var answer = [];
    for (let i = 0; i < strlist.length; i++) {
        let str = strlist[i];
        answer.push(str.length);
    }
    return answer;
}