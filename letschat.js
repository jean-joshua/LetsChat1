
var firebaseConfig = {
      apiKey: "AIzaSyBhlrcp6VA5gnz7deNDUQPyYPeERdRZu0c",
      authDomain: "kwitter-app-839d9.firebaseapp.com",
      databaseURL: "https://kwitter-app-839d9-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-839d9",
      storageBucket: "kwitter-app-839d9.appspot.com",
      messagingSenderId: "298486406889",
      appId: "1:298486406889:web:c810c003d9f72c744b9a78"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     user_name = localStorage.getItem("user_name");

     document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
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
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
      

