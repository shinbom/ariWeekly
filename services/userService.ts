import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, deleteUser, reauthenticateWithCredential  } from 'firebase/auth';

export default class userService {
  async login (email: string, password : string) {
    try {
      const auth = await getAuth()
      const { user } = await signInWithEmailAndPassword(auth, email, password);  
      console.log('User :: ', user)
      // firebase auth 후, indexed Db에 데이터가 세팅
    } catch (err) {
      console.log('error :: ' , err)
    }
  }

  getLoginData(){
    const request = indexedDB.open('firebaseLocalStorageDb', 1)
    request.onsuccess = e => {
      console.log('db access success')
      const db = request.result
      const transaction = db.transaction('firebaseLocalStorage')
    }
  }
}

