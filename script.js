document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos todas las carpetas de recursos del laboratorio
    const carpetasRecursos = document.querySelectorAll(".card-carpeta");

    carpetasRecursos.forEach(carpeta => {
        carpeta.addEventListener("click", () => {
            const urlDestino = carpeta.getAttribute("data-url");
            
            if (urlDestino) {
                // Micro-interacción de hundimiento al hacer clic
                carpeta.style.transform = "scale(0.97) translateY(-2px)";
                
                // Pequeña pausa para que se note el efecto físico antes de redirigir
                setTimeout(() => {
                    carpeta.style.transform = "";
                    window.open(urlDestino, "_blank");
                }, 120);
            }
        });
    });
});