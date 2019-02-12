(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"TheSafe_atlas_", frames: [[3714,399,318,85],[1127,3701,1200,600],[1202,2899,1200,800],[3914,0,102,106],[2212,0,1500,1000],[0,1218,2000,1333],[2002,2044,1280,853],[0,3355,1125,750],[0,2553,1200,800],[3494,1601,401,401],[3714,0,198,198],[2212,1002,1280,1040],[4018,54,52,54],[4009,110,41,39],[3333,2541,595,497],[3333,3040,595,497],[2404,2899,927,929],[0,0,2210,1216],[4018,0,68,52],[3494,1002,597,597],[2329,3830,1131,629],[3714,200,197,197],[3914,108,50,37],[3284,2044,747,495],[3966,108,41,43]]}
];


// symbols:



(lib.addPointpngcopy = function() {
	this.spriteSheet = ss["TheSafe_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap16 = function() {
	this.spriteSheet = ss["TheSafe_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap19 = function() {
	this.spriteSheet = ss["TheSafe_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap54 = function() {
	this.spriteSheet = ss["TheSafe_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap55 = function() {
	this.spriteSheet = ss["TheSafe_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap57 = function() {
	this.spriteSheet = ss["TheSafe_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap58 = function() {
	this.spriteSheet = ss["TheSafe_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap59 = function() {
	this.spriteSheet = ss["TheSafe_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap60 = function() {
	this.spriteSheet = ss["TheSafe_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap61 = function() {
	this.spriteSheet = ss["TheSafe_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap62 = function() {
	this.spriteSheet = ss["TheSafe_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap65 = function() {
	this.spriteSheet = ss["TheSafe_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.clock = function() {
	this.spriteSheet = ss["TheSafe_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.clock_white = function() {
	this.spriteSheet = ss["TheSafe_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.diamond = function() {
	this.spriteSheet = ss["TheSafe_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.diamondpngcopy = function() {
	this.spriteSheet = ss["TheSafe_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.diamond1 = function() {
	this.spriteSheet = ss["TheSafe_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.door = function() {
	this.spriteSheet = ss["TheSafe_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.lock = function() {
	this.spriteSheet = ss["TheSafe_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.locker = function() {
	this.spriteSheet = ss["TheSafe_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.openSafe = function() {
	this.spriteSheet = ss["TheSafe_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.tamplet = function() {
	this.spriteSheet = ss["TheSafe_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.ulock_white = function() {
	this.spriteSheet = ss["TheSafe_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.whiteBox = function() {
	this.spriteSheet = ss["TheSafe_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.zoom = function() {
	this.spriteSheet = ss["TheSafe_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.window = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.whiteBox();
	this.instance.parent = this;
	this.instance.setTransform(-22,-71,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.window, new cjs.Rectangle(-22,-71,597.6,396), null);


(lib.twitter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap65();
	this.instance.parent = this;
	this.instance.setTransform(-8,-26,0.084,0.084);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.twitter, new cjs.Rectangle(-8,-26,108,87.8), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#6FFBFD","rgba(112,251,253,0.98)","rgba(113,251,253,0.922)","rgba(118,251,253,0.831)","rgba(129,252,253,0.702)","rgba(152,252,253,0.533)","rgba(187,253,254,0.329)","rgba(234,254,255,0.094)","rgba(255,255,255,0)"],[0,0.106,0.227,0.361,0.502,0.647,0.796,0.945,1],0,0,0,0,0,153).s().p("ApXV4QkUhzjVjSQjVjTh1kRQh5kaAAk1QAAk0B5kaQB1kSDVjSQDVjSEUhzQEeh4E5AAQE5AAEeB4QEVBzDVDSQDVDSB1ESQB5EaAAE0QAAE1h5EaQh1ERjVDTQjVDSkVBzQkeB4k5AAQk5AAkeh4g");
	this.shape.setTransform(305,301,1.98,1.98);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,609.9,602), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#60D8FB","#5AA8EF"],[0,1],0,0,0,0,0,148.1).s().p("A+dFAQgyAAgjgjQgjgkAAgxIAAmPQAAgyAjgjQAjgjAyAAMA87AAAQAxAAAkAjQAjAjAAAyIAAGPQAAAxgjAkQgkAjgxAAg");
	this.shape.setTransform(142.9,17.4,0.543,0.543);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(30.5,0,224.8,34.8), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.diamond();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,595,497), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.diamond1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,927,929), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.door();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,2210,1216), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.locker();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,149.3,149.3), null);


(lib.spain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap59();
	this.instance.parent = this;
	this.instance.setTransform(-7,-8,0.093,0.093);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.spain, new cjs.Rectangle(-7,-8,105.1,70.1), null);


(lib.snapchat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.instance = new lib.Bitmap54();
	this.instance.parent = this;
	this.instance.setTransform(-5,-29,0.982,0.937);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.snapchat, new cjs.Rectangle(-5,-29,100.2,99.3), null);


(lib.side_light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(13));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(230,230,230,0.698)"],[0,0.882],0,136,0,-136).s().p("AyvVQMAOYgqfIKJAAMAM+Aqfg");
	this.shape.setTransform(79,0,1,1,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(246,193,193,0.2)","rgba(238,90,88,0.557)","rgba(236,60,52,0.698)"],[0,0.243,0.686,0.882],0,136,0,-136).s().p("AyvVQMAOYgqfIKJAAMAM+Aqfg");
	this.shape_1.setTransform(79,0,1,1,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape}]},5).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},4).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57,-120,272,240);


(lib.other_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.other_btn_txt = new cjs.Text("", "15px 'Arial'");
	this.other_btn_txt.name = "other_btn_txt";
	this.other_btn_txt.textAlign = "center";
	this.other_btn_txt.lineHeight = 17;
	this.other_btn_txt.lineWidth = 103;
	this.other_btn_txt.parent = this;
	this.other_btn_txt.setTransform(1,-8.5,0.962,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#60D8FB","#5AA8EF"],[0,1],0,32,0,-32).s().p("A+dFAQgyAAgjgjQgjgkAAgxIAAmPQAAgyAjgjQAjgjAyAAMA87AAAQAxAAAkAjQAjAjAAAyIAAGPQAAAxgjAkQgkAjgxAAg");
	this.shape.setTransform(2,0,0.442,0.442);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.other_btn_txt}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.other_btn, new cjs.Rectangle(-89.5,-14.1,183,28.3), null);


(lib.zoom_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.zoom();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.zoom_1, new cjs.Rectangle(0,0,41,43), null);


(lib.unlock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.lock();
	this.instance.parent = this;

	this.instance_1 = new lib.ulock_white();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.328,1.328);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68,52);


(lib.italy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap55();
	this.instance.parent = this;
	this.instance.setTransform(-5,-14,0.069,0.069);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.italy, new cjs.Rectangle(-5,-14,102.8,68.6), null);


(lib.instagram = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap62();
	this.instance.parent = this;
	this.instance.setTransform(-7,-32,0.498,0.498);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.instagram, new cjs.Rectangle(-7,-32,98.7,98.7), null);


(lib.greece = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap58();
	this.instance.parent = this;
	this.instance.setTransform(-4,-15,0.082,0.082);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.greece, new cjs.Rectangle(-4,-15,104.5,69.7), null);


(lib.france = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap57();
	this.instance.parent = this;
	this.instance.setTransform(-5,-10,0.051,0.051);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.france, new cjs.Rectangle(-5,-10,102.7,68.4), null);


(lib.finalResult = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2).p("AgiAAIBFAA");
	this.shape.setTransform(-43.9,1.3,1.309,1.309);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2).p("AAAgnIAABP");
	this.shape_1.setTransform(-48.4,-2.6,1.309,1.309);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2).p("ABzAAQAAAwghAiQgiAhgwAAQgvAAgighQghgiAAgwQAAgvAhgiQAighAvAAQAwAAAiAhQAhAiAAAvg");
	this.shape_2.setTransform(-49,2,1.309,1.309);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGAmIAAggIgfAAIAAgMIAfAAIAAgfIANAAIAAAfIAfAAIAAAMIgfAAIAAAgg");
	this.shape_3.setTransform(100.1,2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAkA6IgNgjIgwAAIgMAjIgQAAIAshzIAQAAIAvBzgAgHgXIgNAhIAmAAIgLgfIgIgXQgCAKgEALg");
	this.shape_4.setTransform(90,2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(2).p("ABzAAQAAAwgiAhQghAigwAAQgvAAgigiQghghAAgwQAAgvAhgiQAighAvAAQAwAAAhAhQAiAiAAAvg");
	this.shape_5.setTransform(94.3,1.6,1.348,1.348);

	this.timeTXT = new cjs.Text("", "bold 15px 'Arial'", "#FFFFFF");
	this.timeTXT.name = "timeTXT";
	this.timeTXT.textAlign = "right";
	this.timeTXT.lineHeight = 19;
	this.timeTXT.lineWidth = 81;
	this.timeTXT.parent = this;
	this.timeTXT.setTransform(-78,-5.4);

	this.gradeTXT = new cjs.Text("", "bold 15px 'Arial'", "#FFFFFF");
	this.gradeTXT.name = "gradeTXT";
	this.gradeTXT.textAlign = "right";
	this.gradeTXT.lineHeight = 19;
	this.gradeTXT.lineWidth = 81;
	this.gradeTXT.parent = this;
	this.gradeTXT.setTransform(66.5,-7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.gradeTXT},{t:this.timeTXT},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.finalResult, new cjs.Rectangle(-160.7,-14.8,271.6,33), null);


(lib.facebook = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap61();
	this.instance.parent = this;
	this.instance.setTransform(-2,-26,0.226,0.226);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.facebook, new cjs.Rectangle(-2,-26,90.7,90.7), null);


(lib.Ethiopia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap60();
	this.instance.parent = this;
	this.instance.setTransform(-10,-16,0.095,0.095);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Ethiopia, new cjs.Rectangle(-10,-16,114.3,76.2), null);


(lib.an_ComboBox = function(options) {
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.code = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tamplet();
	this.instance.parent = this;
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.code, new cjs.Rectangle(-100,-100,197,197), null);


(lib.clock2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.clock();
	this.instance.parent = this;

	this.instance_1 = new lib.clock_white();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,1,1.244,1.346);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,54);


(lib.china = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap19();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.08,0.08);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.china, new cjs.Rectangle(0,0,96,64), null);


(lib.box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvYPZIAA+xIexAAIAAexg");
	this.shape.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.box, new cjs.Rectangle(-99.5,-99.5,197,197), null);


(lib.BlackScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.txt = new cjs.Text("", "20px 'Arial'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "right";
	this.txt.lineHeight = 26;
	this.txt.lineWidth = 659;
	this.txt.parent = this;
	this.txt.setTransform(329,-180.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhKzAt9MAAAhb5MCVnAAAMAAABb5g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.txt}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BlackScreen, new cjs.Rectangle(-478.7,-294,957.6,588.2), null);


(lib.australia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap16();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.08,0.08);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.australia, new cjs.Rectangle(0,0,96,48), null);


(lib.addPoint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.addPointpngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-97,-19,0.506,0.506);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.addPoint, new cjs.Rectangle(-97,-19,160.9,43), null);


(lib.prize = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.diamondpngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-301,-205,1.004,1.004);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(94));

	// FlashAICB
	this.instance_1 = new lib.Symbol14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1.5,1,1,0,0,0,304.9,301);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:305,scaleX:1.01,scaleY:1.01,x:0.1},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:-1.4},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:-1.5},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.06,scaleY:1.06,y:-1.4},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:-1.5},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.09,scaleY:1.09,y:-1.4},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.11,scaleY:1.11,y:-1.5},0).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:1.12,scaleY:1.12},0).wait(1).to({scaleX:1.13,scaleY:1.13,y:-1.4},0).wait(1).to({scaleX:1.14,scaleY:1.14},0).wait(1).to({scaleX:1.14,scaleY:1.14,y:-1.5},0).wait(1).to({scaleX:1.15,scaleY:1.15},0).wait(1).to({scaleX:1.16,scaleY:1.16,y:-1.4},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.17,scaleY:1.17,y:-1.5},0).wait(1).to({scaleX:1.18,scaleY:1.18},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.2,scaleY:1.2,y:-1.4},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({scaleX:1.21,scaleY:1.21,y:-1.5},0).wait(1).to({scaleX:1.22,scaleY:1.22},0).wait(1).to({scaleX:1.23,scaleY:1.23},0).wait(1).to({scaleX:1.23,scaleY:1.23,y:-1.4},0).wait(1).to({scaleX:1.24,scaleY:1.24},0).wait(1).to({scaleX:1.25,scaleY:1.25,y:-1.5},0).wait(1).to({scaleX:1.25,scaleY:1.25},0).wait(1).to({scaleX:1.26,scaleY:1.26,y:-1.4},0).wait(1).to({scaleX:1.27,scaleY:1.27},0).wait(1).to({scaleX:1.28,scaleY:1.28,y:-1.5},0).wait(1).to({scaleX:1.29,scaleY:1.29},0).wait(1).to({scaleX:1.29,scaleY:1.29},0).wait(1).to({scaleX:1.3,scaleY:1.3,y:-1.4},0).wait(1).to({scaleX:1.31,scaleY:1.31},0).wait(1).to({scaleX:1.32,scaleY:1.32,y:-1.5},0).wait(1).to({scaleX:1.32,scaleY:1.32},0).wait(1).to({scaleX:1.33,scaleY:1.33,y:-1.4},0).wait(1).to({scaleX:1.34,scaleY:1.34},0).wait(1).to({scaleX:1.35,scaleY:1.35,y:-1.5},0).wait(1).to({regX:304.9,regY:300.9,x:0,y:-1.6},0).wait(1).to({regX:305,regY:301,scaleX:1.34,scaleY:1.34,x:0.1,y:-1.4},0).wait(1).to({scaleX:1.33,scaleY:1.33},0).wait(1).to({scaleX:1.32,scaleY:1.32},0).wait(1).to({scaleX:1.32,scaleY:1.32},0).wait(1).to({scaleX:1.31,scaleY:1.31},0).wait(1).to({scaleX:1.3,scaleY:1.3},0).wait(1).to({scaleX:1.29,scaleY:1.29},0).wait(1).to({scaleX:1.29,scaleY:1.29},0).wait(1).to({scaleX:1.28,scaleY:1.28},0).wait(1).to({scaleX:1.27,scaleY:1.27},0).wait(1).to({scaleX:1.26,scaleY:1.26},0).wait(1).to({scaleX:1.25,scaleY:1.25},0).wait(1).to({scaleX:1.25,scaleY:1.25},0).wait(1).to({scaleX:1.24,scaleY:1.24},0).wait(1).to({scaleX:1.23,scaleY:1.23},0).wait(1).to({scaleX:1.23,scaleY:1.23},0).wait(1).to({scaleX:1.22,scaleY:1.22},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.18,scaleY:1.18},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.16,scaleY:1.16},0).wait(1).to({scaleX:1.15,scaleY:1.15},0).wait(1).to({scaleX:1.14,scaleY:1.14},0).wait(1).to({scaleX:1.14,scaleY:1.14},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({scaleX:1.12,scaleY:1.12},0).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.09,scaleY:1.09},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-304.9,-302.5,609.9,602);


