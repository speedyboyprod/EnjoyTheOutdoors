const mountainSelector = document.getElementById("mountainOptions");
const mountainInfoDiv = document.getElementById("mountainInfo");
const mountainImgDiv = document.getElementById("mountainImg");

//Add Options
mountainsArray.forEach((mountain) => {
  let optionEl = new Option(mountain.name);
  mountainSelector.appendChild(optionEl);
});

//Add eventListners
mountainSelector.addEventListener("change", () => {
  let selectedMountain = mountainSelector.value;
  if (!selectedMountain) {
    return;
  }
});

//Add functions to add information and image
function addMtInfo() {
  mountainsArray.forEach((mountain) => {});
}

function addMtnImg() {}
