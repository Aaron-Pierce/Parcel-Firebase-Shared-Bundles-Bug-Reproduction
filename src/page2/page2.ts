import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {};


try{
    const app = initializeApp(firebaseConfig);
}catch(ignoreErrorFromNotHavingAProperConfig){}

import { getAuth } from 'firebase/auth'

let a = getAuth;
console.log("Make sure the following is not unused: ", a);

// do some other stuff with this auth object