(lib.playbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.text = new cjs.Text("התחל לשחק", "bold 64px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 74;
	this.text.lineWidth = 880;
	this.text.parent = this;
	this.text.setTransform(7.1,-4.9,0.323,0.323);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(56));

	// FlashAICB
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(5.5,9.7,1,1,0,0,0,142.8,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:142.9,regY:17.4,x:5.6,y:7.2,alpha:0.985},0).wait(1).to({alpha:0.97},0).wait(1).to({alpha:0.954},0).wait(1).to({alpha:0.939},0).wait(1).to({alpha:0.924},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:0.893},0).wait(1).to({alpha:0.878},0).wait(1).to({alpha:0.863},0).wait(1).to({alpha:0.848},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.817},0).wait(1).to({alpha:0.802},0).wait(1).to({alpha:0.787},0).wait(1).to({alpha:0.772},0).wait(1).to({alpha:0.757},0).wait(1).to({alpha:0.741},0).wait(1).to({alpha:0.726},0).wait(1).to({alpha:0.711},0).wait(1).to({alpha:0.696},0).wait(1).to({alpha:0.68},0).wait(1).to({alpha:0.665},0).wait(1).to({alpha:0.65},0).wait(1).to({regX:142.8,regY:19.9,x:5.5,y:9.7,alpha:0.648},0).wait(1).to({regX:142.9,regY:17.4,x:5.6,y:7.2,alpha:0.661},0).wait(1).to({alpha:0.673},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.695},0).wait(1).to({alpha:0.706},0).wait(1).to({alpha:0.718},0).wait(1).to({alpha:0.729},0).wait(1).to({alpha:0.74},0).wait(1).to({alpha:0.752},0).wait(1).to({alpha:0.763},0).wait(1).to({alpha:0.774},0).wait(1).to({alpha:0.785},0).wait(1).to({alpha:0.797},0).wait(1).to({alpha:0.808},0).wait(1).to({alpha:0.819},0).wait(1).to({alpha:0.831},0).wait(1).to({alpha:0.842},0).wait(1).to({alpha:0.853},0).wait(1).to({alpha:0.865},0).wait(1).to({alpha:0.876},0).wait(1).to({alpha:0.887},0).wait(1).to({alpha:0.898},0).wait(1).to({alpha:0.91},0).wait(1).to({alpha:0.921},0).wait(1).to({alpha:0.932},0).wait(1).to({alpha:0.944},0).wait(1).to({alpha:0.955},0).wait(1).to({alpha:0.966},0).wait(1).to({alpha:0.977},0).wait(1).to({alpha:0.989},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.7,-10.2,285.7,40.7);


