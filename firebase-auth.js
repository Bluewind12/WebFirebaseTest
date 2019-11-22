// ログイン


// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyA0aW5M6W0k4dODxFoOUkTBkMXzuyZtGQQ",
authDomain: "webloginchecktestpage.firebaseapp.com",
databaseURL: "https://webloginchecktestpage.firebaseio.com",
projectId: "webloginchecktestpage",
storageBucket: "webloginchecktestpage.appspot.com",
messagingSenderId: "641777363139",
appId: "1:641777363139:web:38db9bebe728d0cc2c9a76",
measurementId: "G-PQR7V8W2S9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function signIn() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function(result) {
        document.getElementById('log').innerText = 'サインイン成功';
        window.location.href = './test-page-b.html';
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        document.getElementById('log').innerText = 'サインイン失敗: ' + errorCode + ', ' + errorMessage;
      });
  }
  
function signOut() {
    firebase.auth().signOut().then(function() {
      document.getElementById('log').innerText = 'サインアウト成功';
      var data = document.cookie;
      document.getElementById('state').innerText = (data);

    }).catch(function(error) {
      console.log(error);
      document.getElementById('log').innerText = 'サインアウト失敗';
    });
  }

  // ログイン確認


  