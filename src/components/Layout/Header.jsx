import "../../style/header.css";
const Header = () => {
  return (
    <header className="header bg-gray-900">
      <div className="header-container">
        <h1 className="logo">
          <a href="/" className="text-white hover:underline">TrollFix</a>
        </h1>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="/categories">
                <button className="home-button">Accueil Catégories</button>
              </a>
            </li>
            <li>
              <a href="/movies">
                <button className="home-button">Accueil Films</button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header