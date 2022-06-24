import './App.css';
import MyRoutes from './MyRoutes';
import { Provider } from 'react-redux';
import store from './components/reducers/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MyRoutes />
      </Provider>
    </div>
  );
}

export default App;
