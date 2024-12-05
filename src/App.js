import React, { useState, useEffect } from "react";

function App() {
  // Lista de videos para el banner principal
  const bannerVideos = [
    "videoprueba.mp4",
    "videoprueba.mp4",
    "videoprueba.mp4",
  ];
  const [currentVideo, setCurrentVideo] = useState(0);

  // Configuración para cambiar de video en el banner automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % bannerVideos.length);
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval);
  }, [bannerVideos]);

  // Categorías con videos de fútbol
  const categories = [
    {
      title: "Goles Memorables",
      items: [
        { src: "golultimo.mp4", title: "Gol de Último Minuto" },
        { src: "tirolibre.mp4", title: "Tiro Libre Perfecto" },
        { src: "dribles.mp4", title: "Goles de Fuera del Área" },
       
      ],
    },
    {
      title: "Jugadas Increíbles",
      items: [
        { src: "maradona.mp4", title: "Dribles Legendarios" },
        { src: "atajadas.mp4", title: "Atajada Espectacular" },
        { src: "pases.mp4", title: "Mejores Pases de Precisión" },
        { src: "regates.mp4", title: "Regates que Parecen Magia" },
       
      ],
    },
    {
      title: "Partidos Históricos",
      items: [
        { src: "epica.mp4", title: "Final Épica" },
        { src: "clasico.mp4", title: "Clásico Intenso" },
        { src: "remontada.mp4", title: "Remontada Increíble" },
        { src: "mundial.mp4", title: "Clásicos Mundiales" },
       
      ],
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: "Netflix Sans, Arial, sans-serif",
        minHeight: "100vh",
        paddingBottom: "20px",
      }}
    >
      {/* Encabezado */}
      <header style={{ backgroundColor: "#141414", padding: "10px 20px" }}>
        <h1 style={{ margin: 0, fontSize: "24px", textAlign: "center" }}>
          ⚽ Videos de Fútbol
        </h1>
      </header>

      {/* Banner principal */}
      <div style={{ position: "relative", marginBottom: "20px" }}>
        <video
          src={bannerVideos[currentVideo]}
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "auto", objectFit: "cover", maxHeight: "400px" }}
        ></video>
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <h2>Momentos Icónicos del Fútbol</h2>
        </div>
      </div>

      {/* Categorías de videos */}
      {categories.map((category, index) => (
        <div key={index} style={{ margin: "20px 0", padding: "0 20px" }}>
          <h3 style={{ marginBottom: "10px", fontSize: "18px" }}>{category.title}</h3>
          <div style={{ display: "flex", gap: "20px", overflowX: "auto" }}>
            {category.items.map((item, i) => (
              <div
                key={i}
                style={{
                  width: "320px",
                  backgroundColor: "#222",
                  borderRadius: "8px",
                  overflow: "hidden",
                  textAlign: "center",
                }}
              >
                <video
                  src={item.src}
                  controls
                  style={{ width: "100%", height: "150px", borderRadius: "8px 8px 0 0" }}
                ></video>
                <p style={{ margin: "10px 0", fontSize: "14px" }}>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
