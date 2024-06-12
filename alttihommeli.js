/*

Page 1 - Choose game

*/

var game = document.getElementById("game");
var gameOut = document.getElementById("gameOut");
var gameName = "Wouwi";
var classOrJob = document.getElementById("classOrJob");
var classOrJobs = document.getElementById("classOrJobs");
var nameClassOrJobs = document.getElementById("nameClassOrJobs");

var glamourTransmog1 = document.getElementById("glamourTransmog1");
var glamourTransmog2 = document.getElementById("glamourTransmog2");
var glamourTransmog3 = document.getElementById("glamourTransmog3");
var glamourTransmog4 = document.getElementById("glamourTransmog4");
var glamourTransmog5 = document.getElementById("glamourTransmog5");
var glamourTransmog6 = document.getElementById("glamourTransmog6");
var glamourTransmog7 = document.getElementById("glamourTransmog7");
var glamourTransmog8 = document.getElementById("glamourTransmog8");
var glamourTransmog9 = document.getElementById("glamourTransmog9");
var glamourTransmog10 = document.getElementById("glamourTransmog10");
var glamourTransmog11 = document.getElementById("glamourTransmog11");

gameOut.innerHTML = gameName;
classOrJob.innerHTML = "classit";
classOrJobs.innerHTML = "classia";
nameClassOrJobs.innerHTML = "classit";
glamourTransmog1.innerHTML = "Transmog";
glamourTransmog2.innerHTML = "Transmog";
glamourTransmog3.innerHTML = "Transmog";
glamourTransmog4.innerHTML = "Transmog";
glamourTransmog5.innerHTML = "Transmog";
glamourTransmog6.innerHTML = "Transmog";
glamourTransmog7.innerHTML = "Transmog";
glamourTransmog8.innerHTML = "Transmog";
glamourTransmog9.innerHTML = "Transmog";
glamourTransmog10.innerHTML = "Transmog";
glamourTransmog11.innerHTML = "Transmog";

