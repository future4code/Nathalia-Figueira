import React from "react"

function Select(props) {
    return (
        <div>
            <p>
                {props.pergunta}
            </p>
            <select>
                {props.opcoes.map ( opcao => (
                <option value={opcao}>{opcao}</option>
                ))}
            </select>
        </div>
    );
}
export default PerguntaSelect;