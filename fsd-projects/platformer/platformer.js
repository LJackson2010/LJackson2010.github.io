$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(200, 168, 100, 80, "purple");  // bright purple for a finished platform
    createPlatform(500, 620, 200, 20, "blue");  // baby blue for a finished platform
    createPlatform(800, 500, 100, 50, "green");  // bold green for a finished platform
    createPlatform(900, 370, 200, 10);
    createPlatform(500, 500, 200, 10);
    createPlatform(900, 610, 200, 30, "orange");  //bright orange for a finished platform
    createPlatform(450, 300, 200, 10, "gold");  // gold for a finished platform
    createPlatform(1200, 232, 200, 10, "brown"); //brown for a finished platform





    // TODO 3 - Create Collectables
    createCollectable("steve", 1350, 50);
    createCollectable("diamond", 200, 100, 1, 0.8);
    createCollectable("kennedi", 80, 400,);
    createCollectable("max", 1300, 600);




    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 500);
    createCannon("top", 760, 440);
    createCannon("bottom", 1142, 500);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
