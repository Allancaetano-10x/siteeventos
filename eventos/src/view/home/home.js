import React, { useState, useEffect } from 'react';
import './home.css';
import {Link} from 'react-router-dom'
import NavBar from '../../componentes/navbar/navigation'
import {useSelector} from 'react-redux'
import Cards from '../../componentes/cards/cards'
import firebase from '../../config/firebase'
import Footer from '../footer/footer';

function Home({match}){

    const [pesquisa, setPesquisa] = useState()
    const [eventos, setEventos] = useState([])
    let listaEventos = []
    const usuarioEmail = useSelector(state => state.usuarioEmail)

    useEffect(()=>{

        if(match.params.parametro){
            firebase.firestore().collection('eventos').where('usuario','==',usuarioEmail).get().then(async(resultado) =>{
                await resultado.docs.forEach(doc => {
                    if(doc.data().titulo.indexOf(pesquisa) >= 0){
                     listaEventos.push({
                         id: doc.id,
                         ...doc.data()
                     })
                    }
                 })
                setEventos(listaEventos)
            })

        }else{
            firebase.firestore().collection('eventos').get().then(async(resultado) =>{
                await resultado.docs.forEach(doc => {
                    if(doc.data().titulo.indexOf(pesquisa) >= 0){
                     listaEventos.push({
                         id: doc.id,
                         ...doc.data()
                     })
                    }
                 })
                setEventos(listaEventos)
        }) 
    }
})     


    return(

       <> 

       <NavBar/>

       <div className="row p-3 ">
            <h4 className="mx-auto p-3">Eventos Publicados</h4>
            <input onChange={(e) => setPesquisa(e.target.value)} type="text" className="form-control text-center" placeholder="Pesquisar evento pelo título..." />
        </div>
      
       <div className='row p-3' >
        {eventos.map(item => <Cards key={item.id} id={item.id} img={item.foto} titulo={item.titulo} detalhes={item.detalhes} visualizacao={item.visualizacao}/>  ) }
       </div>
        <Footer />
       </>
    )
}

export default Home 