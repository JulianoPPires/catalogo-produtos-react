import styles from './Produtos.module.css';
import { Link, useLoaderData } from 'react-router-dom';
import Head from './Head';

export async function produtosLoader() {
  const response = await fetch('https://ranekapi.origamid.dev/json/api/produto');
  return response.json();
}

const Produtos = () => {
  const produtos = useLoaderData();

  return (
    <section className={`${styles.produtos} animeLeft`}>
      <Head title="Ranek" description="Descrição de site Ranek" />

      {produtos.map((produto) => (
        <Link to={`/produto/${produto.id}`} key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
          <h2 className={styles.nome}>{produto.nome}</h2>
        </Link>
      ))}
    </section>
  );
};

export default Produtos;
