import styles from './Produto.module.css';
import { useLoaderData } from 'react-router-dom';
import Head from './Head';

export async function produtoLoader({ params }) {
  const response = await fetch(
    `https://ranekapi.origamid.dev/json/api/produto/${params.id}`
  );

  if (!response.ok) {
    throw new Response('Produto não encontrado.', { status: response.status });
  }

  return response.json();
}

const Produto = () => {
  const produto = useLoaderData();

  return (
    <section className={`${styles.produto} animeLeft`}>
      <Head
        title={`Ranek | ${produto.nome}`}
        description={`Ranek | Esse é um produto ${produto.nome}`}
      />

      <div>
        {produto.fotos.map((foto) => (
          <img key={foto.src} src={foto.src} alt={foto.titulo} />
        ))}
      </div>

      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  );
};

export default Produto;
