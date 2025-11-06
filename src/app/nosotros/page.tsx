export default function Nosotros() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Quiénes somos</h1>
        <p className="text-gray-700 mt-2">
          La <strong>Fundación Luz Dorada</strong> es una organización sin ánimo de lucro que acompaña
          a personas mayores en situación de vulnerabilidad con programas de alimentación, salud,
          bienestar emocional y actividades de integración.
        </p>
      </header>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-xl border shadow-sm">
          <h2 className="text-xl font-semibold text-amber-700">Misión</h2>
          <p className="text-gray-700 mt-2">
            Mejorar la calidad de vida de los abuelitos mediante apoyo integral, respeto y compañía constante.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl border shadow-sm">
          <h2 className="text-xl font-semibold text-amber-700">Visión</h2>
          <p className="text-gray-700 mt-2">
            Ser un referente latinoamericano por la calidez humana y la transparencia en la gestión social.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl border shadow-sm">
          <h2 className="text-xl font-semibold text-amber-700">Valores</h2>
          <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
            <li>Amor y dignidad</li>
            <li>Empatía y compañía</li>
            <li>Transparencia y solidaridad</li>
          </ul>
        </div>
      </section>

      <section className="grid sm:grid-cols-3 gap-6">
        {[
          { n: "1.2K+", d: "Almuerzos entregados/mes" },
          { n: "320", d: "Abuelitos activos" },
          { n: "85", d: "Voluntarios registrados" },
        ].map((k) => (
          <div key={k.d} className="p-5 bg-amber-50 border rounded-xl text-center">
            <div className="text-3xl font-extrabold text-amber-700">{k.n}</div>
            <div className="text-gray-700">{k.d}</div>
          </div>
        ))}
      </section>

      <section className="bg-white rounded-xl border shadow-sm p-6">
        <h2 className="text-xl font-semibold text-amber-700">Nuestra historia</h2>
        <p className="text-gray-700 mt-2">
          Nacimos en 2020 cuando un pequeño grupo empezó a llevar mercados y llamadas de compañía
          a adultos mayores aislados. Hoy contamos con una red de donantes y voluntarios que sostienen
          comedores, brigadas de salud y talleres de memoria.
        </p>
      </section>
    </div>
  );
}
