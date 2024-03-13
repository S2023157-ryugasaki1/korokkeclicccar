//汎用関数セット

//小数点以下Ｎ桁で四捨五入
function N_round(original,n){ 
    var afterround = Math.trunc( original * Math.pow( 10, n ) ) / Math.pow( 10, n );
    return afterround;
}

//整数４桁区切り日本語表記
//N桁分表示
function N_exchange(original,n){
    if (original < 1000000000000000000000000000000000000000000000000000000000000000000000000){
        S_number = [];
        keta =  ["", "万", "億", "兆", "京","垓", "秭", "穣", "溝", "澗","正", "載", "極", "恒河沙", "阿僧祇","那由他", "不可思議", "無量大数"];
        num = N_round(original,0);
        R_num = 0;
            while (num > 0) {
            S_number.push(num % 10000);
            num = Math.floor(num / 10000);
        }
        lenS = S_number.length
        while(lenS > 0){
            if (S_number[lenS-1] == 0){
                lenS--;
                n--;
            }else{
                if(n > 0){
                    R_num = R_num + S_number[lenS-1] + keta[lenS -1]
                    lenS--;
                    n--;
                }else{
                    break;
                }
            }
        }
        return R_num;
    }else{
        return original;
    }
    
}
    
