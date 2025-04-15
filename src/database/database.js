import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB3zTp5CC9lIvNwt1XN1l69lMobSfOgMyg",
  authDomain: "touchminds.firebaseapp.com",
  projectId: "touchminds",
  storageBucket: "touchminds.firebasestorage.app",
  messagingSenderId: "836514843503",
  appId: "1:836514843503:web:d8f0bfc8ea8ac53514769a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export async function registerAluno(email, password, escola, codigoParticipante) {
  try {

    if (!escola || !codigoParticipante) {
      throw new Error('Por favor, preencha todos os campos obrigatórios.');
    }

    if (!email || !email.includes('@')) {
      throw new Error('O email fornecido não é válido.');
    }

    if (password.length < 6) {
      throw new Error('A senha deve ter no mínimo 6 caracteres.');
    }

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(db, "alunos", user.uid), {
      email,
      escola,
      codigoParticipante,
      modulosConcluidos: 0,
      tempoGasto: 0,
      periodicidade: [],
      modulos: {
        modulo1: { status: "desbloqueado", tempo: 0 },
        modulo2: { status: "bloqueado", tempo: 0 },
        modulo3: { status: "bloqueado", tempo: 0 },
        modulo4: { status: "bloqueado", tempo: 0 },
        modulo5: { status: "bloqueado", tempo: 0 },
        modulo6: { status: "bloqueado", tempo: 0 },
      }
    });

    console.log("Aluno registrado com sucesso!");
  } catch (error) {
    console.error("Erro no registro:", error.message);
    throw error; 
  }
}

export async function loginAluno(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("Login realizado com sucesso:", user.email);
  } catch (error) {
    console.error("Erro no login:", error.message);
  }
}

export async function logoutAluno() {
  try {
    await signOut(auth);
    console.log("Logout realizado com sucesso.");
  } catch (error) {
    console.error("Erro ao fazer logout:", error.message);
  }
}

// Tira os dados do aluno logado
export async function dadosAlunos (uid) {
  const userRef = doc(db, 'users', uid);
  const docSnap = await getDoc(userRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    throw new Error("User não encontrado");
  }
};














{/*  Informações a guardar na base de dados:   

  Quantos módulos foram concluídos. 

  Tempo gasto para completar as atividades e os módulos. 

  Periodicidade da realização dos módulos (se foram feitos todos no mesmo dia ou distribuídos ao longo da semana). 

  O modulo tem de ficar bloqueado de inicio , quando o modulo é concluido , alterar o estado do modulo na base de dados para desbloqueado.


  Para cada aluno, guardar os seguintes dados:

  Nome , email, palavra passe, escola, código do participante, 
  utilizar autenticathion do firebase para login e registo.

*/}