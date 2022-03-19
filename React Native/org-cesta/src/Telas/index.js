import React from 'react';
import { FlatList,StyleSheet, Dimensions, View, Text } from 'react-native';

import Detalhes from './componentes/Detalhes';
import Topo from './componentes/Topo';
import Item from './componentes/item';
import Texto from '../Componentes/Texto';

const width = Dimensions.get('screen').width;

export default function Cesta ({topo,detalhes,itens}) {
    return <>
        <FlatList 
            data ={itens.lista}
            style = {estilos.lista}
            renderItem={Item}
            keyExtractor = {({nome})=>nome}
            ListHeaderComponent={() =>{
                return<>
                    <Topo{...topo}/>   
                    <View style={estilos.daview}>
                        <Detalhes {...detalhes}/>
                        <Texto style = {estilos.titulo}>{itens.titulo}</Texto>
                    </View>   
                </>
            }}
        />      
    </>
}

const estilos = StyleSheet.create({
    daview:{
        paddingHorizontal:16,
        paddingVertical:8
    },
    titulo: {
        color : '#464646',
        fontWeight : 'bold',
        marginTop : 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    lista:{
        
    }
})
 