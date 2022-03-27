import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <h3>Keep in touch</h3>
      <ul>
        <li>
          <a href="https://www.instagram.com/meghanaask/">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/meghana__sk">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/Meghana-sk">
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
      <h3>Userful links</h3>
      <ul>
        <li>
          <a href="https://github.com/Meghana-sk">FAQ</a>
        </li>
        <li>
          <a href="https://github.com/Meghana-sk">T & C</a>
        </li>
        <li>
          <a href="https://github.com/Meghana-sk">Track orders</a>
        </li>
      </ul>
    </footer>
  );
};
