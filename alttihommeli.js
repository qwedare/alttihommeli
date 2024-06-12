function ask_thing_prompt(thing_to_ask, thing_to_ask_string) {
  for (var i = 0; i < 10; i++) {
    thing_to_ask = prompt(thing_to_ask_string, "0");
    if (thing_to_ask >= 0 || thing_to_ask <= 10) {
      i = 10;
    } else {
      i = 0;
    }
  }
  return thing_to_ask;
}

function ask_priority() {
  //user input for priorities
  dungeon_priority = ask_thing_prompt(dungeon_priority, "Dungeon 0-10: ");
  raid_priority = ask_thing_prompt(raid_priority, "Raid 0-10: ");
  pvp_priority = ask_thing_prompt(pvp_priority, "PvP 0-10: ");
  rotation_priority = ask_thing_prompt(rotation_priority, "Rotation 0-10: ");
  utility_priority = ask_thing_prompt(utility_priority, "Utility 0-10: ");
  world_priority = ask_thing_prompt(world_priority, "World 0-10: ");
  random_priority = ask_thing_prompt(random_priority, "Random fun 0-10: ");
  transmog_priority = ask_thing_prompt(transmog_priority, "Transmog 0-10: ");
}

function ask_rating() {
  dungeon_fun = ask_thing_prompt(dungeon_fun, "Dungeon 0-10: ");
  raid_fun = ask_thing_prompt(raid_fun, "Raid 0-10: ");
  pvp_fun = ask_thing_prompt(pvp_fun, "PvP 0-10: ");
  rotation_fun = ask_thing_prompt(rotation_fun, "Rotation 0-10: ");
  utility_fun = ask_thing_prompt(utility_fun, "Utility 0-10: ");
  world_fun = ask_thing_prompt(world_fun, "World 0-10: ");
  random_fun = ask_thing_prompt(random_fun, "Random fun 0-10: ");
  transmog_fun = ask_thing_prompt(transmog_fun, "Transmog 0-10: ");
}

function calculate_value(priority, fun) {
  value = priority * fun;
  return value;
}

function calculate_rating() {
  dungeon_rating = calculate_value(dungeon_priority, dungeon_fun);
  raid_rating = calculate_value(raid_priority, raid_fun);
  pvp_rating = calculate_value(pvp_priority, pvp_fun);
  rotation_rating = calculate_value(rotation_priority, rotation_fun);
  utility_rating = calculate_value(utility_priority, utility_fun);
  world_rating = calculate_value(world_priority, world_fun);
  random_rating = calculate_value(random_priority, random_fun);
  transmog_rating = calculate_value(transmog_priority, transmog_fun);
}

function calculate_total_value(
  value1,
  value2,
  value3,
  value4,
  value5,
  value6,
  value7,
  value8
) {
  total_value =
    (value1 + value2 + value3 + value4 + value5 + value6 + value7 + value8) *
    12.5;

  return total_value;
}

function get_total() {
  final_value = calculate_total_value(
    dungeon_rating,
    raid_rating,
    pvp_rating,
    rotation_rating,
    utility_rating,
    world_rating,
    random_rating,
    transmog_rating
  );
  return final_value;
}

/*

Page 1 - Choose game

*/

var game = document.getElementById("game");
var gameOut = document.getElementById("gameOut");
var gameName = "Wouwi";
var classOrJob = document.getElementById("classOrJob");
var classOrJobs = document.getElementById("classOrJobs");
var nameClassOrJobs = document.getElementById("nameClassOrJobs");
gameOut.innerHTML = gameName;
classOrJob.innerHTML = "classit";
classOrJobs.innerHTML = "classia";
nameClassOrJobs.innerHTML = "classit";
game.oninput = function () {
  if (this.value == 1) {
    gameName = "Wouwi";
    gameOut.innerHTML = gameName;
    classOrJob.innerHTML = "classit";
    classOrJobs.innerHTML = "classia";
    nameClassOrJobs.innerHTML = "classit";
  }
  if (this.value == 2) {
    gameName = "XIV";
    gameOut.innerHTML = gameName;
    classOrJob.innerHTML = "jobit";
    classOrJobs.innerHTML = "jobia";
    nameClassOrJobs.innerHTML = "jobit";
  }
};

