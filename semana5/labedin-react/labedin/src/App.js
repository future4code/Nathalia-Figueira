import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import FotoNtfigueira from './components/images/foto-ntfigueira.jpg';
import Irritada from './components/icon/irritada.png';
import Trabalhadora from './components/icon/trabalhadora.png';
import EmailImagem from './components/icon/gmail-icon.ico';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          perfil="Nathália Figueira da Silva"
          imagem={FotoNtfigueira}
          nome="Nathália Figueira da Silva" 
          descricao="Olá, meu Nome é Nathália Figueira da Silva, tenho 31 anos, 
          sou estudante de Programação  Fullstack, no curso Labenu. Curso Direito na UFF,
          e apesar de querer seguir na carreira de programação que é o que eu amo fazer
          , pretendo retomar e  terminar a minha gradução e com isso somar conhecimento.
          Gosto de pessoas, gosto de resolver conflitos, sou curiosa e determinada.
          Trabalho bem em grupo e sobre pressão."
        />
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Sobre Mim"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas Experiências</h2>
        <CardGrande 
          imagem= {Trabalhadora} 
          nome="Profissional" 
          descricao="Os meus trabalhos anteriores estiveram ligados diretamente a resolução de conflitos, 
          trabalho em equipe, vendas, marketing e gestão de tempo"
        />
        
        <CardGrande 
          imagem={Irritada}
          nome="Defeitos" 
          descricao="Apesar de não ser competitiva, não absorvo bem quando perco algo, sinto como
          se fosse um fracasso pessoal e fico irritada e revisitando durante muito tempo"
        />
        <h2>Email Para Contato</h2>

        <CardPequeno
          imagem={EmailImagem}
          nome="Email"
          endereco="projetolabedin@gmail.com"
        />
      </div>
    
      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
