/**tsrnsl : para criar a base do projeto */
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StatusBar,
              View,
               Text,
               Image,
              Button,
           TextInput,
            StyleSheet,
            SafeAreaView,
            Share,
            ToastAndroid} from 'react-native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack';
import { NavegacaoStackParams } from '../../navigations/stack';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc, doc} from 'firebase/firestore';








export interface tela1Props {
}
/**tag view é tipo uma div do html */
export function tela1 (props: tela1Props) {
    /**o set é para poder mudar o valor */
    let nome2:string="Comissão Própria de Avaliação";
    const [titleText] = React.useState("CPA CESMAC");
    type navPros = NativeStackNavigationProp<NavegacaoStackParams,'tela1'>

    const nav= useNavigation<navPros>();

    const [resultado,setResultado] =React.useState('');
    const [email,setEmail] =React.useState('');
    const [password,setPassword] =React.useState('');

     const cadastrar = () => {
     { /*const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
           .then(sucesso => {
                setResultado("Conta criada com sucesso!");
           })
           .catch(erro => {
           setResultado("Já foi criada uma conta com esse email."); }); */}
       
        {/*aqui embaixo é os dados que vao pro banco */}
       const usuario={email,password};
       const db=getFirestore();
       setDoc(doc(db,'usuarios',email),usuario);
       {/*se quiser gerar o id automaticamente: */}

       {/*const usuario={email,password};
       const db=getFirestore();
       addDoc(collection(db,'clientes'),usuario); */}

     }

     const logar = () => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
           .then(sucesso => {
                setResultado(`Logado com Sucesso! ${sucesso.user.email}`); {/*o sucesso busca os dados do usuario */}
                nav.navigate('tela2')
           })
           .catch(erro => {
                setResultado('Email ou Senha incorreta!');
            });
    }
    

    return (
        <View style={styles.loginContainer}>
          
        <Text style={{fontWeight:'bold',fontSize:40,color:"blue"}}>
        {titleText} {"\n"}
        <Text style={{fontSize:20}}>{nome2}</Text>
        {"\n"}
        </Text>
          
              
            
              <Text style={{fontWeight:'bold'}}>Email</Text>
              <TextInput
                placeholder="Email Address"
                style={styles.textInput}
                keyboardType="email-address"
                onChangeText={setEmail}
              />
                
              
              <Text style={{fontWeight:'bold'}}>Password</Text>
              <TextInput
                placeholder="Password"
                style={styles.textInput}
                secureTextEntry
                onChangeText={setPassword}
              />
               
               <Text style={{color:'bold'}}>{resultado}</Text>
              

           <Text style={{color: '#008000'}}
          onPress={() => nav.navigate('cadastro')}>
           Precisa de uma conta? Cadastre-se aqui.
          </Text>
                <Text>{'\n'}</Text>
                  
               
               <Button title='logar' onPress={logar}/>


                
               
              
              
               
              
               
               
           
             
        </View>
    
    );
}
/**onPress={() => nav.navigate('tela2')} */
/**css externo */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  loginContainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'stretch',
    padding:50
  },
  textInput: {
      height: 40,
      width: '100%',
      margin: 10,
      backgroundColor: 'white',
      borderColor: 'gray',
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 10,
    },
    errorText: {
      fontSize: 10,
      color: 'red',
    },
    baseText: {
      color:'#008000'
    },
})


