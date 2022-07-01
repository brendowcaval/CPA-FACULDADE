import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { tela1 } from "../screen/tela1";
import { tela2 } from "../screen/tela2";
import { tela3 } from "../screen/tela3";
import { tela4 } from "../screen/tela4";
import { tela5 } from "../screen/tela5";
import { tela6 } from "../screen/tela6";
import { cadastro } from "../screen/cadastro";

/**tipagem */
export type NavegacaoStackParams = {
    tela1:undefined,
    tela2:undefined,
    tela3:undefined,
    tela4:undefined,
    tela5:undefined,
    tela6:undefined,
    cadastro:undefined
}

const Stack = createNativeStackNavigator<NavegacaoStackParams>();
 /**dentro do stack.screen = options={{headerShown:false}} para tirar a barra de cima da tela */
export function StackNavegacao(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="tela1" component={tela1} options={{headerShown:false}}/>   
            <Stack.Screen name="tela2" component={tela2} options={{headerShown:false}}/>
            <Stack.Screen name="tela3" component={tela3} options={{headerShown:false}}/>
            <Stack.Screen name="tela4" component={tela4} options={{headerShown:false}}/>
            <Stack.Screen name="tela5" component={tela5} options={{headerShown:false}}/>
            <Stack.Screen name="tela6" component={tela6} options={{headerShown:false}}/>
            <Stack.Screen name="cadastro" component={cadastro} options={{headerShown:false}}/>
        </Stack.Navigator>
    )

}