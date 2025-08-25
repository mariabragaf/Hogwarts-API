import express from "express";
import bruxos from "./src/data/bruxos.js"
import dados from "./src/data/dados.js"

const serverPort = 3000;
const {varinhas, pocoes, animais} = dados;
const app = express();

app.use(express.json());

// Rota principal - Hogwarts
app.get('/', (req, res) => {
  res.send(`
    <div style="
      background: linear-gradient(135deg, #1a237e, #3949ab);
      color: white;
      padding: 50px;
      text-align: center;
      font-family: 'Georgia', serif;
      min-height: 100vh;
      margin: 0;
    ">
      <h1 style="
        font-size: 3rem;
        color: #ffd700;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        margin-bottom: 20px;
      ">
        ⚡ Bem-vindo à Hogwarts! ⚡
      </h1>
      <p style="font-size: 1.5rem; margin: 20px 0;">
        🏰 Escola de Magia e Bruxaria
      </p>
      <p style="font-size: 1.2rem; opacity: 0.9;">
        "É preciso muito mais que coragem para enfrentar nossos inimigos, 
        mas muito mais ainda para enfrentar nossos amigos."
      </p>
      <div style="margin-top: 30px;">
        <span style="font-size: 1.1rem;">🦁 Grifinória | 🐍 Sonserina | 🦅 Corvinal | 🦡 Lufa-lufa</span>
      </div>
    </div>
  `);
});

// Rota das casas
app.get('/bruxos', (req,res) => {
    res.json (bruxos);
});

//Rota do bruxo por ID
app.get('/bruxos/:id',(req, res) => {
  const bruxoId = parseInt(req.params.id, 10);
  const bruxo = bruxos.find(b => b.id === bruxoId);

  if (bruxo) {
    res.json(bruxo);
  } else {
    res.status(404).send('Bruxo não encontrado!🧙‍♂️❌');
  }
});

//Rota do bruxo pelo nome
app.get("/bruxos/nome/:nome", (req, res) => {
    let nome = req.params.nome.toLowerCase();
    const bruxosEncontrados = bruxos.filter(b => 
        b.nome.toLowerCase().includes(nome)
    );
    if (bruxosEncontrados.length > 0) {
        res.status(200).json(bruxosEncontrados);
    } else {
        res.status(404).json({
            mensagem: "Bruxo(s) nao encontrado(s)!"
      })
     }
});

//Rota do bruxo pela casa
app.get("/bruxos/casa/:casa", (req, res) => {
    let casa = req.params.casa;
    const bruxosDaCasa = bruxos.filter(b => b.casa.toLowerCase() === casa.toLowerCase());
    if (bruxosDaCasa.length > 0) {
        res.status(200).json(bruxosDaCasa);
    } else {
        res.status(404).json({
            mensagem: "Nenhum bruxo encontrado nessa casa!"
        })
    }
});

// Rota do bruxo pela varinha
app.get("/varinhas", (req, res) => {
  res.json(varinhas);
});

//Rota da varinha por ID
app.get('/varinhas/:id',(req, res) => {
  const varinhaId = parseInt(req.params.id, 10);
  const varinha = varinhas.find(v => v.id === varinhaId);

  if (varinha) {
    res.json(varinha);
  } else {
    res.status(404).send('Varinha não encontrada!🪄❌');
  }
});

//Rota do bruxo pelo animal
app.get("/animais", (req, res) => {
  res.json(animais);
});

//Rota do animal por ID
app.get('/animais/:id',(req, res) => {
  const animalId = parseInt(req.params.id, 10);
  const animal = animais.find(a => a.id === animalId);

  if (animal) {
    res.json(animal);
  } else {
    res.status(404).send('Animal não encontrado!🦁❌');
  }
});

//Rota do bruxo pela pocao
app.get("/pocoes", (req, res) => {
  res.json(pocoes);
});

//Rota das pocoes por ID
app.get('/pocoes/:id',(req, res) => {
  const pocaoId = parseInt(req.params.id, 10);
  const pocao = pocoes.find(p => p.id === pocaoId);

  if (pocao) {
    res.json(pocao);
  } else {
    res.status(404).send('Poção não encontrada!🍷❌');
  }
});

// Iniciar servidor
app.listen(serverPort, () => {
  console.log(`⚡ Servidor Hogwarts iniciado em: http://localhost:${serverPort}`);
  console.log(`🏰 Pronto para receber novos bruxos!`);
});