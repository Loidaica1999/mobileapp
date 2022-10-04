"use strict";

window.addEventListener("DOMContentLoaded",
  function(){
     // ヘッダーのテキストエフェクト
    $("header").textillate({
      loop:false, // ループのオンオフ
      minDisplayTime:2000, // テキストが置き換えられるまでの表示時間
      initialDelay:2000,  // 遅延時間
      autoStart: true,    // アニメーションを自動的にスタート
      in : {              // フェードインのエフェクトの詳細設定
        effect :"fadeInLeftBig",  // エフェクトの名前(animate.css参照)
        delayScale:1.5,              // 遅延時間の指数
        delay :50,              // 文字ごとの遅延時間
        sync:false,             // trueはアニメーションをすべての文字に同時に適用
        shuffle:true          // trueは文字を順番にではなく、ランダムに
      }
    });

    $(function(){
      ScrollReveal().reveal("#btn1",{ duration :9000});
    });
  setTimeout(
    function(){
    let popMessage="いらっしゃい！おみくじ引いてって！";
    window.alert(popMessage);
    },
    "6000"
  );
  }, false

);

const btn1 = document.getElementById("btn1");
btn1.addEventListener("click",
function() {
 /*   let n = Math.floor(Math.random()*3);

    switch(n){
      case 0:
        btn1.textContent="Very Happy!!";
        btn1.style.color="#FF0000";
        btn1.style.fontSize="40px";
        break;
      case 1:
        btn1.textContent="Happy!!";
        btn1.style.color="#fff001";
        btn1.style.fontSize="20";
        break;
      case 2:
        btn1.textContent="UnHappy...";
        btn1.style.color="#261e1c";
        btn1.style.fontSize="small";
        break;
    }*/

let resultText = ["大吉!!!!!","吉!!!!","中吉!!!","小吉!!","末吉!","凶 。。"];
let resultColor =["#ff0000","#c71585","#ff1493","#ff69b4","#ff8c00","#1e90ff"];
let resultFontSize = ["55px","50px","45px","40px","35px","30px"];
let resultMaxSpeed = ["10","10","8","5","5","5"];
let resultMaxSize = ["30","30","20","15","20","20"];
let resultImage =["image/star.png","image/sakura_hanabira.png","image/sakura_hanabira.png","image/sakura_hanabira.png","image/leaf.png","image/snowflakes.png"];
let n =Math.floor(Math.random() * resultText.length);
btn1.textContent =resultText[n];
btn1.style.color = resultColor[n];
btn1.style.fontSize =resultFontSize[n];
btn1.style.maxSpeed =resultMaxSpeed[n];
btn1.style.maxSize =resultMaxSize[n];
btn1.style.image =resultImage[n];

    // snowfall stop
$(document).snowfall("clear");
// jQueryのsnowfall
$(document).ready(function(){
$(document).snowfall({
maxSpeed : 5, // 最大速度
minSpeed : 1, // 最小速度
maxSize : 20, // 最大サイズ
minSize : 1, // 最小サイズ
image : resultImage[n]
});
});

  } , false
);