function solution(dots) {
    var answer = 0;    
    var xx = [];
    var yy = [];
    
    // x좌표 2종류, y좌표 2종류 뽑아내기
    for (let i = 0; i < dots.length; i++) {
        xx.push(dots[i][0]);
        yy.push(dots[i][1]);
    }
    xx = [...new Set(xx)].sort((a, b) => b - a);
    yy = [...new Set(yy)].sort((a, b) => b - a);
    
    // (x좌표의 차) * (y좌표의 차) = 넓이
    answer = (xx[0] - xx[1]) * (yy[0] - yy[1]);
    return answer;
}