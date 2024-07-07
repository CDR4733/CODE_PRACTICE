function solution(rsp) {
    var answer = '';
    for(let i = 0; i < rsp.length; i++) {
        if (rsp[i] == "2") {
            answer = answer + "0";
        } else if (rsp[i] == "0") {
            answer = answer + "5";
        } else if (rsp[i] == "5") {
            answer = answer + "2"
        }
    }
    return answer;
}