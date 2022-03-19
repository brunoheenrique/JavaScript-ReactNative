import React from 'react';
import { View, Image, StyleSheet,} from 'react-native';

import Texto from '../../Componentes/Texto'
import Botao from '../../Componentes/Botao';

export default function Detalhes({nome,logofazenda,nomefazenda,descriçao,preço,botao}) {
    return <>
        <Texto style={estilos.nome}> {nome} </Texto>
        <View style = {estilos.fazenda}>    
            <Image source = { logofazenda } style={estilos.imagelogo}/>
            <Texto style = {estilos.nomefazenda}> {nomefazenda }</Texto>    
        </View>
        <Texto style = {estilos.descriçao}>{ descriçao }</Texto>
        <Texto style = {estilos.preço}>{ preço }</Texto>
        <Botao texto={botao} style={estilos.botao} onPress={() => {}} />
    </>
}

const estilos = StyleSheet.create({
    nome:{
        fontSize:26,
        lineHeight:42,
        color:'#464646',
        fontWeight:'bold'
    },
    fazenda:{
      flexDirection:'row',
      paddingVertical:12 , 
    },
    imagelogo:{
        width: 36,
        height:36,
    },
    nomefazenda:{
        fontSize:16,
        lineHeight:26,
        marginLeft:12,
    },
    descriçao:{
        color:'#A3A3A3',
        fontSize:16,
        lineHeight:26,
    },
    preço:{
        color:'#2A9F85',
        fontWeight:'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop:8,
    },
    botao:{
        marginTop:16,
        backgroundColor:'#2A9F85',
        paddingVertical:16,
        borderRadius: 6,
    },
    textoBotao:{
        textAlign:'center',
        color:'#ffffff',
        fontWeight:'bold',
        fontSize:16,
        lineHeight:26,
    },
})