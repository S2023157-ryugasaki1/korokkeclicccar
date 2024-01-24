        
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

            return power;
        }
        //四捨五入
        function N_round(original,n){ 
            var afterround = Math.trunc( original * Math.pow( 10, n ) ) / Math.pow( 10, n );
            return afterround;
        }
        var gold=0;
        var goldper=300;
        const goldId=document.getElementById("gold");   
        //秒毎増える
        setInterval(()=>{
            everyS=add();
            goukei+=everyS;
            sousuu+=everyS;
            //document.getElementById("goukei").innerHTML=Math.trunc((goukei*10)/10)+"個";
            document.getElementById("goukei").innerHTML=N_round(goukei,1)+"個";
            document.getElementById("everyS").innerHTML="毎秒: "+N_round(everyS,1)+"個";
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


        },1000);
        
        //クリックで合計を増やす

        function kurikku(){
            goukei+=oneClick;
            sousuu+=oneClick;
            //document.getElementById("goukei").innerHTML=Math.trunc((goukei*10)/10)+"個";
            document.getElementById("goukei").innerHTML=N_round(goukei,1)+"個";

        }
        





        




































        /*
        //babyの基準値
        var babyBasic = 15;
        //babyの所持数
        var babyGet = 0;
        //idを取得
        const babyId=document.getElementById("babyne");
        //買う処理
        function baby(){  
            if(Math.floor(1.15**babyGet*babyBasic)<=goukei){
                goukei=goukei-Math.floor(1.15**babyGet*babyBasic);
                babyGet+=1;
                everyS+=0.1;
                everySmall+=0.1;
                document.getElementById("babyne").innerHTML="baby価格: "+Math.floor(1.15**babyGet*babyBasic)+"個";
                document.getElementById("babykazu").innerHTML="baby人数: "+babyGet+"個";
                document.getElementById("everyS").innerHTML="毎秒: "+Math.round(everyS)+"個";
                //真ん中に表示する処理
                const img = document.getElementById("getBaby");
                img.innerHTML+='<img src="https://th.bing.com/th/id/R.56a9ecdad7e18a80e2273bac2a2da7aa?rik=glfCCgh%2byXEYJg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-T0YMLCl9tJM%2fU57C-AglCHI%2fAAAAAAAAhfg%2fXMNAUx3c_Is%2fs800%2fakachan_smile.png&ehk=7CQt%2bM4fMbUv136cAvHooqaZguSBl2cG8BHrJ3focTM%3d&risl=&pid=ImgRaw&r=0" width="20px" height="20px">';
            }
            document.getElementById("goukei").innerHTML=Math.trunc((goukei*10)/10)+"個";
            
        }
*/