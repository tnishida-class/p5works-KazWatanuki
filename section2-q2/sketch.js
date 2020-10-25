// チェッカー
function setup() {
  createCanvas(200, 200);
  let width = 160;
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    if(i%2 != 0){
      for(let j = 0; j < 8; j++){
        if(j%2 == 0){
          console.log(i,j);
          fill(150,150,150);
          rect(i * size, j * size, size, size);
        }
      }
    }
    else{
      for(j=0;j<8;j++){
        if(j%2 != 0){
          console.log(i,j);
          fill(150,150,150);
          rect(i*size,j*size,size,size);
        }
      }
    }
  }

  for(let x=0;x<4;x++){
    for(let y=0;y<3;y++){
      fill(255,0,0);
      if(y%2 ==0){
        ellipse(size*(3/2+2*x),size*(y+1/2),size);
      }
      else{
        ellipse(size*(1/2+2*x),size*(y+1/2),size);
      }

    }
  }

  for(let x=0;x<4;x++){
    for(let y=5;y<8;y++){
      fill(0,0,0);
      if(y%2 ==0){
        ellipse(size*(3/2+2*x),size*(y+1/2),size);
      }
      else{
        ellipse(size*(1/2+2*x),size*(y+1/2),size);
      }

    }
  }

}
