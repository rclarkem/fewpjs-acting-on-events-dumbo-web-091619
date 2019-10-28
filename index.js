let dodger = document.getElementById("dodger");
//
// document.addEventListener("keydown", function(e) {
//   console.log(e.key);
// });


//
function moveDodgerLeft(){
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
      if(left > 0){
        dodger.style.left = `${left - 1}px`;
      };
  }

  function moveDodgerRight(){
    let rightNumbers = dodger.style.left.replace("px", "");
    let right = parseInt(rightNumbers, 10);
    dodger.style.left = `${right + 1}px`;
      if(right > 0){
        dodger.style.right = `${right - 1}px`;
      };

};

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodger();
  } else if (e.key === "ArrowRight"){
    moveDodger();
  }
});
