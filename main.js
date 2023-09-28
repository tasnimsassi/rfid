// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
    apiKey: "AIzaSyDCR1bbMVb_Edkvzy1OI7SCNEJAiHSiB74",
    authDomain: "smart-door-a3ffd.firebaseapp.com",
    databaseURL: "https://smart-door-a3ffd-default-rtdb.firebaseio.com",
    projectId: "smart-door-a3ffd",
    storageBucket: "smart-door-a3ffd.appspot.com",
    messagingSenderId: "669838622870",
    appId: "1:669838622870:web:739e579d2b911103fe02b7"
	  
  
	};
  
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
	e.preventDefault();
  
	// Get values
	var name = getInputVal('name');
	var surname = getInputVal('surname');
	var email = getInputVal('email');
	var phone = getInputVal('phone');
	var badge_code = getInputVal('badge_code');
  
	// Save message
	saveMessage(name, surname, email, phone, badge_code);
  
	// Show alert
	document.querySelector('.alert').style.display = 'block';
  
	// Hide alert after 3 seconds
	setTimeout(function(){
	  document.querySelector('.alert').style.display = 'none';
	},3000);
  
	// Clear form
	document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
	return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, surname, email, phone, badge_code){
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
	  name: name,
	  surname:surname,
	  email:email,
	  phone:phone,
	  badge_code:badge_code
	});
  }