/*

Page 2 - Choose how many jobs to compare

*/

var classOrJobAmount = document.getElementById("classOrJobAmount");
var classOrJobAmountOut = document.getElementById("classOrJobAmountOut");
var numberOfJobs = 1;
classOrJobAmountOut.innerHTML = classOrJobAmount.value;
classOrJobAmount.oninput = function () {
  classOrJobAmountOut.innerHTML = this.value;
  numberOfJobs = parseInt(this.value);
};

var job1Name = "";
var job2Name = "";
var job3Name = "";
var job4Name = "";
var job5Name = "";
var job6Name = "";
var job7Name = "";
var job8Name = "";
var job9Name = "";
var job10Name = "";
var job1HasName = false;
var job2HasName = false;
var job3HasName = false;
var job4HasName = false;
var job5HasName = false;
var job6HasName = false;
var job7HasName = false;
var job8HasName = false;
var job9HasName = false;
var job10HasName = false;
var job1Input = document.getElementById("job1Input");
var job2Input = document.getElementById("job2Input");
var job3Input = document.getElementById("job3Input");
var job4Input = document.getElementById("job4Input");
var job5Input = document.getElementById("job5Input");
var job6Input = document.getElementById("job6Input");
var job7Input = document.getElementById("job7Input");
var job8Input = document.getElementById("job8Input");
var job9Input = document.getElementById("job9Input");
var job10Input = document.getElementById("job10Input");
job1Input.oninput = function () {
  if (typeof job1Name == "string") {
    job1Name = this.value;
  } else {
    job1Name = string(this.value);
  }
  if (job1Name != "") {
    job1HasName = true;
  } else {
    job1Name = false;
  }
};
job2Input.oninput = function () {
  if (typeof job2Name == "string") {
    job2Name = this.value;
  } else {
    job2Name = string(this.value);
  }
  if (job2Name != "") {
    job2HasName = true;
  } else {
    job2Name = false;
  }
};
job3Input.oninput = function () {
  if (typeof job3Name == "string") {
    job3Name = this.value;
  } else {
    job3Name = string(this.value);
  }
  if (job3Name != "") {
    job3HasName = true;
  } else {
    job3Name = false;
  }
};
job4Input.oninput = function () {
  if (typeof job4Name == "string") {
    job4Name = this.value;
  } else {
    job4Name = string(this.value);
  }
  if (job4Name != "") {
    job4HasName = true;
  } else {
    job4Name = false;
  }
};
job5Input.oninput = function () {
  if (typeof job5Name == "string") {
    job5Name = this.value;
  } else {
    job5Name = string(this.value);
  }
  if (job5Name != "") {
    job5HasName = true;
  } else {
    job5Name = false;
  }
};
job6Input.oninput = function () {
  if (typeof job6Name == "string") {
    job6Name = this.value;
  } else {
    job6Name = string(this.value);
  }
  if (job6Name != "") {
    job6HasName = true;
  } else {
    job6Name = false;
  }
};
job7Input.oninput = function () {
  if (typeof job7Name == "string") {
    job7Name = this.value;
  } else {
    job7Name = string(this.value);
  }
  if (job7Name != "") {
    job7HasName = true;
  } else {
    job7Name = false;
  }
};
job8Input.oninput = function () {
  if (typeof job8Name == "string") {
    job8Name = this.value;
  } else {
    job8Name = string(this.value);
  }
  if (job8Name != "") {
    job8HasName = true;
  } else {
    job8Name = false;
  }
};
job9Input.oninput = function () {
  if (typeof job9Name == "string") {
    job9Name = this.value;
  } else {
    job9Name = string(this.value);
  }
  if (job9Name != "") {
    job9HasName = true;
  } else {
    job9Name = false;
  }
};
job10Input.oninput = function () {
  if (typeof job10Name == "string") {
    job10Name = this.value;
  } else {
    job10Name = string(this.value);
  }
  if (job10Name != "") {
    job10HasName = true;
  } else {
    job10Name = false;
  }
};

