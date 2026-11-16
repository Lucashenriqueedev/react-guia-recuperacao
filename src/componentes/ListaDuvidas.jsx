function ListaDuvidas({ duvidas, novaDuvida, setNovaDuvida, adicionarDuvida }) {
  return (
    <section className="duvidas">
      <h2>Minhas dúvidas</h2>

      <input
        type="text"
        placeholder="Digite sua dúvida..."
        value={novaDuvida}
        onChange={(e) => setNovaDuvida(e.target.value)}
      />

      <button onClick={adicionarDuvida}>
        Adicionar dúvida
      </button>

      <ul>
        {duvidas.map((duvida) => (
          <li key={duvida.id}>{duvida.texto}</li>
        ))}
      </ul>
    </section>
  );
}

export default ListaDuvidas;