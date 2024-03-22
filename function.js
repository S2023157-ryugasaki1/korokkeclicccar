//汎用関数セット

//小数点以下Ｎ桁で四捨五入
function N_round(original,n){ 
    var afterround = Math.trunc( original * Math.pow( 10, n ) ) / Math.pow( 10, n );
    return afterround;
}

//整数４桁区切り日本語表記
//N桁分表示
function N_exchange(original,n){ 
    keta =  ["", "万", "億", "兆", "京","垓", "秭", "穣", "溝", "澗","正", "載", "極", "恒河沙", "阿僧祇","那由他", "不可思議", "無量大数", "万無量大数", "億無量大数", "兆無量大数", "京無量大数","垓無量大数", "秭無量大数", "穣無量大数", "溝無量大数", "澗無量大数","正無量大数", "載無量大数", "極無量大数", "恒河沙無量大数", "阿僧祇無量大数","那由他無量大数", "不可思議無量大数", "無量大数無量大数"];
    lenketa = keta.length;
    if (original < 10**(lenketa*4)){
        S_number = [];
        num = N_round(original,0);
        R_num = 0;
            while (num > 0) {
            S_number.push(num % 10000);
            num = Math.floor(num / 10000);
        }
        lenS = S_number.length;
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
    
