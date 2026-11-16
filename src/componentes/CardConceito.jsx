function CardConceito({ conceito, revisado, aoRevisar }) {
  return (
    <div className={`card ${revisado ? "revisado" : ""}`}>
      <h2>{conceito.titulo}</h2>

      <p>{conceito.explicacao}</p>

      <p>
        <strong>Exemplo:</strong> {conceito.exemplo}
      </p>

      {conceito.erro && (
        <p>
          <strong>Erro comum:</strong> {conceito.erro}
        </p>
      )}

      <button onClick={aoRevisar}>
        {revisado ? "Desmarcar revisão" : "Marcar como revisado"}
      </button>
    </div>
  );
}

export default CardConceito;