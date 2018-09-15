//declare var and assign value of reference to html ul element
let elTable = document.getElementById('my-table');

//declare var and assign value of reference to html form element
let elForm = document.getElementById('my-form');

//declare var and assign value of empty array
let devArray = [];

//define object constructor, pass it parameters of name, school, language
function DevObject (name, school, language){
    this.name = name;
    this.school = school;
    this.language = language;
}
if(localStorage.getItem('storageDevArray')){
    let getStorageDevArray = localStorage.getItem('storageDevArray');
    devArray = JSON.parse(getStorageDevArray);
} else {
//instantiate DevObject
    let dev1 = new DevObject('Alyssa','Code Partners','Javascript');
    let dev2 = new DevObject('Greg','Code Partners','Javascript');
    let dev3 = new DevObject('Mickey', 'Code Disney', 'CSS');
    let dev4 = new DevObject('Minnie', 'GirlCodeCamp', 'Python');
    let dev5 = new DevObject('Gary', 'Code from the Beach', 'HTML');
    let dev6 = new DevObject('Jason', 'University','Javascript');
    let dev7 = new DevObject('Mandana', 'Code for Babies', 'Javascript');
    let dev8 = new DevObject('Zach', 'Code Fellows', 'Javascript');
    //push new objects to devArray
    devArray.push(dev1, dev2, dev3, dev4, dev5, dev6, dev7, dev8);
}
//create html element for each new object
let i;

function displayDevData(){
    elTable = document.getElementById('my-table');
    let elHeaderRow = document.createElement('tr');
    elTable.appendChild(elHeaderRow);
    let elNameHeader = document.createElement('th');
    elHeaderRow.appendChild(elNameHeader);
    elNameHeader.innerHTML = 'Name';
    let elSchoolHeader = document.createElement('th');
    elHeaderRow.appendChild(elSchoolHeader);
    elSchoolHeader.innerHTML = 'School';
    let elLanguageHeader = document.createElement('th');
    elHeaderRow.appendChild(elLanguageHeader);
    elLanguageHeader.innerHTML = 'Programming Language';
    for(i = 0; i < devArray.length; i++){
        let elTableRow = document.createElement('tr');
        elTable.appendChild(elTableRow);
        let newNameData= document.createElement('td');
        elTableRow.appendChild(newNameData);
        newNameData.setAttribute('class','name');
        newNameData.innerHTML = devArray[i].name;

        let newSchoolData = document.createElement('td');
        elTableRow.appendChild(newSchoolData);
        newSchoolData.setAttribute('class', 'school');
        newSchoolData.innerHTML = devArray[i].school;

        let newLanguageData = document.createElement('td');
        elTableRow.appendChild(newLanguageData);
        newLanguageData.setAttribute('class', 'language');
        newLanguageData.innerHTML = devArray[i].language;
    }
}
let newDevName = elForm.newDevName;
let newDevSchool = elForm.newDevSchool;
let newDevLanguage = elForm.newDevLanguage;

function createNewDev(event) {
    event.preventDefault();
    elTable.innerHTML = '';
    let newDev = new DevObject(newDevName.value, newDevSchool.value, newDevLanguage.value);
    devArray.push(newDev);
    displayDevData();
    localStorage.setItem('storageDevArray', JSON.stringify(devArray));

}


elForm.addEventListener('submit', createNewDev);

displayDevData();
