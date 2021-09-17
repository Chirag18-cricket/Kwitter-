
var firebaseConfig = {
  apiKey: "AIzaSyDlCprKI3tPBC7ekdhJ1tMPJ_ho4_K1kPg",
  authDomain: "kwitter-428f6.firebaseapp.com",
  databaseURL: "https://kwitter-428f6-default-rtdb.firebaseio.com",
  projectId: "kwitter-428f6",
  storageBucket: "kwitter-428f6.appspot.com",
  messagingSenderId: "461226014658",
  appId: "1:461226014658:web:58cb9009a48e64a139885b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("username");
  document.getElementById("username").innerHTML="Welcome " + user_name + "!";
     
    function addRoom(){
    room_name=document.getElementById("add_room").value;
    firebase.database().ref("/").child(room_name).update({purpose:"adding kwitter room"});
    localStorage.setItem("room_name", room_name);
    window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name=" + Room_names);
row='<div class="room_name" id="' + Room_names + '" onclick="redirectRoomName(this.id)">#' + Room_names + '</div><hr>';
document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redirectRoomName(name){
console.log("room name" + name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
localStorage.removeItem("username");
localStorage.removeItem("room_name");
window.location="index.html";
}