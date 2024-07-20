function solution(s) {
    var answer = 0;
    let a = s.split(" ");
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== "Z") {
            answer += Number(a[i]);
        } else {
            answer -= Number(a[i - 1]);
        }
    }
    return answer;
}