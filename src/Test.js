import React from 'react';

const propriedades = {
    text : null,
    algo : null
}

const Teste = (props) => {
    return(
        <h1 style={{color:"red"}}> React é MT {props.text}</h1>
    );
};

function Test(props){
    propriedades.text = props.text;

    return (
        <div style={{backgroundColor:"blue"}}>
        <h1>Teste de Funcões</h1>
        <Teste text={props.text}/>
        </div>
    );
}

export default Test;