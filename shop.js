//add()気を付ける
//babyの基準値
        var babyBasic = 15;
        var grandmotherBasic=100;
        var farmBasic=1100;
        var mineBasic=12000;
        var factoryBasic=130000;
        var shrineBasic=1400000;
        var magicBasic=20000000;
        //babyの種族値var babypower = 0.1;
        //grandmotherの種族値var grandmotherpower = 1;セーブ頼む
        //farmの種族値var farmpower=8;

        //babyの所持数var babyGet = 0;
        //grandmotherの所持数var grandmotherGet = 0;
        //farmの所持数var farmGet=0;
        //買う処理

        //baby
        function baby(){  
            if(Math.floor(1.15**babyGet*babyBasic)<=goukei){
                //買値
                goukei=goukei-Math.floor(1.15**babyGet*babyBasic);
                //babyの数を増やす
                babyGet+=1;
                //everyS+=0.1;
                everyS=add();
                document.getElementById("babyne").innerHTML="baby価格: "+N_exchange(Math.floor(1.15**babyGet*babyBasic),3)+"個";
                document.getElementById("babykazu").innerHTML="baby人数: "+N_exchange(babyGet,3)+"個";
                //document.getElementById("everyS").innerHTML="毎秒: "+Math.round(everyS)+"個";
                //真ん中に表示する処理[]
                if (babyGet<11){
                    const img = document.getElementById("getBaby");
                    img.innerHTML+='<img src="useimg/baby.png" width="10%" height="100%">';
                }
            }
            document.getElementById("goukei").innerHTML=N_exchange(Math.trunc((goukei*10)/10),3)+"個";
        }

        //grandmother
        function grandmother(){
            if(Math.floor(1.15**grandmotherGet*grandmotherBasic)<=goukei){
                console.log(12345678);
                //買値
                goukei=goukei-Math.floor(1.15**grandmotherGet*grandmotherBasic);
                //babyの数を増やす
                grandmotherGet+=1;
                //everyS+=0.1;
                everyS=add();
                document.getElementById("grandmotherne").innerHTML="grandmother価格: "+N_exchange(Math.floor(1.15**grandmotherGet*grandmotherBasic),3)+"個";
                document.getElementById("grandmotherkazu").innerHTML="grandmother人数: "+N_exchange(grandmotherGet,3)+"個";
                //document.getElementById("everyS").innerHTML="毎秒: "+Math.round(everyS)+"個";
                //真ん中に表示する処理[]
                if (grandmotherGet<11){
                    const img = document.getElementById("getGrandmother");
                    img.innerHTML+='<img src="useimg/grandmother.png" width="10%" height="100%">';
                }
            }
            document.getElementById("goukei").innerHTML=N_exchange(Math.trunc((goukei*10)/10),3)+"個";
        }
        function farm(){
            if(Math.floor(1.15**farmGet*farmBasic)<=goukei){
                //買値
                goukei=goukei-Math.floor(1.15**farmGet*farmBasic);
                //babyの数を増やす
                farmGet+=1;
                //everyS+=0.1;
                everyS=add();
                document.getElementById("farmne").innerHTML="farm価格: "+N_exchange(Math.floor(1.15**farmGet*farmBasic),3)+"個";
                document.getElementById("farmkazu").innerHTML="farm人数: "+N_exchange(farmGet,3)+"個";
                //document.getElementById("everyS").innerHTML="毎秒: "+Math.round(everyS)+"個";
                //真ん中に表示する処理[]
                if (farmGet<11){
                    const img = document.getElementById("getFarm");
                    img.innerHTML+='<img src="useimg/farm.png" width="10%" height="100%">';
                }
            }
            document.getElementById("goukei").innerHTML=N_exchange(Math.trunc((goukei*10)/10),3)+"個";
        }
        function mine(){
            if(Math.floor(1.15**mineGet*mineBasic)<=goukei){
                //買値
                goukei=goukei-Math.floor(1.15**mineGet*mineBasic);
                //babyの数を増やす
                mineGet+=1;
                //everyS+=0.1;
                everyS=add();
                document.getElementById("minene").innerHTML="mine価格: "+N_exchange(Math.floor(1.15**mineGet*mineBasic),3)+"個";
                document.getElementById("minekazu").innerHTML="mine人数: "+N_exchange(mineGet,3)+"個";
                //document.getElementById("everyS").innerHTML="毎秒: "+Math.round(everyS)+"個";
                //真ん中に表示する処理[]
                if (mineGet<11){
                    const img = document.getElementById("getMine");
                    img.innerHTML+='<img src="useimg/mine.png" width="10%" height="100%">';
                }
            }
            document.getElementById("goukei").innerHTML=N_exchange(Math.trunc((goukei*10)/10),3)+"個";
        }

        function factory(){
            if(Math.floor(1.15**factoryGet*factoryBasic)<=goukei){
                //買値
                goukei=goukei-Math.floor(1.15**factoryGet*factoryBasic);
                //babyの数を増やす
                factoryGet+=1;
                //everyS+=0.1;
                everyS=add();
                document.getElementById("factoryne").innerHTML="factory価格: "+N_exchange(Math.floor(1.15**factoryGet*factoryBasic),3)+"個";
                document.getElementById("factorykazu").innerHTML="factory人数: "+N_exchange(factoryGet,3)+"個";
                //document.getElementById("everyS").innerHTML="毎秒: "+Math.round(everyS)+"個";
                //真ん中に表示する処理[]
                if (factoryGet<11){
                    const img = document.getElementById("getFactory");
                    img.innerHTML+='<img src="useimg/factory.png" width="10%" height="100%">';
                }
            }
            document.getElementById("goukei").innerHTML=N_exchange(Math.trunc((goukei*10)/10),3)+"個";
        }

        function shrine(){
            if(Math.floor(1.15**shrineGet*shrineBasic)<=goukei){
                //買値
                goukei=goukei-Math.floor(1.15**shrineGet*shrineBasic);
                //babyの数を増やす
                shrineGet+=1;
                //everyS+=0.1;
                everyS=add();
                document.getElementById("shrinene").innerHTML="shrine価格: "+N_exchange(Math.floor(1.15**shrineGet*shrineBasic),3)+"個";
                document.getElementById("shrinekazu").innerHTML="shrine人数: "+N_exchange(shrineGet,3)+"個";
                //document.getElementById("everyS").innerHTML="毎秒: "+Math.round(everyS)+"個";
                //真ん中に表示する処理[]
                if (shrineGet<11){
                    const img = document.getElementById("getShrine");
                    img.innerHTML+='<img src="useimg/shrine.png" width="10%" height="100%">';
                }
            }
            document.getElementById("goukei").innerHTML=N_exchange(Math.trunc((goukei*10)/10),3)+"個";
        }

        function magic(){
            if(Math.floor(1.15**magicGet*magicBasic)<=goukei){
                //買値
                goukei = goukei - Math.floor(1.15**magicGet*magicBasic);
                //babyの数を増やす
                magicGet += 1;
                //everyS+=0.1;
                everyS = add();
                document.getElementById("magicne").innerHTML = "Magic価格: " + N_exchange(Math.floor(1.15**magicGet*magicBasic),3) + "個";
                document.getElementById("magickazu").innerHTML = "Magic人数: " + N_exchange(magicGet,3) + "個";
                //document.getElementById("everyS").innerHTML="毎秒: "+Math.round(everyS)+"個";
                //真ん中に表示する処理[]
                if (magicGet < 11){
                    const img = document.getElementById("getMagic");
                    img.innerHTML += '<img src="useimg/magic.png" width="10%" height="100%">';
                }
            }
            document.getElementById("goukei").innerHTML = N_exchange(Math.trunc((goukei*10)/10),3) + "個";
        }           
        