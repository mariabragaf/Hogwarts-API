const bruxos = [
    {
        id: 1,
        nome: "Harry Potter",
        casa: "Grifinória",
        ano: 7,
        varinha: "Azevinho e pena de fênix, 28cm",
        mascote: "Coruja (Edwiges)",
        patrono: "Cervo",
        especialidade: "Sobreviver a Voldemort 😎",
    },
    {
        id: 2,
        nome: "Hermione Granger",
        casa: "Grifinória",
        ano: 7,
        varinha: "Videira e fibra de coração de dragão, 27cm",
        mascote: "Gato (Bichento)",
        patrono: "Lontra",
        especialidade: "Saber tudo de tudo",
    },
    {
        id: 3,
        nome: "Ron Weasley",
        casa: "Grifinória",
        ano: 7,
        varinha: "Salgueiro e crina de unicórnio, 35cm",
        mascote: "Rato (Perebas)",
        patrono: "Terrier Jack Russell",
        especialidade: "Xadrez Bruxo",
    },
    {
        id: 4,
        nome: "Draco Malfoy",
        casa: "Sonserina",
        ano: 7,
        varinha: "Espinheiro e crina de unicórnio, 25cm",
        mascote: "Coruja (não nomeada)",
        patrono: "Desconhecido",
        especialidade: "Ser irritante",
    },
    {
        id: 5,
        nome: "Luna Lovegood",
        casa: "Corvinal",
        ano: 6,
        varinha: "Madeira de cerejeira e núcleo desconhecido",
        mascote: "Nenhum",
        patrono: "Lebre",
        especialidade: "Ver criaturas imaginárias (ou não) 👻",
    }, 
];

const casas = [
    { id: 1, nome: "Grifinóri", fundadora: "Godric Gryffindor", cores: "Vermelho e Dourado", animal: "Leão"},
    { id: 2, nome: "Sonserina", fundadora: "Salazar Slytherin", cores: "Verde e Prata", animal: "Serpente"},
    { id: 3, nome: "Corvinal", fundadora: "Rowena Ravenclaw", cores: "Azul e Bronze", animal: "Águia"},
    { id: 4, nome: "Lufa-Lufa", fundadora: "Helga Hufflepuff", cores: "Amarelo e preto", animal: "Texugo"}
];

const varinhas = [
    { id: 1, material: "Azevinho", nucleo: "Pena de Fênix", comprimento: "28cm"},
    { id: 2, material: "Videira", nucleo: "Fibra de coração de dragão", comprimento: "27cm"},
    { id: 3, material: "Salgueiro", nucleo: "Pelo de unicórnio", comprimento: "35cm"},
    { id: 4, material: "Carvalho inglês", nucleo: "Pelo de trestátio", comprimento: "32cm"}
];

const animais = [
    { id: 1, nome: "Coruja", tipo: "Correio/Compamhia"},
    { id: 2, nome: "Gato", tipo: "Companhia"},
    { id: 3, nome: "Sapo", tipo: "Companhia"},
    { id: 4, nome: "Rato", tipo: "Companhia"}
];

const pocoes = [
    { id: 1, nome: "Polissuco", efeito: "Transforma na aparência de outra pessoa"},
    { id: 2, nome: "Felix Felicis", efeito: "Sorte temporária"},
    { id: 3, nome: "Amortentia", efeito: "Poção do amor"},
    { id: 4, nome: "Veritaserum", efeito: "Força a dizer a verdade"}
];

export default {varinhas, animais, pocoes};