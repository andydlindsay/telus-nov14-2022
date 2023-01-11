import './App.css';
import Header from './components/Header';
import VisitorCounter from './components/VisitorCounter';
import Pizza from './components/Pizza';

const App = () => {
  return (
    <div className="App">
      <Header heading="Pat's Pizza Place" /> {/* Header({ heading: 'hello world' }) */}
      <Pizza />
      <VisitorCounter />
    </div>
  );
};

export default App;
