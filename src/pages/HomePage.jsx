import "../style/homepage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Bienvenue sur TrollFix</h1>
      <div className="home-buttons">
        <a href="/categories">
          <button className="home-button blue">Accueil Catégories</button>
        </a>
        <a href="/movies">
          <button className="home-button green">Accueil Films</button>
        </a>
      </div>
    </div>
  );
};

export default HomePage;