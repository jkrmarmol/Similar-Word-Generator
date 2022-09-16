import Datamuse from "./Component/Datamuse";
import Footer from "./Component/Footer";
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <div className="body">
        <Provider store={store}>
            <Datamuse />
        </Provider>
        <Footer />
    </div>
  );
}

export default App;
