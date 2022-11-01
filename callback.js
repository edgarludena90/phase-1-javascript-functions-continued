function runFiveMiles() {
  console.log("Go for a five-mile run");
}
runFiveMiles()
function liftWeights() {
  console.log("Pump iron");
}

function swimFortyLaps() {
  console.log("Swim 40 laps");
}
liftWeights()
swimFortyLaps()
function Monday() {
  runFiveMiles();
  liftWeights();
}
Monday()
function Monday() {
  exerciseRoutine(liftWeights);
}


function exerciseRoutine(postRunActivity) {
  runFiveMiles();
  postRunActivity();
}
function morningRoutine(exercise) {
  let breakfast;

  if (exercise === liftWeights) {
    breakfast = "protein bar";
  } else if (exercise === swimFortyLaps) {
    breakfast = "kale smoothie";
  } else {
    breakfast = "granola";
  }

  exerciseRoutine(exercise)
