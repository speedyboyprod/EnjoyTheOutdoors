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
    parkInfo.innerHTML = " ";
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
    parkLocaleTable(table, park);
  });
}

function emptyTable(table) {
  const tbody = table.querySelector("tbody");
  tbody.innerHTML = " ";
}

function parkLocaleTable(table, park) {
  const tbody = table.querySelector("tbody");
  const row = tbody.insertRow();

  const cellSite = row.insertCell();
  cellSite.innerHTML = park.LocationName;

  const cellAddress = row.insertCell();
  cellAddress.innerHTML = `${park.Address}, ${park.City}, ${park.State}`;

  const cellContact = row.insertCell();
  cellContact.innerHTML = `${park.Phone}, ${park.Fax}`;

  const cellCord = row.insertCell();
  cellCord.innerHTML = `${park.Longitude}, ${park.Latitude}`;

  if (park.Address === 0) {
    cellAddress.innerHTML = `Information unavailable, ${park.City}, ${park.State}`;
  }
  if (park.Phone === 0) {
    cellContact.innerHTML = `Information unavailable, ${park.Fax}`;
  }
}

//Page will include: LocationName, Address, City, State, Zipcode, and Phone#
