function solution(price) {
    var answer = 0;
    if (price >= 500000) {
        price = price * (1 - 0.2);
    } else if (price >= 300000) {
        price = price * (1 - 0.1);
    } else if (price >= 100000) {
        price = price * (1 - 0.05);
    } else {
        price = price * 1;
    }
    answer = parseInt(price);
    return answer;
}