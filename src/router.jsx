import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Produtos, { produtosLoader } from './Components/Produtos';
import Produto, { produtoLoader } from './Components/Produto';
import Contato from './Components/Contato';
import ErroRota from './Components/ErroRota';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErroRota />,
    children: [
      {
        index: true,
        element: <Produtos />,
        loader: produtosLoader,
        errorElement: <ErroRota />,
      },
      {
        path: 'produto/:id',
        element: <Produto />,
        loader: produtoLoader,
        errorElement: <ErroRota />,
      },
      { path: 'contato', element: <Contato /> },
    ],
  },
]);

export default router;
