import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <h1>Bem-vindo ao CineReact</h1>
      </header>

      <section className={styles.content}>
        <div className={styles.section}>
          <h2>Filmes Populares</h2>
          {/* Cards de filmes virão aqui */}
        </div>

        <div className={styles.section}>
          <h2>Meus Favoritos</h2>
          {/* Favoritos do usuário */}
        </div>

        <div className={styles.section}>
          <h2>Minhas Avaliações</h2>
          {/* Avaliações feitas */}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
