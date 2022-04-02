let nombres =['espinaca','manzana', 'pera', 'pollo', "chicharron", "redbull", "esparragos"]
    let tipos =['animal', 'vegetal', "insecto"]

let alimentos=[]

for(let i=0;i<20; i++){
    let alimento={}
    alimento.nombre=nombres[Math.floor(Math.random()*nombres.length)]
    alimento.tipo=tipos[Math.floor(Math.random()*tipos.length)]

    alimento.energia=Math.floor(Math.random()*(0,1000))

    //agregado el objeto estudiate al arreglo estudiates
    alimentos.push(alimento)

}

//declarando la funcion pricipal

function filtrarVegetales(alimentos,callback){
    setTimeout(function(){
       let vegetales= alimentos.filter(function(alimento){
            return(alimento.tipo=="vegetal" && alimento.energia>200)
        })
        callback(vegetales)
    },10000)
}

//llamando a la funcion pincipal
filtrarVegetales(alimentos, function(vegetales){
    let sumaEnergia =0
    vegetales.forEach(function(vegetal){
       sumaEnergia = sumaEnergia + vegetal.energia

    })
    console.log(vegetales)
    console.log(`el total de la energia consumida es de: ${sumaEnergia}`)

})





