const parkTable = document.getElementById("parkTable");
const parkInfo = document.getElementById("parkInfo");

const selectByLocale = document.getElementById("parkByLocale");
const selectByType = document.getElementById("parkByType");

//Add the options for the dropdown menus
locationsArray.forEach((state) => {
  let stateOptions = new Option(state, state);
  selectByLocale.appendChild(stateOptions);
});

parkTypesArray.forEach((type) => {
  let typeOptions = new Option(type, type);
  selectByType.appendChild(typeOptions);
});

//Add event Listeners
//Location
selectByLocale.addEventListener("change", () => {
  const selectedLocation = selectByLocale.value;
  if (!selectedLocation) {
    parkInfo.innerHTML = "";
    return;
  }
  if (selectByType) {
    selectByType.value = "";
  }

  const currentParkLocale = nationalParksArray.filter(
    (park) => park.State === selectedLocation
  );

  displayTable(parkTable, currentParkLocale);
});
//Type
selectByType.addEventListener("change", () => {
  const selectedType = selectByType.value;
  if (!selectedType) {
    parkInfo.innerHTML = "";
    return;
  }

  if (selectByLocale) {
    selectByLocale.value = "";
  }

  const currentParkType = nationalParksArray.filter((park) =>
    park.LocationName.includes(selectedType)
  );
  displayTable(parkTable, currentParkType);
});

//Table functions
function displayTable(table, nationalParksArray) {
  emptyTable(table);

  nationalParksArray.forEach((park) => {
    parkInfoTable(table, park);
  });
}

function emptyTable(table) {
  const tbody = table.querySelector("tbody");
  tbody.innerHTML = " ";
}

function parkInfoTable(table, park) {
  const tbody = table.querySelector("tbody");
  const row = tbody.insertRow();

  const cellSite = row.insertCell();
  cellSite.innerHTML = park.LocationName;

  const cellAddress = row.insertCell();
  cellAddress.innerHTML = `${park.Address}, ${park.City}, ${park.State}`;

  const cellPhoneNum = row.insertCell();
  cellPhoneNum.innerHTML = `${park.Phone}`;

  const cellCord = row.insertCell();
  cellCord.innerHTML = `${park.Longitude}, ${park.Latitude}`;

  //make the website links work
  const cellWebsite = row.insertCell();

  //got this method from: https://stackoverflow.com/questions/816431/create-link-in-an-html-table-with-javascript
  const aTag = document.createElement("a");
  aTag.setAttribute("href", park.Visit);
  aTag.setAttribute("target", "_blank");
  const siteText = document.createTextNode(park.Visit);

  aTag.appendChild(siteText);
  cellWebsite.appendChild(aTag);
  //

  //if statements for the table data
  if (park.Address === 0) {
    cellAddress.innerHTML = `Information unavailable, ${park.City}, ${park.State}`;
  }
  if (park.Phone === 0) {
    cellPhoneNum.innerHTML = ``;
  }
  if (!park.Visit) {
    cellWebsite.innerHTML = ``;
  }
}

//Page will include: LocationName, Address, City, State, Zipcode, and Phone#
