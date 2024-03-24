// App.jsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import AppRoutes from './AppRoutes';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'; 
import './App.css'; 

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  
  return (
    <BrowserRouter>
      <div className={darkMode ? 'app-container dark-mode' : 'app-container'}>
        <NavBar />
        <div className="app-routes">
          <AppRoutes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
