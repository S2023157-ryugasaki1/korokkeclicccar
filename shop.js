//add()気を付ける
//babyの基準値
        var babyBasic = 15;
        var grandmotherBasic=100;
        var farmBasic=1100;
        var mineBasic=12000;
        var factoryBasic=130000;
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
                document.getElementById("babyne").innerHTML="baby価格: "+Math.floor(1.15**babyGet*babyBasic)+"個";
                document.getElementById("babykazu").innerHTML="baby人数: "+babyGet+"個";
                //document.getElementById("everyS").innerHTML="毎秒: "+Math.round(everyS)+"個";
                //真ん中に表示する処理[]
                if (babyGet<11){
                    const img = document.getElementById("getBaby");
                    img.innerHTML+='<img src="https://th.bing.com/th/id/R.56a9ecdad7e18a80e2273bac2a2da7aa?rik=glfCCgh%2byXEYJg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-T0YMLCl9tJM%2fU57C-AglCHI%2fAAAAAAAAhfg%2fXMNAUx3c_Is%2fs800%2fakachan_smile.png&ehk=7CQt%2bM4fMbUv136cAvHooqaZguSBl2cG8BHrJ3focTM%3d&risl=&pid=ImgRaw&r=0" width="10%" height="100%">';
                }
            }
            document.getElementById("goukei").innerHTML=Math.trunc((goukei*10)/10)+"個";
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
                document.getElementById("grandmotherne").innerHTML="grandmother価格: "+Math.floor(1.15**grandmotherGet*grandmotherBasic)+"個";
                document.getElementById("grandmotherkazu").innerHTML="grandmother人数: "+grandmotherGet+"個";
                //document.getElementById("everyS").innerHTML="毎秒: "+Math.round(everyS)+"個";
                //真ん中に表示する処理[]
                if (grandmotherGet<11){
                    const img = document.getElementById("getGrandmother");
                    img.innerHTML+='<img src="useimg/grandmother.png" width="10%" height="100%">';
                }
            }
            document.getElementById("goukei").innerHTML=Math.trunc((goukei*10)/10)+"個";
        }
        function farm(){
            if(Math.floor(1.15**farmGet*farmBasic)<=goukei){
                //買値
                goukei=goukei-Math.floor(1.15**farmGet*farmBasic);
                //babyの数を増やす
                farmGet+=1;
                //everyS+=0.1;
                everyS=add();
                document.getElementById("farmne").innerHTML="farm価格: "+Math.floor(1.15**farmGet*farmBasic)+"個";
                document.getElementById("farmkazu").innerHTML="farm人数: "+farmGet+"個";
                //document.getElementById("everyS").innerHTML="毎秒: "+Math.round(everyS)+"個";
                //真ん中に表示する処理[]
                if (farmGet<11){
                    const img = document.getElementById("getFarm");
                    img.innerHTML+='<img src="useimg/farm.png" width="10%" height="100%">';
                }
            }
            document.getElementById("goukei").innerHTML=Math.trunc((goukei*10)/10)+"個";
        }
        function mine(){
            if(Math.floor(1.15**mineGet*mineBasic)<=goukei){
                //買値
                goukei=goukei-Math.floor(1.15**mineGet*mineBasic);
                //babyの数を増やす
                mineGet+=1;
                //everyS+=0.1;
                everyS=add();
                document.getElementById("minene").innerHTML="mine価格: "+Math.floor(1.15**mineGet*mineBasic)+"個";
                document.getElementById("minekazu").innerHTML="mine人数: "+mineGet+"個";
                //document.getElementById("everyS").innerHTML="毎秒: "+Math.round(everyS)+"個";
                //真ん中に表示する処理[]
                if (mineGet<11){
                    const img = document.getElementById("getMine");
                    img.innerHTML+='<img src="useimg/mine.png" width="10%" height="100%">';
                }
            }
            document.getElementById("goukei").innerHTML=Math.trunc((goukei*10)/10)+"個";
        }

        function factory(){
            if(Math.floor(1.15**factoryGet*factoryBasic)<=goukei){
                //買値
                goukei=goukei-Math.floor(1.15**factoryGet*factoryBasic);
                //babyの数を増やす
                factoryGet+=1;
                //everyS+=0.1;
                everyS=add();
                document.getElementById("factoryne").innerHTML="factory価格: "+Math.floor(1.15**factoryGet*factoryBasic)+"個";
                document.getElementById("factorykazu").innerHTML="factory人数: "+factoryGet+"個";
                //document.getElementById("everyS").innerHTML="毎秒: "+Math.round(everyS)+"個";
                //真ん中に表示する処理[]
                if (factoryGet<11){
                    const img = document.getElementById("getFactory");
                    img.innerHTML+='<img src="useimg/factory.png" width="10%" height="100%">';
                }
            }
            document.getElementById("goukei").innerHTML=Math.trunc((goukei*10)/10)+"個";
        }
        