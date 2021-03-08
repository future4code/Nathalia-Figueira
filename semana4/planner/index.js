
let diasemana=[]
let dia =""
let horaDia=[]
let hora =""
let inputTarefa= String
let tarefa= ""
let local = String
let adicionarTarefa =""


diaSemana = [];
dia = document.querySelector('#dia-semana');
dia.addEventListener('change',    function(ev){
    var selectedOptions = ev.target.selectedOptions;
    diaSemana = [];
    for (var i = 0; i < selectedOptions.length; i++){
        diaSemana.push(selectedOptions[i].value);
    };
});

horaDia = [];
hora = document.querySelector('#hora-dia');
hora.addEventListener('change',    function(ev){
    var selectedOptions = ev.target.selectedOptions;
    horaDia = [];
    for (var i = 0; i < selectedOptions.length; i++){
        horaDia.push(selectedOptions[i].value);
    };
});

function addTarefa(){
    inputTarefa = document.getElementById("input-tarefa")
    local = diaSemana+horaDia
    
    

    console.log (adicionarTarefa.text)
    console.log (adicionarTarefa.type)
    console.log  (inputTarefa.value);
    console.log (horaDia)
    console.log(diaSemana)
    console.log(diaSemana+horaDia)
}


// const diaSemana = document.getElementById("dia-semana");
// const value = diaSemana.options[diaSemana.selectedIndex].value;
// const text = diaSemana.options[diaSemana.selectedvalue].text;

