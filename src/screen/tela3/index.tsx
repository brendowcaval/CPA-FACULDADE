import * as React from 'react';
import {  SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Button, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack';
import { NavegacaoStackParams } from '../../navigations/stack';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc, doc, addDoc, collection} from 'firebase/firestore';


const loginValidationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Esta pergunta é obrigatória'),
    name2: yup
      .string()
      .required('Esta pergunta é obrigatória'),
    name3: yup
      .string()
      .required('Esta pergunta é obrigatória'),
    name4: yup
      .string()
      .required('Esta pergunta é obrigatória'),
    name5: yup
      .string()
      .required('Esta pergunta é obrigatória'),
  })

export interface tela3Props {
}

export function tela3 (props: tela3Props) {
    type navPros = NativeStackNavigationProp<NavegacaoStackParams,'tela3'>
    const nav= useNavigation<navPros>();

    const [resposta1,setResposta1] =React.useState('');
    const [resposta2,setResposta2] =React.useState('');
    const [resposta3,setResposta3] =React.useState('');
    const [resposta4,setResposta4] =React.useState('');
    const [resposta5,setResposta5] =React.useState('');

    const respostas = () => { 
        const usuario={resposta1,resposta2,resposta3,resposta4,resposta5};
       const db=getFirestore();
       addDoc(collection(db,'respostas-tela3'),usuario); 
              
        
    }

    
    return (
        <View style={styles.container}>
          

          <View style={styles.loginContainer}>
           <Text>Indique a cidade e o polo
             presencial em que você estuda.  <Text style={styles.errorText}>*</Text>
           </Text>
           <TextInput
                style={styles.input}
                onChangeText={setResposta1}
                />
              
            
           </View>
           <View style={styles.loginContainer}>
           <Text>Qual seu curso?  <Text style={styles.errorText}>*</Text>
           </Text>
           <TextInput
                style={styles.input}
                onChangeText={setResposta2}
                
                />
               
            
           </View>
           <View style={styles.loginContainer}>
           <Text>Qual sua turma?  <Text style={styles.errorText}>*</Text>
           </Text>
           <TextInput
                style={styles.input}
                onChangeText={setResposta3}
                
                />
               
            
           </View>
           <View style={styles.loginContainer}>
           <Text>Em qual ano/mês você iniciou o curso?<Text style={styles.errorText}>*</Text>
           </Text>
           <TextInput
                style={styles.input}
                onChangeText={setResposta4}
                
                />
               
           </View>
           <View style={styles.loginContainer}>
           <Text>Selecione a disciplina
            para a qual você responderá o questionário:  <Text style={styles.errorText}>*</Text>
           </Text>
           <TextInput
                style={styles.input}
                onChangeText={setResposta5}
                
                />
               
            
           </View>
          
           <View style={styles.buttom}>
           <Button
            title="Enviar"
            color="blue"
            onPress={respostas}
            
          />
          </View>
          <View style={styles.fixToText}>
           <Button
            title="Voltar"
            color="blue"
            
            onPress={() => nav.navigate('tela2')}
          />
          <Button
            title="Avançar"
            color="blue"
            
            onPress={() => nav.navigate('tela4')}
          />
          </View>
          
          


          
      
        </View>
    );

}




const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor:'white',
    },
    loginContainer: {
      width: '95%',
      backgroundColor: 'white',
      padding: 10,
      margin:10,
      elevation: 10,
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
        fontSize: 15,
        color: 'red',
      },
      baseText: {
        color:'#008000'
      },
      buttom: {
        marginBottom:30
      },
      fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
  })
  





  




   





