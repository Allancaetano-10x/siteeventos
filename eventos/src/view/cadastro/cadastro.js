import React, { useState } from 'react';
import './cadastro.css';

import firebase from '../../config/firebase';
import 'firebase/auth'
import Home from '../home/home'
import NavBar from '../../componentes/navbar/navigation';

function Novousuario(){

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [msg, setMsg] = useState();
  const [carregando, setCarregando] = useState();


  function cadastro(){
        setMsg(null);

      if(!email || !senha){
          setMsg('erro')
          setMsg('Você precisa informar o email e senha para fazer o cadastro!')
          return;
      }

      firebase.auth().createUserWithEmailAndPassword(email,senha).then(resultado => {
        setMsg('Sucesso')            
      }).catch(erro => {
          setMsg('Negado')
              }       
      )
  }
 
    return (
      <>
      <NavBar/>
          <div className="form-cadastro ">
              <form className="text-center form-login mx-auto mt-5">
                <h1 className="h3 mb-3 text-black font-weight-bold">Cadastro For Funny</h1>
                <input onChange={(e) => setEmail(e.target.value) }  type="email" className="form-control my-2" placeholder="Email" />
                <input onChange={(e) => setSenha(e.target.value) } type="password" className="form-control my-2" placeholder="Senha" />
    
                 <button onClick={cadastro} type="button" className="btn btn-lg btn-primary btn-block btn-login mb-3">Cadastrar</button>
               
                <div className="msg-login text-center bg-warning" >
                 { msg === 'Sucesso'  && <span>Legal! <strong>Usuário Cadastrado com Sucesso </strong></span>}
                 { msg === 'Negado' &&  <span>Ops! <strong>Verifique os Campos vazios ou incorretos</strong></span>}
               </div>
              </form>
             </div>    
        </>                  
    )
}

export default Novousuario