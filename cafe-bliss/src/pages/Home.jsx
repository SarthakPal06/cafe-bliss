import { useNavigate } from "react-router-dom";
import "./Home.css";

const cafeImage = "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1600&q=80";

function Home() {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate("/menu");
  };

  return (
    <div className="home">
      <div
        className="home-background"
        style={{
          backgroundImage: `url(${cafeImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <h1>Welcome to Café Bliss</h1>
        <p>Your perfect coffee moment awaits ☕</p>
        <button onClick={handleOrderClick}>Order Now</button>
      </div>
    </div>
  );
}

export default Home;

