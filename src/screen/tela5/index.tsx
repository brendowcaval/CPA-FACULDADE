import * as React from 'react';
import { View, Text,StyleSheet,Button,TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack';
import { NavegacaoStackParams } from '../../navigations/stack';
import { Form, Formik,Field} from 'formik';
import * as yup from 'yup';
import { getFirestore, setDoc, doc, addDoc, collection} from 'firebase/firestore';



export interface tela5Props {
}

export function tela5 (props: tela5Props) {
     type navPros = NativeStackNavigationProp<NavegacaoStackParams,'tela5'>

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
       addDoc(collection(db,'respostas-tela5'),usuario); 
              
        
    }
    return (
      <View style={styles.container}>
           
      
         
             
            
             <View  style={styles.loginContainer}>
         <Text>2.Avalie os conteúdos abordados nessa disciplina:
         </Text>
         <Text  style={{color:'red'}}>Responda as perguntas entre 1 e 5.</Text>
         </View>
        

         <View  style={styles.loginContainer}>
            <Text>
              Os conceitos apresentados foram suficientes para a realização 
              das atividades propostas colaborativamente.     <Text style={styles.errorText}>*</Text>
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={setResposta1}
                />
          </View>

          <View  style={styles.loginContainer}>
            <Text>Foram pertinentes e atualizados.Por meio deles pude ter 
              uma boa visão sobre os assuntos ligados á disciplina.    <Text style={styles.errorText}>*</Text>
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={setResposta2}
                />
            
            </View>
             
          <View  style={styles.loginContainer}>
            <Text>A linguagem utilizada foi acessível e por meio do tom
              empregado estabeleci uma empatia com os conteúdos.      <Text style={styles.errorText}>*</Text>
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={setResposta3}
                />
            
           </View>
          <View  style={styles.loginContainer}>
            <Text>Os hiperlinks foram pertinentes, possibilitando-me 
              novas referências sobre o assunto.     <Text style={styles.errorText}>*</Text>
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={setResposta4}
                />
             
          </View>
          <View  style={styles.loginContainer}>
            <Text>O grau de profundidade e abrangência dos conteúdos esteve 
              de acordo com minha expectativa.      <Text style={styles.errorText}>*</Text>
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={setResposta5}
                />
            
           </View>
          <View  style={styles.loginContainer}>
            <Text>As referências complementares permitiram aprofundamento
               dos conceitos que mais me interessaram.    <Text style={styles.errorText}>*</Text>
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
            onPress={() => nav.navigate('tela4')}
            
          />
            
          <Button
            title="Avançar"
            color="blue"
            onPress={() => nav.navigate('tela6')}
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
