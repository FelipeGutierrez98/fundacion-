import Link from "next/link";

export default function Home() {
  return (
    <section>
      {/* Hero con imagen de fondo */}
      <div
        className="relative w-full h-[480px] flex items-center justify-center text-white text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold drop-shadow mb-4">
            Cuidando corazones llenos de historia
          </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl">
            Trabajamos por el bienestar, la compañía y la dignidad de los adultos mayores.
          </p>
          <Link
            href="/donar"
            className="inline-block mt-6 bg-amber-500 hover:bg-amber-400 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Donar ahora
          </Link>
        </div>
      </div>

      {/* Misión / Visión / Valores */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-sm border">
            <h3 className="text-xl font-bold text-amber-700 mb-2">Misión</h3>
            <p className="text-gray-700">
              Brindar acompañamiento integral a los adultos mayores en situación de vulnerabilidad,
              con programas de salud, alimentación, recreación y apoyo emocional.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border">
            <h3 className="text-xl font-bold text-amber-700 mb-2">Visión</h3>
            <p className="text-gray-700">
              Ser una fundación referente por su calidad humana e impacto sostenible en la vida de los abuelitos y sus familias.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border">
            <h3 className="text-xl font-bold text-amber-700 mb-2">Valores</h3>
            <ul className="text-gray-700 list-disc pl-5 space-y-1">
              <li>Amor y respeto por la vida</li>
              <li>Dignidad y empatía</li>
              <li>Transparencia y solidaridad</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Llamado a la acción */}
      <div className="bg-amber-50 border-y border-amber-100">
        <div className="max-w-6xl mx-auto px-4 py-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Tu ayuda transforma vidas</h3>
          <p className="text-gray-700">
            Con una donación apoyas alimentación, medicinas, actividades y acompañamiento.
          </p>
          <Link
            href="/donar"
            className="inline-block mt-5 border border-amber-500 text-amber-700 hover:bg-amber-500 hover:text-white px-6 py-2 rounded-lg"
          >
            Quiero donar
          </Link>
        </div>
      </div>
    </section>
  );
}
