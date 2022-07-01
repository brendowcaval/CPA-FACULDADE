import * as React from 'react';
import { View, Text,StyleSheet,TextInput,Button } from 'react-native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack';
import { NavegacaoStackParams } from '../../navigations/stack';
import { useNavigation } from '@react-navigation/native';
import { getFirestore, setDoc, doc} from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

export interface cadastroProps {
}

export function cadastro (props: cadastroProps) {
    type navPros = NativeStackNavigationProp<NavegacaoStackParams,'cadastro'>
    const nav= useNavigation<navPros>();
        
    const [resultado,setResultado] =React.useState('');
    const [email,setEmail] =React.useState('');
    const [password,setPassword] =React.useState('');


    const cadastrar = () => {
         const auth = getAuth();
         createUserWithEmailAndPassword(auth, email, password)
              .then(sucesso => {
                   setResultado("Conta criada com sucesso!");
              })
              .catch(erro => {
              setResultado("Já foi criada uma conta com esse email."); }); 
          
           
   
        }
       
    return (
      <View style={styles.loginContainer}>
             

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
          onPress={() => nav.navigate('tela1')}>
           Já tem uma conta? faça o login aqui.
          </Text>

            <Button  title="Cadastrar" color="blue" onPress={cadastrar} 
                  /> 
      </View>
    );
}

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
  })
  