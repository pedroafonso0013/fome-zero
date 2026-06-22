const firebaseConfig = {
  // Cole o link que apareceu exatamente aqui dentro das aspas:
  databaseURL: "https://fome-zero-b220c-default-rtdb.firebaseio.com/
:
null", 
  
  // As outras chaves abaixo você pega nas configurações do projeto (veja o passo abaixo)
  apiKey: "AIzaSyDiai4Zh0bl4sjMINPR5JFjJyB1D3MJVlk",
  authDomain: "fome-zero-b220c.firebaseapp.com",
  databaseURL: "https://fome-zero-b220c-default-rtdb.firebaseio.com",
  projectId: "fome-zero-b220c",
  storageBucket: "fome-zero-b220c.firebasestorage.app",
  messagingSenderId: "996183489836",
  appId: "1:996183489836:web:366752e13645064e420089",
  measurementId: "G-L98ZRX0WP7"
};

// Inicializa o Firebase para todo o sistema automático
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

