import React from 'react';
import './navigation.css';
import {Link} from 'react-router-dom'
import {useSelector , useDispatch} from  'react-redux'

function NavBar(){

  const dispatch = useDispatch()

    return(  
               <nav className="navbar navbar-expand-lg ">
                    <span className="navbar-brand">For Funny</span>
                    <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars text-bold"></i>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                      <ul className="navbar-nav mr-auto ">
                      <li className="nav-item active">
                          <Link className="nav-link text-danger" to="/">Home</Link>
                        </li>
                        <li className="nav-item active">
                          <Link className="nav-link text-danger" to="/eventos/destaque">Destaques</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link text-danger" to="#">Salões</Link>
                        </li>
                        <li className="nav-item dropdown">
                          <Link className="nav-link text-danger " to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Serviços
                          </Link>
                        </li>
                        <li className="nav-item dropdown">
                          <Link className="nav-link text-danger " to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Recordações
                          </Link>
                        </li>
                      </ul>
                    
                      {           
                        useSelector(state => state.usuarioLogado) > 0 ?                  
                    <>                        
                        <div className="nav-item"><Link className="nav-link" to="/evento-cadastro">Publicar Evento</Link></div> 
                        <div className="nav-item"><Link className="nav-link" to="/eventos/meus">Meus Eventos</Link></div> 
                        <div className="nav-item"><Link className="nav-link" onClick = {()=> dispatch({type: 'LOG_OUT'}) } >Sair</Link></div> 
                    </>
                    :
                    <>
                    <div className="nav-item"><Link className="nav-link" to="/cadastro">Cadastrar</Link></div> 
                    <div className="nav-item"><Link className="nav-link" to="/login">Login</Link></div> 
                    </>
                    }
                    </div>
                </nav>
              );
            }
  
export default NavBar;