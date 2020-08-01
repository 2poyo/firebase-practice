// import firebase from 'firebase'
//
// if (!firebase.apps.length) {
//     firebase.initializeApp({
//         apiKey: "AIzaSyDzgaGDXPYBjv_PJLfjUrn4Ht3iG3ulCvM",
//         authDomain: "todop-ce734.firebaseapp.com",
//         databaseURL: "https://todop-ce734.firebaseio.com",
//         storageBucket: "todop-ce734.appspot.com"
//     })
// }
// export default firebase
// export const storage = firebase.storage()
// export const db = firebase.firestore()

import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
        apiKey: "AIzaSyDzgaGDXPYBjv_PJLfjUrn4Ht3iG3ulCvM",
        authDomain: "todop-ce734.firebaseapp.com",
        databaseURL: "https://todop-ce734.firebaseio.com",
        projectId: "todop-ce734",
        storageBucket: "todop-ce734.appspot.com",
        messagingSenderId: "1064784271359",
        appId: "1:1064784271359:web:b2b7a0beec56113ad0b9ca"
    }
  )
}

export default firebase
