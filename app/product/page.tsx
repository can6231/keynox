export default function ProductPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#050816", color: "white", padding: "20px", fontFamily: "Arial" }}>
      <a href="/" style={{ color: "#22D3EE", textDecoration: "none" }}>← Ana sayfa</a>

      <section style={{ marginTop: "30px", background: "#111827", borderRadius: "28px", padding: "28px", border: "1px solid #263244" }}>
        <span style={{ background: "#312E81", color: "#A5B4FC", borderRadius: "999px", padding: "6px 12px", fontSize: "13px" }}>
          Popüler
        </span>

        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>Cyber Quest</h1>
        <p style={{ color: "#22D3EE", fontSize: "18px" }}>Steam Dijital Kod</p>

        <p style={{ color: "#CBD5E1", fontSize: "17px", lineHeight: "1.6" }}>
          Bu ürün dijital oyun kodu olarak teslim edilir. Satın alma tamamlandıktan sonra kodun ekranda görünür.
        </p>

        <strong style={{ display: "block", fontSize: "34px", marginTop: "25px" }}>299 TL</strong>

        <button style={{
          marginTop: "22px",
          background: "#7C3AED",
          color: "white",
          border: 0,
          borderRadius: "14px",
          padding: "15px 22px",
          fontWeight: "bold",
          width: "100%"
        }}>
          Satın Al
        </button>
      </section>
    </main>
  );
}
