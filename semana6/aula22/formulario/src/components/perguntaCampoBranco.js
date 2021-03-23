import React from "react";

function PerguntaCampoBranco(props) {
  return (
    <div>
      <p>{props.pergunta}</p>
      <input onChange={props.onChange} value={props.value} />
    </div>
  );
}
export default PerguntaCampoBranco;