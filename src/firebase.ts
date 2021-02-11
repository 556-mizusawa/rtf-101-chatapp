import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyATdsBNt5WWBfffNHJbGuBeG-mZzyfM2go',
  authDomain: 'rtf-101-chatapp.firebaseapp.com',
  projectId: 'rtf-101-chatapp',
  storageBucket: 'rtf-101-chatapp.appspot.com',
  messagingSenderId: '608542598081',
  appId: '1:608542598081:web:c76d7aed678c24a8e30540',
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const messagesRef = database.ref('messages');

interface pushMessageProps {
  name: string;
  text: string;
}

export const pushMessage = ({ name, text }: pushMessageProps) => {
  messagesRef.push({ name, text });
};
