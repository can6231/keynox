export default function Home() {
  return (
    <main style={{background:"#020617",color:"white",minHeight:"100vh",padding:"20px"}}>
      
      <h1 style={{fontSize:"40px",fontWeight:"bold",color:"#7C3AED"}}>
        Keynox 🎮
      </h1>

      <p style={{marginTop:"10px",color:"#ccc"}}>
        Oyun anahtarın burada, anında teslim.
      </p>

      <div style={{marginTop:"30px"}}>
        <h2>Popüler Oyunlar</h2>

        <div style={{marginTop:"20px",display:"grid",gap:"15px"}}>
          
          <div style={{background:"#111",padding:"15px",borderRadius:"10px"}}>
            <h3>Cyber Quest</h3>
            <p>Steam</p>
            <strong>299 TL</strong>
          </div>

          <div style={{background:"#111",padding:"15px",borderRadius:"10px"}}>
            <h3>Racing X</h3>
            <p>Xbox</p>
            <strong>449 TL</strong>
          </div>

        </div>
      </div>

    </main>
  );
}
