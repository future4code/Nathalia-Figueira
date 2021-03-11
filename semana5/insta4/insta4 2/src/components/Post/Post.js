import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeMarcadorBranco from '../../img/bookmark_border.svg'
import iconeMarcadorPreto from '../../img/bookmark_added.svg'
import iconeCompartilhar from '../../img/share.svg'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'


class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvarPost: false,
    compartilharPost: false
  }

  onClickCurtida = () => {
    let novoNumeroCurtidas //Criando uma váriável para a curtida = novas curtidas
    if (this.state.curtida) {
      novoNumeroCurtidas = this.state.numeroCurtidas - 1;
    } else {
      novoNumeroCurtidas = this.state.numeroCurtidas + 1;
    }

    this.setState({
      curtida: !this.state.curtida,
      numeroCurtidas: novoNumeroCurtidas
    })
  }
  

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if (this.state.curtida) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </div>
      {componenteComentario}
    </div>
  }
}

export default Post