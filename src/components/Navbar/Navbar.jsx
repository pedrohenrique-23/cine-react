// src/components/Navbar/Navbar.jsx
import React from 'react';
import styles from './Navbar.module.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();


  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>CineReact</div>
      <ul className={styles.navLinks}>
        <li><a href="/">Home</a></li>
        <li><a href="/favorites">Favoritos</a></li>
        <li><button className={styles.logoutBtn} onClick={() => navigate("/login")}>Sair</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
