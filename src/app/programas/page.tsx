type Program = {
  titulo: string;
  detalle: string;
  horario: string;
  lugar: string;
  icono: string;
};

export default function Programas() {
  const programas: Program[] = [
    {
      titulo: "Comedor Dorado",
      detalle:
        "Almuerzos balanceados de lunes a viernes, con seguimiento nutricional básico.",
      horario: "L–V · 12:00–14:00",
      lugar: "Sede Centro – Salón 2",
      icono: "🍲",
    },
    {
      titulo: "Brigadas de Salud",
      detalle:
        "Toma de presión, glicemia, entrega de medicamentos y orientación en autocuidado.",
      horario: "Sábados · 9:00–12:00",
      lugar: "Barrios priorizados (itinerante)",
      icono: "🩺",
    },
    {
      titulo: "Memoria y Alegría",
      detalle:
        "Talleres de estimulación cognitiva, música, lectura y manualidades.",
      horario: "Mié y Vie · 10:00–11:30",
      lugar: "Sede Norte – Aula 3",
      icono: "🎶",
    },
    {
      titulo: "Acompañamiento en Casa",
      detalle:
        "Visitas de escucha activa para abuelitos con movilidad reducida.",
      horario: "Según agenda de voluntariado",
      lugar: "Domiciliario",
      icono: "🏠",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Programas</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {programas.map((p) => (
          <article
            key={p.titulo}
            className="p-6 bg-white rounded-xl border shadow-sm"
          >
            <div className="text-3xl">{p.icono}</div>
            <h2 className="mt-2 text-xl font-semibold text-amber-700">
              {p.titulo}
            </h2>
            <p className="text-gray-700 mt-2">{p.detalle}</p>
            <div className="mt-4 text-sm text-gray-600">
              <div>
                <span className="font-semibold">Horario:</span> {p.horario}
              </div>
              <div>
                <span className="font-semibold">Lugar:</span> {p.lugar}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 p-6 bg-amber-50 border rounded-xl">
        <h3 className="font-semibold text-amber-700">¿Quieres ser voluntario?</h3>
        <p className="text-gray-700 mt-2">
          Únete a nuestras brigadas o talleres. Escríbenos a{" "}
          <a className="underline" href="mailto:voluntariado@luzdorada.org">
            voluntariado@luzdorada.org
          </a>
          .
        </p>
      </div>
    </div>
  );
}
