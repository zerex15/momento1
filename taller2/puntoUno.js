function aprendices(nombre, planeta, edad, estatura, callback){

    setTimeout(function(){

        //PROCESO PRINCIPAL
        let aprendiz = {
            nombreAprendiz : nombre,
            planetaAprendiz : planeta,
            edadAprendiz : edad,
            estaturaAprendiz: estatura
        }

        //LLAMANDO AL CALLBACK
        callback(aprendiz)
    },10000)

}
//LLAMO LA FUNCION PRINCIPAL "declaro lo que hay en el callback"

aprendices("pepito", "tierra",14, 1.70, function(aprendiz){
    if (aprendiz.edadAprendiz<15){
        console.log("el aprendiz sera asignado a manejo de la fuerza")
    }
    else{
        console.log("el aprendiz sera asignado a Manejo del sable de luz")
    }
}
) 
