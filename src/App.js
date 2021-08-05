import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer.component';
import Header from './components/header.component';
import Home from './components/home.component';

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
      <Footer />
    </Router>
  );
}

export default App;