game.oninput = function () {
  if (this.value == 1) {
    gameName = "Wouwi";
    gameOut.innerHTML = gameName;
    classOrJob.innerHTML = "classit";
    classOrJobs.innerHTML = "classia";
    nameClassOrJobs.innerHTML = "classit";
    glamourTransmog1.innerHTML = "Transmog";
    glamourTransmog2.innerHTML = "Transmog";
    glamourTransmog3.innerHTML = "Transmog";
    glamourTransmog4.innerHTML = "Transmog";
    glamourTransmog5.innerHTML = "Transmog";
    glamourTransmog6.innerHTML = "Transmog";
    glamourTransmog7.innerHTML = "Transmog";
    glamourTransmog8.innerHTML = "Transmog";
    glamourTransmog9.innerHTML = "Transmog";
    glamourTransmog10.innerHTML = "Transmog";
    glamourTransmog11.innerHTML = "Transmog";
  }
  if (this.value == 2) {
    gameName = "XIV";
    gameOut.innerHTML = gameName;
    classOrJob.innerHTML = "jobit";
    classOrJobs.innerHTML = "jobia";
    nameClassOrJobs.innerHTML = "jobit";
    glamourTransmog1.innerHTML = "Glamour";
    glamourTransmog2.innerHTML = "Glamour";
    glamourTransmog3.innerHTML = "Glamour";
    glamourTransmog4.innerHTML = "Glamour";
    glamourTransmog5.innerHTML = "Glamour";
    glamourTransmog6.innerHTML = "Glamour";
    glamourTransmog7.innerHTML = "Glamour";
    glamourTransmog8.innerHTML = "Glamour";
    glamourTransmog9.innerHTML = "Glamour";
    glamourTransmog10.innerHTML = "Glamour";
    glamourTransmog11.innerHTML = "Glamour";
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

var job1Name = "Nimi";
var job2Name = "Nimi";
var job3Name = "Nimi";
var job4Name = "Nimi";
var job5Name = "Nimi";
var job6Name = "Nimi";
var job7Name = "Nimi";
var job8Name = "Nimi";
var job9Name = "Nimi";
var job10Name = "Nimi";

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

var classOrJob1 = document.getElementById("classOrJob1");
var classOrJob2 = document.getElementById("classOrJob2");
var classOrJob3 = document.getElementById("classOrJob3");
var classOrJob4 = document.getElementById("classOrJob4");
var classOrJob5 = document.getElementById("classOrJob5");
var classOrJob6 = document.getElementById("classOrJob6");
var classOrJob7 = document.getElementById("classOrJob7");
var classOrJob8 = document.getElementById("classOrJob8");
var classOrJob9 = document.getElementById("classOrJob9");
var classOrJob10 = document.getElementById("classOrJob10");

var classOrJob1ResultName = document.getElementById("classOrJob1ResultName");
var classOrJob2ResultName = document.getElementById("classOrJob2ResultName");
var classOrJob3ResultName = document.getElementById("classOrJob3ResultName");
var classOrJob4ResultName = document.getElementById("classOrJob4ResultName");
var classOrJob5ResultName = document.getElementById("classOrJob5ResultName");
var classOrJob6ResultName = document.getElementById("classOrJob6ResultName");
var classOrJob7ResultName = document.getElementById("classOrJob7ResultName");
var classOrJob8ResultName = document.getElementById("classOrJob8ResultName");
var classOrJob9ResultName = document.getElementById("classOrJob9ResultName");
var classOrJob10ResultName = document.getElementById("classOrJob10ResultName");

job1Input.value = "Nimi";
job2Input.value = "Nimi";
job3Input.value = "Nimi";
job4Input.value = "Nimi";
job5Input.value = "Nimi";
job6Input.value = "Nimi";
job7Input.value = "Nimi";
job8Input.value = "Nimi";
job9Input.value = "Nimi";
job10Input.value = "Nimi";

classOrJob1.innerHTML = job1Name;
classOrJob2.innerHTML = job2Name;
classOrJob3.innerHTML = job3Name;
classOrJob4.innerHTML = job4Name;
classOrJob5.innerHTML = job5Name;
classOrJob6.innerHTML = job6Name;
classOrJob7.innerHTML = job7Name;
classOrJob8.innerHTML = job8Name;
classOrJob9.innerHTML = job9Name;
classOrJob10.innerHTML = job10Name;

classOrJob1ResultName.innerHTML = job1Name;
classOrJob2ResultName.innerHTML = job2Name;
classOrJob3ResultName.innerHTML = job3Name;
classOrJob4ResultName.innerHTML = job4Name;
classOrJob5ResultName.innerHTML = job5Name;
classOrJob6ResultName.innerHTML = job6Name;
classOrJob7ResultName.innerHTML = job7Name;
classOrJob8ResultName.innerHTML = job8Name;
classOrJob9ResultName.innerHTML = job9Name;
classOrJob10ResultName.innerHTML = job10Name;

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
  classOrJob1.innerHTML = job1Name;
  classOrJob1ResultName.innerHTML = job1Name;
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
  classOrJob2.innerHTML = job2Name;
  classOrJob2ResultName.innerHTML = job2Name;
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
  classOrJob3.innerHTML = job3Name;
  classOrJob3ResultName.innerHTML = job3Name;
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
  classOrJob4.innerHTML = job4Name;
  classOrJob4ResultName.innerHTML = job4Name;
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
  classOrJob5.innerHTML = job5Name;
  classOrJob5ResultName.innerHTML = job5Name;
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
  classOrJob6.innerHTML = job6Name;
  classOrJob6ResultName.innerHTML = job6Name;
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
  classOrJob7.innerHTML = job7Name;
  classOrJob7ResultName.innerHTML = job7Name;
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
  classOrJob8.innerHTML = job8Name;
  classOrJob8ResultName.innerHTML = job8Name;
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
  classOrJob9.innerHTML = job9Name;
  classOrJob9ResultName.innerHTML = job9Name;
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
  classOrJob10.innerHTML = job10Name;
  classOrJob10ResultName.innerHTML = job10Name;
};

/*

Page 3 - Choose priorities

*/

var dungeonPriority = document.getElementById("dungeonPriority");
var dungeonPriorityOut = document.getElementById("dungeonPriorityOut");
var dungeonPriorityValue = 5;
dungeonPriorityOut.innerHTML = dungeonPriority.value;
dungeonPriority.oninput = function () {
  dungeonPriorityOut.innerHTML = this.value;
  dungeonPriorityValue = this.value;
};

var raidPriority = document.getElementById("raidPriority");
var raidPriorityOut = document.getElementById("raidPriorityOut");
var raidPriorityValue = 5;
raidPriorityOut.innerHTML = raidPriority.value;
raidPriority.oninput = function () {
  raidPriorityOut.innerHTML = this.value;
  raidPriorityValue = this.value;
};

var pvpPriority = document.getElementById("pvpPriority");
var pvpPriorityOut = document.getElementById("pvpPriorityOut");
var pvpPriorityValue = 5;
pvpPriorityOut.innerHTML = pvpPriority.value;
pvpPriority.oninput = function () {
  pvpPriorityOut.innerHTML = this.value;
  pvpPriorityValue = this.value;
};

var rotationPriority = document.getElementById("rotationPriority");
var rotationPriorityOut = document.getElementById("rotationPriorityOut");
var rotationPriorityValue = 5;
rotationPriorityOut.innerHTML = rotationPriority.value;
rotationPriority.oninput = function () {
  rotationPriorityOut.innerHTML = this.value;
  rotationPriorityValue = this.value;
};

var worldPriority = document.getElementById("worldPriority");
var worldPriorityOut = document.getElementById("worldPriorityOut");
var worldPriorityValue = 5;
worldPriorityOut.innerHTML = worldPriority.value;
worldPriority.oninput = function () {
  worldPriorityOut.innerHTML = this.value;
  worldPriorityValue = this.value;
};

var randomPriority = document.getElementById("randomPriority");
var randomPriorityOut = document.getElementById("randomPriorityOut");
var randomPriorityValue = 5;
randomPriorityOut.innerHTML = randomPriority.value;
randomPriority.oninput = function () {
  randomPriorityOut.innerHTML = this.value;
  randomPriorityValue = this.value;
};

var transmogPriority = document.getElementById("transmogPriority");
var transmogPriorityOut = document.getElementById("transmogPriorityOut");
var transmogPriorityValue = 5;
transmogPriorityOut.innerHTML = transmogPriority.value;
transmogPriority.oninput = function () {
  transmogPriorityOut.innerHTML = this.value;
  transmogPriorityValue = this.value;
};

/*

Page 4 - Rate fun

*/

/*

Fun 1 - Page 4

*/
var dungeonFun1 = document.getElementById("dungeonFun1");
var dungeonFun1Out = document.getElementById("dungeonFun1Out");
var dungeonFun1Value = 5;
dungeonFun1Out.innerHTML = dungeonFun1.value;
dungeonFun1.oninput = function () {
  dungeonFun1Out.innerHTML = this.value;
  dungeonFun1Value = parseInt(this.value);
};
var raidFun1 = document.getElementById("raidFun1");
var raidFun1Out = document.getElementById("raidFun1Out");
var raidFun1Value = 5;
raidFun1Out.innerHTML = raidFun1.value;
raidFun1.oninput = function () {
  raidFun1Out.innerHTML = this.value;
  raidFun1Value = parseInt(this.value);
};
var pvpFun1 = document.getElementById("pvpFun1");
var pvpFun1Out = document.getElementById("pvpFun1Out");
var pvpFun1Value = 5;
pvpFun1Out.innerHTML = pvpFun1.value;
pvpFun1.oninput = function () {
  pvpFun1Out.innerHTML = this.value;
  pvpFun1Value = parseInt(this.value);
};
var rotationFun1 = document.getElementById("rotationFun1");
var rotationFun1Out = document.getElementById("rotationFun1Out");
var rotationFun1Value = 5;
rotationFun1Out.innerHTML = rotationFun1.value;
rotationFun1.oninput = function () {
  rotationFun1Out.innerHTML = this.value;
  rotationFun1Value = parseInt(this.value);
};
var worldFun1 = document.getElementById("worldFun1");
var worldFun1Out = document.getElementById("worldFun1Out");
var worldFun1Value = 5;
worldFun1Out.innerHTML = worldFun1.value;
worldFun1.oninput = function () {
  worldFun1Out.innerHTML = this.value;
  worldFun1Value = parseInt(this.value);
};
var randomFun1 = document.getElementById("randomFun1");
var randomFun1Out = document.getElementById("randomFun1Out");
var randomFun1Value = 5;
randomFun1Out.innerHTML = randomFun1.value;
randomFun1.oninput = function () {
  randomFun1Out.innerHTML = this.value;
  randomFun1Value = parseInt(this.value);
};
var transmogFun1 = document.getElementById("transmogFun1");
var transmogFun1Out = document.getElementById("transmogFun1Out");
var transmogFun1Value = 5;
transmogFun1Out.innerHTML = transmogFun1.value;
transmogFun1.oninput = function () {
  transmogFun1Out.innerHTML = this.value;
  transmogFun1Value = parseInt(this.value);
};
/*

Fun 2 - Page 5

*/
var dungeonFun2 = document.getElementById("dungeonFun2");
var dungeonFun2Out = document.getElementById("dungeonFun2Out");
var dungeonFun2Value = 5;
dungeonFun2Out.innerHTML = dungeonFun2.value;
dungeonFun2.oninput = function () {
  dungeonFun2Out.innerHTML = this.value;
  dungeonFun2Value = parseInt(this.value);
};
var raidFun2 = document.getElementById("raidFun2");
var raidFun2Out = document.getElementById("raidFun2Out");
var raidFun2Value = 5;
raidFun2Out.innerHTML = raidFun2.value;
raidFun2.oninput = function () {
  raidFun2Out.innerHTML = this.value;
  raidFun2Value = parseInt(this.value);
};
var pvpFun2 = document.getElementById("pvpFun2");
var pvpFun2Out = document.getElementById("pvpFun2Out");
var pvpFun2Value = 5;
pvpFun2Out.innerHTML = pvpFun2.value;
pvpFun2.oninput = function () {
  pvpFun2Out.innerHTML = this.value;
  pvpFun2Value = parseInt(this.value);
};
var rotationFun2 = document.getElementById("rotationFun2");
var rotationFun2Out = document.getElementById("rotationFun2Out");
var rotationFun2Value = 5;
rotationFun2Out.innerHTML = rotationFun2.value;
rotationFun2.oninput = function () {
  rotationFun2Out.innerHTML = this.value;
  rotationFun2Value = parseInt(this.value);
};
var worldFun2 = document.getElementById("worldFun2");
var worldFun2Out = document.getElementById("worldFun2Out");
var worldFun2Value = 5;
worldFun2Out.innerHTML = worldFun2.value;
worldFun2.oninput = function () {
  worldFun2Out.innerHTML = this.value;
  worldFun2Value = parseInt(this.value);
};
var randomFun2 = document.getElementById("randomFun2");
var randomFun2Out = document.getElementById("randomFun2Out");
var randomFun2Value = 5;
randomFun2Out.innerHTML = randomFun2.value;
randomFun2.oninput = function () {
  randomFun2Out.innerHTML = this.value;
  randomFun2Value = parseInt(this.value);
};
var transmogFun2 = document.getElementById("transmogFun2");
var transmogFun2Out = document.getElementById("transmogFun2Out");
var transmogFun2Value = 5;
transmogFun2Out.innerHTML = transmogFun2.value;
transmogFun2.oninput = function () {
  transmogFun2Out.innerHTML = this.value;
  transmogFun2Value = parseInt(this.value);
};
/*

Fun 3 - Page 6

*/
var dungeonFun3 = document.getElementById("dungeonFun3");
var dungeonFun3Out = document.getElementById("dungeonFun3Out");
var dungeonFun3Value = 5;
dungeonFun3Out.innerHTML = dungeonFun3.value;
dungeonFun3.oninput = function () {
  dungeonFun3Out.innerHTML = this.value;
  dungeonFun3Value = parseInt(this.value);
};
var raidFun3 = document.getElementById("raidFun3");
var raidFun3Out = document.getElementById("raidFun3Out");
var raidFun3Value = 5;
raidFun3Out.innerHTML = raidFun3.value;
raidFun3.oninput = function () {
  raidFun3Out.innerHTML = this.value;
  raidFun3Value = parseInt(this.value);
};
var pvpFun3 = document.getElementById("pvpFun3");
var pvpFun3Out = document.getElementById("pvpFun3Out");
var pvpFun3Value = 5;
pvpFun3Out.innerHTML = pvpFun3.value;
pvpFun3.oninput = function () {
  pvpFun3Out.innerHTML = this.value;
  pvpFun3Value = parseInt(this.value);
};
var rotationFun3 = document.getElementById("rotationFun3");
var rotationFun3Out = document.getElementById("rotationFun3Out");
var rotationFun3Value = 5;
rotationFun3Out.innerHTML = rotationFun3.value;
rotationFun3.oninput = function () {
  rotationFun3Out.innerHTML = this.value;
  rotationFun3Value = parseInt(this.value);
};
var worldFun3 = document.getElementById("worldFun3");
var worldFun3Out = document.getElementById("worldFun3Out");
var worldFun3Value = 5;
worldFun3Out.innerHTML = worldFun3.value;
worldFun3.oninput = function () {
  worldFun3Out.innerHTML = this.value;
  worldFun3Value = parseInt(this.value);
};
var randomFun3 = document.getElementById("randomFun3");
var randomFun3Out = document.getElementById("randomFun3Out");
var randomFun3Value = 5;
randomFun3Out.innerHTML = randomFun3.value;
randomFun3.oninput = function () {
  randomFun3Out.innerHTML = this.value;
  randomFun3Value = parseInt(this.value);
};
var transmogFun3 = document.getElementById("transmogFun3");
var transmogFun3Out = document.getElementById("transmogFun3Out");
var transmogFun3Value = 5;
transmogFun3Out.innerHTML = transmogFun3.value;
transmogFun3.oninput = function () {
  transmogFun3Out.innerHTML = this.value;
  transmogFun3Value = parseInt(this.value);
};
/*

Fun 4 - Page 7

*/
var dungeonFun4 = document.getElementById("dungeonFun4");
var dungeonFun4Out = document.getElementById("dungeonFun4Out");
var dungeonFun4Value = 5;
dungeonFun4Out.innerHTML = dungeonFun4.value;
dungeonFun4.oninput = function () {
  dungeonFun4Out.innerHTML = this.value;
  dungeonFun4Value = parseInt(this.value);
};
var raidFun4 = document.getElementById("raidFun4");
var raidFun4Out = document.getElementById("raidFun4Out");
var raidFun4Value = 5;
raidFun4Out.innerHTML = raidFun4.value;
raidFun4.oninput = function () {
  raidFun4Out.innerHTML = this.value;
  raidFun4Value = parseInt(this.value);
};
var pvpFun4 = document.getElementById("pvpFun4");
var pvpFun4Out = document.getElementById("pvpFun4Out");
var pvpFun4Value = 5;
pvpFun4Out.innerHTML = pvpFun4.value;
pvpFun4.oninput = function () {
  pvpFun4Out.innerHTML = this.value;
  pvpFun4Value = parseInt(this.value);
};
var rotationFun4 = document.getElementById("rotationFun4");
var rotationFun4Out = document.getElementById("rotationFun4Out");
var rotationFun4Value = 5;
rotationFun4Out.innerHTML = rotationFun4.value;
rotationFun4.oninput = function () {
  rotationFun4Out.innerHTML = this.value;
  rotationFun4Value = parseInt(this.value);
};
var worldFun4 = document.getElementById("worldFun4");
var worldFun4Out = document.getElementById("worldFun4Out");
var worldFun4Value = 5;
worldFun4Out.innerHTML = worldFun4.value;
worldFun4.oninput = function () {
  worldFun4Out.innerHTML = this.value;
  worldFun4Value = parseInt(this.value);
};
var randomFun4 = document.getElementById("randomFun4");
var randomFun4Out = document.getElementById("randomFun4Out");
var randomFun4Value = 5;
randomFun4Out.innerHTML = randomFun4.value;
randomFun4.oninput = function () {
  randomFun4Out.innerHTML = this.value;
  randomFun4Value = parseInt(this.value);
};
var transmogFun4 = document.getElementById("transmogFun4");
var transmogFun4Out = document.getElementById("transmogFun4Out");
var transmogFun4Value = 5;
transmogFun4Out.innerHTML = transmogFun4.value;
transmogFun4.oninput = function () {
  transmogFun4Out.innerHTML = this.value;
  transmogFun4Value = parseInt(this.value);
};
/*

Fun 5 - Page 8

*/
var dungeonFun5 = document.getElementById("dungeonFun5");
var dungeonFun5Out = document.getElementById("dungeonFun5Out");
var dungeonFun5Value = 5;
dungeonFun5Out.innerHTML = dungeonFun5.value;
dungeonFun5.oninput = function () {
  dungeonFun5Out.innerHTML = this.value;
  dungeonFun5Value = parseInt(this.value);
};
var raidFun5 = document.getElementById("raidFun5");
var raidFun5Out = document.getElementById("raidFun5Out");
var raidFun5Value = 5;
raidFun5Out.innerHTML = raidFun5.value;
raidFun5.oninput = function () {
  raidFun5Out.innerHTML = this.value;
  raidFun5Value = parseInt(this.value);
};
var pvpFun5 = document.getElementById("pvpFun5");
var pvpFun5Out = document.getElementById("pvpFun5Out");
var pvpFun5Value = 5;
pvpFun5Out.innerHTML = pvpFun5.value;
pvpFun5.oninput = function () {
  pvpFun5Out.innerHTML = this.value;
  pvpFun5Value = parseInt(this.value);
};
var rotationFun5 = document.getElementById("rotationFun5");
var rotationFun5Out = document.getElementById("rotationFun5Out");
var rotationFun5Value = 5;
rotationFun5Out.innerHTML = rotationFun5.value;
rotationFun5.oninput = function () {
  rotationFun5Out.innerHTML = this.value;
  rotationFun5Value = parseInt(this.value);
};
var worldFun5 = document.getElementById("worldFun5");
var worldFun5Out = document.getElementById("worldFun5Out");
var worldFun5Value = 5;
worldFun5Out.innerHTML = worldFun5.value;
worldFun5.oninput = function () {
  worldFun5Out.innerHTML = this.value;
  worldFun5Value = parseInt(this.value);
};
var randomFun5 = document.getElementById("randomFun5");
var randomFun5Out = document.getElementById("randomFun5Out");
var randomFun5Value = 5;
randomFun5Out.innerHTML = randomFun5.value;
randomFun5.oninput = function () {
  randomFun5Out.innerHTML = this.value;
  randomFun5Value = parseInt(this.value);
};
var transmogFun5 = document.getElementById("transmogFun5");
var transmogFun5Out = document.getElementById("transmogFun5Out");
var transmogFun5Value = 5;
transmogFun5Out.innerHTML = transmogFun5.value;
transmogFun5.oninput = function () {
  transmogFun5Out.innerHTML = this.value;
  transmogFun5Value = parseInt(this.value);
};
/*

Fun 6 - Page 9

*/
var dungeonFun6 = document.getElementById("dungeonFun6");
var dungeonFun6Out = document.getElementById("dungeonFun6Out");
var dungeonFun6Value = 5;
dungeonFun6Out.innerHTML = dungeonFun6.value;
dungeonFun6.oninput = function () {
  dungeonFun6Out.innerHTML = this.value;
  dungeonFun6Value = parseInt(this.value);
};
var raidFun6 = document.getElementById("raidFun6");
var raidFun6Out = document.getElementById("raidFun6Out");
var raidFun6Value = 5;
raidFun6Out.innerHTML = raidFun6.value;
raidFun6.oninput = function () {
  raidFun6Out.innerHTML = this.value;
  raidFun6Value = parseInt(this.value);
};
var pvpFun6 = document.getElementById("pvpFun6");
var pvpFun6Out = document.getElementById("pvpFun6Out");
var pvpFun6Value = 5;
pvpFun6Out.innerHTML = pvpFun6.value;
pvpFun6.oninput = function () {
  pvpFun6Out.innerHTML = this.value;
  pvpFun6Value = parseInt(this.value);
};
var rotationFun6 = document.getElementById("rotationFun6");
var rotationFun6Out = document.getElementById("rotationFun6Out");
var rotationFun6Value = 5;
rotationFun6Out.innerHTML = rotationFun6.value;
rotationFun6.oninput = function () {
  rotationFun6Out.innerHTML = this.value;
  rotationFun6Value = parseInt(this.value);
};
var worldFun6 = document.getElementById("worldFun6");
var worldFun6Out = document.getElementById("worldFun6Out");
var worldFun6Value = 5;
worldFun6Out.innerHTML = worldFun6.value;
worldFun6.oninput = function () {
  worldFun6Out.innerHTML = this.value;
  worldFun6Value = parseInt(this.value);
};
var randomFun6 = document.getElementById("randomFun6");
var randomFun6Out = document.getElementById("randomFun6Out");
var randomFun6Value = 5;
randomFun6Out.innerHTML = randomFun6.value;
randomFun6.oninput = function () {
  randomFun6Out.innerHTML = this.value;
  randomFun6Value = parseInt(this.value);
};
var transmogFun6 = document.getElementById("transmogFun6");
var transmogFun6Out = document.getElementById("transmogFun6Out");
var transmogFun6Value = 5;
transmogFun6Out.innerHTML = transmogFun6.value;
transmogFun6.oninput = function () {
  transmogFun6Out.innerHTML = this.value;
  transmogFun6Value = parseInt(this.value);
};
/*

Fun 7 - Page 10

*/
var dungeonFun7 = document.getElementById("dungeonFun7");
var dungeonFun7Out = document.getElementById("dungeonFun7Out");
var dungeonFun7Value = 5;
dungeonFun7Out.innerHTML = dungeonFun7.value;
dungeonFun7.oninput = function () {
  dungeonFun7Out.innerHTML = this.value;
  dungeonFun7Value = parseInt(this.value);
};
var raidFun7 = document.getElementById("raidFun7");
var raidFun7Out = document.getElementById("raidFun7Out");
var raidFun7Value = 5;
raidFun7Out.innerHTML = raidFun7.value;
raidFun7.oninput = function () {
  raidFun7Out.innerHTML = this.value;
  raidFun7Value = parseInt(this.value);
};
var pvpFun7 = document.getElementById("pvpFun7");
var pvpFun7Out = document.getElementById("pvpFun7Out");
var pvpFun7Value = 5;
pvpFun7Out.innerHTML = pvpFun7.value;
pvpFun7.oninput = function () {
  pvpFun7Out.innerHTML = this.value;
  pvpFun7Value = parseInt(this.value);
};
var rotationFun7 = document.getElementById("rotationFun7");
var rotationFun7Out = document.getElementById("rotationFun7Out");
var rotationFun7Value = 5;
rotationFun7Out.innerHTML = rotationFun7.value;
rotationFun7.oninput = function () {
  rotationFun7Out.innerHTML = this.value;
  rotationFun7Value = parseInt(this.value);
};
var worldFun7 = document.getElementById("worldFun7");
var worldFun7Out = document.getElementById("worldFun7Out");
var worldFun7Value = 5;
worldFun7Out.innerHTML = worldFun7.value;
worldFun7.oninput = function () {
  worldFun7Out.innerHTML = this.value;
  worldFun7Value = parseInt(this.value);
};
var randomFun7 = document.getElementById("randomFun7");
var randomFun7Out = document.getElementById("randomFun7Out");
var randomFun7Value = 5;
randomFun7Out.innerHTML = randomFun7.value;
randomFun7.oninput = function () {
  randomFun7Out.innerHTML = this.value;
  randomFun7Value = parseInt(this.value);
};
var transmogFun7 = document.getElementById("transmogFun7");
var transmogFun7Out = document.getElementById("transmogFun7Out");
var transmogFun7Value = 5;
transmogFun7Out.innerHTML = transmogFun7.value;
transmogFun7.oninput = function () {
  transmogFun7Out.innerHTML = this.value;
  transmogFun7Value = parseInt(this.value);
};
/*

Fun 8 - Page 11

*/
var dungeonFun8 = document.getElementById("dungeonFun8");
var dungeonFun8Out = document.getElementById("dungeonFun8Out");
var dungeonFun8Value = 5;
dungeonFun8Out.innerHTML = dungeonFun8.value;
dungeonFun8.oninput = function () {
  dungeonFun8Out.innerHTML = this.value;
  dungeonFun8Value = parseInt(this.value);
};
var raidFun8 = document.getElementById("raidFun8");
var raidFun8Out = document.getElementById("raidFun8Out");
var raidFun8Value = 5;
raidFun8Out.innerHTML = raidFun8.value;
raidFun8.oninput = function () {
  raidFun8Out.innerHTML = this.value;
  raidFun8Value = parseInt(this.value);
};
var pvpFun8 = document.getElementById("pvpFun8");
var pvpFun8Out = document.getElementById("pvpFun8Out");
var pvpFun8Value = 5;
pvpFun8Out.innerHTML = pvpFun8.value;
pvpFun8.oninput = function () {
  pvpFun8Out.innerHTML = this.value;
  pvpFun8Value = parseInt(this.value);
};
var rotationFun8 = document.getElementById("rotationFun8");
var rotationFun8Out = document.getElementById("rotationFun8Out");
var rotationFun8Value = 5;
rotationFun8Out.innerHTML = rotationFun8.value;
rotationFun8.oninput = function () {
  rotationFun8Out.innerHTML = this.value;
  rotationFun8Value = parseInt(this.value);
};
var worldFun8 = document.getElementById("worldFun8");
var worldFun8Out = document.getElementById("worldFun8Out");
var worldFun8Value = 5;
worldFun8Out.innerHTML = worldFun8.value;
worldFun8.oninput = function () {
  worldFun8Out.innerHTML = this.value;
  worldFun8Value = parseInt(this.value);
};
var randomFun8 = document.getElementById("randomFun8");
var randomFun8Out = document.getElementById("randomFun8Out");
var randomFun8Value = 5;
randomFun8Out.innerHTML = randomFun8.value;
randomFun8.oninput = function () {
  randomFun8Out.innerHTML = this.value;
  randomFun8Value = parseInt(this.value);
};
var transmogFun8 = document.getElementById("transmogFun8");
var transmogFun8Out = document.getElementById("transmogFun8Out");
var transmogFun8Value = 5;
transmogFun8Out.innerHTML = transmogFun8.value;
transmogFun8.oninput = function () {
  transmogFun8Out.innerHTML = this.value;
  transmogFun8Value = parseInt(this.value);
};
/*

Fun 9 - Page 12

*/
var dungeonFun9 = document.getElementById("dungeonFun9");
var dungeonFun9Out = document.getElementById("dungeonFun9Out");
var dungeonFun9Value = 5;
dungeonFun9Out.innerHTML = dungeonFun9.value;
dungeonFun9.oninput = function () {
  dungeonFun9Out.innerHTML = this.value;
  dungeonFun9Value = parseInt(this.value);
};
var raidFun9 = document.getElementById("raidFun9");
var raidFun9Out = document.getElementById("raidFun9Out");
var raidFun9Value = 5;
raidFun9Out.innerHTML = raidFun9.value;
raidFun9.oninput = function () {
  raidFun9Out.innerHTML = this.value;
  raidFun9Value = parseInt(this.value);
};
var pvpFun9 = document.getElementById("pvpFun9");
var pvpFun9Out = document.getElementById("pvpFun9Out");
var pvpFun9Value = 5;
pvpFun9Out.innerHTML = pvpFun9.value;
pvpFun9.oninput = function () {
  pvpFun9Out.innerHTML = this.value;
  pvpFun9Value = parseInt(this.value);
};
var rotationFun9 = document.getElementById("rotationFun9");
var rotationFun9Out = document.getElementById("rotationFun9Out");
var rotationFun9Value = 5;
rotationFun9Out.innerHTML = rotationFun9.value;
rotationFun9.oninput = function () {
  rotationFun9Out.innerHTML = this.value;
  rotationFun9Value = parseInt(this.value);
};
var worldFun9 = document.getElementById("worldFun9");
var worldFun9Out = document.getElementById("worldFun9Out");
var worldFun9Value = 5;
worldFun9Out.innerHTML = worldFun9.value;
worldFun9.oninput = function () {
  worldFun9Out.innerHTML = this.value;
  worldFun9Value = parseInt(this.value);
};
var randomFun9 = document.getElementById("randomFun9");
var randomFun9Out = document.getElementById("randomFun9Out");
var randomFun9Value = 5;
randomFun9Out.innerHTML = randomFun9.value;
randomFun9.oninput = function () {
  randomFun9Out.innerHTML = this.value;
  randomFun9Value = parseInt(this.value);
};
var transmogFun9 = document.getElementById("transmogFun9");
var transmogFun9Out = document.getElementById("transmogFun9Out");
var transmogFun9Value = 5;
transmogFun9Out.innerHTML = transmogFun9.value;
transmogFun9.oninput = function () {
  transmogFun9Out.innerHTML = this.value;
  transmogFun9Value = parseInt(this.value);
};
/*

Fun 10 - Page 13

*/
var dungeonFun10 = document.getElementById("dungeonFun10");
var dungeonFun10Out = document.getElementById("dungeonFun10Out");
var dungeonFun10Value = 5;
dungeonFun10Out.innerHTML = dungeonFun10.value;
dungeonFun10.oninput = function () {
  dungeonFun10Out.innerHTML = this.value;
  dungeonFun10Value = parseInt(this.value);
};
var raidFun10 = document.getElementById("raidFun10");
var raidFun10Out = document.getElementById("raidFun10Out");
var raidFun10Value = 5;
raidFun10Out.innerHTML = raidFun10.value;
raidFun10.oninput = function () {
  raidFun10Out.innerHTML = this.value;
  raidFun10Value = parseInt(this.value);
};
var pvpFun10 = document.getElementById("pvpFun10");
var pvpFun10Out = document.getElementById("pvpFun10Out");
var pvpFun10Value = 5;
pvpFun10Out.innerHTML = pvpFun10.value;
pvpFun10.oninput = function () {
  pvpFun10Out.innerHTML = this.value;
  pvpFun10Value = parseInt(this.value);
};
var rotationFun10 = document.getElementById("rotationFun10");
var rotationFun10Out = document.getElementById("rotationFun10Out");
var rotationFun10Value = 5;
rotationFun10Out.innerHTML = rotationFun10.value;
rotationFun10.oninput = function () {
  rotationFun10Out.innerHTML = this.value;
  rotationFun10Value = parseInt(this.value);
};
var worldFun10 = document.getElementById("worldFun10");
var worldFun10Out = document.getElementById("worldFun10Out");
var worldFun10Value = 5;
worldFun10Out.innerHTML = worldFun10.value;
worldFun10.oninput = function () {
  worldFun10Out.innerHTML = this.value;
  worldFun10Value = parseInt(this.value);
};
var randomFun10 = document.getElementById("randomFun10");
var randomFun10Out = document.getElementById("randomFun10Out");
var randomFun10Value = 5;
randomFun10Out.innerHTML = randomFun10.value;
randomFun10.oninput = function () {
  randomFun10Out.innerHTML = this.value;
  randomFun10Value = parseInt(this.value);
};
var transmogFun10 = document.getElementById("transmogFun10");
var transmogFun10Out = document.getElementById("transmogFun10Out");
var transmogFun10Value = 5;
transmogFun10Out.innerHTML = transmogFun10.value;
transmogFun10.oninput = function () {
  transmogFun10Out.innerHTML = this.value;
  transmogFun10Value = parseInt(this.value);
};
/*

Calculate totals and show them in arranged order - Page 14

*/
var classOrJob1Result = document.getElementById("classOrJob1Result");
var classOrJob2Result = document.getElementById("classOrJob2Result");
var classOrJob3Result = document.getElementById("classOrJob3Result");
var classOrJob4Result = document.getElementById("classOrJob4Result");
var classOrJob5Result = document.getElementById("classOrJob5Result");
var classOrJob6Result = document.getElementById("classOrJob6Result");
var classOrJob7Result = document.getElementById("classOrJob7Result");
var classOrJob8Result = document.getElementById("classOrJob8Result");
var classOrJob9Result = document.getElementById("classOrJob9Result");
var classOrJob10Result = document.getElementById("classOrJob10Result");
var resultMaxValue = 0;
var resultFunValue = 0;
var resultTotalValue = 0;

//PAGE LOGIC
var pageNumber = 1;
var jobAmount = -1;
//document.getElementById("startSlider").style.display = "none";
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
document.getElementById("funSlider1").style.display = "none";
document.getElementById("funSlider2").style.display = "none";
document.getElementById("funSlider3").style.display = "none";
document.getElementById("funSlider4").style.display = "none";
document.getElementById("funSlider5").style.display = "none";
document.getElementById("funSlider6").style.display = "none";
document.getElementById("funSlider7").style.display = "none";
document.getElementById("funSlider8").style.display = "none";
document.getElementById("funSlider9").style.display = "none";
document.getElementById("funSlider10").style.display = "none";
document.getElementById("results1").style.display = "none";
document.getElementById("results2").style.display = "none";
document.getElementById("results3").style.display = "none";
document.getElementById("results4").style.display = "none";
document.getElementById("results5").style.display = "none";
document.getElementById("results6").style.display = "none";
document.getElementById("results7").style.display = "none";
document.getElementById("results8").style.display = "none";
document.getElementById("results9").style.display = "none";
document.getElementById("results10").style.display = "none";
document.getElementById("previousButton").style.display = "none";
document.getElementById("resultsButton").style.display = "none";
document.getElementById("homeButton").style.display = "none";

function showPrevious() {
  window.scrollTo(0, 0);
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
  document.getElementById("funSlider1").style.display = "none";
  document.getElementById("funSlider2").style.display = "none";
  document.getElementById("funSlider3").style.display = "none";
  document.getElementById("funSlider4").style.display = "none";
  document.getElementById("funSlider5").style.display = "none";
  document.getElementById("funSlider6").style.display = "none";
  document.getElementById("funSlider7").style.display = "none";
  document.getElementById("funSlider8").style.display = "none";
  document.getElementById("funSlider9").style.display = "none";
  document.getElementById("funSlider10").style.display = "none";
  document.getElementById("results1").style.display = "none";
  document.getElementById("results2").style.display = "none";
  document.getElementById("results3").style.display = "none";
  document.getElementById("results4").style.display = "none";
  document.getElementById("results5").style.display = "none";
  document.getElementById("results6").style.display = "none";
  document.getElementById("results7").style.display = "none";
  document.getElementById("results8").style.display = "none";
  document.getElementById("results9").style.display = "none";
  document.getElementById("results10").style.display = "none";
  document.getElementById("nextButton").style.display = "initial";

  if (pageNumber >= 1) {
    pageNumber = pageNumber - 1;
  }
  if (pageNumber == 0) {
    pageNumber = 1;
  }
  if (pageNumber > numberOfJobs + 3) {
    pageNumber = numberOfJobs + 3;
  }
  if (pageNumber == 1) {
    document.getElementById("previousButton").style.display = "none";
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
      jobAmount = 0;
      switch (numberOfJobs) {
        case 10:
          document.getElementById("job10").style.display = "block";
          jobAmount = jobAmount + 1;
        case 9:
          document.getElementById("job9").style.display = "block";
          jobAmount = jobAmount + 1;
        case 8:
          document.getElementById("job8").style.display = "block";
          jobAmount = jobAmount + 1;
        case 7:
          document.getElementById("job7").style.display = "block";
          jobAmount = jobAmount + 1;
        case 6:
          document.getElementById("job6").style.display = "block";
          jobAmount = jobAmount + 1;
        case 5:
          document.getElementById("job5").style.display = "block";
          jobAmount = jobAmount + 1;
        case 4:
          document.getElementById("job4").style.display = "block";
          jobAmount = jobAmount + 1;
        case 3:
          document.getElementById("job3").style.display = "block";
          jobAmount = jobAmount + 1;
        case 2:
          document.getElementById("job2").style.display = "block";
          jobAmount = jobAmount + 1;
        case 1:
          document.getElementById("job1").style.display = "block";
          jobAmount = jobAmount + 1;
          break;
      }
      break;
    case 3:
      document.getElementById("prioritySlider").style.display = "block";
      break;
    case 4:
      document.getElementById("funSlider1").style.display = "block";
      break;
    case 5:
      document.getElementById("funSlider2").style.display = "block";
      break;
    case 6:
      document.getElementById("funSlider3").style.display = "block";
      break;
    case 7:
      document.getElementById("funSlider4").style.display = "block";
      break;
    case 8:
      document.getElementById("funSlider5").style.display = "block";
      break;
    case 9:
      document.getElementById("funSlider6").style.display = "block";
      break;
    case 10:
      document.getElementById("funSlider7").style.display = "block";
      break;
    case 11:
      document.getElementById("funSlider8").style.display = "block";
      break;
    case 12:
      document.getElementById("funSlider9").style.display = "block";
      break;
    case 13:
      document.getElementById("funSlider10").style.display = "block";
      break;
    case 14:
      resultMaxValue =
        parseInt(dungeonPriorityValue) +
        parseInt(raidPriorityValue) +
        parseInt(pvpPriorityValue) +
        parseInt(rotationPriorityValue) +
        parseInt(worldPriorityValue) +
        parseInt(randomPriorityValue) +
        parseInt(transmogPriorityValue);
      switch (numberOfJobs) {
        case 10:
          resultFunValue =
            dungeonPriorityValue * dungeonFun10Value * 10 * 0.01 +
            raidPriorityValue * raidFun10Value * 10 * 0.01 +
            pvpPriorityValue * pvpFun10Value * 10 * 0.01 +
            rotationPriorityValue * rotationFun10Value * 10 * 0.01 +
            worldPriorityValue * worldFun10Value * 10 * 0.01 +
            randomPriorityValue * randomFun10Value * 10 * 0.01 +
            transmogPriorityValue * transmogFun10Value * 10 * 0.01;
          resultTotalValue = Math.round(
            (resultFunValue / resultMaxValue) * 100
          );
          classOrJob10Result.innerHTML = resultTotalValue;
          document.getElementById("results10").style.display = "block";
        case 9:
          resultFunValue =
            dungeonPriorityValue * dungeonFun9Value * 10 * 0.01 +
            raidPriorityValue * raidFun9Value * 10 * 0.01 +
            pvpPriorityValue * pvpFun9Value * 10 * 0.01 +
            rotationPriorityValue * rotationFun9Value * 10 * 0.01 +
            worldPriorityValue * worldFun9Value * 10 * 0.01 +
            randomPriorityValue * randomFun9Value * 10 * 0.01 +
            transmogPriorityValue * transmogFun9Value * 10 * 0.01;
          resultTotalValue = Math.round(
            (resultFunValue / resultMaxValue) * 100
          );
          classOrJob9Result.innerHTML = resultTotalValue;
          document.getElementById("results9").style.display = "block";
        case 8:
          resultFunValue =
            dungeonPriorityValue * dungeonFun8Value * 10 * 0.01 +
            raidPriorityValue * raidFun8Value * 10 * 0.01 +
            pvpPriorityValue * pvpFun8Value * 10 * 0.01 +
            rotationPriorityValue * rotationFun8Value * 10 * 0.01 +
            worldPriorityValue * worldFun8Value * 10 * 0.01 +
            randomPriorityValue * randomFun8Value * 10 * 0.01 +
            transmogPriorityValue * transmogFun8Value * 10 * 0.01;
          resultTotalValue = Math.round(
            (resultFunValue / resultMaxValue) * 100
          );
          classOrJob8Result.innerHTML = resultTotalValue;
          document.getElementById("results8").style.display = "block";
        case 7:
          resultFunValue =
            dungeonPriorityValue * dungeonFun7Value * 10 * 0.01 +
            raidPriorityValue * raidFun7Value * 10 * 0.01 +
            pvpPriorityValue * pvpFun7Value * 10 * 0.01 +
            rotationPriorityValue * rotationFun7Value * 10 * 0.01 +
            worldPriorityValue * worldFun7Value * 10 * 0.01 +
            randomPriorityValue * randomFun7Value * 10 * 0.01 +
            transmogPriorityValue * transmogFun7Value * 10 * 0.01;
          resultTotalValue = Math.round(
            (resultFunValue / resultMaxValue) * 100
          );
          classOrJob7Result.innerHTML = resultTotalValue;
          document.getElementById("results7").style.display = "block";
        case 6:
          resultFunValue =
            dungeonPriorityValue * dungeonFun6Value * 10 * 0.01 +
            raidPriorityValue * raidFun6Value * 10 * 0.01 +
            pvpPriorityValue * pvpFun6Value * 10 * 0.01 +
            rotationPriorityValue * rotationFun6Value * 10 * 0.01 +
            worldPriorityValue * worldFun6Value * 10 * 0.01 +
            randomPriorityValue * randomFun6Value * 10 * 0.01 +
            transmogPriorityValue * transmogFun6Value * 10 * 0.01;
          resultTotalValue = Math.round(
            (resultFunValue / resultMaxValue) * 100
          );
          classOrJob6Result.innerHTML = resultTotalValue;
          document.getElementById("results6").style.display = "block";
        case 5:
          resultFunValue =
            dungeonPriorityValue * dungeonFun5Value * 10 * 0.01 +
            raidPriorityValue * raidFun5Value * 10 * 0.01 +
            pvpPriorityValue * pvpFun5Value * 10 * 0.01 +
            rotationPriorityValue * rotationFun5Value * 10 * 0.01 +
            worldPriorityValue * worldFun5Value * 10 * 0.01 +
            randomPriorityValue * randomFun5Value * 10 * 0.01 +
            transmogPriorityValue * transmogFun5Value * 10 * 0.01;
          resultTotalValue = Math.round(
            (resultFunValue / resultMaxValue) * 100
          );
          classOrJob5Result.innerHTML = resultTotalValue;
          document.getElementById("results5").style.display = "block";
        case 4:
          resultFunValue =
            dungeonPriorityValue * dungeonFun4Value * 10 * 0.01 +
            raidPriorityValue * raidFun4Value * 10 * 0.01 +
            pvpPriorityValue * pvpFun4Value * 10 * 0.01 +
            rotationPriorityValue * rotationFun4Value * 10 * 0.01 +
            worldPriorityValue * worldFun4Value * 10 * 0.01 +
            randomPriorityValue * randomFun4Value * 10 * 0.01 +
            transmogPriorityValue * transmogFun4Value * 10 * 0.01;
          resultTotalValue = Math.round(
            (resultFunValue / resultMaxValue) * 100
          );
          classOrJob4Result.innerHTML = resultTotalValue;
          document.getElementById("results4").style.display = "block";
        case 3:
          resultFunValue =
            dungeonPriorityValue * dungeonFun3Value * 10 * 0.01 +
            raidPriorityValue * raidFun3Value * 10 * 0.01 +
            pvpPriorityValue * pvpFun3Value * 10 * 0.01 +
            rotationPriorityValue * rotationFun3Value * 10 * 0.01 +
            worldPriorityValue * worldFun3Value * 10 * 0.01 +
            randomPriorityValue * randomFun3Value * 10 * 0.01 +
            transmogPriorityValue * transmogFun3Value * 10 * 0.01;
          resultTotalValue = Math.round(
            (resultFunValue / resultMaxValue) * 100
          );
          classOrJob3Result.innerHTML = resultTotalValue;
          document.getElementById("results3").style.display = "block";
        case 2:
          resultFunValue =
            dungeonPriorityValue * dungeonFun2Value * 10 * 0.01 +
            raidPriorityValue * raidFun2Value * 10 * 0.01 +
            pvpPriorityValue * pvpFun2Value * 10 * 0.01 +
            rotationPriorityValue * rotationFun2Value * 10 * 0.01 +
            worldPriorityValue * worldFun2Value * 10 * 0.01 +
            randomPriorityValue * randomFun2Value * 10 * 0.01 +
            transmogPriorityValue * transmogFun2Value * 10 * 0.01;
          resultTotalValue = Math.round(
            (resultFunValue / resultMaxValue) * 100
          );
          classOrJob2Result.innerHTML = resultTotalValue;
          document.getElementById("results2").style.display = "block";
        case 1:
          resultFunValue =
            dungeonPriorityValue * dungeonFun1Value * 10 * 0.01 +
            raidPriorityValue * raidFun1Value * 10 * 0.01 +
            pvpPriorityValue * pvpFun1Value * 10 * 0.01 +
            rotationPriorityValue * rotationFun1Value * 10 * 0.01 +
            worldPriorityValue * worldFun1Value * 10 * 0.01 +
            randomPriorityValue * randomFun1Value * 10 * 0.01 +
            transmogPriorityValue * transmogFun1Value * 10 * 0.01;
          resultTotalValue = Math.round(
            (resultFunValue / resultMaxValue) * 100
          );
          classOrJob1Result.innerHTML = resultTotalValue;
          document.getElementById("results1").style.display = "block";
          break;
      }
      break;
  }
}

function showNext() {
  window.scrollTo(0, 0);
  if (pageNumber <= 13) {
    pageNumber = pageNumber + 1;
  }
  if (pageNumber == numberOfJobs + 4) {
    pageNumber = 14;
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
  document.getElementById("funSlider1").style.display = "none";
  document.getElementById("funSlider2").style.display = "none";
  document.getElementById("funSlider3").style.display = "none";
  document.getElementById("funSlider4").style.display = "none";
  document.getElementById("funSlider5").style.display = "none";
  document.getElementById("funSlider6").style.display = "none";
  document.getElementById("funSlider7").style.display = "none";
  document.getElementById("funSlider8").style.display = "none";
  document.getElementById("funSlider9").style.display = "none";
  document.getElementById("funSlider10").style.display = "none";
  document.getElementById("results1").style.display = "none";
  document.getElementById("results2").style.display = "none";
  document.getElementById("results3").style.display = "none";
  document.getElementById("results4").style.display = "none";
  document.getElementById("results5").style.display = "none";
  document.getElementById("results6").style.display = "none";
  document.getElementById("results7").style.display = "none";
  document.getElementById("results8").style.display = "none";
  document.getElementById("results9").style.display = "none";
  document.getElementById("results10").style.display = "none";
  document.getElementById("previousButton").style.display = "initial";

  switch (pageNumber) {
    case 0:
      document.getElementById("startProcess").style.display = "block";
      break;
    case 1:
      document.getElementById("startSlider").style.display = "block";
      break;
    case 2:
      document.getElementById("askNames").style.display = "block";
      jobAmount = 0;
      switch (numberOfJobs) {
        case 10:
          document.getElementById("job10").style.display = "block";
          jobAmount = jobAmount + 1;
        case 9:
          document.getElementById("job9").style.display = "block";
          jobAmount = jobAmount + 1;
        case 8:
          document.getElementById("job8").style.display = "block";
          jobAmount = jobAmount + 1;
        case 7:
          document.getElementById("job7").style.display = "block";
          jobAmount = jobAmount + 1;
        case 6:
          document.getElementById("job6").style.display = "block";
          jobAmount = jobAmount + 1;
        case 5:
          document.getElementById("job5").style.display = "block";
          jobAmount = jobAmount + 1;
        case 4:
          document.getElementById("job4").style.display = "block";
          jobAmount = jobAmount + 1;
        case 3:
          document.getElementById("job3").style.display = "block";
          jobAmount = jobAmount + 1;
        case 2:
          document.getElementById("job2").style.display = "block";
          jobAmount = jobAmount + 1;
        case 1:
          document.getElementById("job1").style.display = "block";
          jobAmount = jobAmount + 1;
          break;
      }
      break;
    case 3:
      document.getElementById("prioritySlider").style.display = "block";
      break;
    case 4:
      document.getElementById("funSlider1").style.display = "block";
      break;
    case 5:
      document.getElementById("funSlider2").style.display = "block";
      break;
    case 6:
      document.getElementById("funSlider3").style.display = "block";
      break;
    case 7:
      document.getElementById("funSlider4").style.display = "block";
      break;
    case 8:
      document.getElementById("funSlider5").style.display = "block";
      break;
    case 9:
      document.getElementById("funSlider6").style.display = "block";
      break;
    case 10:
      document.getElementById("funSlider7").style.display = "block";
      break;
    case 11:
      document.getElementById("funSlider8").style.display = "block";
      break;
    case 12:
      document.getElementById("funSlider9").style.display = "block";
      break;
    case 13:
      document.getElementById("funSlider10").style.display = "block";
      break;
    case 14:
      document.getElementById("nextButton").style.display = "none";
      document.getElementById("resultsButton").style.display = "initial";
      document.getElementById("homeButton").style.display = "initial";
      resultMaxValue =
        parseInt(dungeonPriorityValue) +
        parseInt(raidPriorityValue) +
        parseInt(pvpPriorityValue) +
        parseInt(rotationPriorityValue) +
        parseInt(worldPriorityValue) +
        parseInt(randomPriorityValue) +
        parseInt(transmogPriorityValue);
      switch (numberOfJobs) {
        case 10:
          resultFunValue =
            dungeonPriorityValue * dungeonFun10Value * 10 * 0.01 +
            raidPriorityValue * raidFun10Value * 10 * 0.01 +
            pvpPriorityValue * pvpFun10Value * 10 * 0.01 +
            rotationPriorityValue * rotationFun10Value * 10 * 0.01 +
            worldPriorityValue * worldFun10Value * 10 * 0.01 +
            randomPriorityValue * randomFun10Value * 10 * 0.01 +
            transmogPriorityValue * transmogFun10Value * 10 * 0.01;
          resultTotalValue = Math.round(
            (resultFunValue / resultMaxValue) * 100
          );
          classOrJob10Result.innerHTML = resultTotalValue;
          document.getElementById("results10").style.display = "block";
        case 9:
          resultFunValue =
            dungeonPriorityValue * dungeonFun9Value * 10 * 0.01 +
            raidPriorityValue * raidFun9Value * 10 * 0.01 +
            pvpPriorityValue * pvpFun9Value * 10 * 0.01 +
            rotationPriorityValue * rotationFun9Value * 10 * 0.01 +
            worldPriorityValue * worldFun9Value * 10 * 0.01 +
            randomPriorityValue * randomFun9Value * 10 * 0.01 +
            transmogPriorityValue * transmogFun9Value * 10 * 0.01;
          resultTotalValue = Math.round(
            (resultFunValue / resultMaxValue) * 100
          );
          classOrJob9Result.innerHTML = resultTotalValue;
          document.getElementById("results9").style.display = "block";
        case 8:
          resultFunValue =
            dungeonPriorityValue * dungeonFun8Value * 10 * 0.01 +
            raidPriorityValue * raidFun8Value * 10 * 0.01 +
            pvpPriorityValue * pvpFun8Value * 10 * 0.01 +
            rotationPriorityValue * rotationFun8Value * 10 * 0.01 +
            worldPriorityValue * worldFun8Value * 10 * 0.01 +
            randomPriorityValue * randomFun8Value * 10 * 0.01 +
            transmogPriorityValue * transmogFun8Value * 10 * 0.01;
          resultTotalValue = Math.round(
            (resultFunValue / resultMaxValue) * 100
          );
          classOrJob8Result.innerHTML = resultTotalValue;
          document.getElementById("results8").style.display = "block";
        case 7:
          resultFunValue =
            dungeonPriorityValue * dungeonFun7Value * 10 * 0.01 +
            raidPriorityValue * raidFun7Value * 10 * 0.01 +
            pvpPriorityValue * pvpFun7Value * 10 * 0.01 +
            rotationPriorityValue * rotationFun7Value * 10 * 0.01 +
            worldPriorityValue * worldFun7Value * 10 * 0.01 +
            randomPriorityValue * randomFun7Value * 10 * 0.01 +
            transmogPriorityValue * transmogFun7Value * 10 * 0.01;
          resultTotalValue = Math.round(
            (resultFunValue / resultMaxValue) * 100
          );
          classOrJob7Result.innerHTML = resultTotalValue;
          document.getElementById("results7").style.display = "block";
        case 6:
          resultFunValue =
            dungeonPriorityValue * dungeonFun6Value * 10 * 0.01 +
            raidPriorityValue * raidFun6Value * 10 * 0.01 +
            pvpPriorityValue * pvpFun6Value * 10 * 0.01 +
            rotationPriorityValue * rotationFun6Value * 10 * 0.01 +
            worldPriorityValue * worldFun6Value * 10 * 0.01 +
            randomPriorityValue * randomFun6Value * 10 * 0.01 +
            transmogPriorityValue * transmogFun6Value * 10 * 0.01;
          resultTotalValue = Math.round(
            (resultFunValue / resultMaxValue) * 100
          );
          classOrJob6Result.innerHTML = resultTotalValue;
          document.getElementById("results6").style.display = "block";
        case 5:
          resultFunValue =
            dungeonPriorityValue * dungeonFun5Value * 10 * 0.01 +
            raidPriorityValue * raidFun5Value * 10 * 0.01 +
            pvpPriorityValue * pvpFun5Value * 10 * 0.01 +
            rotationPriorityValue * rotationFun5Value * 10 * 0.01 +
            worldPriorityValue * worldFun5Value * 10 * 0.01 +
            randomPriorityValue * randomFun5Value * 10 * 0.01 +
            transmogPriorityValue * transmogFun5Value * 10 * 0.01;
          resultTotalValue = Math.round(
            (resultFunValue / resultMaxValue) * 100
          );
          classOrJob5Result.innerHTML = resultTotalValue;
          document.getElementById("results5").style.display = "block";
        case 4:
          resultFunValue =
            dungeonPriorityValue * dungeonFun4Value * 10 * 0.01 +
            raidPriorityValue * raidFun4Value * 10 * 0.01 +
            pvpPriorityValue * pvpFun4Value * 10 * 0.01 +
            rotationPriorityValue * rotationFun4Value * 10 * 0.01 +
            worldPriorityValue * worldFun4Value * 10 * 0.01 +
            randomPriorityValue * randomFun4Value * 10 * 0.01 +
            transmogPriorityValue * transmogFun4Value * 10 * 0.01;
          resultTotalValue = Math.round(
            (resultFunValue / resultMaxValue) * 100
          );
          classOrJob4Result.innerHTML = resultTotalValue;
          document.getElementById("results4").style.display = "block";
        case 3:
          resultFunValue =
            dungeonPriorityValue * dungeonFun3Value * 10 * 0.01 +
            raidPriorityValue * raidFun3Value * 10 * 0.01 +
            pvpPriorityValue * pvpFun3Value * 10 * 0.01 +
            rotationPriorityValue * rotationFun3Value * 10 * 0.01 +
            worldPriorityValue * worldFun3Value * 10 * 0.01 +
            randomPriorityValue * randomFun3Value * 10 * 0.01 +
            transmogPriorityValue * transmogFun3Value * 10 * 0.01;
          resultTotalValue = Math.round(
            (resultFunValue / resultMaxValue) * 100
          );
          classOrJob3Result.innerHTML = resultTotalValue;
          document.getElementById("results3").style.display = "block";
        case 2:
          resultFunValue =
            dungeonPriorityValue * dungeonFun2Value * 10 * 0.01 +
            raidPriorityValue * raidFun2Value * 10 * 0.01 +
            pvpPriorityValue * pvpFun2Value * 10 * 0.01 +
            rotationPriorityValue * rotationFun2Value * 10 * 0.01 +
            worldPriorityValue * worldFun2Value * 10 * 0.01 +
            randomPriorityValue * randomFun2Value * 10 * 0.01 +
            transmogPriorityValue * transmogFun2Value * 10 * 0.01;
          resultTotalValue = Math.round(
            (resultFunValue / resultMaxValue) * 100
          );
          classOrJob2Result.innerHTML = resultTotalValue;
          document.getElementById("results2").style.display = "block";
        case 1:
          resultFunValue =
            dungeonPriorityValue * dungeonFun1Value * 10 * 0.01 +
            raidPriorityValue * raidFun1Value * 10 * 0.01 +
            pvpPriorityValue * pvpFun1Value * 10 * 0.01 +
            rotationPriorityValue * rotationFun1Value * 10 * 0.01 +
            worldPriorityValue * worldFun1Value * 10 * 0.01 +
            randomPriorityValue * randomFun1Value * 10 * 0.01 +
            transmogPriorityValue * transmogFun1Value * 10 * 0.01;
          resultTotalValue = Math.round(
            (resultFunValue / resultMaxValue) * 100
          );
          classOrJob1Result.innerHTML = resultTotalValue;
          document.getElementById("results1").style.display = "block";
          break;
      }
      break;
  }
}

function showResults() {
  window.scrollTo(0, 0);
  pageNumber = 14;

  document.getElementById("startProcess").style.display = "none";
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
  document.getElementById("funSlider1").style.display = "none";
  document.getElementById("funSlider2").style.display = "none";
  document.getElementById("funSlider3").style.display = "none";
  document.getElementById("funSlider4").style.display = "none";
  document.getElementById("funSlider5").style.display = "none";
  document.getElementById("funSlider6").style.display = "none";
  document.getElementById("funSlider7").style.display = "none";
  document.getElementById("funSlider8").style.display = "none";
  document.getElementById("funSlider9").style.display = "none";
  document.getElementById("funSlider10").style.display = "none";
  document.getElementById("results1").style.display = "none";
  document.getElementById("results2").style.display = "none";
  document.getElementById("results3").style.display = "none";
  document.getElementById("results4").style.display = "none";
  document.getElementById("results5").style.display = "none";
  document.getElementById("results6").style.display = "none";
  document.getElementById("results7").style.display = "none";
  document.getElementById("results8").style.display = "none";
  document.getElementById("results9").style.display = "none";
  document.getElementById("results10").style.display = "none";
  document.getElementById("previousButton").style.display = "initial";
  document.getElementById("nextButton").style.display = "none";

  resultMaxValue =
    parseInt(dungeonPriorityValue) +
    parseInt(raidPriorityValue) +
    parseInt(pvpPriorityValue) +
    parseInt(rotationPriorityValue) +
    parseInt(worldPriorityValue) +
    parseInt(randomPriorityValue) +
    parseInt(transmogPriorityValue);

  switch (numberOfJobs) {
    case 10:
      resultFunValue =
        dungeonPriorityValue * dungeonFun10Value * 10 * 0.01 +
        raidPriorityValue * raidFun10Value * 10 * 0.01 +
        pvpPriorityValue * pvpFun10Value * 10 * 0.01 +
        rotationPriorityValue * rotationFun10Value * 10 * 0.01 +
        worldPriorityValue * worldFun10Value * 10 * 0.01 +
        randomPriorityValue * randomFun10Value * 10 * 0.01 +
        transmogPriorityValue * transmogFun10Value * 10 * 0.01;
      resultTotalValue = Math.round((resultFunValue / resultMaxValue) * 100);
      classOrJob10Result.innerHTML = resultTotalValue;
      document.getElementById("results10").style.display = "block";
    case 9:
      resultFunValue =
        dungeonPriorityValue * dungeonFun9Value * 10 * 0.01 +
        raidPriorityValue * raidFun9Value * 10 * 0.01 +
        pvpPriorityValue * pvpFun9Value * 10 * 0.01 +
        rotationPriorityValue * rotationFun9Value * 10 * 0.01 +
        worldPriorityValue * worldFun9Value * 10 * 0.01 +
        randomPriorityValue * randomFun9Value * 10 * 0.01 +
        transmogPriorityValue * transmogFun9Value * 10 * 0.01;
      resultTotalValue = Math.round((resultFunValue / resultMaxValue) * 100);
      classOrJob9Result.innerHTML = resultTotalValue;
      document.getElementById("results9").style.display = "block";
    case 8:
      resultFunValue =
        dungeonPriorityValue * dungeonFun8Value * 10 * 0.01 +
        raidPriorityValue * raidFun8Value * 10 * 0.01 +
        pvpPriorityValue * pvpFun8Value * 10 * 0.01 +
        rotationPriorityValue * rotationFun8Value * 10 * 0.01 +
        worldPriorityValue * worldFun8Value * 10 * 0.01 +
        randomPriorityValue * randomFun8Value * 10 * 0.01 +
        transmogPriorityValue * transmogFun8Value * 10 * 0.01;
      resultTotalValue = Math.round((resultFunValue / resultMaxValue) * 100);
      classOrJob8Result.innerHTML = resultTotalValue;
      document.getElementById("results8").style.display = "block";
    case 7:
      resultFunValue =
        dungeonPriorityValue * dungeonFun7Value * 10 * 0.01 +
        raidPriorityValue * raidFun7Value * 10 * 0.01 +
        pvpPriorityValue * pvpFun7Value * 10 * 0.01 +
        rotationPriorityValue * rotationFun7Value * 10 * 0.01 +
        worldPriorityValue * worldFun7Value * 10 * 0.01 +
        randomPriorityValue * randomFun7Value * 10 * 0.01 +
        transmogPriorityValue * transmogFun7Value * 10 * 0.01;
      resultTotalValue = Math.round((resultFunValue / resultMaxValue) * 100);
      classOrJob7Result.innerHTML = resultTotalValue;
      document.getElementById("results7").style.display = "block";
    case 6:
      resultFunValue =
        dungeonPriorityValue * dungeonFun6Value * 10 * 0.01 +
        raidPriorityValue * raidFun6Value * 10 * 0.01 +
        pvpPriorityValue * pvpFun6Value * 10 * 0.01 +
        rotationPriorityValue * rotationFun6Value * 10 * 0.01 +
        worldPriorityValue * worldFun6Value * 10 * 0.01 +
        randomPriorityValue * randomFun6Value * 10 * 0.01 +
        transmogPriorityValue * transmogFun6Value * 10 * 0.01;
      resultTotalValue = Math.round((resultFunValue / resultMaxValue) * 100);
      classOrJob6Result.innerHTML = resultTotalValue;
      document.getElementById("results6").style.display = "block";
    case 5:
      resultFunValue =
        dungeonPriorityValue * dungeonFun5Value * 10 * 0.01 +
        raidPriorityValue * raidFun5Value * 10 * 0.01 +
        pvpPriorityValue * pvpFun5Value * 10 * 0.01 +
        rotationPriorityValue * rotationFun5Value * 10 * 0.01 +
        worldPriorityValue * worldFun5Value * 10 * 0.01 +
        randomPriorityValue * randomFun5Value * 10 * 0.01 +
        transmogPriorityValue * transmogFun5Value * 10 * 0.01;
      resultTotalValue = Math.round((resultFunValue / resultMaxValue) * 100);
      classOrJob5Result.innerHTML = resultTotalValue;
      document.getElementById("results5").style.display = "block";
    case 4:
      resultFunValue =
        dungeonPriorityValue * dungeonFun4Value * 10 * 0.01 +
        raidPriorityValue * raidFun4Value * 10 * 0.01 +
        pvpPriorityValue * pvpFun4Value * 10 * 0.01 +
        rotationPriorityValue * rotationFun4Value * 10 * 0.01 +
        worldPriorityValue * worldFun4Value * 10 * 0.01 +
        randomPriorityValue * randomFun4Value * 10 * 0.01 +
        transmogPriorityValue * transmogFun4Value * 10 * 0.01;
      resultTotalValue = Math.round((resultFunValue / resultMaxValue) * 100);
      classOrJob4Result.innerHTML = resultTotalValue;
      document.getElementById("results4").style.display = "block";
    case 3:
      resultFunValue =
        dungeonPriorityValue * dungeonFun3Value * 10 * 0.01 +
        raidPriorityValue * raidFun3Value * 10 * 0.01 +
        pvpPriorityValue * pvpFun3Value * 10 * 0.01 +
        rotationPriorityValue * rotationFun3Value * 10 * 0.01 +
        worldPriorityValue * worldFun3Value * 10 * 0.01 +
        randomPriorityValue * randomFun3Value * 10 * 0.01 +
        transmogPriorityValue * transmogFun3Value * 10 * 0.01;
      resultTotalValue = Math.round((resultFunValue / resultMaxValue) * 100);
      classOrJob3Result.innerHTML = resultTotalValue;
      document.getElementById("results3").style.display = "block";
    case 2:
      resultFunValue =
        dungeonPriorityValue * dungeonFun2Value * 10 * 0.01 +
        raidPriorityValue * raidFun2Value * 10 * 0.01 +
        pvpPriorityValue * pvpFun2Value * 10 * 0.01 +
        rotationPriorityValue * rotationFun2Value * 10 * 0.01 +
        worldPriorityValue * worldFun2Value * 10 * 0.01 +
        randomPriorityValue * randomFun2Value * 10 * 0.01 +
        transmogPriorityValue * transmogFun2Value * 10 * 0.01;
      resultTotalValue = Math.round((resultFunValue / resultMaxValue) * 100);
      classOrJob2Result.innerHTML = resultTotalValue;
      document.getElementById("results2").style.display = "block";
    case 1:
      resultFunValue =
        dungeonPriorityValue * dungeonFun1Value * 10 * 0.01 +
        raidPriorityValue * raidFun1Value * 10 * 0.01 +
        pvpPriorityValue * pvpFun1Value * 10 * 0.01 +
        rotationPriorityValue * rotationFun1Value * 10 * 0.01 +
        worldPriorityValue * worldFun1Value * 10 * 0.01 +
        randomPriorityValue * randomFun1Value * 10 * 0.01 +
        transmogPriorityValue * transmogFun1Value * 10 * 0.01;
      resultTotalValue = Math.round((resultFunValue / resultMaxValue) * 100);
      classOrJob1Result.innerHTML = resultTotalValue;
      document.getElementById("results1").style.display = "block";
      break;
  }
}

function showHome() {
  window.scrollTo(0, 0);
  pageNumber = 1;
  document.getElementById("startProcess").style.display = "block";
  document.getElementById("startSlider").style.display = "block";
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
  document.getElementById("funSlider1").style.display = "none";
  document.getElementById("funSlider2").style.display = "none";
  document.getElementById("funSlider3").style.display = "none";
  document.getElementById("funSlider4").style.display = "none";
  document.getElementById("funSlider5").style.display = "none";
  document.getElementById("funSlider6").style.display = "none";
  document.getElementById("funSlider7").style.display = "none";
  document.getElementById("funSlider8").style.display = "none";
  document.getElementById("funSlider9").style.display = "none";
  document.getElementById("funSlider10").style.display = "none";
  document.getElementById("results1").style.display = "none";
  document.getElementById("results2").style.display = "none";
  document.getElementById("results3").style.display = "none";
  document.getElementById("results4").style.display = "none";
  document.getElementById("results5").style.display = "none";
  document.getElementById("results6").style.display = "none";
  document.getElementById("results7").style.display = "none";
  document.getElementById("results8").style.display = "none";
  document.getElementById("results9").style.display = "none";
  document.getElementById("results10").style.display = "none";
  document.getElementById("previousButton").style.display = "none";
  document.getElementById("nextButton").style.display = "initial";
}
/*

Block f5 and go to home

*/
function resetPage() {
  console.log("HELP");

  game.value = 1;

  classOrJobAmount.value = 1;

  job1Input.value = "Nimi";
  job2Input.value = "Nimi";
  job3Input.value = "Nimi";
  job4Input.value = "Nimi";
  job5Input.value = "Nimi";
  job6Input.value = "Nimi";
  job7Input.value = "Nimi";
  job8Input.value = "Nimi";
  job9Input.value = "Nimi";
  job10Input.value = "Nimi";

  dungeonPriority.value = 5;
  raidPriority.value = 5;
  pvpPriority.value = 5;
  rotationPriority.value = 5;
  worldPriority.value = 5;
  randomPriority.value = 5;
  transmogPriority.value = 5;

  dungeonFun1.value = 5;
  raidFun1.value = 5;
  pvpFun1.value = 5;
  rotationFun1.value = 5;
  worldFun1.value = 5;
  randomFun1.value = 5;
  transmogFun1.value = 5;

  dungeonFun2.value = 5;
  raidFun2.value = 5;
  pvpFun2.value = 5;
  rotationFun2.value = 5;
  worldFun2.value = 5;
  randomFun2.value = 5;
  transmogFun2.value = 5;

  dungeonFun3.value = 5;
  raidFun3.value = 5;
  pvpFun3.value = 5;
  rotationFun3.value = 5;
  worldFun3.value = 5;
  randomFun3.value = 5;
  transmogFun3.value = 5;

  dungeonFun4.value = 5;
  raidFun4.value = 5;
  pvpFun4.value = 5;
  rotationFun4.value = 5;
  worldFun4.value = 5;
  randomFun4.value = 5;
  transmogFun4.value = 5;

  dungeonFun5.value = 5;
  raidFun5.value = 5;
  pvpFun5.value = 5;
  rotationFun5.value = 5;
  worldFun5.value = 5;
  randomFun5.value = 5;
  transmogFun5.value = 5;

  dungeonFun6.value = 5;
  raidFun6.value = 5;
  pvpFun6.value = 5;
  rotationFun6.value = 5;
  worldFun6.value = 5;
  randomFun6.value = 5;
  transmogFun6.value = 5;

  dungeonFun7.value = 5;
  raidFun7.value = 5;
  pvpFun7.value = 5;
  rotationFun7.value = 5;
  worldFun7.value = 5;
  randomFun7.value = 5;
  transmogFun7.value = 5;

  dungeonFun8.value = 5;
  raidFun8.value = 5;
  pvpFun8.value = 5;
  rotationFun8.value = 5;
  worldFun8.value = 5;
  randomFun8.value = 5;
  transmogFun8.value = 5;

  dungeonFun9.value = 5;
  raidFun9.value = 5;
  pvpFun9.value = 5;
  rotationFun9.value = 5;
  worldFun9.value = 5;
  randomFun9.value = 5;
  transmogFun9.value = 5;

  dungeonFun10.value = 5;
  raidFun10.value = 5;
  pvpFun10.value = 5;
  rotationFun10.value = 5;
  worldFun10.value = 5;
  randomFun10.value = 5;
  transmogFun10.value = 5;

  showHome();
  location.reload(true);
}

//Mouse Browser Back button and Mouse Browser Forward Button functionality
