let Dia = process.argv [2];
if (Dia == "Lunes or Miercoles") {
    console.log("Historia");
} else {
    if (Dia == "Martes") {
        console.log ("natacion");
    } else {
        if (Dia == "Jueves") {
            console.log("Esgrima");
        } else {
            if (Dia == "Viernes or Sabado or Domingo") {
                console.log("Descanso");
            }
        }
    }
}