// Now we are going to use "instance mode" to create multiple separate drawings in one program
// First, we attach all global variables to one object - this will simplify our code visually
var globals = {};
// Print dimensions - good to keep ratios as variables throughout!
globals.cardH = 400;
globals.cardW = Math.round(globals.cardH*1.636); // maintains aspect ratio throughout

// additional bleed and padding %
// use native JavaScript object Math to round - can't have decimals for pixels
globals.bleedPadW = Math.round(globals.cardW*0.05);
globals.bleedPadH = Math.round(globals.cardH*0.05);

// dimensions for bleed area
globals.bleedXmin = 0;
globals.bleedXmax = globals.cardW + globals.bleedPadW;
globals.bleedYmin = 0;
globals.bleedYmax = globals.cardH + globals.bleedPadH;

// dims for centered card area
globals.cardXmin = 0 + globals.bleedPadW * 0.5;
globals.cardXmax = globals.cardW;
globals.cardYmin = 0 + (globals.bleedPadH * 0.5);
globals.cardYmax = globals.cardH;

// dims for centered padding area
globals.padXmin = 0 + globals.bleedPadW;
globals.padXmax = globals.cardW - globals.bleedPadW;
globals.padYmin = 0 + globals.bleedPadH;
globals.padYmax = globals.cardH - globals.bleedPadH;

// here is the 
new p5(function(p) {
  "use strict";
 

 
  p.setup = function() {
	p.createCanvas(globals.cardW+globals.bleedPadW, globals.cardH+globals.bleedPadH); // width and height of my canvas
	p.stroke("#6EC8F5");
	p.rect(globals.bleedXmin, globals.bleedYmin, globals.bleedXmax-1, globals.bleedYmax-1); // minus one to make it visible inside canvas
	p.stroke("#9999ff");
	p.rect(globals.cardXmin, globals.cardYmin, globals.cardXmax, globals.cardYmax); // centered
	p.stroke("pink");
	p.rect(globals.padXmin, globals.padYmin, globals.padXmax, globals.padYmax); // centered
	p.background(15, 25, 255, 10);
	p.noStroke();

	// careful! see textSize is used by p5.js library, so don't name it as a var
	var fontSizeA = Math.round(globals.cardH/10);
	p.fill(55);
	p.textSize(fontSizeA);
	p.text("Shih Chien University", globals.padXmin+globals.bleedPadW, globals.padYmax*0.3)
	var fontSizeNorm = Math.round(globals.cardH/14); // maintain aspect ratio with text too
	p.fill(75);
	p.textSize(fontSizeNorm);
	p.text("Jasmine Kuo", globals.padXmin+globals.bleedPadW, globals.padYmax*0.55);
	p.fill(0, 102, 153); // note color values - try to improve with cymk-style colors
	p.text("ETP-BIB2C", globals.padXmin+globals.bleedPadW, (globals.padYmax*0.55)+fontSizeA);
	p.fill(0, 102, 153, 51); // note 4th value is alpha (transparency)
	p.text("P: 0987654321", globals.padXmin+globals.bleedPadW, (globals.padYmax*0.55)+(fontSizeA*2));
	p.fill(102, 0, 153, 51);
	p.text("E: jasminekuo1204@gmail.com", globals.padXmin+globals.bleedPadW, (globals.padYmax*0.55)+(fontSizeA*3));
	
	

	
}
 
}, "sketch01");


