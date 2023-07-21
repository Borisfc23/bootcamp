import { useEffect, useState } from "react";
import "../../assets/styles/PreNavBar.css";
const PreNavBar = () => {
  const [contador, setContador] = useState({
    dias: 7,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Actualizar el contador
      setContador((prevContador) => {
        // Restar 1 segundo al contador
        const segundosRestantes = prevContador.segundos - 1;

        // Calcular los nuevos valores de días, horas, minutos y segundos
        const nuevosContadores = {
          dias: prevContador.dias,
          horas: prevContador.horas,
          minutos: prevContador.minutos,
          segundos: segundosRestantes,
        };

        if (segundosRestantes < 0) {
          // Restar 1 minuto si los segundos llegan a 0
          nuevosContadores.minutos = prevContador.minutos - 1;
          nuevosContadores.segundos = 59;
        }

        if (nuevosContadores.minutos < 0) {
          // Restar 1 hora si los minutos llegan a 0
          nuevosContadores.horas = prevContador.horas - 1;
          nuevosContadores.minutos = 59;
        }

        if (nuevosContadores.horas < 0) {
          // Restar 1 día si las horas llegan a 0
          nuevosContadores.dias = prevContador.dias - 1;
          nuevosContadores.horas = 23;
        }

        // Detener el contador si ha pasado el tiempo inicial
        if (
          nuevosContadores.dias === 0 &&
          nuevosContadores.horas === 0 &&
          nuevosContadores.minutos === 0 &&
          nuevosContadores.segundos === 0
        ) {
          clearInterval(interval);
        }

        return nuevosContadores;
      });
    }, 1000); // Actualizar cada 1 segundo

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, []);
  return (
    <div id="prenav">
      <p>Cyber Days Coming Soon</p>
      <p>
        <span className="sp-green">{`${contador.dias}`}</span>D <span>|</span>{" "}
        <span className="sp-green">{`${contador.horas}`}</span>H <span>|</span>{" "}
        <span className="sp-green">{`${contador.minutos}`}</span>N{" "}
        <span>|</span>{" "}
        <span className="sp-green">{`${contador.segundos}`}</span>S
      </p>
    </div>
  );
};

export default PreNavBar;
