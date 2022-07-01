import * as React from 'react';
import { View, Text,StyleSheet,Button,SafeAreaView,TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack';
import { NavegacaoStackParams } from '../../navigations/stack';
import { Form, Formik,Field} from 'formik';
import * as yup from 'yup';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc, doc, addDoc, collection} from 'firebase/firestore';

const loginValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Esta pergunta é obrigatória'),
})

export interface tela4Props {
}

export function tela4 (props: tela4Props) {
    type navPros = NativeStackNavigationProp<NavegacaoStackParams,'tela4'>

    const nav= useNavigation<navPros>();

    const [resposta1,setResposta1] =React.useState('');
    const [resposta2,setResposta2] =React.useState('');
    const [resposta3,setResposta3] =React.useState('');
    const [resposta4,setResposta4] =React.useState('');
    const [resposta5,setResposta5] =React.useState('');
     const [resposta6,setResposta6] =React.useState('');

    const respostas = () => { 
        const usuario={resposta1,resposta2,resposta3,resposta4,resposta5,resposta6};
       const db=getFirestore();
       addDoc(collection(db,'respostas-tela4'),usuario); 
              
        
    }
    return (
      <View style={styles.container}>
         
         
             
            
             <View  style={styles.loginContainer}>
         <Text>1.Avalie sua atuação pessoal durante a disciplina:
         </Text>
         <Text  style={{color:'red'}}>Responda as perguntas entre 1 e 5.</Text>
         </View>
        

         <View  style={styles.loginContainer}>
            <Text>
              Estive motivado durante o decorrer de toda
              disciplina.    <Text style={styles.errorText}> * </Text>
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={setResposta1}
                />
           
          </View>

          <View  style={styles.loginContainer}>
            <Text>Consegui me organizar para o estudo,conciliando os trabalhos
              com as atividades pessoais e profissionais.    <Text style={styles.errorText}> * </Text>
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={setResposta2}
                />
            
            </View>
             
          <View  style={styles.loginContainer}>
            <Text>Participei efetivamente das atividades individuais propostas(tarefas)
                     <Text style={styles.errorText}> * </Text>
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={setResposta3}
                />
            
           </View>
          <View  style={styles.loginContainer}>
            <Text>Contribui com meus conhecimentos,ideias e experiências para os 
              trabalhos desenvolvidos em grupo(fóruns).        <Text style={styles.errorText}> * </Text>
            </Text>
             <TextInput
                style={styles.input}
                onChangeText={setResposta4}
                />
              
          </View>
          <View  style={styles.loginContainer}>
            <Text>As opiniões de colegas e do(a) professor(a) contribuíram
              para o meu processo de aprendizagem.      <Text style={styles.errorText}> * </Text>
            </Text>
             <TextInput
                style={styles.input}
                onChangeText={setResposta5}
                />
            
           </View>
          <View  style={styles.loginContainer}>
            <Text>Sinto-me motivado(a) a aplicar os conhecimentos obtidos nesta 
              disciplina do curso.         <Text style={styles.errorText}> * </Text>
            </Text>
             <TextInput
                style={styles.input}
                onChangeText={setResposta6}
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
            onPress={() => nav.navigate('tela3')}
          />

           <Button
            title="Avançar"
            color="blue"
            onPress={() => nav.navigate('tela5')}
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
        buttom:{
          marginBottom:30
          
        },
        fixToText: {
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
    })







  
