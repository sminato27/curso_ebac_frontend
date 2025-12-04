const alunos = [
  { nome: 'Ana', nota: 7.5 },
  { nome: 'Bruno', nota: 5.0 },
  { nome: 'Carla', nota: 9.0 },
  { nome: 'Diego', nota: 6.0 },
  { nome: 'Eva', nota: 4.5 },
];

const filtrarAprovados = (lista, corte = 6) =>
  lista.filter(({ nota }) => Number(nota) >= Number(corte));

const aprovados = filtrarAprovados(alunos);

console.log('Aprovados:', aprovados);