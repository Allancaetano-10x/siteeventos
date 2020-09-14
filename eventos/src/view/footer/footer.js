import React from 'react';
import './footer.css'

function Footer() {
    return (

        <div className='bg-footer'>
            <footer className="page-footer font-small mdb-color pt- ">
                <div className="container text-center text-md-left ">
                    <div className="row text-center text-md-left mt-3 pb-3">
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">For Funny LTDA</h6>
                            <p>Planeje seus eventos com praticidade, comodidade e economia.</p>
                        </div>
                        <hr className="w-100 clearfix d-md-none" />
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Produtos</h6>
                            <p>
                                <a href="#!">Salões</a>
                            </p>
                            <p>
                                <a href="#!">Buffet's</a>
                            </p>
                            <p>
                                <a href="#!">Fotografos</a>
                            </p>
                            <p>
                                <a href="#!">Entreterimento</a>
                            </p>
                        </div>
                        <hr className="w-100 clearfix d-md-none" />
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Utilidades</h6>
                            <p>
                                <a href="#!">Sua Conta</a>
                            </p>
                            <p>
                                <a href="#!">Torne-se afiliado</a>
                            </p>
                            <p>
                                <a href="#!">Sobre a ForFunny LDTA.</a>
                            </p>
                        </div>
                        <hr className="w-100 clearfix d-md-none" />
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contato</h6>
                            <p>
                                <i className="fas fa-home mr-3" /> São Paulo, Sp 10012, BR</p>
                            <p>
                                <i className="fas fa-envelope mr-3" /> info@gmail.com</p>
                            <p>
                                <i className="fas fa-phone mr-3" /> + 01 234 567 88</p>
                            <p>
                                <i className="fas fa-print mr-3" /> + 01 234 567 89</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row d-flex align-items-center">
                        <div className="col-md-7 col-lg-8">
                            <p className="text-center text-md-left">© 2020 Copyright:
                            <a href="https://forfunny.com/">
                                    <strong> ForFunny.com</strong>
                                </a>
                            </p>
                        </div>
                        <div className="col-md-5 col-lg-4 ml-lg-0">
                            <div className="text-center text-md-right">
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item">
                                        <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                            <i className="fab fa-facebook-f"/>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                            <i className="fab fa-twitter"/>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                            <i className="fab fa-google-plus-g"/>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                            <i className="fab fa-linkedin-in"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer