import './estilos.css'

import participanteImg from '../../imagens/participante.png'

const Cabecalho = () => {
    return (
        <header className="cabecalho">
            <div className="imagem-logo" role="img" aria-label='Logo do Sorteador'></div>
            <img className='participante' src={participanteImg} alt="Participante com um presente na mão" />
        </header>
    )
}

export default Cabecalho