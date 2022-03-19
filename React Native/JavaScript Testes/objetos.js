const peterPaker = {
    profissao: "estudante/fotógrafo",
    poderes:{
        voar: false,
        superPulo: true,
        superForca: false,
        laserOcular: false,
        bafoGelido: false,
        escalarParedes: true,
        particulares: {
            soltarTeia: true,
            sensorAranha: true,
        }, 
    },
    inimigos: ['Venom', 'Homem-Areia','Dr.Octopus','Homem-Lagarto','Duende-Verde','Electro']
}

let visao = ""

for (let info in peterPaker){
    if (typeof peterPaker[info] === "object"){
        continue
    }else{
        visao += `
        ${info} ==> ${peterPaker[info]}
        `    
    }
}
console.log(visao)
// console.log(peterPaker) // apenas exibindo o objeto inteiro

/* for (let i = 0;i<peterPaker.inimigos.length;i++){
    console.log(peterPaker.inimigos[i])    
} */                                                  // mostrando inimigos for clássico
    
/* const enemys = peterPaker.inimigos.forEach(info=>{
    console.log(info)
})  */                                                   // mostrando inimigos forEach

// console.log(peterPaker.poderes.particulares.sensorAranha)


