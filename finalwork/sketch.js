// 最終課題を制作しよう
//私は、神戸大学で統計学を勉強している。
//そのため、複数個のデータの最大値、最小値、平均、標準偏差、中央値を求めるプログラムを作る。


// テキスト「配列」～「配列を使った描画」までを収録
function setup(){
  createCanvas(400, 400);
  background(240);

  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }
  text("平均値は"+floor(average(scores)),10,20);
  text("最大値は"+floor(largest(scores)),10,40);
  text("最小値は"+floor(smallest(scores)),10,60);
  text("標準偏差値は"+floor(stddev(scores)),10,80);
  text("中央値は"+floor(median(scores)),10,100);
  console.log(scores);
  barchart(scores);
}

// テキスト「配列と繰り返し」
function sum(arr){
  let n = 0;
  for(let i = 0; i < arr.length; i++){ n += arr[i]; }
  return n;
}

//　テキスト「配列と繰り返し」練習問題
function average(arr){
  return sum(arr)/arr.length;
}

function largest(arr){
  let max = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i]>max){
      max=arr[i];
    }
  }
  return max;
}

function smallest(arr){
  let min = 100;
  for(let i = 0; i < arr.length; i++){
    if(arr[i]<min){
      min=arr[i];
    }
  }
  return min;
}

function stddev(arr){
 let a = average(arr);
 let n = 0;
 for(let i = 0; i<arr.length; i++){
   n += (arr[i]-a)* (arr[i]-a);
 }
 return sqrt(n/arr.length);
}

function median(arr){
  arr.sort();
  return arr[floor(arr.length/2)];
}

// テキスト「配列を使った描画」棒グラフ
function barchart(scores){
  scaleY(10);
  const l = largest(scores);
  const sm = smallest(scores);
  const a = average(scores);
  const st = stddev(scores);
  const m = median(scores);

  noStroke();

  for(let i = 0; i < scores.length; i++){
    const dx = width / scores.length;
    const h = height * scores[i] / 100;
    if(scores[i]==l){
      fill(255,69,0);
    }
    else if(scores[i]==sm){
      fill(65,105,255);
    }
    else if(scores[i]==m){
      fill(0,250,154);
    }
    rect(i * dx + 2, height - h, dx - 4, h);
    fill(0);
    text(scores[i].toPrecision(3), i * dx, height - h);
  }

  stroke(0,0,128);
  line(0,height - height*a/100,width,height - height*a/100);
  // BLANK[6] (hint: 平均点の線を引きます)
}

function scaleY(n){
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }
}

function scaleX(n){
  for(let i = 0; i < n; i++){ line(width * i / n, 0, width * i / n, height); }
}
