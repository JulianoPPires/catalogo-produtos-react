import React from 'react';
import styles from './Produto.module.css';
import { useParams } from 'react-router-dom';
import Head from './Head';

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [erro, setErro] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const { id } = useParams();

  React.useEffect(() => {
    async function fatchProduto(url) {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (erro) {
        setErro('Ocorreu um erro ao buscar o produto.');
      } finally {
        setLoading(false);
      }
    }
    fatchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <div className="loading"></div>;

  if (erro) return <p>{erro}</p>;
  if (produto === null) return null;

  return (
    <section className={styles.produto + ' animeLeft'}>
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
