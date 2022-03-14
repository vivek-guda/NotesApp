import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <h1 className="logo">NotesApp</h1>
      <ul className="nav-ul">
        <li className="nav-list">
          <a
            className="nav-links"
            href="https://www.linkedin.com/in/vivek-reddy-g/"
            target="_blank"
          >
            <img className="social-icons" src="./linkedin-brands.svg" alt="" />
          </a>
        </li>
        <li className="nav-list">
          <a
            className="nav-links"
            href="https://github.com/vivek-guda"
            target="_blank"
          >
            <img className="social-icons" src="./github-brands.svg" alt="" />
          </a>
        </li>
        <li className="nav-list">
          <a
            className="nav-links"
            href="https://twitter.com/GVivek_51"
            target="_blank"
          >
            <img className="social-icons" src="./twitter-brands.svg" alt="" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
