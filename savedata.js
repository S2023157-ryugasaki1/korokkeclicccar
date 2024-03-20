function risetto(){
  let checkFlg = window.confirm("OKを押すとすべてのデータがリセットされます。本当にリセットしますか？");
  if(checkFlg ==true){
    goukei = 0;
    usecheat = 0;
    SaveData('SaveData_usecheat', usecheat);
    sousuu = 0;
    oneClick = 0;
    babyGet = 0;
    babypower = 0;
    grandmotherGet = 0;
    grandmotherpower = 0;
    farmGet = 0;
    farmpower = 0;
    mineGet = 0;
    minepower = 0;
    factoryGet = 0;
    factorypower =0;
    shrineGet = 0;
    shrinepower = 0;
    magicGet = 0;
    magicpower = 0; 
    PowerBought = 0;
    location.reload();
  }
}
// ゲームデータを保存する関数
function SaveData(DataName, GameData,) {
  // ゲームデータをローカルストレージに保存
  localStorage.setItem(DataName,GameData);
}
//window.onbeforeunload = function(e) {
            
  //return "ブラウザを閉じても良いでしょうか？"; // 文字列はメッセージに反映されません。必ずreturnすればブランクでもOKです。
//}
//初期化
// var goukei = 0;
// var sousuu = 0;
// var oneClick = 1;
// var babyGet = 0;
// var babypower = 0.1;

//再読込時これらをロード
goukei = Number(localStorage.getItem('SaveData_goukei'));
usecheat = Number(localStorage.getItem('SaveData_usecheat'));
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
shrineGet =Number(localStorage.getItem('SaveData_shrineGet'));
shrinepower =Number(localStorage.getItem('SaveData_shrinepower'));
magicGet =Number(localStorage.getItem('SaveData_magicGet'));
magicpower =Number(localStorage.getItem('SaveData_magicpower'));
PowerBought = Number(localStorage.getItem('Savedata_PowerBought'));
console.log("Power "+PowerBought);
console.log("goukei "+goukei);

// セーブ間隔を設定 (ミリ秒)
var saveInterval =500;

// セーブを繰り返し実行
setInterval(function () {
  // 各ゲームデータをセーブ

  //アンチチート
  if(goukei > 1000000){
    maegoukei = Number(localStorage.getItem('SaveData_goukei'));
    if(goukei > maegoukei * 10){
      anticheat();
      usecheat += 1;
      SaveData('SaveData_usecheat', usecheat);
      console.log("チート検出");
    }
  } 

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

  if (shrineGet >= 0){
    SaveData('SaveData_shrineGet', shrineGet);
  }else{
    shrineGet = 0;
    SaveData('SaveData_shrineGet', shrineGet);
  }
  
  if (shrinepower >= 1400){
    SaveData('SaveData_shrinepower', shrinepower);
  }else{
    shrinepower = 1400;
    SaveData('SaveData_shrinepower', shrinepower);
  }

  if (magicGet >= 0){
    SaveData('SaveData_magicGet', magicGet);
  }else{
    magicGet = 0;
    SaveData('SaveData_magicGet', magicGet);
  }
  
  if (magicpower >= 7800){
    SaveData('SaveData_magicpower', magicpower);
  }else{
    magicpower = 7800;
    SaveData('SaveData_magicpower', magicpower);
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
  document.getElementById("babyne").innerHTML="baby価格: "+N_exchange(Math.floor(1.15**babyGet*babyBasic),2)+"個";
  document.getElementById("babykazu").innerHTML="baby人数: "+N_exchange(babyGet,3)+"個";
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
  document.getElementById("grandmotherne").innerHTML="grandmother価格: "+N_exchange(Math.floor(1.15**grandmotherGet*grandmotherBasic),2)+"個";
  document.getElementById("grandmotherkazu").innerHTML="grandmother人数: "+N_exchange(grandmotherGet,3)+"個";
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
  document.getElementById("farmne").innerHTML="farm価格: "+N_exchange(Math.floor(1.15**farmGet*farmBasic),2)+"個";
  document.getElementById("farmkazu").innerHTML="farm人数: "+N_exchange(farmGet,3)+"個";
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
  document.getElementById("minene").innerHTML="mine価格: "+N_exchange(Math.floor(1.15**mineGet*mineBasic),2)+"個";
  document.getElementById("minekazu").innerHTML="mine人数: "+N_exchange(mineGet,3)+"個";
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
  document.getElementById("factoryne").innerHTML="factory価格: "+N_exchange(Math.floor(1.15**factoryGet*factoryBasic),2)+"個";
  document.getElementById("factorykazu").innerHTML="factory人数: "+N_exchange(factoryGet,3)+"個";
  //factoryの画像処理
  if (factoryGet>=11){
    for(let i = 0; i < 10; i++){
      factoryimg.innerHTML+='<img src="useimg/factory.png" width="10%" height="100%">';
    }
  }else{
    for (let l = 0; l < factoryGet;l++){
      factoryimg.innerHTML+='<img src="useimg/factory.png" width="10%" height="100%">';
    }
  }

  //shrine画像のID取得
  const shrineimg = document.getElementById("getShrine");
  console.log("Load shrine")
  //shrineinformationの更新
  document.getElementById("shrinene").innerHTML="shrine価格: "+N_exchange(Math.floor(1.15**shrineGet*shrineBasic),2)+"個";
  document.getElementById("shrinekazu").innerHTML="shrine人数: "+N_exchange(shrineGet,3)+"個";
  //shrineの画像処理
  if (shrineGet>=11){
    for(let i = 0; i < 10; i++){
      shrineimg.innerHTML+='<img src="useimg/shrine.png" width="10%" height="100%">';
    }
  }else{
    for (let l = 0; l < shrineGet;l++){
      shrineimg.innerHTML+='<img src="useimg/shrine.png" width="10%" height="100%">';
    }
  }

  //magic画像のID取得
  const magicimg = document.getElementById("getMagic");
  console.log("Load magic")
  //factoryinformationの更新
  document.getElementById("magicne").innerHTML="magic価格: "+N_exchange(Math.floor(1.15**magicGet*magicBasic),2)+"個";
  document.getElementById("magickazu").innerHTML="magic人数: "+N_exchange(magicGet,3)+"個";
  //magicの画像処理
  if (magicGet>=11){
    for(let i = 0; i < 10; i++){
      magicimg.innerHTML+='<img src="useimg/magic.png" width="10%" height="100%">';
    }
  }else{
    for (let l = 0; l < factoryGet;l++){
      magicimg.innerHTML+='<img src="useimg/magic.png" width="10%" height="100%">';
    }
  }
}

function anticheat(){
  let checkFlg = window.confirm("ずるして揚げたコロッケは美味いか？OK押せばリセットできるぞ");
  if(checkFlg ==true){
    goukei = 0;
    usecheat = 0;
    SaveData('SaveData_usecheat', usecheat);
    sousuu = 0;
    oneClick = 0;
    babyGet = 0;
    babypower = 0;
    grandmotherGet = 0;
    grandmotherpower = 0;
    farmGet = 0;
    farmpower = 0;
    mineGet = 0;
    minepower = 0;
    factoryGet = 0;
    factorypower =0;
    shrineGet = 0;
    shrinepower = 0;
    magicGet = 0;
    magicpower = 0; 
    PowerBought = 0;
    location.reload();
  }
}
