import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";

export const Sorteio = () => {
  const participantes = useListaDeParticipantes();

  return (
    <section>
      <form>
        <select name="participantesDaVez" id="participantesDaVez">
          {participantes.map((participante) => (
            <option key={participante}>{participante}</option>
          ))}
        </select>
      </form>
    </section>
  );
};
