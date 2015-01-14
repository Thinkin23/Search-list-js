
init();
function init(){

addContactsToList();
addListeners();
}

function addContactsToList(){

    var contacts = "";
    var contactTable = document.querySelector("#contacts tbody");
    CONTACTS.forEach(function(contact, index){
      contacts += "<tr><td>" + contact.name + "</td><td>" + contact.surname + "</td><td>" + contact.email + "</td><td>" + contact.company + "</td><td>" + contact.city + "</td></tr>";
    });
    contactTable.innerHTML = contacts;

}

function addListeners() {

    var searchInput = document.getElementById('search-term');
    searchInput.addEventListener('keyup', findContact);
    var SelectInput = document.getElementById('search-fields');
    SelectInput.addEventListener('change', findContact);
}
 
 function findContact(){
 	var contacts = "";
 	var textInput = document.getElementById('search-term');
 	var textValue = textInput.value.toUpperCase();
 	var contactTable = document.querySelector("#contacts tbody");
	var filter = filterSelect();
 	 CONTACTS.forEach(function(contact, index){
 	 var name = contact.name.toUpperCase();
 	 var surname = contact.surname.toUpperCase();
 	 var email = contact.email.toUpperCase();
 	 var company = contact.company.toUpperCase();
 	 var city = contact.city.toUpperCase();

 	
 	 	if(filter === ""){
	 	 	if(name.indexOf(textValue) > -1 || surname.indexOf(textValue) > -1  || email.indexOf(textValue) > -1  || company.indexOf(textValue) > -1  || city.indexOf(textValue) > -1){
	 	 		contacts += "<tr><td>" + contact.name + "</td><td>" + contact.surname + "</td><td>" + contact.email + "</td><td>" + contact.company + "</td><td>" + contact.city + "</td></tr>";
	 	 	}
	 	}
	 	else if(filter === "name"){
	 	 	if(name.indexOf(textValue) > -1){

	 	 		contacts += "<tr><td>" + contact.name + "</td><td>" + contact.surname + "</td><td>" + contact.email + "</td><td>" + contact.company + "</td><td>" + contact.city + "</td></tr>";
	 	 	}
	 	}
	 	else if(filter === "surname"){
	 	 	if(surname.indexOf(textValue) > -1){
	 	 		contacts += "<tr><td>" + contact.name + "</td><td>" + contact.surname + "</td><td>" + contact.email + "</td><td>" + contact.company + "</td><td>" + contact.city + "</td></tr>";
	 	 	}
	 	}
	 	else if(filter === "email"){
	 	 	if(email.indexOf(textValue) > -1){
	 	 		contacts += "<tr><td>" + contact.name + "</td><td>" + contact.surname + "</td><td>" + contact.email + "</td><td>" + contact.company + "</td><td>" + contact.city + "</td></tr>";
	 	 	}
	 	}
	 	else if(filter === "company"){
	 	 	if(company.indexOf(textValue) > -1){
	 	 		contacts += "<tr><td>" + contact.name + "</td><td>" + contact.surname + "</td><td>" + contact.email + "</td><td>" + contact.company + "</td><td>" + contact.city + "</td></tr>";
	 	 	}
	 	}
	 	else if(filter === "city"){
	 	 	if(city.indexOf(textValue) > -1){
	 	 		contacts += "<tr><td>" + contact.name + "</td><td>" + contact.surname + "</td><td>" + contact.email + "</td><td>" + contact.company + "</td><td>" + contact.city + "</td></tr>";
	 	 	}
	 	}
    });
 	 contactTable.innerHTML = contacts;

 }

 function filterSelect(){
 	var contactFilter = document.getElementById("search-fields");
 	var selectedValue = contactFilter.options[contactFilter.selectedIndex].value
 	return selectedValue;
 }