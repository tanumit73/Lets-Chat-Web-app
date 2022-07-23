var firebaseConfig = {
    apiKey: "AIzaSyD2U0uh5Pu3HwugedgZ7FD_XUf5aYNlKns",
    authDomain: "kwitter-4be8f.firebaseapp.com",
    databaseURL: "https://kwitter-4be8f-default-rtdb.firebaseio.com",
    projectId: "kwitter-4be8f",
    storageBucket: "kwitter-4be8f.appspot.com",
    messagingSenderId: "926954629157",
    appId: "1:926954629157:web:1f32dc147a4ee1b042b7cc"
  };
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name -" + Room_names);
    row = "<div class'room_name' id="+ Room_names+" onclick='redirectToRoomName(this.id) >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout()
{
     window.location= "index.html";
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
}
