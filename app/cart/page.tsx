"use client";

import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("cart");
    if (data) {
      setCart(JSON.parse(data));
    }
  }, []);

  function clearCart() {
    localStorage.removeItem("cart");
    setCart([]);
  }

  const total = cart.reduce((sum, item) => {
    const price = Number(item.price.replace(" TL", ""));
    return sum + price;
  }, 0);

  return (
    <main style={{ minHeight: "100vh", background: "#050816", color: "white", padding: "20px", fontFamily: "Arial" }}>
      <a href="/" style={{ color: "#22D3EE", textDecoration: "none" }}>← Ana sayfa</a>

      <h1>Sepetim</h1>

      {cart.length === 0 ? (
        <p>Sepet boş.</p>
      ) : (
        <>
          <div style={{ display: "grid", gap: "15px" }}>
            {cart.map((item, index) => (
              <div key={index} style={{ background: "#111827", borderRadius: "20px", padding: "20px", border: "1px solid #263244" }}>
                <h2>{item.name}</h2>
                <p style={{ color: "#22D3EE" }}>{item.platform}</p>
                <strong>{item.price}</strong>
              </div>
            ))}
          </div>

          <h2 style={{ marginTop: "25px" }}>Toplam: {total} TL</h2>

          <a
            href="/api/checkout"
            style={{ display: "block", textAlign: "center", marginTop: "22px", background: "#7C3AED", color: "white", borderRadius: "14px", padding: "15px 22px", fontWeight: "bold", textDecoration: "none" }}
          >
            Ödemeye Geç
          </a>

          <button
            onClick={clearCart}
            style={{ marginTop: "12px", width: "100%", background: "transparent", color: "#CBD5E1", border: "1px solid #263244", borderRadius: "14px", padding: "15px 22px", fontWeight: "bold" }}
          >
            Sepeti Temizle
          </button>
        </>
      )}
    </main>
  );
}
