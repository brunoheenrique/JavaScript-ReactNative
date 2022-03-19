import logo from '../../assets/logo.png';

import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';

const cesta = {
  topo: {
    titulo: "Detalhe do CAOS",
  },
  detalhes: {
    nome: "Chupeta verde fatiada",
    logofazenda: logo,
    nomefazenda: "JJ fazenda de Gnomos",
    descriçao: "Meus bagos fresquinhos e novos colhidos direto da fazenda, acabram de se banhar",
    preço: "R$ 4.000.000,00",
    botao: "Compra saporra ae mano",
  },
  itens: {
    titulo: "Itens da cesta",
    lista: [
      {
        nome: "Tomate",
        imagem: tomate,
      },
      {
        nome: "Brócolis",
        imagem: brocolis,
      },
      {
        nome: "Batata",
        imagem: batata,
      },
      {
        nome: "Pepino",
        imagem: pepino,
      },
      {
        nome: "Abóbora",
        imagem: abobora,
      }
    ]
  }
}

export default cesta;
