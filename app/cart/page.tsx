export default function CartPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#050816", color: "white", padding: "20px", fontFamily: "Arial" }}>
      <a href="/" style={{ color: "#22D3EE", textDecoration: "none" }}>← Ana sayfa</a>

      <h1>Sepetim</h1>

      <div style={{ background: "#111827", borderRadius: "20px", padding: "20px", border: "1px solid #263244" }}>
        <h2>Cyber Quest</h2>
        <p style={{ color: "#22D3EE" }}>Steam Dijital Kod</p>
        <strong>299 TL</strong>

        <a
          href="/success"
          style={{
            display: "block",
            textAlign: "center",
            marginTop: "22px",   
            background: "#7C3AED",
            color: "white",
            borderRadius: "14px",
            padding: "15px 22px",
            fontWeight: "bold",
            textDecoration: "none"
          }}
        > 
          Ödemeye Geç
        </a>
      </div>
    </main>
  );
}
