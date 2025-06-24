
import "@/app/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src="https://logo-marque.com/wp-content/uploads/2020/09/Spotify-Symbole.jpg" alt="Spotify"/>
      </div>
      <nav className="sidebar-nav">
        <a href="#" className="sidebar-link">
          <span>Accueil</span>
        </a>
        <a href="#" className="sidebar-link">
          <span>Rechercher</span>
        </a>
        <a href="#" className="sidebar-link">
          <span>Bibliothèque</span>
        </a>
      </nav>

      <div className="sidebar-player">
        <img src="https://i.ytimg.com/vi/fHI8X4OXluQ/maxresdefault.jpg" alt="Current Song" />
        <div>
          <h3>Blinding Lights</h3>
          <p>The weeknd</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
