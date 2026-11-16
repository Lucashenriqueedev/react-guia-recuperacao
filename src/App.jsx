import { useState } from "react";
import Header from "./componentes/Header";
import CardConceito from "./componentes/CardConceito";
import ListaDuvidas from "./componentes/ListaDuvidas";
import "./App.css";
function App() {
  const conceitos = [
    {
      id: 1,
      titulo: "Git e GitHub",
      explicacao: "Git é uma ferramenta que salva as alterações do código. GitHub é uma plataforma online para guardar projetos.",
      exemplo: "Usar git add, git commit e git push para enviar um projeto.",
      erro: "Confundir Git com GitHub. Git controla versões localmente e GitHub hospeda repositórios online."
    },
    {
      id: 2,
      titulo: "Node.js e npm",
      explicacao: "Node.js permite executar JavaScript fora do navegador. npm serve para instalar e organizar pacotes.",
      exemplo: "Usar npm install para instalar as dependências.",
      erro: "Achar que npm run dev instala os pacotes. Para isso usamos npm install."
    },
    {
      id: 3,
      titulo: "React e JSX",
      explicacao: "React é uma biblioteca usada para criar interfaces. JSX permite escrever estruturas parecidas com HTML dentro do JavaScript.",
      exemplo: "Criar um título usando h1 dentro do return de um componente.",
      erro: "Usar class em vez de className no JSX. O correto é className."
    },
    {
      id: 4,
      titulo: "Componentes e Props",
      explicacao: "Componentes são partes da interface. Props permitem enviar informações de um componente para outro.",
      exemplo: "Um card recebe um título por meio de props.",
      erro: "Esquecer de receber uma prop. É importante utilizar o nome correto da propriedade."
    },
    {
      id: 5,
      titulo: "Estado e Hooks",
      explicacao: "useState permite guardar informações que podem mudar durante o uso da aplicação.",
      exemplo: "Criar um contador que aumenta quando um botão é clicado.",
      erro: "Alterar uma variável diretamente em vez de atualizar o estado usando seu setter."
    },
    {
      id: 6,
      titulo: "Eventos e Validação",
      explicacao: "Eventos permitem executar ações quando o usuário interage com a página.",
      exemplo: "Usar onClick para executar uma função ao clicar em um botão.",
      erro: "Escrever onClick={funcao()} em vez de onClick={funcao} quando queremos passar a referência da função."
    },
    {
      id: 7,
      titulo: "Listas e Imutabilidade",
      explicacao: "map() permite mostrar vários elementos de uma lista. A imutabilidade evita modificar diretamente o estado anterior.",
      exemplo: "Mostrar vários nomes usando map().",
      erro: "Não utilizar key nas listas ou alterar diretamente o array original."
    },
    {
      id: 8,
      titulo: "Arquitetura Web",
      explicacao: "Frontend é a parte visual, backend cuida do processamento e API permite a comunicação entre sistemas. localStorage guarda dados no navegador. SPA atualiza partes da página sem recarregar tudo, enquanto PWA oferece recursos de aplicativo web.",
      exemplo: "Um site React pode utilizar localStorage para guardar informações no navegador.",
      erro: "Confundir localStorage com banco de dados. Ele armazena informações localmente no navegador."
    }
  ];

  const [revisados, setRevisados] = useState([]);
  const [duvidas, setDuvidas] = useState([]);
  const [novaDuvida, setNovaDuvida] = useState("");

  function marcarRevisado(id) {
    setRevisados((anterior) =>
      anterior.includes(id)
        ? anterior.filter((item) => item !== id)
        : [...anterior, id]
    );
  }

  function adicionarDuvida() {
    const texto = novaDuvida.trim();

    if (texto === "") {
      alert("Digite uma dúvida antes de adicionar.");
      return;
    }

    setDuvidas((anterior) => [
      ...anterior,
      {
        id: Date.now(),
        texto: texto
      }
    ]);

    setNovaDuvida("");
  }

  return (
    <div>
      <Header />

      <main className="container">
        <section className="progresso">
          <h2>Meu progresso</h2>

          <p>
            Conteúdos revisados: {revisados.length}/8
          </p>
        </section>

        <h2 className="titulo">Conteúdos para estudar</h2>

        <div className="cards">
          {conceitos.map((conceito) => (
            <CardConceito
              key={conceito.id}
              conceito={conceito}
              revisado={revisados.includes(conceito.id)}
              aoRevisar={() => marcarRevisado(conceito.id)}
            />
          ))}
        </div>

        <ListaDuvidas
          duvidas={duvidas}
          novaDuvida={novaDuvida}
          setNovaDuvida={setNovaDuvida}
          adicionarDuvida={adicionarDuvida}
        />
      </main>
    </div>
  );
}

export default App;