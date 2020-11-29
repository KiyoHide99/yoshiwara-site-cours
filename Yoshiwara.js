(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Yoshiwara_atlas_1", frames: [[0,0,1332,850],[0,852,850,1127]]},
		{name:"Yoshiwara_atlas_2", frames: [[0,722,943,715],[1281,0,630,1200],[945,1202,561,800],[0,1439,800,450],[0,0,1279,720]]},
		{name:"Yoshiwara_atlas_3", frames: [[0,875,300,276],[0,455,645,418],[1138,0,332,512],[710,0,426,640],[647,642,512,512],[0,0,708,453]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Barreaux = function() {
	this.initialize(ss["Yoshiwara_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Book1 = function() {
	this.initialize(ss["Yoshiwara_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Cherry = function() {
	this.initialize(ss["Yoshiwara_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Flag = function() {
	this.initialize(ss["Yoshiwara_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.HanayoiDochuFilm = function() {
	this.initialize(ss["Yoshiwara_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.IeayasuTokugawaBulle = function() {
	this.initialize(img.IeayasuTokugawaBulle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1841,2100);


(lib.KamuroetShinzô = function() {
	this.initialize(img.KamuroetShinzô);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3648,2736);


(lib.LesmystèresdeYoshiwara = function() {
	this.initialize(ss["Yoshiwara_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Oiran1 = function() {
	this.initialize(ss["Yoshiwara_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.SakuranFilm = function() {
	this.initialize(ss["Yoshiwara_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.SakuranManga = function() {
	this.initialize(ss["Yoshiwara_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.SakuranRed = function() {
	this.initialize(ss["Yoshiwara_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Torii = function() {
	this.initialize(ss["Yoshiwara_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Yoshiwara1 = function() {
	this.initialize(ss["Yoshiwara_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Yoshiwara = function() {
	this.initialize(ss["Yoshiwara_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Torii_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Kotowav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Texte
	this.text = new cjs.Text("Bienvenue", "28px 'Calisto MT'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 34;
	this.text.lineWidth = 158;
	this.text.alpha = 0.91764706;
	this.text.parent = this;
	this.text.setTransform(185,70.85);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Bouton
	this.instance = new lib.Torii();
	this.instance.setTransform(0,0,0.707,0.707);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,362,362);


(lib.Texte = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.text = new cjs.Text("Plongez à la découverte du quartier rouge qu’abritait l’ancien Tokyo, durant l’époque Edo (1603-1868)", "italic 20px 'Calisto MT'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 346;
	this.text.alpha = 0.91372549;
	this.text.parent = this;
	this.text.setTransform(198,143.3);

	this.text_1 = new cjs.Text("Yoshiwara : Le quartier des plaisirs japonais", "30px 'Abril Fatface'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 43;
	this.text_1.lineWidth = 400;
	this.text_1.parent = this;
	this.text_1.setTransform(201.95,10);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,0,0,0.6)").s().p("A8gIhIAAxBMA5BAAAIAARBg");
	this.shape.setTransform(199.525,181.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.6)").s().p("A/jIlIAAxJMA/HAAAIAARJg");
	this.shape_1.setTransform(201.975,54.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Texte, new cjs.Rectangle(0,0,404,236), null);


(lib.Shogun = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Shogunwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Shogun
	this.instance = new lib.IeayasuTokugawaBulle();
	this.instance.setTransform(0,0,0.0614,0.0614);

	this.text = new cjs.Text("Historique", "20px 'Calisto MT'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 112;
	this.text.parent = this;
	this.text.setTransform(58,112.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.498)").s().p("ApDCpIAAlRISHAAIAAFRg");
	this.shape.setTransform(59,125.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance},{t:this.text}]},1).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,117,141.9);


(lib.Retour = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.text = new cjs.Text("Retour", "italic 17px 'Calisto MT'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 67;
	this.text.parent = this;
	this.text.setTransform(35.5,24.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,0,0,0.698)").s().p("AjyDyQhkhkAAiOQAAiNBkhlQBlhjCNgBQCOABBkBjQBkBlAACNQAACOhkBkQhkBliOgBQiNABhlhlg");
	this.shape.setTransform(37.25,34.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.698)").s().p("AjyDyQhkhkAAiOQAAiNBkhlQBlhjCNgBQCOABBkBjQBkBlAACNQAACOhkBkQhkBliOgBQiNABhlhlg");
	this.shape_1.setTransform(37.25,34.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#FFFFFF"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#000000"}}]},1).to({state:[{t:this.shape},{t:this.text,p:{color:"#FFFFFF"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71.5,68.5);


(lib.Image = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.HanayoiDochuFilm();
	this.instance.setTransform(444,0,0.1367,0.1367);

	this.instance_1 = new lib.SakuranManga();
	this.instance_1.setTransform(280,181,0.2582,0.2582);

	this.instance_2 = new lib.SakuranFilm();
	this.instance_2.setTransform(114,178,0.186,0.186);

	this.instance_3 = new lib.LesmystèresdeYoshiwara();
	this.instance_3.setTransform(0,1,0.3122,0.3122);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Image, new cjs.Rectangle(0,0,530.1,387.6), null);


(lib.Explix = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.text = new cjs.Text("Sakuran\nManga écrit par Moyoko Anno, adapté en film de 2007 par Mika Ninagawa.", "15px 'Calisto MT'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 261;
	this.text.parent = this;
	this.text.setTransform(270.45,2);

	this.text_1 = new cjs.Text("Hanayoi Dochu\nFilm adapté d’un roman éponyme écrit par Miyagi Ayako, réalisé par Toyoshima Keisuke.", "15px 'Calisto MT'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 19;
	this.text_1.lineWidth = 109;
	this.text_1.parent = this;
	this.text_1.setTransform(486.45,61.55);

	this.text_2 = new cjs.Text("Les mystères de Yoshiwara\nRoman écrit par Kesako Matsui.", "15px 'Calisto MT'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 19;
	this.text_2.lineWidth = 100;
	this.text_2.parent = this;
	this.text_2.setTransform(52,59.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Explix, new cjs.Rectangle(0,0,543,196.7), null);


(lib.Expli = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.text = new cjs.Text("Le quartier d'Yoshiwara, créé en 1618, était surtout connu pour la présence d’une hiérarchie stricte entre les courtisanes. \nLes seigneurs, guerriers et riches commerçants qui s’y rendaient ne cherchaient pas uniquement du plaisir physique, mais aussi intellectuel.", "15px 'Calisto MT'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 497;
	this.text.parent = this;
	this.text.setTransform(258.5,136.1);

	this.text_1 = new cjs.Text("Sous l’autorité du shôgun (chef de guerre) Ieayasu Tokugawa, trois quartiers réservés à la prostitution virent le jour au Japon. \nL’objectif était ainsi d’instaurer des quotas de consommation, le contrôle de l’identité des prostituées et des clients.\nCes lieux perdurèrent jusqu’à l’abolition de la prostitution en 1956.", "14px 'Calisto MT'", "#FFFFFF");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 418;
	this.text_1.parent = this;
	this.text_1.setTransform(421,8.1);

	this.instance = new lib.IeayasuTokugawaBulle();
	this.instance.setTransform(429,0,0.0554,0.0554);

	this.text_2 = new cjs.Text("L’un des éléments remarquables des quartiers rouges était leur maison close aux cages où étaient exposées les prostituées de moindre condition.", "14px 'Calisto MT'", "#FFFFFF");
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 354;
	this.text_2.parent = this;
	this.text_2.setTransform(186.05,291.25);

	this.instance_1 = new lib.Barreaux();
	this.instance_1.setTransform(0,241,0.1886,0.1747);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text_2},{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Expli, new cjs.Rectangle(0,0,542,366), null);


(lib.Courti = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.text = new cjs.Text("Oiran", "italic 20px 'Calisto MT'");
	this.text.lineHeight = 25;
	this.text.lineWidth = 52;
	this.text.parent = this;
	this.text.setTransform(504.6,414.95);

	this.text_1 = new cjs.Text("Oiran, Shinzô et Kamuro", "italic 20px 'Calisto MT'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 25;
	this.text_1.lineWidth = 214;
	this.text_1.parent = this;
	this.text_1.setTransform(481.7,229.8);

	this.instance = new lib.Oiran1();
	this.instance.setTransform(373.45,261.25,0.2831,0.2831);

	this.text_2 = new cjs.Text("1. Kamuro\nÂgée de 5 à 13 ans, les kamuros tenaient compagnie aux courtisanes de haut rang. Souvent, une oiran pouvait avoir jusqu’à trois kamuros à son service.\nLes plus talentueuses pouvaient devenir des shinzô et être éduquée par la courtisane qui l’a « adoptée ».\n\n2. Shinzô\nÂgée de 13 à 23 ans, lors de la cérémonie pour devenir shinzô, la jeune fille paradait au sein du quartier. Elle recevait ainsi des cadeaux, des soins et de l’argent selon sa capacité à séduire. C’est lors de cette présentation qu’elle réalisait son initiation sexuelle et qu'elle était officiellement achetée à sa famille.\n\n3. Oiran\nIl s’agit du plus haut rang parmi les prostituées. Les oirans se devaient d’être raffinées et d’une grande beauté, représentante de la distinction de la culture japonaise.", "15px 'Calisto MT'");
	this.text_2.lineHeight = 19;
	this.text_2.lineWidth = 343;
	this.text_2.parent = this;
	this.text_2.setTransform(16.3,39.95);

	this.instance_1 = new lib.KamuroetShinzô();
	this.instance_1.setTransform(364.45,49.25,0.0646,0.0646);

	this.text_3 = new cjs.Text("La hiérarchie (après 1750)", "20px 'Abril Fatface'", "#CC0000");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 29;
	this.text_3.lineWidth = 421;
	this.text_3.parent = this;
	this.text_3.setTransform(302.7,11.45);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.698)").s().p("EgwPAjdMAAAhG5MBgeAAAMAAABG5g");
	this.shape.setTransform(308.75,226.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_3},{t:this.instance_1},{t:this.text_2},{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Courti, new cjs.Rectangle(0,0,617.5,453.9), null);


(lib.Cherry_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Cherrywav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Texte
	this.text = new cjs.Text("Les courtisanes", "20px 'Calisto MT'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 161;
	this.text.parent = this;
	this.text.setTransform(64.5,102.75);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.498)").s().p("As4DYIAAmvIZxAAIAAGvg");
	this.shape.setTransform(64.525,114.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.text}]},1).to({state:[]},1).wait(1));

	// Cherry
	this.instance = new lib.Cherry();
	this.instance.setTransform(0,0,0.2061,0.2061);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.9,0,164.9,136.5);


(lib.Book = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Culturewav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Texte
	this.text = new cjs.Text("Culture populaire", "20px 'Calisto MT'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 94;
	this.text.parent = this;
	this.text.setTransform(57,103.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,0,0,0.6)").s().p("Ao5FDIAAqFIRzAAIAAKFg");
	this.shape.setTransform(57.05,129.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.text}]},1).to({state:[]},1).wait(1));

	// Book
	this.instance = new lib.Book1();
	this.instance.setTransform(0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,161.5);


(lib.TexteEtIntro = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/* Fondu en entrée dans un clip
		Pour effectuer un fondu en entrée de l’occurrence de symbole, augmentez la valeur de sa propriété alpha au sein d’un événement Tick jusqu’à ce qu’elle soit complètement visible.
		
		Instructions :
		1. Pour modifier la vitesse de fondu en entrée de l’occurrence de symbole, modifiez la valeur 0.01 ci-dessous (cette valeur doit être supérieure à 0 et inférieure ou égale à 1). Plus la valeur est élevée, plus le fondu en entrée est rapide.
		2. Etant donné que l’animation a recours à un événement Tick, elle progresse uniquement lorsque la tête de lecture se déplace vers une nouvelle image. La cadence du document influe également sur la vitesse de l’animation.
		*/
		
		var Textes_FadeInCbk = fl_FadeSymbolIn.bind(this);
		this.addEventListener('tick', Textes_FadeInCbk);
		this.Textes.alpha = 0;
		
		function fl_FadeSymbolIn()
		{
			this.Textes.alpha += 0.05;
			if(this.Textes.alpha >= 1)
			{
				this.removeEventListener('tick', Textes_FadeInCbk);
			}
		}
		
		/* Fondu en entrée dans un clip
		Pour effectuer un fondu en entrée de l’occurrence de symbole, augmentez la valeur de sa propriété alpha au sein d’un événement Tick jusqu’à ce qu’elle soit complètement visible.
		
		Instructions :
		1. Pour modifier la vitesse de fondu en entrée de l’occurrence de symbole, modifiez la valeur 0.01 ci-dessous (cette valeur doit être supérieure à 0 et inférieure ou égale à 1). Plus la valeur est élevée, plus le fondu en entrée est rapide.
		2. Etant donné que l’animation a recours à un événement Tick, elle progresse uniquement lorsque la tête de lecture se déplace vers une nouvelle image. La cadence du document influe également sur la vitesse de l’animation.
		*/
		
		var Textes_FadeInCbk = fl_FadeSymbolIn_3.bind(this);
		this.addEventListener('tick', Textes_FadeInCbk);
		this.Textes.alpha = 0;
		
		function fl_FadeSymbolIn_3()
		{
			this.Textes.alpha += 0.05;
			if(this.Textes.alpha >= 1)
			{
				this.removeEventListener('tick', Textes_FadeInCbk);
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Calque_1
	this.Textes = new lib.Texte();
	this.Textes.name = "Textes";
	this.Textes.setTransform(202,118,1,1,0,0,0,202,118);

	this.timeline.addTween(cjs.Tween.get(this.Textes).wait(1));

	// Calque_2
	this.instance = new lib.Yoshiwara();
	this.instance.setTransform(-117,-121,0.9099,0.9099);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TexteEtIntro, new cjs.Rectangle(-117,-121,644.2,412.2), null);


(lib.Sakuran = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/* Fondu en entrée dans un clip
		Pour effectuer un fondu en entrée de l’occurrence de symbole, augmentez la valeur de sa propriété alpha au sein d’un événement Tick jusqu’à ce qu’elle soit complètement visible.
		
		Instructions :
		1. Pour modifier la vitesse de fondu en entrée de l’occurrence de symbole, modifiez la valeur 0.01 ci-dessous (cette valeur doit être supérieure à 0 et inférieure ou égale à 1). Plus la valeur est élevée, plus le fondu en entrée est rapide.
		2. Etant donné que l’animation a recours à un événement Tick, elle progresse uniquement lorsque la tête de lecture se déplace vers une nouvelle image. La cadence du document influe également sur la vitesse de l’animation.
		*/
		
		var Court_FadeInCbk = fl_FadeSymbolIn_4.bind(this);
		this.addEventListener('tick', Court_FadeInCbk);
		this.Court.alpha = 0;
		
		function fl_FadeSymbolIn_4()
		{
			this.Court.alpha += 0.05;
			if(this.Court.alpha >= 1)
			{
				this.removeEventListener('tick', Court_FadeInCbk);
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Carré
	this.Court = new lib.Courti();
	this.Court.name = "Court";
	this.Court.setTransform(392.35,224.65,1,1,0,0,0,308.8,226.9);

	this.timeline.addTween(cjs.Tween.get(this.Court).wait(1));

	// Fond
	this.instance = new lib.SakuranRed();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Sakuran, new cjs.Rectangle(0,-2.2,800,453.8), null);


(lib.Historique = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/* Fondu en entrée dans un clip
		Pour effectuer un fondu en entrée de l’occurrence de symbole, augmentez la valeur de sa propriété alpha au sein d’un événement Tick jusqu’à ce qu’elle soit complètement visible.
		
		Instructions :
		1. Pour modifier la vitesse de fondu en entrée de l’occurrence de symbole, modifiez la valeur 0.01 ci-dessous (cette valeur doit être supérieure à 0 et inférieure ou égale à 1). Plus la valeur est élevée, plus le fondu en entrée est rapide.
		2. Etant donné que l’animation a recours à un événement Tick, elle progresse uniquement lorsque la tête de lecture se déplace vers une nouvelle image. La cadence du document influe également sur la vitesse de l’animation.
		*/
		
		var Expli_FadeInCbk = fl_FadeSymbolIn_2.bind(this);
		this.addEventListener('tick', Expli_FadeInCbk);
		this.Expli.alpha = 0;
		
		function fl_FadeSymbolIn_2()
		{
			this.Expli.alpha += 0.05;
			if(this.Expli.alpha >= 1)
			{
				this.removeEventListener('tick', Expli_FadeInCbk);
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Calque_1
	this.Expli = new lib.Expli();
	this.Expli.name = "Expli";
	this.Expli.setTransform(279,228,1,1,0,0,0,271,183);

	this.timeline.addTween(cjs.Tween.get(this.Expli).wait(1));

	// Calque_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(39,39,39,0.847)").s().p("EgsSAfzMAAAg/lMBYlAAAMAAAA/lg");
	this.shape.setTransform(282.525,219.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Calque_2
	this.instance = new lib.Yoshiwara1();
	this.instance.setTransform(-106,4,0.5917,0.5917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Historique, new cjs.Rectangle(-106,4,756.8,426), null);


(lib.Flag_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/* Fondu en entrée dans un clip
		Pour effectuer un fondu en entrée de l’occurrence de symbole, augmentez la valeur de sa propriété alpha au sein d’un événement Tick jusqu’à ce qu’elle soit complètement visible.
		
		Instructions :
		1. Pour modifier la vitesse de fondu en entrée de l’occurrence de symbole, modifiez la valeur 0.01 ci-dessous (cette valeur doit être supérieure à 0 et inférieure ou égale à 1). Plus la valeur est élevée, plus le fondu en entrée est rapide.
		2. Etant donné que l’animation a recours à un événement Tick, elle progresse uniquement lorsque la tête de lecture se déplace vers une nouvelle image. La cadence du document influe également sur la vitesse de l’animation.
		*/
		
		var Mang_FadeInCbk = fl_FadeSymbolIn_5.bind(this);
		this.addEventListener('tick', Mang_FadeInCbk);
		this.Mang.alpha = 0;
		
		function fl_FadeSymbolIn_5()
		{
			this.Mang.alpha += 0.05;
			if(this.Mang.alpha >= 1)
			{
				this.removeEventListener('tick', Mang_FadeInCbk);
			}
		}
		
		/* Fondu en entrée dans un clip
		Pour effectuer un fondu en entrée de l’occurrence de symbole, augmentez la valeur de sa propriété alpha au sein d’un événement Tick jusqu’à ce qu’elle soit complètement visible.
		
		Instructions :
		1. Pour modifier la vitesse de fondu en entrée de l’occurrence de symbole, modifiez la valeur 0.01 ci-dessous (cette valeur doit être supérieure à 0 et inférieure ou égale à 1). Plus la valeur est élevée, plus le fondu en entrée est rapide.
		2. Etant donné que l’animation a recours à un événement Tick, elle progresse uniquement lorsque la tête de lecture se déplace vers une nouvelle image. La cadence du document influe également sur la vitesse de l’animation.
		*/
		
		var Explixa_FadeInCbk = fl_FadeSymbolIn_6.bind(this);
		this.addEventListener('tick', Explixa_FadeInCbk);
		this.Explixa.alpha = 0;
		
		function fl_FadeSymbolIn_6()
		{
			this.Explixa.alpha += 0.07;
			if(this.Explixa.alpha >= 1)
			{
				this.removeEventListener('tick', Explixa_FadeInCbk);
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Calque_4
	this.Explixa = new lib.Explix();
	this.Explixa.name = "Explixa";
	this.Explixa.setTransform(337.45,228.85,1,1,0,0,0,271.4,98.3);

	this.timeline.addTween(cjs.Tween.get(this.Explixa).wait(1));

	// Image
	this.Mang = new lib.Image();
	this.Mang.name = "Mang";
	this.Mang.setTransform(332.1,215.8,1,1,0,0,0,265.1,193.8);

	this.timeline.addTween(cjs.Tween.get(this.Mang).wait(1));

	// Carré
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.6)").s().p("EgquAfQMAAAg+fMBVdAAAMAAAA+fg");
	this.shape.setTransform(335.525,217.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Drap
	this.instance = new lib.Flag();
	this.instance.setTransform(0,0,0.506,0.506);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Flag_1, new cjs.Rectangle(0,0,674,430.1), null);


// stage content:
(lib.Yoshiwara2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		/* Arrêter la lecture à partir de cette image
		Le scénario arrête/met en pause la lecture à partir de cette image lorsque vous insérez ce code.
		Vous pouvez également utiliser ce code pour arrêter/mettre en pause le scénario des clips.
		*/
		
		this.stop();
		
		/* Cliquer pour atteindre l’image et arrêter la lecture
		Cliquez sur l’occurrence de symbole spécifiée pour déplacer la tête de lecture vers l’image sélectionnée dans le scénario et arrêter l’animation.
		Ce code peut être utilisé sur le scénario principal ou sur les scénarios des clips.
		
		Instructions :
		1. Dans le code ci-dessous, remplacez le chiffre 5 par le numéro de l’image vers laquelle vous souhaitez que la tête de lecture se déplace lorsque vous cliquez sur l’occurrence de symbole.
		2. Les numéros d’image dans EaselJS commencent à 0 au lieu de 1
		*/
		
		
		this.ButonInstance.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop(10);
		}
		
		
		
		/* Cliquer pour atteindre l’image et arrêter la lecture
		Cliquez sur l’occurrence de symbole spécifiée pour déplacer la tête de lecture vers l’image sélectionnée dans le scénario et arrêter l’animation.
		Ce code peut être utilisé sur le scénario principal ou sur les scénarios des clips.
		
		Instructions :
		1. Dans le code ci-dessous, remplacez le chiffre 5 par le numéro de l’image vers laquelle vous souhaitez que la tête de lecture se déplace lorsque vous cliquez sur l’occurrence de symbole.
		2. Les numéros d’image dans EaselJS commencent à 0 au lieu de 1
		*/
		
		
		this.Shogun.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndStop(20);
		}
		
		
		/* Cliquer pour atteindre l’image et arrêter la lecture
		Cliquez sur l’occurrence de symbole spécifiée pour déplacer la tête de lecture vers l’image sélectionnée dans le scénario et arrêter l’animation.
		Ce code peut être utilisé sur le scénario principal ou sur les scénarios des clips.
		
		Instructions :
		1. Dans le code ci-dessous, remplacez le chiffre 5 par le numéro de l’image vers laquelle vous souhaitez que la tête de lecture se déplace lorsque vous cliquez sur l’occurrence de symbole.
		2. Les numéros d’image dans EaselJS commencent à 0 au lieu de 1
		*/
		
		
		this.CherryBlossom.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop(30);
		}
		
		/* Cliquer pour atteindre l’image et arrêter la lecture
		Cliquez sur l’occurrence de symbole spécifiée pour déplacer la tête de lecture vers l’image sélectionnée dans le scénario et arrêter l’animation.
		Ce code peut être utilisé sur le scénario principal ou sur les scénarios des clips.
		
		Instructions :
		1. Dans le code ci-dessous, remplacez le chiffre 5 par le numéro de l’image vers laquelle vous souhaitez que la tête de lecture se déplace lorsque vous cliquez sur l’occurrence de symbole.
		2. Les numéros d’image dans EaselJS commencent à 0 au lieu de 1
		*/
		
		
		this.Book.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			this.gotoAndStop(40);
		}
		
		
		/* Cliquer pour atteindre l’image et arrêter la lecture
		Cliquez sur l’occurrence de symbole spécifiée pour déplacer la tête de lecture vers l’image sélectionnée dans le scénario et arrêter l’animation.
		Ce code peut être utilisé sur le scénario principal ou sur les scénarios des clips.
		
		Instructions :
		1. Dans le code ci-dessous, remplacez le chiffre 5 par le numéro de l’image vers laquelle vous souhaitez que la tête de lecture se déplace lorsque vous cliquez sur l’occurrence de symbole.
		2. Les numéros d’image dans EaselJS commencent à 0 au lieu de 1
		*/
		
		
		this.Retour.addEventListener("click", fl_ClickToGoToAndStopAtFrame_6.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_6()
		{
			this.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60));

	// Home
	this.Retour = new lib.Retour();
	this.Retour.name = "Retour";
	this.Retour.setTransform(520.8,26.3,0.6364,0.6364,0,0,0,35.8,34.2);
	new cjs.ButtonHelper(this.Retour, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.Retour).wait(60));

	// TexteEtPlus
	this.instance = new lib.TexteEtIntro();
	this.instance.setTransform(271.05,167,1,1,0,0,0,202,54.9);

	this.instance_1 = new lib.Historique();
	this.instance_1.setTransform(274.5,210.5,1,1,0,0,0,279.5,230.5);

	this.instance_2 = new lib.Sakuran();
	this.instance_2.setTransform(281.75,201.75,0.91,0.91,0,0,0,400,225);

	this.instance_3 = new lib.Flag_1();
	this.instance_3.setTransform(276.9,199.1,1,1,0,0,0,336.9,215.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance},{t:this.instance_1}]},10).to({state:[{t:this.instance},{t:this.instance_1},{t:this.instance_2}]},10).to({state:[{t:this.instance},{t:this.instance_1},{t:this.instance_2},{t:this.instance_3}]},10).wait(21));

	// Bouton
	this.Book = new lib.Book();
	this.Book.name = "Book";
	this.Book.setTransform(490,273.2,1,1,0,0,0,60,55.2);
	new cjs.ButtonHelper(this.Book, 0, 1, 2);

	this.CherryBlossom = new lib.Cherry_1();
	this.CherryBlossom.name = "CherryBlossom";
	this.CherryBlossom.setTransform(277.5,273.25,1,1,0,0,0,66.5,43.1);
	new cjs.ButtonHelper(this.CherryBlossom, 0, 1, 2);

	this.Shogun = new lib.Shogun();
	this.Shogun.name = "Shogun";
	this.Shogun.setTransform(56.5,275,1,1,0,0,0,56.5,64.5);
	new cjs.ButtonHelper(this.Shogun, 0, 1, 2);

	this.ButonInstance = new lib.Torii_1();
	this.ButonInstance.name = "ButonInstance";
	this.ButonInstance.setTransform(275.35,238.1,1.1754,1.2565,0,0,0,181.3,181.2);
	new cjs.ButtonHelper(this.ButonInstance, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ButonInstance},{t:this.Shogun},{t:this.CherryBlossom},{t:this.Book}]}).wait(60));

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,204,0.298)").s().p("EgrHAfLMAAAg+VMBWPAAAMAAAA+Vg");
	this.shape.setTransform(274.025,198.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

	// Fond
	this.instance_4 = new lib.Yoshiwara();
	this.instance_4.setTransform(-48,-9,0.9117,0.9117);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(164,184,481.79999999999995,281.3);
// library properties:
lib.properties = {
	id: '5FF17FC1B561444C822B28F88055319B',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/IeayasuTokugawaBulle.png", id:"IeayasuTokugawaBulle"},
		{src:"images/KamuroetShinzô.jpg", id:"KamuroetShinzô"},
		{src:"images/Yoshiwara_atlas_1.png", id:"Yoshiwara_atlas_1"},
		{src:"images/Yoshiwara_atlas_2.png", id:"Yoshiwara_atlas_2"},
		{src:"images/Yoshiwara_atlas_3.png", id:"Yoshiwara_atlas_3"},
		{src:"sounds/Cherrywav.mp3", id:"Cherrywav"},
		{src:"sounds/Culturewav.mp3", id:"Culturewav"},
		{src:"sounds/Kotowav.mp3", id:"Kotowav"},
		{src:"sounds/Shogunwav.mp3", id:"Shogunwav"}
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
an.compositions['5FF17FC1B561444C822B28F88055319B'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;