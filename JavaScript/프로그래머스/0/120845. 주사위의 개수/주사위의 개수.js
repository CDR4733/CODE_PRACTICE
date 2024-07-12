function solution(box, n) {
    var answer = 0;
    let x = parseInt(box[0] / n);
    let y = parseInt(box[1] / n);
    let h = parseInt(box[2] / n);
    answer = x * y * h;
    return answer;
}