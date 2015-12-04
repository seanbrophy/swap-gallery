// JavaScript Document

//this is how you typically setup your javascript files

//self exectuing anonymous function - use this. prevents global variables.. use paranthesis () for anonymous below

(function() {
	"use strict";
	console.log("Yep the SEAF Fired");
	
	
	//Variables
	
	var photos = ["wilson", "willow", "maxwell", "webber", "wx78", "woodie"];
	var names = ["Wilson", "Willow", "Maxwell", "Webber", "WX78", "Woodie"];
	var captions = ["He is the starter character he's the one who set the standards for hunger, health, and sanity plus he has no downsides and grows a beard. THE PERFECT CHARACTER!!!", "Due to her lighter (Which she can craft and give to other players.) and her boost of sanity from fire plus her immunity to fire damage willow is the best character for night exploring and cave exploring. (Just dont lose to much sanity or else you will be in for a chilly suprise.) So she can get materials no matter the circumstances.", "He may have low health, but due to his starter items he can start killing things right away. (just dont get carried away.) Also his sanity is constantly regenerating so you dont have to worry about his sanity plummeting. Lastly he can create his own shadow puppets to aid him in combat. (Just make sure to not spawn in to many or else you will lose a lot of sanity.)", "His sanity may be below average, but it makes up for his perks. He starts out with a spider egg (Which he can craft and give to other players.) and he can get spiders to do all his combat plus he can eat monster meat without complications finally he can grow a beard of silk. Since of these perks webber can do anything in the game. (Besides who needs pigs and bunny men anyway.)", "WX-78 may start out with low stats, but they are always in balance even after upgrading them and once upgraded WX-78 has the best stats in the game. Also It can eat anything spoiled or not without complications. Lastly If WX-78 is struck by lighting, It will get a massive boost in speed and it will produce its own light source plus he will regen full health when struck. (Just remember to stay out of the rain.)", "He has the same stats as wilson and can destroy anything with his axe and as the werebeaver. Also other players can use his axe at a slower chopping speed, but they can use it an infident amount of times. His beard also provides insulation but it can't be shaved off. He lastly regains sanity by planting trees and eating trees restores his bever meter. THE PERFECT LUMBERJACK!!! (Just make sure to keep the bever meter up or else the curse will arrive.)"];//wilson, willow, maxwell, webber, wx78, woodie
	
	var el = document.querySelector("#galleryList");
	var anchors = el.querySelectorAll("a");//select only the anchor tags in galleryList
	
	var portrait = document.querySelector("#character");//selects the img element with the same id
	var name = document.querySelector("#name");
	var caption = document.querySelector("#caption");//selects the p element with the same id
	
	//Greensock
	//visibility set to 0
	TweenMax.set("#character", {autoAlpha:0});
	//fade back in with visibility:visible
	TweenMax.to("#character", 2, {autoAlpha:1});
	
	function swapImage(e){//e selects the event that just triggered
		e.preventDefault();
		var thisImg = "images/"+photos[e.target.id]+".png";//changes the source img
		console.log(e.target.id);
		portrait.src = thisImg;
		name.innerHTML = names[e.target.id];
		caption.innerHTML = captions[e.target.id];
		
		//visibility set to 0
		TweenMax.set("#character", {autoAlpha:0});
		//fade back in with visibility:visible
		TweenMax.to("#character", 2, {autoAlpha:1});
		
	}
	
	
	//Listeners
	for(var i = 0; i<anchors.length; i++){
		anchors[i].addEventListener("click", swapImage, false);//event listener loop for anchor tags in galleryList
	}
	
})();