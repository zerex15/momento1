let promedio = (temperaturas) => {

    let tempMaxima = Math.max(temperaturas);
    let tempMinima = Math.min(temperaturas);


    let promedio = (tempMaxima + tempMinima) / 2;

   
    console.log("La tempertura promedio fu de: " + promedio);

}

promedio(temperaturas = [35,50]);

