function start_game() {
    //   console.log("start_game() works");
    object.classList.add("start");
  }
  //окончание игры
  function finishGame() {
    alert("GAME OWER");
    object.classList.remove("start");
    gameowerSound.currentTime = 0;
    gameowerSound.play();
  }
  
  //промах
  function miss(event) {
    // console.log("miss() works");
    // event.target.id
    if (event.target.id == "area") {
      score--;
      document.title = `Score ${score}`;
  
      missSound.currentTime = 0;
      missSound.play();
    }
    if (score <= 0) {
      finishGame();
    }
  }
  
  // попадание по объекту
  function hit() {
    //   console.log("hit() works");
    score++;
    document.title = `Score ${score}`;
  
    object.classList.remove("start");
    void object.offsetWidth; // маги
    object.classList.add("start");
  
    change_object_background();
    change_object_position();
    hitSound.currentTime = 0;
    hitSound.play();
    sizeObject();
    speedObject();
  }
  //скорость обьекта при попадании
  function speedObject(){
    const speed = 3 - Math.random();
    object.style.animationDuration = `${speed}s`;
  }
  //при попадании размер обьекта
  function sizeObject() {
    const size = 40 + Math.random() * 40;
    object.style.width = `${size}px`;
  }
  
  //меняет цвет фона объета
  function change_object_background() {
    const colors = ["black", "brown", "violet", "yellow", "red"];
    const index = Math.floor(Math.random() * colors.length);
    // concole.log(colors[index]);
    object.style.background = colors[index];
  }
  //  меняем положение объекта по Х
  function change_object_position() {
    const random_offset = Math.random() * 340;
    object.style.left = `${random_offset}px`;
  }
  
  let score = 0;
  
  let object = document.querySelector("#object");

const hitSound = new Audio("sounds/877427.mp3");
const missSound = new Audio("sounds/ui_button_error.mp3");
const gameowerSound = new Audio("sounds/ai_button_error.mp3");