import React from "react"

import '../styles/componentes/pages/HomePage.css'

const HomePage = (props) => {
    return(
        <main>
            <div className="holder">
                <div className="columnas">
                    <div className="bienvenidos">
                        <h2>Bienvenidos</h2>
                        <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodlorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodlorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodlorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodlorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                    </div>
                    <div className="testimonios right">
                        <h2>Testimonios</h2>
                        <div className="testimonio">
                            <span className="cita">Simplemente excelente</span>
                            <span className="autor">Juan Perez</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HomePage