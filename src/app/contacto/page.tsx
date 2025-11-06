"use client";
import { useState } from "react";

export default function Contacto() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Prototipo: aquí enviaríamos el formulario a una API / email
    setSent(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Contacto</h1>
      <p className="text-gray-700 mb-6">
        ¿Tienes dudas, deseas donar o ser voluntario? Escríbenos y te responderemos pronto.
      </p>

      {sent ? (
        <div className="p-4 bg-green-50 border border-green-200 rounded">
          ¡Gracias! Recibimos tu mensaje. Te contactaremos muy pronto.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input className="w-full border rounded px-3 py-2" placeholder="Tu nombre" required />
          <input className="w-full border rounded px-3 py-2" placeholder="Tu correo" type="email" required />
          <select className="w-full border rounded px-3 py-2" defaultValue="" required>
            <option value="" disabled>Motivo del mensaje</option>
            <option>Quiero donar</option>
            <option>Quiero ser voluntario</option>
            <option>Necesito información</option>
          </select>
          <textarea className="w-full border rounded px-3 py-2 h-32" placeholder="Mensaje" required />
          <button
            type="submit"
            className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Enviar
          </button>
        </form>
      )}

      <div className="mt-8 grid sm:grid-cols-2 gap-6 text-sm">
        <div className="p-5 bg-white border rounded-xl shadow-sm">
          <h2 className="font-semibold text-amber-700">Sede principal</h2>
          <p className="text-gray-700 mt-2">
            Calle 100 #10–20, Bogotá, Colombia<br />
            Lun–Vie: 9:00–17:00
          </p>
        </div>
        <div className="p-5 bg-white border rounded-xl shadow-sm">
          <h2 className="font-semibold text-amber-700">Canales</h2>
          <p className="text-gray-700 mt-2">
            Email: <a className="underline" href="mailto:info@luzdorada.org">info@luzdorada.org</a><br />
            WhatsApp: <a className="underline" href="https://wa.me/573001112233" target="_blank">+57 300 111 2233</a>
          </p>
        </div>
      </div>
    </div>
  );
}
