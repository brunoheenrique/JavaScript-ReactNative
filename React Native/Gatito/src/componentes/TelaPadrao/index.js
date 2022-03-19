import React from "react";

import { SafeAreaView, KeyboardAvoidingView, StatusBar, Platform } from "react-native";
import estilosGlobal, {cores} from "../../estilos"
import estilos from './estilos';

export default function TelaPadrao({ children }){
    return <>
        <SafeAreaView style = {estilosGlobal.preencher}> 
            <StatusBar backgroundColor={cores.roxo}/>  
            <KeyboardAvoidingView behavior={Platform.OS == "android" ? "height": "padding"} 
            style = {estilosGlobal.preencher}> 
            {children}
            </KeyboardAvoidingView>
        </SafeAreaView>
        <SafeAreaView style={estilos.ajusteTelaBaixo}/>
    </>
}   