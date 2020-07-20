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
var db = firebase.firestore();

// get all data
function getAllData() {
    db.collection("user").get().then((querySnapshot) => {
        user.innerHTML = ''
        querySnapshot.forEach((doc) => {
            let userdata = document.createElement('li');
            userdata.textContent = doc.data().nama
            user.appendChild(userdata)
        });
    });
}

getAllData()

// insert data
var getNama = document.getElementById('nama')
var tambahData = document.getElementById('tambah')

tambahData.addEventListener('click', () => {
    db.collection('user').add({
        nama: getNama.value
    }).then((docref) => {
        console.log('document berhasil dibuat dengan id ', docref.id)
        getAllData()
        getNama.value = ''
    }).catch((error) => {
        getNama.value = ''
        console.log('error membuat document: ', error)
    })
})


function writeUserData(name) {
    firebase.database().ref('user').set({
        username: name
    });
}

writeUserData("ronald")

firebase.database().ref('user').on('value', (snap) => {
    console.log(snap.val().username);
});