(lib.locker_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24));

	// Layer_1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(89.6,89.6,1,1,0,0,0,74.6,74.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:11.3},0).wait(1).to({rotation:22.6,y:89.7},0).wait(1).to({rotation:33.9,y:89.6},0).wait(1).to({rotation:45.2,y:89.7},0).wait(1).to({rotation:56.5,y:89.6},0).wait(1).to({rotation:67.8,y:89.7},0).wait(1).to({rotation:79.1,y:89.6},0).wait(1).to({rotation:90.4},0).wait(1).to({rotation:101.7},0).wait(1).to({rotation:113},0).wait(1).to({rotation:124.3},0).wait(1).to({rotation:135.7},0).wait(1).to({rotation:147},0).wait(1).to({rotation:158.3},0).wait(1).to({rotation:169.6},0).wait(1).to({rotation:180.9},0).wait(1).to({rotation:192.2},0).wait(1).to({rotation:203.5},0).wait(1).to({rotation:214.8},0).wait(1).to({rotation:226.1},0).wait(1).to({rotation:237.4},0).wait(1).to({rotation:248.7},0).wait(1).to({rotation:260},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,15,149.3,149.3);


(lib.forcomb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.startPlayingTXT = new cjs.Text("התחל לשחק", "8px 'Arial'", "#666666");
	this.startPlayingTXT.name = "startPlayingTXT";
	this.startPlayingTXT.textAlign = "center";
	this.startPlayingTXT.lineHeight = 9;
	this.startPlayingTXT.lineWidth = 36;
	this.startPlayingTXT.parent = this;
	this.startPlayingTXT.setTransform(45.5,84);

	this.startbtn = new lib.locker_btn();
	this.startbtn.name = "startbtn";
	this.startbtn.parent = this;
	this.startbtn.setTransform(45.2,93.4,0.732,0.732,0,0,0,89.1,90);

	this.text = new cjs.Text("שלום סוכן, בחר משימה", "12px 'Arial'", "#CCCCCC");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 205;
	this.text.parent = this;
	this.text.setTransform(45.5,-26.1);

	this.text_1 = new cjs.Text("הכספת", "bold 40px 'Arial'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 45;
	this.text_1.lineWidth = 391;
	this.text_1.parent = this;
	this.text_1.setTransform(45.5,-69.2);

	this.mycb = new lib.an_ComboBox({'id': 'mycb', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 3, בחר נושא, 0, המצאות, 1, אירועים, 2', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.mycb.setTransform(45.5,7,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mycb},{t:this.text_1},{t:this.text},{t:this.startbtn},{t:this.startPlayingTXT}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.forcomb, new cjs.Rectangle(-152.2,-71.2,395.5,219), null);


(lib.door_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(2));

	// Layer_1
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(1059.3,4,1,1,0,0,0,2169.3,608);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({regX:1105,scaleX:0.87,skewY:1,x:134.3,y:-12.7},0).wait(1).to({scaleX:0.74,skewY:2.1,x:273.8,y:-24.4},0).wait(1).to({scaleX:0.61,skewY:3.1,x:413.5,y:-31.1},0).wait(1).to({scaleX:0.48,skewY:4.2,x:552.9,y:-32.7},0).wait(1).to({scaleX:0.35,skewY:5.2,x:692.2,y:-29.3},0).wait(1).to({scaleX:0.22,skewY:6.2,x:831.2,y:-20.8},0).wait(1).to({scaleX:0.09,skewY:7.3,x:969.8,y:-7.4},0).wait(1).to({scaleX:0.05,skewY:-171.7,x:1107.7,y:11.1},0).wait(1).to({scaleX:0.18,skewY:-170.7,x:1244.9,y:34.6},0).wait(1).to({scaleX:0.31,skewY:-169.6,x:1381.2,y:63},0).wait(1).to({scaleX:0.44,skewY:-168.6,x:1516.4,y:96.4},0).wait(1).to({scaleX:0.57,skewY:-167.5,x:1650.6,y:134.7},0).wait(1).to({scaleX:0.7,skewY:-166.5,x:1783.4,y:177.8},0).wait(1).to({scaleX:0.83,skewY:-165.5,x:1914.8,y:225.8},0).wait(14).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1110,-604,2210,1216);


(lib.diamond2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(226.5,65.8,1,1,0,0,0,297.5,248.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48));

	// Layer_2
	this.instance_1 = new lib.Symbol7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(238.5,16.5,1,1,0,0,0,463.5,464.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:238.6},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:238.5},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:238.6,y:16.6},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:238.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:238.6,y:16.5},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:238.5},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:238.6},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:238.5,y:16.6},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:238.6},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:238.5},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:238.6,y:16.5},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:238.5},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:238.6},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:238.5,y:16.6},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:238.6},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:238.5,y:16.5},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:238.6},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:238.5},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:238.6},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:238.5,y:16.6},0).wait(1).to({scaleX:0.67,scaleY:0.67},0).wait(1).to({scaleX:0.65,scaleY:0.65,y:16.5},0).wait(1).to({regX:463.4},0).wait(1).to({regX:463.5,scaleX:0.67,scaleY:0.67,x:238.6,y:16.6},0).wait(1).to({scaleX:0.68,scaleY:0.68},0).wait(1).to({scaleX:0.7,scaleY:0.7,y:16.5},0).wait(1).to({scaleX:0.71,scaleY:0.71},0).wait(1).to({scaleX:0.73,scaleY:0.73},0).wait(1).to({scaleX:0.74,scaleY:0.74,y:16.6},0).wait(1).to({scaleX:0.76,scaleY:0.76},0).wait(1).to({scaleX:0.77,scaleY:0.77},0).wait(1).to({scaleX:0.79,scaleY:0.79,y:16.5},0).wait(1).to({scaleX:0.8,scaleY:0.8},0).wait(1).to({scaleX:0.82,scaleY:0.82},0).wait(1).to({scaleX:0.83,scaleY:0.83,y:16.6},0).wait(1).to({scaleX:0.85,scaleY:0.85},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:16.5},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:16.6},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.96,scaleY:0.96,y:16.5},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1,y:16.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225,-448,927,929);


