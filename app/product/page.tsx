export default function ProductPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#050816", color: "white", padding: "20px", fontFamily: "Arial" }}>
      <a href="/" style={{ color: "#22D3EE", textDecoration: "none" }}>← Ana sayfa</a>

      <section style={{ marginTop: "30px", background: "#111827", borderRadius: "28px", padding: "28px", border: "1px solid #263244" }}>
        <h1 style={{ fontSize: "42px" }}>Cyber Quest</h1>
        <p style={{ color: "#22D3EE", fontSize: "18px" }}>Steam Dijital Kod</p>
        <strong style={{ display: "block", fontSize: "34px", marginTop: "25px" }}>299 TL</strong>

        <a href="/cart" style={{ display: "block", textAlign: "center", marginTop: "22px", background: "#7C3AED", color: "white", borderRadius: "14px", padding: "15px 22px", fontWeight: "bold", textDecoration: "none" }}>
          Sepete Ekle
        </a>
      </section>
    </main>
  );
}
