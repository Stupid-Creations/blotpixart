// check out the workshop tab to get started
// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

const width = 125;
const height = 125;

setDocDimensions(width, height);
let pixels = [".....11........",
              "....1111.22....",
              "...111111212...",
              "...111111222...",
              "..111111122....",
              "...22..22......",
              "...22..22......",
              "..............."]

const makePixel = (x, y, brightness,size) => {
  let square = [[x,y],[x+size,y],[x+size,y+size],[x,y+size],[x,y]];
  let lines = [];
  let xs = [];
  let ys = [];
  let segments = Math.round(brightness/5);
  for(let i = 0; i < segments+1;i+= Math.round(size/segments)){
    xs.push(x);
    ys.push(y+i);
    xs.push(x+i);
    ys.push(y);
    xs.push(x+size-i);
    ys.push(y+size);
    xs.push(x+size);
    ys.push(y+size-i);
  }

  for(let i = 0; i < xs.length/2; i+=2){
    lines.push([[xs[i],ys[i]],[xs[i+1],ys[i+1]]]);
  }
  return [square,lines];
}
  
// store final lines here
const finalLines = [];

// create a polyline
const polyline = [
  [30, 90],
  [100, 90],
  [100, 30],
  [30, 30],
  [30, 90]
];

console.log('f');
for(let i = 0; i < pixels.length; i++){
  for(let j = 0; j < pixels[i].length; j++){
    if(pixels[i][j] === "1"){
      drawLines(bt.rotate([makePixel(j*10,i*10,0,10)[0]]);
      drawLines(makePixel(j*10,i*10,100,10)[1]);
    }
        if(pixels[i][j] === "2"){
      drawLines([makePixel(j*10,i*10,0,10)[0]]);
    }
  }
}


