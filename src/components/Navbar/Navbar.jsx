import React from 'react';
import styles from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();


  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>CineReact</div>
      <ul className={styles.navLinks}>
        <li className='favorites-btn'><Link to="/favorites">Favoritos</Link></li>
        <li><button className={styles.logoutBtn} onClick={() => navigate("/login")}>Sair</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
