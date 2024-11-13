// components/Sidebar.js
"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Função para alternar o estado do Sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Fechar o Sidebar se clicar fora
  const closeSidebar = (e) => {
    if (e.target.id === 'sidebar-overlay') {
      setIsOpen(false);
    }
  };

  return (
    <div>
      {/* Botão para abrir/fechar o Sidebar */}
      <button className={styles.sidebarToggle} onClick={toggleSidebar}>
        ☰
      </button>

      {/* Overlay que aparece quando o Sidebar está aberto */}
      {isOpen && <div className={styles.overlay} id="sidebar-overlay" onClick={closeSidebar}></div>}

      {/* Sidebar com animação */}
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <h2 className={styles.title}>Menu</h2>
        <ul className={styles.menu}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/sobre">Sobre</Link></li>
          <li><Link href="/contato">Contato</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
