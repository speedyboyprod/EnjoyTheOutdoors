const mountainSelector = document.getElementById("mountainOptions");

const mountainTable = document.getElementById("mountainTable");
const mountainTBody = document.getElementById("mountainInfo");

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
    mountainTBody.innerHTML = "";
    return;
  }
  const currentMountain = mountainsArray.filter(
    (mount) => mount.name === selectedMountain
  );

  displayMtnTable(mountainTable, currentMountain);
});

function displayMtnTable(table, mountainsArray) {
  emptyTable(table);

  mountainsArray.forEach((mountain) => {
    addMtTable(table, mountain);
    let mtnImg = document.createElement("img");

    mtnImg.src = `./images/${mountain.img}`;
    mountainImgDiv.appendChild(mtnImg);
  });
}

function emptyTable(table) {
  const tbody = table.querySelector("tbody");
  tbody.innerHTML = " ";
  mountainImgDiv.innerHTML = " ";
}

//Add functions to add information and image
//Add table
function addMtTable(table, mountain) {
  const tbody = table.querySelector("tbody");
  const row = tbody.insertRow();

  const cellMtnName = row.insertCell();
  cellMtnName.innerHTML = `${mountain.name}`;

  const cellMtnDescr = row.insertCell();
  cellMtnDescr.innerHTML = `${mountain.desc}`;

  const ftToKm = (mountain.elevation * 0.3048) / 1000;

  const cellMtnElevation = row.insertCell();
  cellMtnElevation.innerHTML = `${mountain.elevation}ft, ${ftToKm.toFixed(
    2
  )}km`;

  const cellMtnEffort = row.insertCell();
  cellMtnEffort.innerHTML = `${mountain.effort}`;
}
//Add img function
