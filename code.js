var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["f4cc358f-7262-4cb8-897c-ab5f6904ace5","818c89db-a88f-4514-9850-aac9a2754a62","054bd5ef-4750-46cd-b4da-44c620729a2c","ab25bdb5-d5e8-4aba-ba1b-645ac33b2980","a1addb1f-fd0b-4d65-be4c-4f173814627a","603553b0-06f2-49f0-845f-e81119db4e43"],"propsByKey":{"f4cc358f-7262-4cb8-897c-ab5f6904ace5":{"name":"mouse","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"9CcajzuFq36AzSwemKqKaZH6CUceuHSS","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/f4cc358f-7262-4cb8-897c-ab5f6904ace5.png"},"818c89db-a88f-4514-9850-aac9a2754a62":{"name":"bowl","sourceUrl":"assets/api/v1/animation-library/gamelab/cOGSlDoqgdwQj2GKjy0zPZdOIq0Ql_gS/category_food/bowl.png","frameSize":{"x":394,"y":277},"frameCount":1,"looping":true,"frameDelay":2,"version":"cOGSlDoqgdwQj2GKjy0zPZdOIq0Ql_gS","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":394,"y":277},"rootRelativePath":"assets/api/v1/animation-library/gamelab/cOGSlDoqgdwQj2GKjy0zPZdOIq0Ql_gS/category_food/bowl.png"},"054bd5ef-4750-46cd-b4da-44c620729a2c":{"name":"face","sourceUrl":"assets/api/v1/animation-library/gamelab/_Xscg5fB95TRoOqlt3745W6Gucfq7NCS/category_emoji/emoji_06.png","frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"_Xscg5fB95TRoOqlt3745W6Gucfq7NCS","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/_Xscg5fB95TRoOqlt3745W6Gucfq7NCS/category_emoji/emoji_06.png"},"ab25bdb5-d5e8-4aba-ba1b-645ac33b2980":{"name":"face1","sourceUrl":null,"frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":12,"version":".aD8uw_2j3io2XjyitZL2Hd_WuZp1P8H","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/ab25bdb5-d5e8-4aba-ba1b-645ac33b2980.png"},"a1addb1f-fd0b-4d65-be4c-4f173814627a":{"name":"creature","sourceUrl":"assets/api/v1/animation-library/gamelab/QZNgeG5hXDgxyr1.5bHcN2tb79RWzF6u/category_animals/creature_09.png","frameSize":{"x":326,"y":387},"frameCount":1,"looping":true,"frameDelay":2,"version":"QZNgeG5hXDgxyr1.5bHcN2tb79RWzF6u","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":326,"y":387},"rootRelativePath":"assets/api/v1/animation-library/gamelab/QZNgeG5hXDgxyr1.5bHcN2tb79RWzF6u/category_animals/creature_09.png"},"603553b0-06f2-49f0-845f-e81119db4e43":{"name":"creature1","sourceUrl":null,"frameSize":{"x":326,"y":387},"frameCount":1,"looping":true,"frameDelay":12,"version":"hOofAv1JPNjMQUU_d9UQ19yufU_Ni_gp","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":326,"y":387},"rootRelativePath":"assets/603553b0-06f2-49f0-845f-e81119db4e43.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var gameState = "serve";
var mouse = createSprite(200,200,10,10);
mouse.setAnimation("mouse");
var face1 = createSprite(50,50,20,20);
var face2 = createSprite(100,50,20,20);
var face3 = createSprite(150,50,20,20);
var face4 = createSprite(200,50,20,20);
var face5 = createSprite(250,50,20,20);
var face6 = createSprite(300,50,20,20);
var face7 = createSprite(350,50,20,20);
var face8 = createSprite(50,100,20,20);
var face9 = createSprite(100,100,20,20);
var face10 = createSprite(150,100,20,20);
var face11 = createSprite(200,100,20,20);
var face12 = createSprite(250,100,20,20);
var face13 = createSprite(300,100,20,20);
var face14 = createSprite(350,100,20,20);
var face15 = createSprite(50,150,20,20);
var face16 = createSprite(100,150,20,20);
var face17 = createSprite(150,150,20,20);
var face18 = createSprite(200,150,20,20);
var face19 = createSprite(250,150,20,20);
var face20 = createSprite(300,150,20,20);
var face21 = createSprite(350,150,20,20);
face1.shapeColor = "black";
face2.shapeColor = "black";
face3.shapeColor = "black";
face4.shapeColor = "black";
face5.shapeColor = "black";
face6.shapeColor = "black";
face7.shapeColor = "black";
face8.shapeColor = "black";
face9.shapeColor = "black";
face10.shapeColor = "black";
face11.shapeColor = "black";
face12.shapeColor = "black";
face13.shapeColor = "black";
face14.shapeColor = "black";
face15.shapeColor = "black";
face16.shapeColor = "black";
face17.shapeColor = "black";
face18.shapeColor = "black";
face19.shapeColor = "black";
face20.shapeColor = "black";
face21.shapeColor = "black";
mouse.scale = ("0.4")
function draw() {
  background("black");

  mouse.x = World.mouseX;
  mouse.y = World.mouseY;
  if(gameState == "serve")
  {
  text("Press space to continue.", 50, 300);
   if(keyDown("space"))
  {
  playSound("assets/category_app/app_menu_button_10.mp3");
  
  
  gameState = "lvl1";
  }
  
    
  }
  if(gameState == "lvl1")
  {
   face1.setAnimation("face");
   face2.setAnimation("face"); 
   face3.setAnimation("face"); 
   face4.setAnimation("face");
   face5.setAnimation("face"); 
   face6.setAnimation("face"); 
   face7.setAnimation("face");
   face8.setAnimation("face"); 
   face9.setAnimation("face"); 
   face10.setAnimation("face");
   face11.setAnimation("face"); 
   face12.setAnimation("face"); 
   face13.setAnimation("face1");
   face14.setAnimation("face"); 
   face15.setAnimation("face"); 
   face16.setAnimation("face");
   face17.setAnimation("face"); 
   face18.setAnimation("face"); 
   face19.setAnimation("face");
   face20.setAnimation("face"); 
   face21.setAnimation("face");
   face1.scale = "0.1";
   face2.scale = "0.1";
   face2.scale = "0.1";
   face3.scale = "0.1";
   face4.scale = "0.1";
   face5.scale = "0.1";
   face6.scale = "0.1";
   face7.scale = "0.1";
   face8.scale = "0.1";
   face9.scale = "0.1";
   face10.scale = "0.1";
   face11.scale = "0.1";
   face12.scale = "0.1";
   face13.scale = "0.1";
   face14.scale = "0.1";
   face15.scale = "0.1";
   face16.scale = "0.1";
   face17.scale = "0.1";
   face18.scale = "0.1";
   face19.scale = "0.1";
   face20.scale = "0.1";
   face21.scale = "0.1";
   text("Find the odd one out!", 150, 300);
   if(mouse.isTouching(face13))
   {
     playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3");
     face13.destroy();
     gameState = "lvl2";
   }
  }
    if(gameState == "lvl2")
  {
   face1.setAnimation("creature");
   face2.setAnimation("creature");
   face3.setAnimation("creature");
   face4.setAnimation("creature");
   face5.setAnimation("creature");
   face6.setAnimation("creature");
   face7.setAnimation("creature");
   face8.setAnimation("creature");
   face9.setAnimation("creature");
   face10.setAnimation("creature");
   face11.setAnimation("creature");
   face12.setAnimation("creature");
   face14.setAnimation("creature");
   face15.setAnimation("creature");
   face16.setAnimation("creature");
   face17.setAnimation("creature");
   face18.setAnimation("creature1");
   face19.setAnimation("creature");
   face20.setAnimation("creature");
   face21.setAnimation("creature");
  



   face1.scale = "0.1";
   face2.scale = "0.1";
   face2.scale = "0.1";
   face3.scale = "0.1";
   face4.scale = "0.1";
   face5.scale = "0.1";
   face6.scale = "0.1";
   face7.scale = "0.1";
   face8.scale = "0.1";
   face9.scale = "0.1";
   face10.scale = "0.1";
   face11.scale = "0.1";
   face12.scale = "0.1";
   face13.scale = "0.1";
   face14.scale = "0.1";
   face15.scale = "0.1";
   face16.scale = "0.1";
   face17.scale = "0.1";
   face18.scale = "0.1";
   face19.scale = "0.1";
   face20.scale = "0.1";
   face21.scale = "0.1";
   text("Find the odd one out!", 150, 300);
   if(mouse.isTouching(face18))
   {
     playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3");
     
     
     playSound("assets/yt1s.com---Happy-Upbeat-Background-Music.mp3", true);
    
    face1.destroy();
    face2.destroy();
    face3.destroy();
    face4.destroy();
    face5.destroy();
    face6.destroy();
    face7.destroy();
    face8.destroy();
    face9.destroy();
    face10.destroy();
    face11.destroy();
    face12.destroy();
    face14.destroy();
    face15.destroy();
    face16.destroy();
    face17.destroy();
    face18.destroy();
    face19.destroy();
    face20.destroy();
    face21.destroy();
   }
   
  
  }
  if(gameState == "victory")
  {
    

   
  }
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
