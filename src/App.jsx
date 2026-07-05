import './App.css';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
  const navigation = useNavigation();

  return (
    <div className="App">
      <Header />
      <div className="content">
        {navigation.state === 'loading' ? (
          <div className="loading"></div>
        ) : (
          <Outlet />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
