// import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";

export const Rodape = () => {
  const participantes = useListaDeParticipantes();

  //   const navegarPara = useNavigate

  return (
    <footer>
      <button disabled={participantes.length < 3}>Iniciar brincadeira</button>
    </footer>
  );
};
