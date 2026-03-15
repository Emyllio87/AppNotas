import React from "react";
import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import style from "./style";

export default function Formulario(){

    const [nota1 , setNota1] = useState('');
    const [nota2 , setNota2] = useState('');
    const [nota3 , setNota3] = useState('');
    const [nota4 , setNota4] = useState('');
    const [resultado, setResultado] = useState('');


    function calcularMedia(){

        const n1 = parseFloat(nota1); //convertendo a nota1 texto em n1 float 
        const n2 = parseFloat(nota2); //convertendo a nota1 texto em n1 float 
        const n3 = parseFloat(nota3); //convertendo a nota1 texto em n1 float 
        const n4 = parseFloat(nota4); //convertendo a nota1 texto em n1 float 

        //se não tiver valores válidos  em n1, n2, n3, n4 será enviada uma notificação 

        if(!n1 || !n2 || !n3 || !n4){
            setResultado ('Inserir valores válidos!')
        }

        const media  = (n1+n2+n3+n4)/4;

        let classificacao ='';

        if(media <5.0){
            classificacao ='Reprovado(a)!';
        }else if( media< 6.0){
            classificacao='Recuperação!'
        }else{
            classificacao='Aprovado(a)!'
        }

    setResultado(`Média final: ${media.toFixed(2)} - ${classificacao}`)



    }




    return (
        <View>
            <Text style={style.texttitle}>Calculadora de Média</Text>

            <TextInput
            style={style.textinput}
            placeholder="Nota 1:"
            keyboardType="numeric"
            onChangeText={setNota1}
            value={nota1}
            />

            

            <TextInput   
            style={style.textinput}         
            placeholder="Nota 2:"
            keyboardType="numeric"
             onChangeText={setNota2}
            value={nota2}
            />

             <TextInput 
             style={style.textinput}           
            placeholder="Nota 3:"
            keyboardType="numeric"
             onChangeText={setNota3}
            value={nota3}
            />

             <TextInput 
             style={style.textinput}           
            placeholder="Nota 4:"
            keyboardType="numeric"
             onChangeText={setNota4}
            value={nota4}
            />


            <TouchableOpacity style={style.button}  onPress={calcularMedia}>
                <Text style={style.textbutton}>Calcular Média</Text>
            </TouchableOpacity>
            <Text style={style.textresultado}> {resultado}</Text>
        </View>
    )



}