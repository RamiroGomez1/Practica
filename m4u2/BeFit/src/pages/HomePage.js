import React from "react"
import { NavLink } from "react-router-dom"


const HomePage = (props) => {
    return(
        <main>
                <body
        className="vh-100 text-white overflow-hidden d-flex justify-content-center align-items-center">

        <nav
            className="navbar navbar-dark navbar-expand-lg fs-5 fixed-top mt-3 pb-3">
            <div className="container-fluid">
                <div className=" mt-3 brand">
                        <img src="./img/klipartz.com(1).png" alt="Logo"
                            width="75" className="ms-5 me-3" />
                    <a className="navbar-brand " href="#">

                        BeFit

                    </a>
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar">

                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="offcanvas navbarsecciones offcanvas-end"
                    tabindex="-1"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <button
                            type="button"
                            className="btn-close text-reset"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul
                            className="navbar-nav navcenter justify-content-center flex-grow-1 pe-3">
                            <li className="nav-item mx-2">
                                <a
                                    className="nav-link mt-2 mx-3"
                                    aria-current="page"
                                    href="index.html">Inicio</a>
                            </li>
                            <li className="nav-item mt-2 mx-2">
                                <a className="nav-link" href="html/Planes.html">Planes</a>
                            </li>
                            <li className="nav-item dropdown mt-2 mx-3">
                                <a
                                    className="nav-link"
                                    href="#"
                                    id="dropdownId"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">Sobre Nosotros</a>
                                <div
                                    className="dropdown-menu dropdown-menu-dark "
                                    aria-labelledby="dropdownId">
                                    <a className="dropdown-item"
                                        href="#">Historia</a>
                                    <a className="dropdown-item"
                                        href="html/contacto.html">Contacto</a>
                                    <a className="dropdown-item"
                                        href="#">Integrantes</a>
                                </div>
                            </li>
                            <li className="nav-item mt-2 mx-3">
                                <a className="nav-link" href="/html/novedades.html">Novedades</a>
                            </li>
                            <li className="nav-item mt-2 mx-3">
                                <a className="nav-link" href="#">Blogs</a>
                            </li>
                        </ul>
                        <div className="mt-3 me-5">
                            <a style={{ backgroundColor: 'rgb(173, 3, 3)' }}
                                className="text-decoration-none text-white text-center rounded px-5 py-2"
                                href>Únete ya</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <main>
            <div className="home">
                <div className="frase mt-5 me-5">
                    Moldea tu cuerpo, Moldea tu vida.
                    <div className="d-block d-flex gap-3 mt-3">
                        <button type="button"
                            className="btn btn-md btn-danger rounded-pill"
                            data-mdb-ripple-init>Registrarme</button>
                        <button  className="btn btn-md btn-dark rounded-pill"><a className="nav-link" href="Planes.html">Ver
                            Planes</a></button>
                    </div>
                    <p className="parrafo">
                        Adoptá un estilo de vida saludable con rutinas de
                        ejercicio efectivas y hábitos que potenciarán tu
                        bienestar físico y mental. Descubrí cómo pequeños
                        cambios diarios pueden llevarte a grandes resultados,
                        moldeando no solo tu cuerpo, sino también tu vida.
                    </p>

                </div>
            </div>
        </main>
        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
            crossorigin="anonymous"></script>

    </body>
        </main>
    )
}

export default HomePage