/*

Page 3 - Choose priorities

*/

var dungeonPriority = document.getElementById("dungeonPriority");
var dungeonPriorityOut = document.getElementById("dungeonPriorityOut");
dungeonPriorityOut.innerHTML = dungeonPriority.value;
dungeonPriority.oninput = function () {
  dungeonPriorityOut.innerHTML = this.value;
};

var raidPriority = document.getElementById("raidPriority");
var raidPriorityOut = document.getElementById("raidPriorityOut");
raidPriorityOut.innerHTML = raidPriority.value;
raidPriority.oninput = function () {
  raidPriorityOut.innerHTML = this.value;
};

var pvpPriority = document.getElementById("pvpPriority");
var pvpPriorityOut = document.getElementById("pvpPriorityOut");
pvpPriorityOut.innerHTML = pvpPriority.value;
pvpPriority.oninput = function () {
  pvpPriorityOut.innerHTML = this.value;
};

var rotationPriority = document.getElementById("rotationPriority");
var rotationPriorityOut = document.getElementById("rotationPriorityOut");
rotationPriorityOut.innerHTML = rotationPriority.value;
rotationPriority.oninput = function () {
  rotationPriorityOut.innerHTML = this.value;
};

var worldPriority = document.getElementById("worldPriority");
var worldPriorityOut = document.getElementById("worldPriorityOut");
worldPriorityOut.innerHTML = worldPriority.value;
worldPriority.oninput = function () {
  worldPriorityOut.innerHTML = this.value;
};

var randomPriority = document.getElementById("randomPriority");
var randomPriorityOut = document.getElementById("randomPriorityOut");
randomPriorityOut.innerHTML = randomPriority.value;
randomPriority.oninput = function () {
  randomPriorityOut.innerHTML = this.value;
};

var transmogPriority = document.getElementById("transmogPriority");
var transmogPriorityOut = document.getElementById("transmogPriorityOut");
transmogPriorityOut.innerHTML = transmogPriority.value;
transmogPriority.oninput = function () {
  transmogPriorityOut.innerHTML = this.value;
};

/*

Page 4 - Rate fun

*/

var dungeonFun = document.getElementById("dungeonFun");
var dungeonFunOut = document.getElementById("dungeonFunOut");
dungeonFunOut.innerHTML = dungeonFun.value;
dungeonFun.oninput = function () {
  dungeonFunOut.innerHTML = this.value;
};

var raidFun = document.getElementById("raidFun");
var raidFunOut = document.getElementById("raidFunOut");
raidFunOut.innerHTML = raidFun.value;
raidFun.oninput = function () {
  raidFunOut.innerHTML = this.value;
};

var pvpFun = document.getElementById("pvpFun");
var pvpFunOut = document.getElementById("pvpFunOut");
pvpFunOut.innerHTML = pvpFun.value;
pvpFun.oninput = function () {
  pvpFunOut.innerHTML = this.value;
};

var rotationFun = document.getElementById("rotationFun");
var rotationFunOut = document.getElementById("rotationFunOut");
rotationFunOut.innerHTML = rotationFun.value;
rotationFun.oninput = function () {
  rotationFunOut.innerHTML = this.value;
};

var worldFun = document.getElementById("worldFun");
var worldFunOut = document.getElementById("worldFunOut");
worldFunOut.innerHTML = worldFun.value;
worldFun.oninput = function () {
  worldFunOut.innerHTML = this.value;
};

var randomFun = document.getElementById("randomFun");
var randomFunOut = document.getElementById("randomFunOut");
randomFunOut.innerHTML = randomFun.value;
randomFun.oninput = function () {
  randomFunOut.innerHTML = this.value;
};

var transmogFun = document.getElementById("transmogFun");
var transmogFunOut = document.getElementById("transmogFunOut");
transmogFunOut.innerHTML = transmogFun.value;
transmogFun.oninput = function () {
  transmogFunOut.innerHTML = this.value;
};

//PAGE LOGIC
var pageNumber = 0;
document.getElementById("startSlider").style.display = "none";
document.getElementById("askNames").style.display = "none";
document.getElementById("prioritySlider").style.display = "none";
document.getElementById("funSlider").style.display = "none";
function showPrevious() {
  document.getElementById("startSlider").style.display = "none";
  document.getElementById("askNames").style.display = "none";
  document.getElementById("job1").style.display = "none";
  document.getElementById("job2").style.display = "none";
  document.getElementById("job3").style.display = "none";
  document.getElementById("job4").style.display = "none";
  document.getElementById("job5").style.display = "none";
  document.getElementById("job6").style.display = "none";
  document.getElementById("job7").style.display = "none";
  document.getElementById("job8").style.display = "none";
  document.getElementById("job9").style.display = "none";
  document.getElementById("job10").style.display = "none";
  document.getElementById("prioritySlider").style.display = "none";
  document.getElementById("funSlider").style.display = "none";
  if (pageNumber >= 1) {
    pageNumber = pageNumber - 1;
  }
  if (pageNumber <= 1) {
    document.getElementById("startProcess").style.display = "block";
  }
  switch (pageNumber) {
    case 0:
      document.getElementById("startProcess").style.display = "block";
      break;
    case 1:
      document.getElementById("startSlider").style.display = "block";
      break;
    case 2:
      document.getElementById("askNames").style.display = "block";
      switch (numberOfJobs) {
        case 10:
          document.getElementById("job10").style.display = "block";
        case 9:
          document.getElementById("job9").style.display = "block";
        case 8:
          document.getElementById("job8").style.display = "block";
        case 7:
          document.getElementById("job7").style.display = "block";
        case 6:
          document.getElementById("job6").style.display = "block";
        case 5:
          document.getElementById("job5").style.display = "block";
        case 4:
          document.getElementById("job4").style.display = "block";
        case 3:
          document.getElementById("job3").style.display = "block";
        case 2:
          document.getElementById("job2").style.display = "block";
        case 1:
          document.getElementById("job1").style.display = "block";
          break;
      }
      break;
    case 3:
      document.getElementById("prioritySlider").style.display = "block";
      break;
    case 4:
      document.getElementById("funSlider").style.display = "block";
      break;
  }
}
function showNext() {
  if (pageNumber <= 3) {
    pageNumber = pageNumber + 1;
  }
  if (pageNumber >= 2) {
    document.getElementById("startProcess").style.display = "none";
  }
  document.getElementById("startSlider").style.display = "none";
  document.getElementById("askNames").style.display = "none";
  document.getElementById("job1").style.display = "none";
  document.getElementById("job2").style.display = "none";
  document.getElementById("job3").style.display = "none";
  document.getElementById("job4").style.display = "none";
  document.getElementById("job5").style.display = "none";
  document.getElementById("job6").style.display = "none";
  document.getElementById("job7").style.display = "none";
  document.getElementById("job8").style.display = "none";
  document.getElementById("job9").style.display = "none";
  document.getElementById("job10").style.display = "none";
  document.getElementById("prioritySlider").style.display = "none";
  document.getElementById("funSlider").style.display = "none";
  switch (pageNumber) {
    case 0:
      document.getElementById("startProcess").style.display = "block";
      break;
    case 1:
      document.getElementById("startSlider").style.display = "block";
      break;
    case 2:
      document.getElementById("askNames").style.display = "block";
      switch (numberOfJobs) {
        case 10:
          document.getElementById("job10").style.display = "block";
        case 9:
          document.getElementById("job9").style.display = "block";
        case 8:
          document.getElementById("job8").style.display = "block";
        case 7:
          document.getElementById("job7").style.display = "block";
        case 6:
          document.getElementById("job6").style.display = "block";
        case 5:
          document.getElementById("job5").style.display = "block";
        case 4:
          document.getElementById("job4").style.display = "block";
        case 3:
          document.getElementById("job3").style.display = "block";
        case 2:
          document.getElementById("job2").style.display = "block";
        case 1:
          document.getElementById("job1").style.display = "block";
          break;
      }
      break;
    case 3:
      document.getElementById("prioritySlider").style.display = "block";
      break;
    case 4:
      document.getElementById("funSlider").style.display = "block";
      break;
    case 5:
      break;
  }
}
