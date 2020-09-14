import React, { useState } from 'react';
import './login.css';
import {Link, Redirect} from 'react-router-dom'
import firebase from '../../config/firebase';
import 'firebase/auth'
import NavBar from '../../componentes/navbar/navigation';
import Home from '../home/home'
import {useSelector , useDispatch} from  'react-redux'

function Login(){

    const dispatch = useDispatch()

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msg, setMsg] = useState();

    function logar(){
      
        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
            setMsg('Sucesso')
            setTimeout(()=>{
              dispatch({type: 'LOG_IN', usuarioEmail: email})
            },2000)
           
        }).catch(error =>{
            setMsg('Negado')
        })

    }

    return(

     <div className="container-fluid login-Content">
       
      {
        useSelector(state => state.usuarioLogado) > 0 ? <Redirect to='/' /> : null
      }

      <div className="row">
       <div className="col-md-12">
         <div className="  aling-items-center">
            <form className="form-signin mx-auto">
            <div className="text-center mb-2">
                <h1 className="h3 mb-3 font-weight-normal text-white font-weigth-bold">Login Eventos Evolution</h1>
            </div>
            <div className="form-label-group mb-2">
              <input onChange={(e) => setEmail(e.target.value) }  type="email" id="inputEmail" className="form-control" placeholder="Email" />
            </div>
            <div className="form-label-group mb-2">
              <input onChange={(e) => setSenha(e.target.value) }  type="password" id="inputPassword" className="form-control" placeholder="Senha" required />
            </div>
            <button onClick={logar} className="btn btn-lg btn-primary btn-block btn-login mb-3" type="button">Logar</button>
             <div className="msg-login text-center" >
                 { msg === 'Sucesso'  && <span>Legal! <strong>Voce está conectado! </strong></span>}
                 { msg === 'Negado' &&  <span>Ops! <strong>Verifique seus dados! </strong></span>}
             </div> 
                 <div className="opcao-login mt-5 text-center">
                   <span><Link to="/recuperar" className="mx-2">Recuperar Senha</Link></span>
                     <span className="px-5"></span>
                     <Link to= 'cadastro' className="mx-2">Quero Cadastrar</Link>
                 </div> 
                <p className="mt-5 mb-1 text-muted text-center">© For Funny 2020</p>
            </form>
        </div>
     </div>
   </div>
  </div>
    );
  }
    
export default Login;