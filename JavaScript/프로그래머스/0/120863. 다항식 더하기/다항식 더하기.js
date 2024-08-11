function solution(polynomial) {
    var answer = '';
    let a = 0;
    let b = 0;
    var p = polynomial.split(' + ')
    for (let i = 0; i < p.length; i++) {
        // i번째 요소에 x가 포함되어있으면
        if (isNaN(Number(p[i]))) {
            // 그냥 x인 경우 a에 +1
            if (p[i] == "x") {
                a = a + 1;
            } else {
            // nx인 경우에 a에 +n (x제거 후 숫자화해서 더하기)
                a = a + Number(p[i].slice(0, -1));
            }
        } else {
        // i번째 요소에 x가 포함되어있지 않으면(숫자화해서 더하기)
            b = b + Number(p[i]);
        }
    }
    // answer 수식 완성
    if (a == 0) {
        return `${b}`;
    } 
    if (a == 1 && b == 0) {
        return `x`;
    }
    if (a == 1 && b !== 0) {
        return `x + ${b}`;
    }
    if (b == 0) {
        return `${a}x`;
    }
    return `${a}x + ${b}`;           
}