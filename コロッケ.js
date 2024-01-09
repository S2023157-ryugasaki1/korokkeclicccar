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
// ゲームデータを保存する関数
function SaveData(DataName, GameData,) {
    // ゲームデータをローカルストレージに保存
    localStorage.setItem(DataName,GameData);
  }
  
  
  //再読込時これらをロード
  goukei = Number(localStorage.getItem('SaveData_goukei'));
  sousuu = Number(localStorage.getItem('SaveData_sousuu'));
  oneClick = Number(localStorage.getItem('SaveData_oneClick'));
  babyGet = Number(localStorage.getItem('SaveData_babyGet'));
  babypower = Number(localStorage.getItem('SaveData_babypower'));
  grandmotherGet =Number(localStorage.getItem('SaveData_grandmotherGet'));
  grandmotherpower =Number(localStorage.getItem('SaveData_grandmotherpower'));
  farmGet =Number(localStorage.getItem('SaveData_farmGet'));
  farmpower =Number(localStorage.getItem('SaveData_farmpower'));
  mineGet =Number(localStorage.getItem('SaveData_mineGet'));
  minepower =Number(localStorage.getItem('SaveData_minepower'));
  factoryGet =Number(localStorage.getItem('SaveData_factoryGet'));
  factorypower =Number(localStorage.getItem('SaveData_factorypower'));
  PowerBought = Number(localStorage.getItem('Savedata_PowerBought'));
  console.log("Power "+PowerBought);
  console.log("goukei "+goukei);
  
  // セーブ間隔を設定 (ミリ秒)
  var saveInterval =500;
  
  // セーブを繰り返し実行
  setInterval(function () {
    // 各ゲームデータをセーブ
  
    if (goukei >= 0){
    SaveData('SaveData_goukei', goukei);
    }else{
      goukei = 0;
      SaveData('SaveData_goukei', goukei);
    }
  
    if (sousuu >= 0){
      SaveData('SaveData_sousuu', sousuu);
    }else{
      sousuu = 0;
      SaveData('SaveData_sousuu', sousuu);
    }
  
    if (oneClick >= 1){
      SaveData('SaveData_oneClick',oneClick);
    }else{
      oneClick = 1;
      SaveData('SaveData_oneClick',oneClick);
    }
  
    if (babyGet >= 0){
      SaveData('SaveData_babyGet', babyGet);
    }else{
      babyGet = 0;
      SaveData('SaveData_babyGet', babyGet);
    }
    
    if (babypower >= 0.1){
      SaveData('SaveData_babypower', babypower);
    }else{
      babypower = 0.1;
      SaveData('SaveData_babypower', babypower);
    }
  
    if (grandmotherGet >= 0){
      SaveData('SaveData_grandmotherGet', grandmotherGet);
    }else{
      grandmotherGet = 0;
      SaveData('SaveData_grandmotherGet', grandmotherGet);
    }
    
    if (grandmotherpower >= 1){
      SaveData('SaveData_grandmotherpower', grandmotherpower);
    }else{
      grandmotherpower = 1;
      SaveData('SaveData_grandmotherpower', grandmotherpower);
    }
  
    if (farmGet >= 0){
      SaveData('SaveData_farmGet', farmGet);
    }else{
      farmGet = 0;
      SaveData('SaveData_farmGet', farmGet);
    }
    
    if (farmpower >= 8){
      SaveData('SaveData_farmpower', farmpower);
    }else{
      farmpower = 8;
      SaveData('SaveData_farmpower', farmpower);
    }
  
    if (mineGet >= 0){
      SaveData('SaveData_mineGet', mineGet);
    }else{
      mineGet = 0;
      SaveData('SaveData_mineGet', mineGet);
    }
    
    if (minepower >= 47){
      SaveData('SaveData_minepower', minepower);
    }else{
      minepower = 47;
      SaveData('SaveData_minepower', minepower);
    }
  
    if (factoryGet >= 0){
      SaveData('SaveData_factoryGet', factoryGet);
    }else{
      factoryGet = 0;
      SaveData('SaveData_factoryGet', factoryGet);
    }
    
    if (factorypower >= 260){
      SaveData('SaveData_factorypower', factorypower);
    }else{
      factorypower = 260;
      SaveData('SaveData_factorypower', factorypower);
    }
  
    if (PowerBought >= 1){
      SaveData('Savedata_PowerBought',PowerBought);
    }else{
      PowerBought = 1;
      SaveData('Savedata_PowerBought', PowerBought);
    }
  
    console.log('SaveComplate');
  
    // 他のゲームデータも同様にセーブ
  }, saveInterval);
  
  
  
  //ページが開いた時の処理
  window.onload = function(){
    //baby画像のID取得
    const Babyimg = document.getElementById("getBaby");
    console.log("Load baby")
    //babyinformationの更新
    document.getElementById("babyne").innerHTML="baby価格: "+Math.floor(1.15**babyGet*babyBasic)+"個";
    document.getElementById("babykazu").innerHTML="baby人数: "+babyGet+"個";
    //babyの画像処理
    if (babyGet>=11){
      for(let i = 0; i < 10; i++){
        Babyimg.innerHTML+='<img src="useimg/baby.png" width="10%" height="100%">';
      }
    }else{
      for (let l = 0; l < babyGet;l++){
        Babyimg.innerHTML+='<img src="useimg/baby.png" width="10%" height="100%">';
      }
    }
  
    //grandmother画像のID取得
    const grandmotherimg = document.getElementById("getGrandmother");
    console.log("Load grandmother")
    //grandmotherinformationの更新
    document.getElementById("grandmotherne").innerHTML="grandmother価格: "+Math.floor(1.15**grandmotherGet*grandmotherBasic)+"個";
    document.getElementById("grandmotherkazu").innerHTML="grandmother人数: "+grandmotherGet+"個";
    //grandmotherの画像処理
    if (grandmotherGet>=11){
      for(let i = 0; i < 10; i++){
        grandmotherimg.innerHTML+='<img src="useimg/grandmother.png" width="10%" height="100%">';
      }
    }else{
      for (let l = 0; l < grandmotherGet;l++){
        grandmotherimg.innerHTML+='<img src="useimg/grandmother.png" width="10%" height="100%">';
      }
    }
  
    //farm画像のID取得
    const farmimg = document.getElementById("getFarm");
    console.log("Load farm")
    //farminformationの更新
    document.getElementById("farmne").innerHTML="farm価格: "+Math.floor(1.15**farmGet*farmBasic)+"個";
    document.getElementById("farmkazu").innerHTML="farm人数: "+farmGet+"個";
    //farmの画像処理
    if (farmGet>=11){
      for(let i = 0; i < 10; i++){
        farmimg.innerHTML+='<img src="useimg/farm.png" width="10%" height="100%">';
      }
    }else{
      for (let l = 0; l < farmGet;l++){
        farmimg.innerHTML+='<img src="useimg/farm.png" width="10%" height="100%">';
      }
    }
  
    //mine画像のID取得
    const mineimg = document.getElementById("getMine");
    console.log("Load mine")
    //mineinformationの更新
    document.getElementById("minene").innerHTML="mine価格: "+Math.floor(1.15**mineGet*mineBasic)+"個";
    document.getElementById("minekazu").innerHTML="mine人数: "+mineGet+"個";
    //mineの画像処理
    if (mineGet>=11){
      for(let i = 0; i < 10; i++){
        mineimg.innerHTML+='<img src="useimg/mine.png" width="10%" height="100%">';
      }
    }else{
      for (let l = 0; l < mineGet;l++){
        mineimg.innerHTML+='<img src="useimg/mine.png" width="10%" height="100%">';
      }
    }
  
    //factory画像のID取得
    const factoryimg = document.getElementById("getFactory");
    console.log("Load factory")
    //factoryinformationの更新
    document.getElementById("factoryne").innerHTML="factory価格: "+Math.floor(1.15**factoryGet*factoryBasic)+"個";
    document.getElementById("factorykazu").innerHTML="factory人数: "+factoryGet+"個";
    //mineの画像処理
    if (factoryGet>=11){
      for(let i = 0; i < 10; i++){
        factoryimg.innerHTML+='<img src="useimg/factory.png" width="10%" height="100%">';
      }
    }else{
      for (let l = 0; l < factoryGet;l++){
        factoryimg.innerHTML+='<img src="useimg/factory.png" width="10%" height="100%">';
      }
    }
  }

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
            img.innerHTML+='<img src="useimg/baby.png" width="10%" height="100%">';
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
