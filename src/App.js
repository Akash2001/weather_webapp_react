import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import About from './components/about.component';
import ContactUs from './components/contactUs.component';
import Footer from './components/footer.component';
import Header from './components/header.component';
import Home from './components/home.component';

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/contact-us" component={ContactUs}/>
      <Route path="/about" component={About}/>
      <Footer />
    </Router>
  );
}

export default App;
