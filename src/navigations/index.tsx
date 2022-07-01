import {NavigationContainer} from '@react-navigation/native';
import { StackNavegacao } from './stack';

export function PrincipalNavegacao(){
    return(
        <NavigationContainer>
            <StackNavegacao/> 
        </NavigationContainer>
    )
}