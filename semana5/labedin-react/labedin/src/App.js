import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="Nathália Figueira da Silva" 
          descricao="Olá, meu Nome é Nathália, sou estudante de Programação  Fullstack, no curso Labenu."
        />
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Sobre Mim"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas Experiências</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Profissional" 
          descricao="Os meus trabalhos anteriores estiveram ligados diretamente a resolução de conflitos, 
          trabalho em equipe, vendas, marketing e gestão de tempo"
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="Defeitos" 
          descricao="Apesar de não ser competitiva, não absorvo bem quando perco algo, sinto como
          se fosse um fracasso pessoal e fico irritada e revisitando durante muito tempo"
        />
        <h2>Email(s) Para Contato</h2>

        <CardPequeno
          imagem=""
          nome="Emails"
          endereco="projetolabedin@outlook.com"
          endereco="projetolabedin@gmail.com.br"
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
