        
        window.onbeforeunload = function(e) {
            
            return "ブラウザを閉じても良いでしょうか？"; // 文字列はメッセージに反映されません。必ずreturnすればブランクでもOKです。
          }
        //JavaScriptの処理
        //自動で増える
        //var goukei = 0;
        //var sousuu = 0;
        var everyS=0;
        //var oneClick=1;
       
        //秒毎の力を計算
        function add(){
            var power=0;
            power+=babyGet*babypower;
            power+=grandmotherGet*grandmotherpower;
            power+=farmGet*farmpower;
            power+=mineGet*minepower;
            power+=factoryGet*factorypower;
            power+=shrineGet*shrinepower;
            power+=magicGet*magicpower;

            return power;
        }
    
        var gold=0;
        var goldper=1500;
        const goldId=document.getElementById("gold");   
        //秒毎増える
        setInterval(()=>{
            everyS=add();
            goukei+=everyS/5;
            sousuu+=everyS/5;
            //document.getElementById("goukei").innerHTML=Math.trunc((goukei*10)/10)+"個";
            document.getElementById("goukei").innerHTML=N_exchange(goukei,3)+"個";
            document.getElementById("everyS").innerHTML="毎秒: "+N_exchange(everyS,3)+"個";
            //goldpotato
            gold=Math.floor(Math.random()*goldper);
            console.log("gold:"+gold);
            //gold=1;
            
            if (gold==1){
                /*goldId.style.marginTop = 'goldY'; 
                goldId.style.marginRight = 'goldX'; */
                gold=Math.floor(Math.random()*5);
                if(gold==0){;
                    document.getElementById("gold").innerHTML=`<img id="gold0" src="useimg/goldenkorokke.png" onclick="test()">`;
                }
                if (gold === 1) {
                    document.getElementById("gold").innerHTML = `<img id="gold1" src="useimg/goldenkorokke.png" onclick="test()">`;
                }
                  
                if(gold==2){;
                    document.getElementById("gold").innerHTML=`<img id="gold2" src="useimg/goldenkorokke.png" onclick="test()">`;
                }
                if(gold==3){;
                    document.getElementById("gold").innerHTML=`<img id="gold3" src="useimg/goldenkorokke.png" onclick="test()">`;
                }
                if(gold==4){;
                    document.getElementById("gold").innerHTML=`<img id="gold4" src="useimg/goldenkorokke.png" onclick="test()">`;
                }
            }


        },200);
        
        //クリックで合計を増やす

        function kurikku(){
            goukei+=oneClick;
            sousuu+=oneClick;
            //document.getElementById("goukei").innerHTML=Math.trunc((goukei*10)/10)+"個";
            document.getElementById("goukei").innerHTML=N_exchange(goukei,3)+"個";

        }

        function rebyu(){
            const url = "https://docs.google.com/forms/d/e/1FAIpQLScasdiUjNC3aZQRrxv2vJWQZsmcvDubhCj4kuGmXt4CgEvwjA/viewform?usp=sharing"
            window.open(url, '_blank')
        }


        
        

