
//car
let carArr = [];

class Car {
   

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    if (!(carClass instanceof Car)) {
        throw "You need set a Car Class";
    }

    const pos = GetCarArrPosition(carArr, carClass);

    if (el.checked) {
        if (carArr.length >= 2) {
            alert("Você só pode comparar 2 carros por vez.");
            el.checked = false;
            return;
        }
        if (pos === -1) {
            carArr.push(carClass);
        }
    } else {
        if (pos > -1) {
            carArr.splice(pos, 1);
        }
    }
}


function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    const mapCampos = {
        "image": "compare_image_",
        "nome": "compare_modelo_",
        "alturaCacamba": "compare_alturacacamba_",
        "alturaVeiculo": "compare_alturaveiculo_",
        "alturaSolo": "compare_alturasolo_",
        "capacidadeCarga": "compare_capacidadecarga_",
        "motor": "compare_motor_",
        "potencia": "compare_potencia_",
        "volumeCacamba": "compare_volumecacamba_",
        "roda": "compare_roda_",
        "preco": "compare_preco_"
    };

    for (let i = 0; i < carArr.length; i++) {
        const car = carArr[i];

        for (let campo in mapCampos) {
            const el = document.getElementById(mapCampos[campo] + i);
            if (!el) continue;

            if (campo === "image") {
                el.innerHTML = `<img src="${car.image}" width="100">`;
            } else {
                el.textContent = car[campo];
            }
        }
    }
}

