// check out the workshop tab to get started
// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

const width = 125;
const height = 125;

setDocDimensions(width, height);
let pixels = [".XXXXXX.",
              ".XXXXXX.",
              ".XXXXXX.",
              ".XXXXXX.",
              "........"]

const makePixel = (x, y, brightness,size) => {
  let square = [[x,y],[x+size,y],[x+size,y+size],[x,y+size],[x,y]];
  for(let i = 0;i < Math.round(size);i += size/(brightness/2)){
    
    let coord = i
    square.push([x,Math.min(coord+y,size+y)],[coord+x,0+y]);
  }
  console.log("f");
  //   for(let i = Math.round(size);i > Math.round(brightness/size);i -= size/(brightness/5)){
  //   let coord = i;
  //   console.log(i);
  //   console.log([coord,y+size],[x+size,coord]);
  //   square.push([x,size-coord],[size-coord,0+y]);
  // }

  for(let i = 0;i < Math.round(size);i += size/(brightness/5)){
    if(Math.round(size/(brightness/5)<Math.round(size))){
    let coord = i
      console.log();
    square.push([Math.min((size+x)-coord,y+size),y+size],[y+size,Math.min((size+x)-coord,y+size)]);
    }
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

for(let i = 0; i < pixels.length; i++){
      console.log(i);
      console.log("heyy");
  for(let j = 0; j < pixels[i].length; j++){
    console.log("hey");
    if(pixels[i][j] === "."){
      drawLines([makePixel(j*5,i*5,0,10)]);
    }
  }
}
// add the polyline to the final lines
// transform lines using the toolkit

// draw i
//drawLines([makePixel(4,4,1,10)]);
