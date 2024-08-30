// check out the workshop tab to get started
// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

const width = 125;
const height = 125;

setDocDimensions(width, height);

const makePixel = (x, y, brightness,size) => {
  let square = [[x,y],[x+size,y],[x+size,y+size],[x,y+size],[x,y]];
  for(let i = 0;i < Math.round(brightness/10);i ++){
    let coord = i
    square.push([x,Math.min(coord+y,y+size*500)],[Math.min(coord+x,x+size*500),0+y]);
  }
  console.log("f");
    for(let i = Math.round(brightness/5);i > Math.round(brightness/10);i --){
    let coord = i;
    console.log(i);
    console.log([x+size-coord,y+size],[x+size,y-coord+size]);
    square.push([x+size-coord,y+size],[x+size,y-coord+size]);
  }


  return square;
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

// add the polyline to the final lines
// transform lines using the toolkit

// draw it
drawLines([makePixel(4,5,100,10)]);
