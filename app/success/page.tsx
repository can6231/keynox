"use client";

import { useEffect, useState } from "react";

export default function SuccessPage() {
  const [key, setKey] = useState("Yükleniyor...");

  useEffect(() => {
    // 🧹 sepet temizle
    localStorage.removeItem("cart");

    // 🔑 key çek
    async function fetchKey() {
      try {
        const res = await fetch("/api/key");

        if (!res.ok) {
          setKey("❌ Stok tükendi");
          return;
        }

        const data = await res.json();

        if (data.key) {
          setKey(data.key);
        } else {
          setKey("❌ Key bulunamadı");
        }
      } catch (err) {
        setKey("❌ Hata oluştu");
      }
    }

    fetchKey();
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050816",
        color: "white",
        padding: "20px",
        fontFamily: "Arial",
        textAlign: "center",
      }}
    >
      <h1>✅ Ödeme Başarılı</h1>

      <p style={{ marginTop: "10px", color: "#CBD5E1" }}>
        Satın alma tamamlandı. Kodun aşağıda:
      </p>

      <div
        style={{
          marginTop: "20px",
          background: "#111827",
          padding: "20px",
          borderRadius: "16px",
          border: "1px solid #263244",
          color: "#22D3EE",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        {key}
      </div>

      <a
        href="/"
        style={{
          display: "inline-block",
          marginTop: "25px",
          color: "#22D3EE",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Ana sayfaya dön
      </a>
    </main>
  );
}
