import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";
import "./estilo.css"

export class ListaDeNotas extends Component {
    render() {
        return (
            <ul className="lista-notas">
                {Array.of("trabalho","trabalho", "trabalho").map((categoria, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            <CardNota />
                        </li>
                    )
                })}
            </ul>
        )
    }
}


export default ListaDeNotas