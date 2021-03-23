import React from "react";
import PerguntaCampoBranco from "./components/perguntaCampoBranco.js";
import PerguntaSelect from "./components/perguntaSelect.js";
export default
class Etapa1 extends React.Component {
    render() {
        return (
            <div>
                <h2> Etapa 1 - Dados Gerais</h2>
                <PerguntaCampoBranco pergunta={"1. Qual o seu nome?"}/>
                <PerguntaCampoBranco pergunta={"1. Qual a sua idade?"}/>
                <PerguntaCampoBranco pergunta={"1. Qual o seu endereço?"}/>
                <PerguntaCampoBranco pergunta={"1. Qual o seu nome?"}/>
                <PerguntaSelect pergunta={"Qual a sua ecolaridade?"}
                    select={[
                    "Ensino Médio Incompleto.",
                    "Ensno Médio Completo.",
                    "Ensino Superior Incompleto.",
                    "Ensino Superior COmpleto."
                ]}
                />
            </div>
        )
    }
}

