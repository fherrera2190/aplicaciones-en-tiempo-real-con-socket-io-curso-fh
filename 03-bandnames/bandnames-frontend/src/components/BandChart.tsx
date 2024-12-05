import { useContext, useEffect, useRef, useState } from "react";
import {
  Chart,
  LinearScale,
  CategoryScale,
  LineController,
  LineElement,
  PointElement,
  BarController,
  BarElement,
} from "chart.js";
import { Band } from "../interfaces";
import SocketContext from "../context/SocketContex";

// Registrar los componentes necesarios
Chart.register(
  BarController,
  BarElement,
  LinearScale,
  CategoryScale,
  LineController,
  LineElement,
  PointElement
);

export const BandChart = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null); // Almacena la instancia del gráfico

  const { socket } = useContext(SocketContext);
  const [bands, setBands] = useState<Band[]>([]);

  useEffect(() => {
    socket.on("current-bands", (bands) => {
      setBands(bands);
    });

    return () => {
      socket.off("current-bands");
    };
  }, [socket]);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Si ya existe un gráfico, destruirlo antes de crear uno nuevo
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Crear una nueva instancia del gráfico
    chartInstanceRef.current = new Chart(canvasRef.current, {
      type: "bar",
      data: {
        labels: bands.map((band) => band.name),
        datasets: [
          {
            label: "# of Votes",
            data: bands.map((band) => band.vote),
            borderWidth: 1,
            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
          },
        ],
      },
      options: {
        animation: false,
        indexAxis: "y",
        scales: {
          x: {
            beginAtZero: true,
          },
        },
      },
    });

    // Cleanup: destruir el gráfico cuando el componente se desmonte
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, [bands]);

  return <canvas ref={canvasRef}></canvas>;
};
