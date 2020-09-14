import React , {useState, useEffect} from 'react';
import './cards.css'
import {Link} from 'react-router-dom'
import firebase from '../../config/firebase'
import footer from '../../view/footer/footer'

function  Cards({id, img, titulo, detalhes, visualizacao}){

    const [urlImagem, setUrlImagem] = useState();

    useEffect(() => {
        firebase.storage().ref(`imagens/${img}`).getDownloadURL().then(url => setUrlImagem(url));
    }, [urlImagem]);

    return(
        <div className="col-md-3 col-sm-12">
        <img src={urlImagem} className="card-img-top img-cartao" alt="Imagem do Evento" />

        <div className="card-body">
            <h5>{titulo}</h5>
            <p className="card-text text-justify">
                {detalhes}
            </p>

            <div className="row rodape-card d-flex align-items-center">
                <div className="col-6">
                    <Link to={'/eventodetalhes/' + id} className="btn btn-sm btn-detalhes">+ detalhes</Link>                    
                </div>

                <div className="col-6 text-right">
                    <i class="fas fa-eye"></i><span> {visualizacao}</span>
                </div>
            </div>

        </div>
    </div>
    )
}

export default Cards