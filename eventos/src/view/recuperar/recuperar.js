import React, { useState } from 'react';
import './recuperar.css';
import {Link, Redirect} from 'react-router-dom'

import firebase from '../../config/firebase';
import 'firebase/auth'
import NavBar from '../../componentes/navbar/navigation';

function RecuperarSenha(){

const [email, setEmail] = useState()
const [msg, setMsg] = useState()

function recuperar(){
    firebase.auth().sendPasswordResetEmail(email).then(resultado =>{
        setMsg("Enviaremos em breve um email para recuperar sua senha")
    }).catch(erro =>{
        setMsg("Verifique o email informado")
    })
}
    return(
        <>
        <NavBar/>
        
        <form className="text-center form-login mx-auto mt-5">                
                    <h3 className="mb-3 font-weight-bold">Recuperar Senha</h3>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" placeholder="Email" />
                    <div className="msg my-4 text-center">
                    <span>{msg}</span>
                    </div>
                    <button onClick={recuperar} type="button" className="btn btn-lg btn-primary btn-block btn-login mb-3">Recuperar Senha</button>
                </form>  
        </>
    )

}

export default RecuperarSenha