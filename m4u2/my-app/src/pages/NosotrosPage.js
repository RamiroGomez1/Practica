import React from "react"

import '../styles/componentes/pages/NosotrosPage.css'


const NosotrosPage = (props) => {
    return(
        <main className="holder">
            <h2>Historia</h2>
            <p>
            lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodlorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodlorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            </p>
            <p>
            lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodlorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodlorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            </p>
            <div className="staff">
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <h5>Juan Gomez</h5>
                        <h6>Gerente General</h6>
                        <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodlorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                    </div>
                    <div className="persona">
                        <h5>Bob</h5>
                        <h6>CFO</h6>
                        <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodlorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                    </div>
                    <div className="persona">
                        <h5>Jon Doe</h5>
                        <h6>Manager</h6>
                        <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodlorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                    </div>
                    <div className="persona">
                        <h5>Pepe Sanchez</h5>
                        <h6>Asistente</h6>
                        <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodlorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default NosotrosPage