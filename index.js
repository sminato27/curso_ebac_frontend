function Computador(marca) {
    this.marca = marca;
}

function Desktop(marca, CPU, GPU, RAM, valor) {
    Computador.call(this, marca);
    this.CPU = CPU;
    this.GPU = GPU;
    this.RAM = RAM;
    let _valor = valor;

    this.getValor = function () {
        return _valor;
    }

    this.setValor = function (val) {
        if (typeof val === "number") {
            _valor = val;
        }
    }

    this.desconto = function () {
        const novoValor = _valor / 1.2;
        _valor = novoValor;
    }
}


function MiniDesk(marca, CPU, GPU, RAM, valor) {
    Desktop.call(this, marca, CPU, GPU, RAM, valor);
}

const desktop1 = new Desktop("Lenovo", "R7 5700x", "RTX 5060", "32Gb", 6500);
const minidesk1 = new MiniDesk("Dell", "i5-11600k", "RTX 3060M", "16Gb", 4500);
const minidesk2 = new MiniDesk("Asus", "i7-12800h", "RTX 4060M", "32Gb", 5800);

console.log(desktop1);
console.log(minidesk1);
console.log(minidesk2);

desktop1.desconto();
console.log(desktop1.getValor());

minidesk1.desconto();
console.log(minidesk1.getValor());

minidesk2.desconto();
console.log(minidesk2.getValor());