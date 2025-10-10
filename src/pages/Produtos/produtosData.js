import cadeira_c from '/public/products/cadeira_c.jpg';
import cama_p from '/public/products/cama_p.jpg';
import escrivaninha_ho from '/public/products/escrivaninha_ho.jpg';
import estante_m from '/public/products/estante_m.jpg';
import guarda_roupa_4p from '/public/products/guarda_roupa_4p.jpg';
import mesa_c from '/public/products/mesa_c.jpg';
import mesa_jantar from '/public/products/mesa_jantar.jpg';
import poltrona_c from '/public/products/poltrona_c.jpg';
import sofa_e from '/public/products/sofa_e.jpg';

const products = [
  { id: 1, name: "Sofá Escandinavo", category: "sala", price: 3499, image: sofa_e, description: "Sofá de 3 lugares em tecido premium" },
  { id: 2, name: "Mesa de Jantar Oak", category: "jantar", price: 2899, image: mesa_jantar, description: "Mesa em madeira maciça para 6 pessoas" },
  { id: 3, name: "Cadeira Charles", category: "sala", price: 899, image: cadeira_c, description: "Cadeira com design clássico e elegante" },
  { id: 4, name: "Cama King Premium", category: "quarto", price: 4299, image: cama_p, description: "Cama king size com cabeceira estofada" },
  { id: 5, name: "Estante Moderna", category: "escritorio", price: 1699, image: estante_m, description: "Estante com 5 prateleiras em MDF" },
  { id: 6, name: "Poltrona Confort", category: "sala", price: 1299, image: poltrona_c, description: "Poltrona reclinável em couro sintético" },
  { id: 7, name: "Mesa de Centro", category: "sala", price: 799, image: mesa_c, description: "Mesa de centro com tampo de vidro" },
  { id: 8, name: "Guarda-Roupa 4 Portas", category: "quarto", price: 3199, image: guarda_roupa_4p, description: "Guarda-roupa espaçoso com espelho" },
  { id: 9, name: "Escrivaninha Home Office", category: "escritorio", price: 1499, image: escrivaninha_ho, description: "Mesa para trabalho com gavetas" },
];

export default products;
