// Datos estáticos de los jugadores
const jugadores = [
    {
      id: 1,
      nombre: "Juan Diego",
      puntosPorPartido: 24,
      porcentajeTiros: 75,
      rebotesPorPartido: 10,
      asistenciasPorPartido: 5,
      evaluacionPerformance: 8.5
    },
    {
      id: 2,
      nombre: "Abisha",
      puntosPorPartido: 20,
      porcentajeTiros: 65,
      rebotesPorPartido: 8,
      asistenciasPorPartido: 7,
      evaluacionPerformance: 7.8
    },
    {
      id: 3,
      nombre: "Alexander",
      puntosPorPartido: 18,
      porcentajeTiros: 50,
      rebotesPorPartido: 12,
      asistenciasPorPartido: 6,
      evaluacionPerformance: 8.0
    }
    ,
    {
      id: 4,
      nombre: "Capy",
      puntosPorPartido: 18,
      porcentajeTiros: 50,
      rebotesPorPartido: 12,
      asistenciasPorPartido: 6,
      evaluacionPerformance: 8.0
    },
    {
      id: 5,
      nombre: "Jean",
      puntosPorPartido: 18,
      porcentajeTiros: 30,
      rebotesPorPartido: 12,
      asistenciasPorPartido: 6,
      evaluacionPerformance: 8.0
    },
    {
      id: 6,
      nombre: "Ian",
      puntosPorPartido: 18,
      porcentajeTiros: 50,
      rebotesPorPartido: 12,
      asistenciasPorPartido: 6,
      evaluacionPerformance: 8.0
    },
    {
      id: 7,
      nombre: "Shack",
      puntosPorPartido: 18,
      porcentajeTiros: 60,
      rebotesPorPartido: 12,
      asistenciasPorPartido: 6,
      evaluacionPerformance: 8.0
    },
    {
      id: 8,
      nombre: "Kamil",
      puntosPorPartido: 18,
      porcentajeTiros: 20,
      rebotesPorPartido: 12,
      asistenciasPorPartido: 6,
      evaluacionPerformance: 8.0
    },
    {
      id: 9,
      nombre: "Omar",
      puntosPorPartido: 18,
      porcentajeTiros: 50,
      rebotesPorPartido: 12,
      asistenciasPorPartido: 6,
      evaluacionPerformance: 8.0
    },
    {
      id: 10,
      nombre: "Dani",
      puntosPorPartido: 18,
      porcentajeTiros: 60,
      rebotesPorPartido: 17,
      asistenciasPorPartido: 9,
      evaluacionPerformance: 9.0
    }
    ,
    {
      id: 11,
      nombre: "Edgar",
      puntosPorPartido: 20,
      porcentajeTiros: 80,
      rebotesPorPartido: 13,
      asistenciasPorPartido: 7,
      evaluacionPerformance: 7.0
    },
    {
      id: 12,
      nombre: "Leo",
      puntosPorPartido: 19,
      porcentajeTiros: 60,
      rebotesPorPartido: 13,
      asistenciasPorPartido: 7,
      evaluacionPerformance: 9.0
    },
    {
      id: 13,
      nombre: "Iker",
      puntosPorPartido: 19,
      porcentajeTiros: 80,
      rebotesPorPartido: 15,
      asistenciasPorPartido: 7,
      evaluacionPerformance: 7.0
    },
    {
      id: 14,
      nombre: "Alex",
      puntosPorPartido: 15,
      porcentajeTiros: 60,
      rebotesPorPartido: 13,
      asistenciasPorPartido: 7,
      evaluacionPerformance: 9.0
    }
    ,
    {
      id: 15,
      nombre: "Oswaldo",
      puntosPorPartido: 12,
      porcentajeTiros: 60,
      rebotesPorPartido: 20,
      asistenciasPorPartido: 7,
      evaluacionPerformance: 9.0
    }


  ];
  
  // Función para crear un canvas para cada jugador
  function crearCanvas(jugador) {
      const container = document.getElementById("graficas");
      const div = document.createElement("div");
      div.className = "grafica-container";
      div.innerHTML = `
        <h3>${jugador.nombre}</h3>
        <canvas id="grafica_${jugador.id}" width="400" height="200"></canvas>
      `;
      container.appendChild(div);
  }
  
  // Función para mostrar la gráfica
  function mostrarGrafica(jugador) {
      const ctx = document.getElementById(`grafica_${jugador.id}`).getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Puntos", "Porcentaje Tiros", "Rebotes", "Asistencias", "Evaluación"],
          datasets: [{
            label: `Estadísticas de ${jugador.nombre}`,
            data: [
              jugador.puntosPorPartido || 0,  // Valores por defecto si faltan
              jugador.porcentajeTiros || 0,
              jugador.rebotesPorPartido || 0,
              jugador.asistenciasPorPartido || 0,
              jugador.evaluacionPerformance || 0
            ],
            backgroundColor: ["red", "blue", "green", "orange", "purple"],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: true },
            tooltip: { enabled: true }
          }
        }
      });
  }
  
  // Función principal
  function mostrarGraficas() {
      jugadores.forEach(jugador => {
          crearCanvas(jugador); // Crea un canvas para cada jugador
          mostrarGrafica(jugador); // Genera la gráfica
      });
  }
  
  // Ejecutar al cargar la página
  mostrarGraficas();
  