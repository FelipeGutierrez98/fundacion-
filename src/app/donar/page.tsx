"use client";

import { useState } from "react";

export default function Donar() {
  // MONTOS SUGERIDOS
  const montos = [5, 10, 20, 35, 50];

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  // Llama a /api/checkout y redirige a Stripe Checkout
  const pagar = async (monto?: number) => {
    try {
      setLoading(true);

      // monto en CENTAVOS (Stripe usa cents). Si no pasas monto, deja 0 para que Stripe muestre el formulario igualmente
      const amountCents = (monto ?? 0) * 100;

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: amountCents,
          currency: "usd",
          email: email || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data?.url) {
        console.error("Stripe error:", data);
        alert("No se pudo crear la sesión de pago: " + (data?.error || "error"));
        return;
      }

      // 🔁 Redirección a la página segura de Stripe
      window.location.href = data.url;
    } catch (e) {
      console.error(e);
      alert("Hubo un error al iniciar el pago.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-amber-700 mb-4">Dona y transforma vidas</h1>
      <p className="text-gray-700 mb-6">
        Tu aporte financia alimentos, medicamentos, transporte a citas y actividades de memoria.
        Puedes donar por monto sugerido o escribirnos para otras opciones.
      </p>

      {/* Email (opcional) para que Stripe envíe recibo */}
      <label className="block mb-3">
        <span className="text-sm text-gray-700">Correo (opcional para recibo)</span>
        <input
          type="email"
          className="w-full border rounded px-3 py-2 mt-1"
          placeholder="tu@correo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      {/* Botones de montos */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
        {montos.map((m) => (
          <button
            key={m}
            onClick={() => pagar(m)}
            disabled={loading}
            className="p-4 bg-amber-50 border rounded-lg hover:bg-amber-100 font-semibold disabled:opacity-60"
          >
            ${m}
          </button>
        ))}
      </div>

      {/* Botón general */}
      <button
        onClick={() => pagar()}
        disabled={loading}
        className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold disabled:opacity-60"
      >
        {loading ? "Redirigiendo..." : "Donar ahora"}
      </button>
    </div>
  );
}
