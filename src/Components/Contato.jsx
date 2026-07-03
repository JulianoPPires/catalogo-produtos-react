import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de Escrever" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>Email: contato@exemplo.com</li>
          <li>Telefone: (11) 1234-5678</li>
          <li>Endereço: Rua Exemplo, 123 - São Paulo/SP</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
