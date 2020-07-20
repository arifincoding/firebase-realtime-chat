// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCVJ9yG1Y3Oz9VyL3yIboXEGdGNNsK1FXw",
    authDomain: "chat-fc8ee.firebaseapp.com",
    databaseURL: "https://chat-fc8ee.firebaseio.com",
    projectId: "chat-fc8ee",
    storageBucket: "chat-fc8ee.appspot.com",
    messagingSenderId: "1077322570348",
    appId: "1:1077322570348:web:8220c40a970a6e8185d649",
    measurementId: "G-X6MB13DHFT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var user = document.getElementById('user')

// insert data
var getNama = document.getElementById('nama')
var tambahData = document.getElementById('tambah')

tambahData.addEventListener('click', () => {
    writeUserData(getNama.value)
    getNama.value = ''
})

// insert data
function writeUserData(name) {
    firebase.database().ref('user').push({
        username: name
    }).then((response) => {
        console.log('tambah data berhasil')
    }).catch((error) => {
        console.log(error)
    });
}
// get all data
firebase.database().ref('user').on('value', function (snapshot) {
    user.innerHTML = ''
    snapshot.forEach(function (childSnapshot) {
        let dataLi = document.createElement('li')
        // get id
        var childKey = childSnapshot.key;
        // get data
        var childData = childSnapshot.val();
        dataLi.textContent = childData.username
        user.appendChild(dataLi)
    });
});