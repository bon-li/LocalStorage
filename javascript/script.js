function customerEntry() {
    //calls buildListToLS function
    buildListToLS();
}

//creates list that is saved to local storage
function buildListToLS() {
    //customer name
    localStorage.setItem("custname", document.getElementById("custname").value);
    //customer email
    localStorage.setItem("custemail", document.getElementById("custemail").value);
    //room
    localStorage.setItem("room", document.getElementById("room").value);
    //width of room
    localStorage.setItem("width", document.getElementById("width").value);
    //length of room
    localStorage.setItem("length", document.getElementById("length").value);
    //colour swatch chosen for room
    localStorage.setItem("colour", document.getElementById("colour").value);
    //type of can by cost
    localStorage.setItem("canType", document.getElementById("canType").value);
}

//saves entry
function saveEntry() {
    //calls buildListToLs function
    buildListToLS();
    document.getElementById("custname").value = "";
    document.getElementById("custemail").value = "";
    document.getElementById("room").value = "";
    document.getElementById("width").value = "";
    document.getElementById("length").value = "";
    document.getElementById("colour").value = "";
    document.getElementById("canType").value = "";
}

//displays customer entry and quote
function makeQuote() {
    let width = parseInt(localStorage.getItem("width"));
    let length = parseInt(localStorage.getItem("length"));
    let canCost = parseFloat(localStorage.getItem("canType"))
    //calculates size of room by width * length
    let roomSize = width * length;
    //calculates cans needed to paint room with roomSize / 400
    let cansNeeded = Math.ceil(roomSize / 400);

    document.getElementById("custnameP").value = localStorage.getItem("custname");
    document.getElementById("custemailP").value = localStorage.getItem("custemail");
    document.getElementById("sqftRoom").value = roomSize;
    document.getElementById("colourP").value = localStorage.getItem("colour");
    document.getElementById("numCans").value = cansNeeded;
    //calculates and displays total cost of paint cans including tax
    document.getElementById("finalPrice").value = ((canCost * (cansNeeded)) * 1.13).toFixed(2);
}