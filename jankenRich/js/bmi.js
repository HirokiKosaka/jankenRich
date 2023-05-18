
const visi = document.getElementById('advice');
visi.style.display = 'none';

const janvisi = document.getElementById('janken');
janvisi.style.display = 'none';



function buttonClick(){
  const tall = sinchou.value;
  const weight = taiju.value;
  const bmi1 = weight / (tall**2) * 10000;
  const bmi2 = bmi1 * 10;
  const bmi3 = Math.round(bmi2);
  const trueBmi = bmi3 / 10;
  console.log(trueBmi);
  msg.innerText = 'あなたのBMIは' + trueBmi + 'です';
    function yourBmi(bmi){
      bmi = trueBmi;
      if(bmi <= 18.5){
        return '痩せすぎです';
      } else if(bmi <= 25){
        return '適正体重です';
      } else if(bmi <= 30){
        return 'やや肥満です';
      } else if(bmi <= 35){
        return '肥満です';
      } else if(bmi <= 40){
        return '超肥満です';
      } else {
        return '限度を超えた肥満です';
      }
    }
  if(trueBmi <= 18.5){
    setTimeout(function(){window.alert('痩せすぎです')}, 1);
    visi.style.display = 'flex';
    advice.innerHTML = 'いっぱい食べましょう!';
  } else if(trueBmi <= 25){
    setTimeout(function(){window.alert('適正体重です')}, 1);
    visi.style.display = 'flex';
    advice.innerHTML = 'このまま体型を維持しましょう!';
  } else if(trueBmi <= 30){
    setTimeout(function(){window.alert('やや肥満です')}, 1);
    visi.style.display = 'none';
    janvisi.style.display = 'flex';
    advice.innerHTML = '定期的に運動をするようにしましょう!';

  } else if(trueBmi <= 35){
    setTimeout(function(){window.alert('肥満です')}, 1);
    visi.style.display = 'none';
    janvisi.style.display = 'flex';
    advice.innerHTML = '運動と夜は炭水化物を抜くようにしましょう!';
  } else if(trueBmi <= 40){
    setTimeout(function(){window.alert('超肥満です')}, 1);
    visi.style.display = 'none';
    janvisi.style.display = 'flex';
    advice.innerHTML = '毎日運動と食事制限をするようにしましょう!';
  } else {
    setTimeout(function(){window.alert('限度を超えた肥満です')}, 1);
    visi.style.display = 'none';
    janvisi.style.display = 'flex';
    advice.innerHTML = 'いきなりの運動は命に危険を及ぼします。医師と相談し正しいダイエットをしましょう!';
  }
}
// if文でnullの場合はalert表示

let nameText = document.getElementById('sinchou');
let msg = document.getElementById('msg');

let checkButton = document.getElementById('btn');
checkButton.addEventListener('click', buttonClick);

$('.gu').on('click', function() {
  var random = Math.floor(Math.random() * 3 + 1);
  if(random === 1) {
      // console.log("gu")
      $(".cpu-gu").css("background-color", "pink");
      $(".cpu-choki").css("background-color", "gray");
      $(".cpu-pa").css("background-color", "gray");
      $("p").html("あいこです。もう1度どうぞ");
      // $("h3").html("あなたの勝ちです")
    } else if (random === 2) {
      $(".cpu-choki").css("background-color", "pink");
      $(".cpu-gu").css("background-color", "gray");
      $(".cpu-pa").css("background-color", "gray");
      $("p").html("定期的な運動とわずかな食事制限を心がけましょう。")
    } else if (random === 3) {
      $(".cpu-pa").css("background-color", "pink");
      $(".cpu-gu").css("background-color", "gray");
      $(".cpu-choki").css("background-color", "gray");
      $("p").html("残念。あなたの負けです。")
    }
  });

  $(".choki").on("click", function() {
    var random = Math.floor(Math.random() * 3 + 1);
    console.log(random, 'ランダムな数字の箱');
  
    // ここからユーザーがグーチョキパーを選んだ時にCPUの処理
    if (random === 1) {
      // console.log("gu")
      $(".cpu-gu").css("background-color", "pink");
      $(".cpu-choki").css("background-color", "gray");
      $(".cpu-pa").css("background-color", "gray");
      $("p").html("残念。あなたの負けです。")
      // $("h3").html("あなたの勝ちです")
    } else if (random === 2) {
      $(".cpu-choki").css("background-color", "pink");
      $(".cpu-gu").css("background-color", "gray");
      $(".cpu-pa").css("background-color", "gray");
      $("p").html("あいこです。もう1度どうぞ")
    } else if (random === 3) {
      $(".cpu-pa").css("background-color", "pink");
      $(".cpu-gu").css("background-color", "gray");
      $(".cpu-choki").css("background-color", "gray");
      $("p").html("定期的な運動とわずかな食事制限を心がけましょう。")
    }
  });

  $(".pa").on("click", function() {
    var random = Math.floor(Math.random() * 3 + 1);
    console.log(random, 'ランダムな数字の箱');
  
    // ここからユーザーがグーチョキパーを選んだ時にCPUの処理
    if (random === 1) {
      // console.log("gu")
      $(".cpu-gu").css("background-color", "pink");
      $(".cpu-choki").css("background-color", "gray");
      $(".cpu-pa").css("background-color", "gray");
      $("p").html("定期的な運動とわずかな食事制限を心がけましょう。")
      // $("h3").html("あなたの勝ちです")
    } else if (random === 2) {
      $(".cpu-choki").css("background-color", "pink");
      $(".cpu-gu").css("background-color", "gray");
      $(".cpu-pa").css("background-color", "gray");
      $("p").html("残念。あなたの負けです。")
    } else if (random === 3) {
      $(".cpu-pa").css("background-color", "pink");
      $(".cpu-gu").css("background-color", "gray");
      $(".cpu-choki").css("background-color", "gray");
      $("p").html("あいこです。もう1度どうぞ")
    }
  });