(lib.diamond_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.diamond2();
	this.instance.parent = this;
	this.instance.setTransform(1,1.1,1,1,0,0,0,238.5,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.diamond_1, new cjs.Rectangle(-462.5,-463.4,927,929), null);


// stage content:
(lib.TheSafe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		var stageH = parseInt(canvas.style.height); //גובה במה
		var stageW = parseInt(canvas.style.width); //רוחב במה
		var current = []; //מערך לסידור המסיחים
		var Qlength = 0; //כמות מסיחים נוכחית
		var Completed = 0; //שאלות שהושלמו
		var setCLOCK = ""; //שם לאינטרוול שמודד זמן
		var clockSUM = 0; //סהכ זמן
		var clocking = 0; //זמן שאלה נוכחי
		var qnum = 0; //משתנה מספר השאלה
		var Qamount = 0; //משתנה לשמירת כמות השאלות
		var gameNum = 0; //משתנה למספר משחק
		var mychoice = 0; //משתנה לקומבו בוקס
		var finalScore = 0; //ניקוד סופי
		var scoreforQ = 0; //ניקוד לשאלה
		//לצורך הפעלת הגרירה
		stage.enableMouseOver(24);
		//הפעלת ההכתבה במסכי הפתיחה והמשוב המסכם
		var summeryINTERVAL = " "; //אינטרוול לאנימציית סיום
		var openINTERVAL = ""; //אינטרוול לאנימציית םתיחה
		//משתנים לשימוש באנימציית הפתיחה והסיום
		var say;
		var say2;
		var i;
		var j;
		var questions = []; //הגדרת המערך
		var instruction = "גרור אל המקום המתאים בקוד, בסיום לחץ בדוק";
		
		var forcombo;
		
		gameManu();
		
		function gameManu() {
			if (Completed > 1) {
		
				stage.removeChild(stage.getChildByName("newGame"));
				stage.removeChild(stage.getChildByName("restart"));
				stage.removeChild(stage.getChildByName("result"));
				clearInterval(summeryINTERVAL);
				self.black.visible = false; //במידה ומתחילים משחק חדש-מעלים מסך מסכם
			}
			self.door_mc.gotoAndPlay(0); //מאפס אנימציית דלת
		
			//הוספת הקומבו לבמה
			forcombo = new lib.forcomb();
			forcombo.x = 420;
			forcombo.y = 200;
			forcombo.name = "forcombo";
			forcombo.scaleX = 1.5;
			forcombo.scaleY = 1.5;
			stage.addChild(forcombo);
			forcombo.startbtn.alpha = 0.3;
		
			//מאזין לשינוי ערכים בקומבו
			$("#dom_overlay_container").on("change", "#mycb", cb_change);
		}
		
		
		
		//בעת שינוי ערך בקומבו
		function cb_change(evt) {
			//forcombo=stage.getChildByName("forcombo")
			//שימרת הערך שנבחר בקומבו
			console.log(evt.currentTarget.value);
			mychoice = evt.currentTarget.value;
			//אם נבחר הערך הראשון - "בחר נושא
			if (mychoice == 0) {
				//ניטרול כפתור "בחר
				forcombo.startbtn.alpha = 0.3;
				forcombo.startPlayingTXT.color = "#666666";
				forcombo.startbtn.removeEventListener("click", StartAnimation);
			} //משחק ראשון
			if (mychoice == 1) {
				gameNum = 0;
				forcombo.startbtn.alpha = 1;
				forcombo.startPlayingTXT.color = "#FFFFFF";
		
				forcombo.startbtn.addEventListener("click", StartAnimation);
			} //משחק שני
			if (mychoice == 2) {
				gameNum = 1;
				forcombo.startbtn.alpha = 1;
				forcombo.startPlayingTXT.color = "#FFFFFF";
				forcombo.startbtn.addEventListener("click", StartAnimation);
			}
		}
		
		
		
		//אנימציית פתיחה
		function StartAnimation() {
			stage.removeChild(forcombo);
			i = 0;
			//	say = " _,שלום סוכן\n \n_משימתך לפרוץ את כל הכספות \n _סדר את האפשרויות בסדר הנכון בקוד\n \n _השתמש בעכבר כדי לגרור את התשובות הנכונות על מנת שתוכל לפרוץ את הכספת\n \n_בלחיצה על ״התחל לשחק״. הודעה זו תשמיד את עצמה  "
			say = " _,שלום סוכן\n \n_משימתך לפרוץ את כל הכספות \n _סדר את האפשרויות בסדר הנכון בקוד\n \n _השתמש בעכבר כדי לגרור את התשובות \n \n_בלחיצה על ״התחל לשחק״ הודעה זו תשמיד את עצמה  "
			self.black.visible = true;
			openINTERVAL = setInterval(firstTypingEffect, 50);
			self.black.txt.text = say[0];
			firstTypingEffect();
		}
		
		function firstTypingEffect() {
			self.black.txt.text += say[i];
			i++;
		
			if (i == say.length - 1) {
				//יצירת כפתור התחל לשחק
				var playbtn = new lib.playbtn;
				playbtn.y = 400;
				playbtn.x = 460;
				playbtn.name = "playbtn";
				stage.addChild(playbtn);
				playbtn.addEventListener("click", launch);
			}
			if (i == say.length) {
				clearInterval(openINTERVAL);
			}
		
		}
		
		
		//פונקציה שמציגה אלמנטים סטטיים למסך, כמו כותרת שאלה שעון ניקוד וכו
		function launch() {
			self.black.visible = false; //במידה ומתחילים משחק חדש-מעלים מסך מסכם
			if (Completed > 1) {
				stage.removeChild(stage.getChildByName("newGame"));
				stage.removeChild(stage.getChildByName("restart"));
				stage.removeChild(stage.getChildByName("result"));
				clearInterval(summeryINTERVAL);
		
				Completed = 0;
				clockSUM = 0;
		
			}
		
			//scoreforQ=(100/totalLength);
			questions = [
				[
					[
						//                                             ימין  
						[false, "סדר את הפריטים לפי סדר המצאתם", 40, "ראשון", "אחרון", 20],
						[
							["image", lib.snapchat, 0],
							["image", lib.instagram, 0],
							["image", lib.twitter, 0],
							["image", lib.facebook, 0] //אופציה ראשונה מימין
						]
					],
					[
						[false, "סדר את הפריטים לפי סדר המצאתם", 40, "ראשון", "אחרון", 20],
						[
							["text", "מחשב נייח", 0],
							["text", "טלפון", 0],
							["text", "רדיו", 0],
							["text", "מצלמה", 0]
						]
					],
					[
						[false, "סדר את הפריטים לפי סדר המצאתם", 40, "ראשון", "אחרון", 20],
						[
							["text", "טלפון חכם", 0],
							["text", "מחשב נייד", 0],
							["text", "אינטרנט", 0],
							["text", "טלפון נייד", 0]
						]
					],
					[
						[false, "סדר את המשקאות לפי סדר המצאתם", 60, "ראשון", "אחרון", 20],
						[
							["text", "פאנטה", 0],
							["text", "בירה שחורה", 0],
							["text", "ספרייט", 0],
							["text", "קוקה-קולה", 0],
							["text", "בירה לבנה", 0],
							["text", "יין אדום", 0]
		
						]
					],
					[
						[false, "סדר את ענפי הספורט לפי סדר המצאתם", 40, "עתיק", "חדש", 20],
						[
							["text", "כדורסל", 0],
							["text", "פוטבול", 0],
							["text", "טניס", 0],
							["text", "כדורגל", 0]
						]
					]
		
		
				], //סוף משחקון ראשון
				[
					[
						[false, "סדר את המלחמות לפי סדר התרחשותן", 40, "ראשונה", "אחרונה", 20],
						[
							["text", "מלחמת יום כיפור", 0],
							["text", "מלחמת ששת הימים", 0],
							["text", "מבצע קדש", 0],
							["text", "מלחמת העצמאות", 0]
		
						]
					],
					[
						[false, "סדר את החודשים לפי סדר התרחשותם ", 50, "ראשון", "אחרון", 20],
						[
							["text", "אלול", 0],
							["text", "תמוז", 0],
							["text", "ניסן", 0],
							["text", "שבט", 0],
							["text", "כסלו", 0]
						]
					],
					[
						[false, "סדר את המדינות לפי גודלן ", 50, "קטנה", "גדולה", 20],
						[
							["image", lib.Ethiopia, 0],
							["image", lib.france, 0],
							["image", lib.spain, 0],
							["image", lib.italy, 0],
							["image", lib.greece, 0]
						]
					],
					[
						[false, "?איזו אולימפידה התרחשה קודם  ", 40, "מוקדמת", "מאוחרת", 20],
						[
							["text", "מוסקבה", 0],
							["text", "מינכן", 0],
							["text", "רומא", 0],
							["text", "לונדון", 0],
							["text", "יוון", 0]
						]
					],
					[
						[false, "סדר את השמות על פי סדר זכייתם באולימפידה", 40, "ראשון", "אחרון", 20],
						[
							["text", "ירדן ג'רבי", 0],
							["text", "אריק זאבי", 0],
							["text", "גל פרידמן", 0],
							["text", "יעל ארד", 0]
						]
					]
				]
		
		
		
			];
			Qamount = questions[gameNum].length;
		
		
			stage.removeChild(stage.getChildByName("playbtn"));
			//כפתור
			var locker = new lib.locker_btn;
			locker.y = 260;
			locker.x = 380;
			locker.alpha = 0.2;
			stage.addChild(locker);
			locker.name = "locker";
		
		
			var check_txt = new createjs.Text();
			check_txt.color = "white";
			check_txt.font = "14px Arial";
			check_txt.x = 90;
			check_txt.y = 80;
			check_txt.textAlign = "center";
			check_txt.name = "check_txt";
			check_txt.text = "בדוק";
			locker.addChild(check_txt);
		
		
			// כותרת שאלה
			var questionTiltle = new createjs.Text();
			questionTiltle.name = "questionTiltle";
			questionTiltle.color = "black";
			questionTiltle.font = "23px Arial";
			questionTiltle.textAlign = "center";
			questionTiltle.x = 500;
			questionTiltle.y = 75;
			stage.addChild(questionTiltle);
			//הוראה, ניקוד משוב
			var messageTiltle = new createjs.Text();
			messageTiltle.color = "grey";
			messageTiltle.font = "16px Arial";
			messageTiltle.x = 500;
			messageTiltle.y = 105;
			messageTiltle.textAlign = "center";
			messageTiltle.name = "messageTiltle";
			stage.addChild(messageTiltle);
			//סמל פתיחת כספות
			var unlock = new lib.unlock;
			stage.addChild(unlock);
			unlock.x = 750;
			unlock.y = 65;
			unlock.name = "unlock";
			unlock.scaleX = 0.5;
			unlock.scaleY = 0.5;
			//סמל שעון
			var clock = new lib.clock2;
			stage.addChild(clock);
			clock.x = 800;
			clock.y = 65;
			clock.scaleX = 0.5;
			clock.scaleY = 0.5;
			clock.name = "clock";
		
			//תצוגה של מספר תיחת כספות מתוך מספר הכספות הכולל
			var unlocked = new createjs.Text();
			unlocked.name = "unlocked";
			unlocked.font = "14px Arial";
			unlocked.x = 760;
			unlocked.y = 95;
			unlocked.text = Completed.toString() + "/" + Qamount;
			stage.addChild(unlocked);
			//תצוגת שעון
			var clockTEXT = new createjs.Text();
			clockTEXT.name = "clockTEXT";
			clockTEXT.font = "14px Arial";
			clockTEXT.textAlign = "center";
			clockTEXT.x = 814;
			clockTEXT.y = 95;
			stage.addChild(clockTEXT);
			//טווח עליון טווח תחתון
			var small = new createjs.Text();
			small.font = "14px Arial ";
			small.name = "small";
			stage.addChild(small);
		
		
			var big = new createjs.Text();
			big.font = "14px Arial ";
			big.name = "big";
			stage.addChild(big);
		
			//הפעלת הצגת שאלה 
			newQuestion();
		}
		
		function newQuestion() {
			///console.log(questions[gameNum][qnum][0][5]);
		
			//עצירת כל האנימציות
			self.lights.gotoAndStop(0);
			self.lights2.gotoAndStop(0);
			self.lights3.gotoAndStop(0);
			self.lights4.gotoAndStop(0);
			self.door_mc.gotoAndStop(0);
		
		
			stage.getChildByName("locker").gotoAndStop(1);
			qnum = Math.floor(Math.random() * (questions[gameNum].length - 1));
			console.log(qnum, "שאלה מספר");
			console.log(Completed, "ניקוד");
			console.log(questions.length, "אורך המערך");
			console.log(questions[gameNum][qnum][0][2], "שניות לשאלה");
			console.log(questions[gameNum][qnum][0][1], "כותרת");
		
		
			// לקוח שניות קבועות מהשאלה
			clocking = questions[gameNum][qnum][0][2];
			//מפעיל ספירת זמן באינטרוול
			setCLOCK = setInterval(TimeCount, 1000);
			//תצוגת השעון בשנייה הראשונה, בגלל שהאינטרוול מראה רק מהשנייה השנייה שירדה
			stage.getChildByName("clockTEXT").text = clocking;
		
			Qlength = (questions[gameNum][qnum][1]).length;
			// יצירת כפתור מנעול
			stage.getChildByName("questionTiltle").text = questions[gameNum][qnum][0][1];
			stage.getChildByName("messageTiltle").text = instruction;
			stage.getChildByName("messageTiltle").color = "grey";
			stage.getChildByName("locker").getChildByName("check_txt").text = "בדוק";
		
			//יצירת מקומות הקוד
			for (i = 0; i < Qlength; i++) {
		
				var codeBOX = new lib.code();
				codeBOX.name = "codeBOX" + i;
				stage.addChild(codeBOX);
				codeBOX.y = 200;
				codeBOX.x = ((960 + (700 / Qlength)) / Qlength) + (120 * i);
				codeBOX.scaleX = 0.5;
				codeBOX.scaleY = 0.5;
				current[i] = i;
			}
		
			//יצירת מסיחים ו״בילגונים״
			for (i = 0; i < Qlength; i++) {
				x = Math.floor(Math.random() * (current.length));
				//מסיחים
				var Box = new lib.box();
				Box.name = "Box" + i;
				stage.addChild(Box);
				Box.y = 530;
				Box.x = (1200 / Qlength) + (120 * current[x]);
				questions[gameNum][qnum][1][i][2] = Box.x;
				Box.scaleX = 0.4;
				Box.scaleY = 0.4;
		
		
				if (questions[gameNum][qnum][1][i][0] == "image") {
					var image = new questions[gameNum][qnum][1][i][1];
					image.scaleX = 1.5;
					image.scaleY = 1.5;
					image.name = "image" + i;
					image.x = -70;
					image.y = -30;
					Box.addChild(image);
		
					var zoom = new lib.zoom;
					zoom.scaleX = 1;
					zoom.scaleY = 1;
					Box.addChild(zoom);
					zoom.addEventListener("mouseover", expend);
					zoom.addEventListener("mouseout", minimize);
					zoom.x = -90;
					zoom.y = 45;
					zoom.name = i;
				} else {
		
					var txt = new createjs.Text();
					txt.text = questions[gameNum][qnum][1][i][1];
					txt.font = "38px Arial";
					txt.lineWidth = "200";
					txt.lineHeight = "27";
					txt.textAlign = "center";
					txt.y = -((questions[gameNum][qnum][1][i][1].length) - (questions[gameNum][qnum][1][i][1].length / 30));
					Box.addChild(txt);
				}
		
				current.splice(x, 1);
				Box.addEventListener("pressmove", dragFunc);
				Box.addEventListener("pressup", pressupItem);
		
				var small = stage.getChildByName("small");
				var big = stage.getChildByName("big");
				//מיקום הפרמטרים למענה
				small.text = questions[gameNum][qnum][0][3];
				small.x = stage.getChildByName("codeBOX" + (Qlength - 1)).x + 25;
				small.y = 55 + stage.getChildByName("codeBOX" + (Qlength - 1)).y;
		
				big.text = questions[gameNum][qnum][0][4];
				big.x = stage.getChildByName("codeBOX0").x - 50;
				big.y = 55 + stage.getChildByName("codeBOX0").y;
		
		
		
			}
		
		}
		
		//הגדלת התמונה
		function expend(evt) {
			var i = evt.currentTarget.name;
			var window = new lib.window();
			window.name = "window";
			window.x = 220;
			window.y = 120;
			stage.addChild(window);
			var img = new questions[gameNum][qnum][1][i][1];
			img.scaleX = 3;
			img.scaleY = 3;
			img.x = 140;
			img.y = 70;
			window.addChild(img);
			stage.getChildByName("Box" + i).alpha = 0.5;
		
		}
		
		function minimize(evt) {
			var i = evt.currentTarget.name;
			stage.removeChild(stage.getChildByName("window"));
		
			if (clocking > 0) {
				stage.getChildByName("Box" + i).alpha = 1;
		
			} else {
				stage.getChildByName("Box" + i).alpha = 0.5;
		
			}
		
		}
		
		//אינטרוול של השעון
		function TimeCount() {
			var locker = stage.getChildByName("locker");
			var messageTiltle = stage.getChildByName("messageTiltle");
			//תנאי שבודק אם נגמר הזמן
			if (clocking > 0) {
				//מוריד שניות ומציג בכל פעימה של האינטרוול
				clocking--;
				stage.getChildByName("clockTEXT").text = clocking;
			} else {
				clockSUM += (questions[gameNum][qnum][0][2]) - clocking;
				//עצירת האינטרוול
				clearInterval(setCLOCK);
				//הדפסת משוב שנגמר הזמן
				locker.alpha = 1;
				locker.getChildByName("check_txt").text = "המשך";
				stage.getChildByName("clockTEXT").color = "red";
				messageTiltle.text = "נגמר הזמן, לחץ המשך למעבר לכספת הבאה"
				messageTiltle.color = "red";
				locker.removeEventListener("click", check);
		
				locker.addEventListener("click", nextQuestionPrep);
				stage.removeChild(stage.getChildByName("window"));
				self.lights.gotoAndPlay(0);
				self.lights2.gotoAndPlay(0);
				self.lights3.gotoAndPlay(0);
				self.lights4.gotoAndPlay(0);
		
				for (i = 0; i < Qlength; i++) {
					//עצירת האפשרות לגרור
					stage.getChildByName("Box" + i).removeEventListener("pressmove", dragFunc);
					stage.getChildByName("Box" + i).alpha = 0.5;
					stage.getChildByName("codeBOX" + i).alpha = 0.5;
		
					if (questions[gameNum][qnum][1][i][0] == "image") {
		
						stage.getChildByName("Box" + i).getChildByName(i).removeEventListener("mouseover", expend);
						stage.getChildByName("Box" + i).removeChild(stage.getChildByName("Box" + i).getChildByName(i));
					}
				}
		
			}
		}
		
		
		function pressupItem(evt) {
			var items = 0;
			//מתשתנים להצמדה לתבניות
			var hasIntersect = false;
			var getX;
			var getY;
			// משתנים לזריקת מסיח לדוק
			var ylocation;
			var xlocation;
			var t;
			var on = false;
		
			var locker = stage.getChildByName("locker");
		
			for (var i = 0; i < Qlength; i++) {
				var codeBox = stage.getChildByName("codeBOX" + i);
		
		
				if (intersect(evt.currentTarget, stage.getChildByName("codeBOX" + i))) {
					hasIntersect = true;
					getX = codeBox.x;
					getY = codeBox.y;
		
				}
		
				if (evt.currentTarget.name.slice(3) != i) {
					if (intersect(evt.currentTarget, stage.getChildByName("Box" + i))) {
		
						t = i;
						xlocation = stage.getChildByName("Box" + i).x;
						ylocation = stage.getChildByName("Box" + i).y;
						on = true;
		
					}
		
		
				}
		
			}
		
			// מה שקורה במקרה של פגיעה בתבנית
		
			if (hasIntersect) {
				evt.currentTarget.x = getX;
				evt.currentTarget.y = getY;
			} else {
				evt.currentTarget.y = 530;
				evt.currentTarget.x = questions[gameNum][qnum][1][evt.currentTarget.name.slice(3)][2];
			}
			// מה שקורה עם מסיח שפגע בתנית אבל קיים מסיח
			if (on) {
				stage.getChildByName("Box" + t).x = questions[gameNum][qnum][1][t][2];
				stage.getChildByName("Box" + t).y = 530;
		
			}
			activeteLocker();
		}
		//מפעילה בדיקה אם כל המסיחים במקום להפעלת הכפתור
		function activeteLocker() {
			var items = 0;
			var locker = stage.getChildByName("locker");
		
			for (var i = 0; i < Qlength; i++) {
		
				if (stage.getChildByName("Box" + i).y == 200) {
					items++;
				}
				//console.log(items, "items");
		
			}
		
			if (items == (Qlength)) {
				locker.alpha = 1;
				locker.addEventListener("click", check);
			} else {
		
				locker.removeEventListener("click", check);
				locker.alpha = 0.2;
			}
		
		}
		
		//עוצרת שעון , מפעילה את הסיבוב, מדפיסה בדיקה, ועוצרת את הקוד ל2 שניות ובוסף שולחת לבדיקה האמיתית
		function check() {
			clearInterval(setCLOCK);
			var locker = stage.getChildByName("locker");
			var messageTiltle = stage.getChildByName("messageTiltle");
		
			locker.gotoAndPlay(1);
			messageTiltle.text = "...מנסה לפתוח את הכספת";
			locker.getChildByName("check_txt").text = " ";
			for (i = 0; i < Qlength; i++) {
				var codeBox = stage.getChildByName("codeBOX" + i);
				var Box = stage.getChildByName("Box" + i);
		
				Box.removeChild(Box.getChildByName(i));
				Box.removeEventListener("pressmove", dragFunc);
				Box.removeEventListener("pressup", pressupItem);
		
			}
			setTimeout(function () {
		
				///חישוב הזמן לשאלה והוספתו לספירה הכוללת
				clockSUM += (questions[gameNum][qnum][0][2]) - clocking;
		
				///console.log(clockSUM);
				var orderCheck = 0;
		
				for (i = 0; i < Qlength; i++) {
					var codeBox = stage.getChildByName("codeBOX" + i);
					var Box = stage.getChildByName("Box" + i);
		
					if ((codeBox.x) == (Box.x)) {
						orderCheck++
					}
		
				} ///תשובה נכונה
				if (orderCheck == Qlength) {
		
					finalScore += questions[gameNum][qnum][0][5];
					questions[gameNum][qnum][0][0] = true;
					questions[gameNum].splice([qnum], 1);
					//	console.log(questions[gameNum][qnum], "מחיקה");
					Completed++;
		
					//console.log(orderCheck);
					messageTiltle.text = "עבודה טובה סוכן! אתה מתקרב למטרה";
					messageTiltle.color = "green";
		
					//כפתור חדש במקום המנעול
					locker.visible = false;
					var button = new lib.other_btn();
					stage.addChild(button);
					self.door_mc.gotoAndPlay(0);
					button.x = 500;
					button.y = 350;
					button.other_btn_txt.text = "המשך";
					button.addEventListener("click", nextQuestionPrep);
					button.name = "squereButton";
					//הוספת סמל הוספת נקודות	
					var addPoint = new lib.addPoint();
					stage.addChild(addPoint);
					addPoint.x = 500;
					addPoint.y = 300;
					addPoint.name = "addPointIcon";
		
					ChangetoWhite();
					stage.getChildByName("unlock").gotoAndStop(1);
					stage.getChildByName("clock").gotoAndStop(1);
		
					//טעות
				} else {
					questions[gameNum][qnum][0][5] = questions[gameNum][qnum][0][5] / 2;
					questions[gameNum][qnum][0][0] = false;
					messageTiltle.text = "סוכן יש בעיה, הקוד לא פותח את הכספת";
					messageTiltle.color = "red";
					self.lights.gotoAndPlay(0);
					self.lights2.gotoAndPlay(0);
					self.lights3.gotoAndPlay(0);
					self.lights4.gotoAndPlay(0);
		
				}
		
				locker.getChildByName("check_txt").text = "המשך";
				stage.getChildByName("unlocked").text = Completed.toString() + "/" + Qamount;
				locker.removeEventListener("click", check);
				locker.addEventListener("click", nextQuestionPrep);
		
			}, 1500);
		}
		
		//שינוי צבעים לכותרות 		
		function ChangetoWhite() {
			stage.getChildByName("questionTiltle").color = "white";
			stage.getChildByName("unlocked").color = "white";
			stage.getChildByName("clockTEXT").color = "white";
			stage.getChildByName("small").color = "white";
			stage.getChildByName("big").color = "white";
		}
		
		
		//פונקצייה שמכינה את הבמה לשאלה חדשה, מורידה את כל האלמנטים של השאלה הקודמת
		
		function nextQuestionPrep() {
			var locker = stage.getChildByName("locker");
			locker.visible = true;
		
			stage.getChildByName("clockTEXT").color = "black";
			stage.getChildByName("questionTiltle").color = "black";
			stage.getChildByName("unlocked").color = "black";
			stage.removeChild(stage.getChildByName("squereButton"));
			stage.removeChild(stage.getChildByName("addPointIcon"));
			stage.getChildByName("small").color = "black";
			stage.getChildByName("big").color = "black";
			stage.getChildByName("unlock").gotoAndStop(0);
			stage.getChildByName("clock").gotoAndStop(0);
			button = 0;
			locker.alpha = 0.2;
			locker.removeEventListener("click", nextQuestionPrep);
		
			for (i = 0; i < Qlength; i++) {
		
				stage.removeChild(stage.getChildByName("Box" + i));
				stage.removeChild(stage.getChildByName("codeBOX" + i));
		
			}
			if (Completed == Qamount) {
				finalAnimation();
				clearInterval(setCLOCK);
		
			} else {
				newQuestion();
		
			}
		
		}
		//אנימציית סיום
		function finalAnimation() {
			clearStage();
			stage.getChildByName("questionTiltle").text = "כל הכבוד סוכן! פתחת את כל הכספות"
		
			stage.getChildByName("questionTiltle").color = "white";
			var button = new lib.other_btn();
			//כפתור תוצאות
			button.name = "goToResult";
			button.x = 500;
			button.y = 400;
			button.other_btn_txt.text = "לתוצאות המשחק";
			stage.addChild(button);
			button.addEventListener("click", finalFeedback);
		
			var diamond = new lib.prize();
			stage.addChild(diamond);
			diamond.name = "diamond";
			diamond.scaleX = 0.4;
			diamond.scaleY = 0.4;
			diamond.x = 500;
			diamond.y = 240;
		
		
		}
		
		var clockINminuets = "";
		//משוב מסכם
		function finalFeedback() {
			stage.removeChild(stage.getChildByName("diamond"));
			stage.removeChild(stage.getChildByName("goToResult"));
			stage.removeChild(stage.getChildByName("questionTiltle"));
			clearInterval(setCLOCK);
			///חישוב הזמן בדקות	
			var minuets = 0;
			var seconds = 0;
			var x = 0;
		
		
			for (i = 0; i < clockSUM; i++) {
		
				if (x == 60) {
					minuets++;
					seconds = 0;
					x = 0;
				} else {
					seconds++;
				}
		
				x++;
			}
		
		
			if (minuets == 0) {
				clockINminuets = seconds.toString();
				var timeType = " שניות, ";
		
			} else {
				clockINminuets = minuets.toString() + ":" + seconds.toString();
		 timeType = " דקות, ";
			}
			j = 0;
		
			say2 = "   שלום סוכן    \n\n  עמדת במשימתך ופתחת את כל הכספות \n" + "בזמן של  " + clockINminuets + timeType + " ציונך הוא " + Math.floor(((finalScore)).toString()) + "\n" + "!כל הכבוד ";
		
			/*	say2 =
				"helo agent you have opend all the safes in " + clockSUM.toString() + " seconds n/" +
				"yor score is " + finalScore.toString() + " ";*/
			self.black.visible = true;
			summeryINTERVAL = setInterval(finalTypingEffect, 50);
			self.black.txt.text = say2[0];
			finalTypingEffect();
		}
		
		
		function finalTypingEffect() {
		
			self.black.txt.text += say2[j];
			j++;
			console.log(j, "number", say2.length, "length")
			if (j == say2.length - 1) {
				///createjs.Ticker.paused = true;
				var restart = new lib.other_btn;
				restart.y = 390;
				restart.x = 500;
				restart.name = "restart";
				restart.other_btn_txt.text = "שחק שוב";
		
				var newGame = new lib.other_btn;
				newGame.y = 430;
				newGame.x = 500;
				newGame.name = "newGame";
				newGame.other_btn_txt.text = "בחר משחק אחר";
		
				clearInterval(summeryINTERVAL);
				var result = new lib.finalResult();
				result.y = 300;
				result.x = 500;
				result.gradeTXT.text = Math.floor(((finalScore)).toString());
				result.name = "result";
		
				result.timeTXT.text = clockINminuets;
		
				//	self.black.addChild(newGame);
				stage.addChild(newGame);
		
				//	self.black.addChild(result);
				stage.addChild(result);
				//self.black.addChild(restart);
				stage.addChild(restart);
		
				self.door_mc.gotoAndPlay(0);
		
				restart.addEventListener("click", launch);
				newGame.addEventListener("click", gameManu);
			}
		
		}
		
		
		
		//הסרת האלמנטים 
		function clearStage() {
			stage.removeChild(stage.getChildByName("locker"));
			stage.removeChild(stage.getChildByName("clock"));
			stage.removeChild(stage.getChildByName("unlock"));
			stage.removeChild(stage.getChildByName("big"));
			stage.removeChild(stage.getChildByName("small"));
			stage.removeChild(stage.getChildByName("unlocked"));
			stage.removeChild(stage.getChildByName("clockTEXT"));
			stage.removeChild(stage.getChildByName("playbtn"));
			stage.removeChild(stage.getChildByName("messageTiltle"));
		
		}
		//move Drager
		function dragFunc(evt) {
			//היכן בוצעה הלחיצה ביחס לבמה כולה
			var p = stage.globalToLocal(stage.mouseX, stage.mouseY);
			evt.currentTarget.x = p.x;
			evt.currentTarget.y = p.y;
		}
		
		function intersect(obj1, obj2) {
		
			var obj1W = obj1.nominalBounds;
			var obj2W = obj2.nominalBounds;
		
			if (obj1.x + ((obj1W.width - 100) / 2) <= obj2.x - ((obj1W.width - 100) / 2)) {
				return false;
			} else if (obj1.y + ((obj1W.height - 100) / 2) <= obj2.y - ((obj2W.height - 100) / 2)) {
				return false;
			} else if (obj1.x - ((obj1W.width - 100) / 2) > obj2.x + ((obj2W.width - 100) / 2)) {
				return false;
			} else if (obj1.y - ((obj1W.height - 100) / 2) > obj2.y + ((obj2W.height - 100) / 2)) {
				return false;
			}
			return true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// FlashAICB
	this.black = new lib.BlackScreen();
	this.black.name = "black";
	this.black.parent = this;
	this.black.setTransform(480.2,297.1,1.008,1);
	this.black.visible = false;

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(247,247,247,0.098)","rgba(226,226,226,0.38)","rgba(191,191,191,0.835)","#B3B3B3"],[0.035,0.184,0.412,0.69,0.776],0,0,0,0,0,431.1).s().p("EhfMADcMAj1gG3MB6sAAAIf4G3g");
	this.shape.setTransform(484.9,572.2,0.759,0.759);

	this.lights3 = new lib.side_light();
	this.lights3.name = "lights3";
	this.lights3.parent = this;
	this.lights3.setTransform(80.4,512.3,0.6,0.466,180,0,0,-0.4,0.5);

	this.lights = new lib.side_light();
	this.lights.name = "lights";
	this.lights.parent = this;
	this.lights.setTransform(241,-9.8,0.572,0.705,0,90,-90,191.4,0.1);

	this.lights2 = new lib.side_light();
	this.lights2.name = "lights2";
	this.lights2.parent = this;
	this.lights2.setTransform(764.3,-9.8,0.572,0.705,0,90,-90,191.4,0.1);

	this.lights4 = new lib.side_light();
	this.lights4.name = "lights4";
	this.lights4.parent = this;
	this.lights4.setTransform(883,508.3,0.6,0.466,0,0,0,-0.4,0.5);

	this.door_mc = new lib.door_mc();
	this.door_mc.name = "door_mc";
	this.door_mc.parent = this;
	this.door_mc.setTransform(492.1,247.3,0.366,0.345,0,0,0,-4.8,4.4);

	this.instance = new lib.openSafe();
	this.instance.parent = this;
	this.instance.setTransform(83,33,0.709,0.68);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("EhK7guCMCV3AAAEBK8AuDMiV3AAA");
	this.shape_1.setTransform(476.7,295.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,1044.3).s().p("EBK7AuDMiV2AAAIjHAAMAAAhcFIDHAAMCV2AAAIDJAAMAAABcFg");
	this.shape_2.setTransform(476.8,295.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.door_mc},{t:this.lights4},{t:this.lights2},{t:this.lights},{t:this.lights3},{t:this.shape},{t:this.black}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(431.2,271.7,1061,614.4);
// library properties:
lib.properties = {
	id: 'E1E00C7FE707494B99CD5E971148AE26',
	width: 960,
	height: 590,
	fps: 24,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"images/TheSafe_atlas_.png?1549990069789", id:"TheSafe_atlas_"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1549990069849", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1549990069849", id:"sdk/anwidget.js"},
		{src:"components/ui/src/combobox.js?1549990069849", id:"an.ComboBox"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E1E00C7FE707494B99CD5E971148AE26'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;