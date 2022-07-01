import { RouteProp, useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Button, TextInput,StyleSheet } from 'react-native';
import { NavegacaoStackParams } from '../../navigations/stack';
import { NativeStackNavigationProp} from '@react-navigation/native-stack';



const Separator = () => (
  <View style={style.separator} />
);

export interface tela2Props {
 
}
export function tela2 (props: tela2Props) {

  type navPros = NativeStackNavigationProp<NavegacaoStackParams,'tela2'>
   const nav= useNavigation<navPros>();
  //const nav= useNavigation();

       

    return (
      <View style={style.input}>
     
          
         <Text style={{fontWeight:'bold'}}>  A CPA agradece sua participação no processo de Autoavaliação{"\n"}
                 institucional e informa que serão respeitados os princípios{"\n"} 
                 de confidencialidade de dados individuais na divulgação dos{"\n"}
                 resultados. {"\n"}{"\n"}</Text>

        <Text style={{fontWeight:'bold'}}>  As perguntas deverão ser respondidas conforme a escala de 1 a 5, onde: {"\n"} {"\n"}
                5 = Excelente {"\n"}
                4 = Muito Bom {"\n"}
                3 = Bom {"\n"}
                2 = Regular {"\n"}
                1 = Insuficiente </Text>
        
        
          <Button
            title="Avançar"
            color="blue"
            onPress={() => nav.navigate('tela3')}
          />
          
          
       
         

        
      </View>
    );
}

const style = StyleSheet.create({
    baseText: {
      color:'#008000'
    },
    input: {
      flex:1,
      padding:20,
      margin:20,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: 'white'
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
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
});
