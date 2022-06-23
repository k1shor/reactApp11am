import './App.css';
import MyRoutes from './MyRoutes';
import { Provider } from 'react-redux';
import store from './components/reducers/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MyRoutes />
      </div>
    </Provider>
  );
}

export default App;
