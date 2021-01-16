const currentSongRep = nodecg.Replicant("currentSong", "ncg-spotify");
var combo = "";
currentSongRep.on("change", (newVal) => {
  combo = newVal.name + " - " + newVal.artist;
  document.getElementById("song").innerHTML = combo;
  document.getElementById("title").innerHTML = newVal.name;
  document.getElementById("artist").innerHTML = newVal.artist;
});
