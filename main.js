(function(){
  'use strict';

  var btn = document.getElementById('btn');
  var text = document.getElementById('try');

  btn.addEventListener('click', function(){
    var n = Math.random()
    if(n < 0.1){
      text.textContent = 'タイ料理ランチ：辛いのは苦手';
    }else if (n < 0.2){
      text.textContent = 'お洒落カフェでホっと一息';
    }else if (n < 0.25){
      text.textContent = '朝活：カフェ or いずきゃん';
    }else if (n < 0.35){
      text.textContent = '贅沢しゃぶしゃぶランチ';
    }else if (n < 0.45){
      text.textContent = 'ハンバーガーとビール：私は飲むぞ';
    }else if (n < 0.5){
      text.textContent = '109で大とろ牛乳：4/7まで！';
    }else if (n < 0.6){
      text.textContent = '立ち食い焼肉むしゃむしゃ';
    }else if (n < 0.7){
      text.textContent = 'はちみつなお店でランチ';
    }else if (n < 0.75){
      text.textContent = '少人数でボドゲ';
    }else if (n < 0.8){
      text.textContent = '渋谷のプラネタリウム＋お茶';
    }else if (n < 0.85){
      text.textContent = 'オンライン飲み会：家でテレビ電話しながら飲んでみる';
    }else if (n < 0.9){
      text.textContent = 'ペア読書：感想とか話し合うやつ';
    }else{
      text.textContent = '立ち食い寿司屋さん';
    }

  });
  btn.addEventListener('mousedown', function(){
    this.className = 'pushed';
  });
  btn.addEventListener('mouseup', function(){
    this.className = '';
  });
})();
