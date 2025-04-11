import React from 'react'
import FormLogin from '../../components/FormLogin/FormLogin'
import styles from './Login.module.css'


const LoginPage = () => {
  return (
<div className={styles.container}>
  <h1 className={styles.title}>Cine React</h1>
  <div className={styles.box}>
    <FormLogin />
  </div>
</div>
  );
};

export default LoginPage;