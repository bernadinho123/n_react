import { Link } from "react-router-dom";
import Cartao from "../../components/Cartao/Cartao";
import { ConatinerListagem, TituloListagem } from "./style";
import { useState } from "react";

const predados = [
    {
        'titulo': 'casa',
        'letra': 'a'
    },
    {
        'titulo': 'banana',
        'letra': 'b'
    },
    {
        'titulo': 'cenoura',
        'letra': 'c'
    },
    {
        'titulo': 'felpudo',
        'letra': 'd'
    },
    {
        'titulo': 'boneco',
        'letra': 'e'
    },
    {
        'titulo': 'asdrúbal',
        'letra': 'f'
    }

]

const Listagem = () => {
    
    const [dados, setDados] = useState(predados);

    const filtra = (entrada) => {
        setDados(predados.filter(
            (e) => {
                const titulo = e.titulo.toLowerCase().includes(entrada.toLowerCase())
                const letra = e.titulo.toLowerCase().includes(entrada.toLowerCase())
               return titulo || letra;
            }
            ))
    }

    return(
    <>
    <TituloListagem>
        Listagem de elementos
    </TituloListagem>
    <input
        type='text'
        onChange={(e) => filtra(e.target.value)}
        />
    <ConatinerListagem>
        {
            dados.map( (el, i) => (
            <Cartao
                key={i}
                titulo={el.titulo}
                letra={el.letra}
            />
                )
            )      
        }
    </ConatinerListagem>
    <Link to='/'>Voltar ao inicio</Link>
    </>
    );
};

export default Listagem;