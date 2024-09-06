const form = document.getElementById('form-inscricao');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');
let formValido = false;

function validaCampos(c1, c2) {

    let valorA = parseFloat(c1);
    let valorB = parseFloat(c2);

    return valorB > valorA;
};

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const msgSucesso = `Operação válida! O campo B de valor ${campoB.value} é maior que o campo A de valor ${campoA.value}!`;
    const msgErro = `Operação inválida! O campo B de valor ${campoB.value} é menor que o campo A de valor ${campoA.value}!`;

    formValido = validaCampos(campoA.value, campoB.value);

    (formValido) ? alert(msgSucesso) : alert(msgErro);
});