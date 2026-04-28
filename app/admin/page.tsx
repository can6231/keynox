"use client";

import { useState } from "react";

export default function AdminPage() {
  const [key, setKey] = useState("");

  async function addKey() {
    if (!key) {
      alert("Key boş olamaz");
      return;
    }

    const res = await fetch("/api/admin/add-key", {
      method: "POST",
      body: JSON.stringify({ key }),
    });

    if (res.ok) {
      alert("Key başarıyla eklendi!");
      setKey("");
    } else {
      alert("Key eklenemedi.");
    }
  }

  return (
    <main style={{ minHeight: "100vh", background: "#050816", color: "white", padding: "20px", fontFamily: "Arial" }}>
      <a href="/" style={{ color: "#22D3EE", textDecoration: "none" }}>← Ana sayfa</a>

      <h1>Admin Panel</h1>
      <p>Oyun kodu ekle</p>

      <input
        value={key}
        onChange={(e) => setKey(e.target.value)}
        placeholder="Örn: CYBER-1234-5678"
        style={{
          width: "100%",
          padding: "15px",
          borderRadius: "12px",
          border: "1px solid #263244",
          background: "#111827",
          color: "white",
          marginTop: "15px"
        }}
      />

      <button
        onClick={addKey}
        style={{
          marginTop: "15px",
          width: "100%",
          background: "#7C3AED",
          color: "white",
          border: 0,
          borderRadius: "14px",
          padding: "15px",
          fontWeight: "bold"
        }}
      >
        Key Ekle
      </button>
    </main>
  );
}
