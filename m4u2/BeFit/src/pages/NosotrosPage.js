import React from "react"
import { NavLink } from "react-router-dom"



const PlanesPage = (props) => {
    return(
        <main>
            <body
        className=" d-flex justify-content-center align-items-center">

        <nav
            className="navbar navbar-dark navbar-expand-lg fs-5 fixed-top mt-3 pb-3">
            <div className="container-fluid">
                <div className=" mt-3 brand">
                    <a className="navbar-brand" href="#">
                        <img src="../img/klipartz.com (1).png" alt="Logo"
                            width="75" className="ms-5 me-3" />
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
                    className="offcanvas  navbarsecciones offcanvas-end"
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
                                    href="../index.html">Inicio</a>
                            </li>
                            <li className="nav-item mt-2 mx-2 active">
                                <a className="nav-link"
                                    href="Planes.html">Planes</a>
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
                                        href="contacto.html">Contacto</a>
                                    <a className="dropdown-item"
                                        href="#">Integrantes</a>
                                </div>
                            </li>
                            <li className="nav-item mt-2 mx-3">
                                <a className="nav-link" href="#">Novedades</a>
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
            <div className="text-center noticias mb-5">
                <h2>
                    Noticias
                </h2>
                <p>Aqui se veran las noticias mas relevantes sobre el mundo
                    fitness. Desde nuevos papers o investigaciones hasta
                    influencers emergentes.</p>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div style={{ backgroundColor: 'black' }}
                        className="card text-white h-100">
                        <img src="../img/HIIT.jpg" className="card-img-top"
                            alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Nuevas Directrices para el
                                Ejercicio en Personas Mayores</h5>
                            <p className="card-text">La Organización Mundial de la
                                Salud ha publicado nuevas directrices para el
                                ejercicio en personas mayores, destacando la
                                importancia de la actividad física regular para
                                mantener la movilidad y la salud mental. Estos
                                lineamientos incluyen recomendaciones
                                específicas para mejorar la fuerza y el
                                equilibrio, fundamentales para una vida activa
                                en la tercera edad.<a href="#">Ver más</a>
                            </p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Actualizado hace 3
                                dias</small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div style={{ backgroundColor: 'black' }}
                        className="card text-white h-100">
                        <img src="../img/influencers.jpg" className="card-img-top"
                            alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Influencers Emergentes que
                                Marcan Tendencia en el Fitness
                            </h5>
                            <p className="card-text">Conoce a los nuevos rostros del
                                fitness en redes sociales. Estos influencers
                                están revolucionando la manera en que vemos el
                                ejercicio y la alimentación saludable,
                                compartiendo rutinas innovadoras y recetas
                                nutritivas que se adaptan a todos los estilos de
                                vida. ¡Síguelos para inspirarte y llevar tu
                                bienestar al siguiente nivel! <a href="#">Ver
                                    más</a></p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Actualizado hace 4
                                dias</small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div style={{ backgroundColor: 'black' }}
                        className="card text-white h-100">
                        <img src="../img/Cognitive-Benefits-of-HIIT.jpg"
                            className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Investigaciones Revelan
                                Beneficios del Entrenamiento HIIT para la Salud
                                Mental</h5>
                            <p className="card-text">Un reciente estudio publicado
                                en Journal of Sports Science revela que el
                                entrenamiento de alta intensidad (HIIT) no solo
                                mejora la condición física, sino que también
                                reduce significativamente los niveles de estrés
                                y ansiedad. Los expertos recomiendan incluirlo
                                en tu rutina semanal para obtener beneficios
                                tanto físicos como mentales. <a href="#">Ver
                                    más</a></p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Actualizado hace 1
                                semana</small>
                        </div>
                    </div>
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

export default PlanesPage