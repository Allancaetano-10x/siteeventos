import React, { useState } from 'react';
import './evento-cadastro.css';
import {Link} from 'react-router-dom'
import firebase from '../../config/firebase';
import 'firebase/auth'
import {useSelector} from  'react-redux'
import NavBar from '../../componentes/navbar/navigation'
import Footer from '../../view/footer/footer'


function EventoCadastro(){

   const [msg, setMsg] = useState()
   const [titulo, setTitulo] = useState()
   const [tipo, setTipo] = useState()
   const [detalhes, setDetalhes] = useState()
   const [data, setData] = useState()
   const [hora, setHora] = useState()
   const [foto, setFoto] = useState()
   const usuarioEmail = useSelector(state => state.usuarioEmail)

   const storage = firebase.storage()
   const db = firebase.firestore()
    

   function cadastrar(){
     storage.ref(`imagens/${foto.name}`).put(foto).then(()=>{

      db.collection('eventos').add({
         titulo: titulo,
         tipo: tipo,
         detalhes: detalhes,
         data: data,
         hora: hora,
         usuario:usuarioEmail,
         visualizacao: 0,
         foto: foto.name,
         publico: 1,
      }).then(() =>{
         setMsg('Sucesso')
      }).catch(erro => {
         setMsg("erro")
        })  
    
     })
   }

    return(
     <>
        <NavBar />

        <section className="col-12">
         <div className="row">
            <h3 className="mx-auto mt-2">Novo Evento</h3>
         </div>
         <from> 
             <div className="form-group">
                <label><strong>Titulo do Evento</strong></label>
                <input  onChange={(e) => setTitulo(e.target.value)} type="text" className="form-control" />
             </div>
             <div className="from-group">
                <label><strong>Tipo do Evento:</strong></label>
                <select  onChange={(e) => setTipo(e.target.value)} className="form-control">
                    <option >-- Selecione Um Evento --</option>
                    <option>Festa comum</option>
                    <option>Balada </option>
                    <option>Show</option>
                    <option>reveillon</option>
                </select>    
             </div>

             <div className="form-group">
                <label><strong>Descrição do Evento: </strong></label>
                <textarea  onChange={(e) => setDetalhes(e.target.value)} className="form-control" />
             </div>
             <div className="form-group">
                <label className="mr-2"><strong>Data do Evento: </strong></label>
                <input  onChange={(e) => setData(e.target.value)} type="date"  className="mr-2" />
                <label className="mr-2"><strong>Hora do Evento: </strong></label>
                <input  onChange={(e) => setHora(e.target.value)} type="time" />
             </div>
             <div className="form-group">
                <label><strong>Upload da imagem: </strong></label>
                <input  onChange={(e) => setFoto(e.target.files[0])} type="file" className="form-control" />
             </div>
             <button onClick={cadastrar} type="button" className="btn btn-lg btn-primary btn-block btn-login mb-3">Publicar Evento</button>
         </from>
         <div className="msg-login text-center bg-danger" >
                 { msg === 'Sucesso'  && <span>Legal! <strong>Evento publicado com sucsso! </strong></span>}
                 { msg === 'Negado' &&  <span>Ops! <strong>Não foi possivel cadastrar seu evento </strong></span>}
             </div> 
       </section>
       
       <Footer />
     </>
    )
}

export default EventoCadastro

