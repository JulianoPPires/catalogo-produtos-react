import { useRouteError } from 'react-router-dom';

const ErroRota = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Ocorreu um erro</h1>
      <p>{error.statusText || error.message || 'Não foi possível carregar esta página.'}</p>
    </div>
  );
};

export default ErroRota;
