"use client";

const games = [
  { name: "Cyber Quest", platform: "Steam", price: "299 TL", tag: "Popüler" },
  { name: "Racing X", platform: "Xbox", price: "449 TL", tag: "Yeni" },
  { name: "Battle Zone", platform: "PlayStation", price: "399 TL", tag: "İndirim" }
];

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#050816", color: "white", padding: "20px", fontFamily: "Arial" }}>
      
      {/* NAVBAR */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
        <h1 style={{ color: "#8B5CF6", fontSize: "34px", margin: 0 }}>Keynox 🎮</h1>
        <button style={{
          background: "#7C3AED",
          color: "white",
          border: 0,
          borderRadius: "12px",
          padding: "12px 18px",
          fontWeight: "bold",
          cursor: "pointer"
        }}>
          Sepet
        </button>
      </nav>

      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg,#111827,#4C1D95)",
        borderRadius: "28px",
        padding: "30px",
        marginBottom: "35px"
      }}>
        <p style={{ color: "#22D3EE", fontWeight: "bold" }}>Anında Dijital Teslimat</p>
        <h2 style={{ fontSize: "42px", lineHeight: "1.1", margin: "10px 0" }}>
          Oyun anahtarın burada, anında teslim.
        </h2>
        <p style={{ color: "#CBD5E1", fontSize: "18px" }}>
          Steam, Xbox ve PlayStation oyun kodlarını hızlı ve güvenli şekilde satın al.
        </p>
        <button style={{
          marginTop: "18px",
          background: "#22D3EE",
          color: "#020617",
          border: 0,
          borderRadius: "14px",
          padding: "14px 22px",
          fontWeight: "bold",
          cursor: "pointer"
        }}>
          Oyunları Keşfet
        </button>
      </section>

      {/* OYUNLAR */}
      <section>
        <h2 style={{ fontSize: "30px" }}>Popüler Oyunlar</h2>

        <div style={{ display: "grid", gap: "18px" }}>
          {games.map((game) => (
            <div
              key={game.name}
              style={{
                background: "#111827",
                border: "1px solid #263244",
                borderRadius: "22px",
                padding: "22px",
                transition: "0.3s",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.border = "1px solid #7C3AED";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.border = "1px solid #263244";
              }}
            >
              <span style={{
                background: "#312E81",
                color: "#A5B4FC",
                borderRadius: "999px",
                padding: "6px 12px",
                fontSize: "13px"
              }}>
                {game.tag}
              </span>

              <h3 style={{ fontSize: "26px", marginBottom: "8px" }}>{game.name}</h3>

              <p style={{ color: "#22D3EE" }}>{game.platform}</p>

              <strong style={{ fontSize: "24px" }}>{game.price}</strong>

              <br />

              <button style={{
                marginTop: "18px",
                background: "#7C3AED",
                color: "white",
                border: 0,
                borderRadius: "12px",
                padding: "12px 18px",
                fontWeight: "bold",
                cursor: "pointer"
              }}>
                Sepete Ekle
              </button>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
