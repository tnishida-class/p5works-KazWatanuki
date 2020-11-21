// 小手調べ
function setup(){
  createCanvas(300,300);
  fill(0);
  let x=15;
  for(let i = 0; i < 10; i++){
    if(i<6){
      stroke(0,0,255);
      noFill();
      ellipse(100,100,x);
      x=x+15;
    }
    else{
      stroke(255,0,0);
      noFill();
      ellipse(100,100,x);
      x=x+15;
    }
  }
}
