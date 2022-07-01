import * as React from 'react';
import { View, Text,StyleSheet,Image,FlatList,Share,Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack';
import { NavegacaoStackParams } from '../../navigations/stack';

export interface tela6Props {
}

export function tela6 (props: tela6Props) {
    type navPros = NativeStackNavigationProp<NavegacaoStackParams,'tela6'>
    
    const dados=[
      {key:'                         Questionário Discente'},
      {key:'                      obrigado pela participação!'}
    ]
    

    
    const nav= useNavigation<navPros>();
    return (
      <View style={styles.container}>

         

          <FlatList
              data={dados}
              renderItem={({item}) => <Text style={styles.textoItem}>{item.key}</Text>}
          />

          <View style={styles.buttom} >
            <Button
            title="Fechar"
            color="blue"
          />
          </View>

          <View style={styles.buttom} >
           <Button  title="Compartilhar" onPress={() => { Share.share({message:'Compartilhe!'}) }}/>
           </View>
         
      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  textoItem:{
    fontSize:20,
    color:'#34495e',
    padding:25,
    borderBottomWidth:1,
    borderBottomColor:'#ccc',
    
  },
  buttom: {
    marginBottom:30
},
loginContainer: {
  width: '95%',
  backgroundColor: 'white',
  padding: 150,
  margin:0,
  elevation: 10,
},
})


