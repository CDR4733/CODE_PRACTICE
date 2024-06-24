function solution(babbling) {
    var answer = 0;
    // 1. 가능한 발음들은 ""로 바뀌게 된다. 발음을 못하면 문자열이 남는다.
    for(let i = 0; i < babbling.length; i++){
        do {
            if (babbling[i].includes("ayaaya")){
                break;
            }
            if (babbling[i].includes("aya")){
                babbling[i] = babbling[i].replace("aya", " ");
            }
        } while (babbling[i].includes("aya"));
        do {
            if (babbling[i].includes("yeye")){
                break;
            }
            if (babbling[i].includes("ye")){
                babbling[i] = babbling[i].replace("ye", " ");
            }
        } while (babbling[i].includes("ye"));
        do {
            if (babbling[i].includes("woowoo")){
                break;
            }
            if (babbling[i].includes("woo")){
                babbling[i] = babbling[i].replace("woo", " ");
            }
        } while (babbling[i].includes("woo"));
        do {
            if (babbling[i].includes("mama")){
                break;
            }
            if (babbling[i].includes("ma")){
                babbling[i] = babbling[i].replace("ma", " ");
            }
        } while (babbling[i].includes("ma"));                    
    }
    
    // 2. 공백으로만 이루어진 문자열을 ""로 바꿔주기
    for (let j = 0; j < babbling.length; j++) {
        do {
            if (babbling[j].includes(" ")){
                babbling[j] = babbling[j].replace(" ", "");
            }
        } while (babbling[j].includes(" "));
    }    
    
    // 3. 발음을 총 몇 개 했는지 검사
    for (let k = 0; k < babbling.length; k++) {
        if (babbling[k] == "") {
            answer += 1;
        }
    }
    return answer;
}