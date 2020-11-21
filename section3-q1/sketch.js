// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("Hello!",20);
}

function balloon(t,x){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = x;
  fill(173,255,47);
  rect(0, 0, w + p * 2, h + p * 2);
  fill(173,255,47);
  triangle(p,h+p*2,p+w,h+p*2,(w+2*p)/2,2*h+2*p);
  fill(220,20,60);
  text(t, p, h + p);
}
