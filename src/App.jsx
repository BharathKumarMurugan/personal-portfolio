import "boxicons";
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {

  return (
    <>
      {/* https://www.youtube.com/watch?v=3aCoZudPEKE&list=PLd0qRSEDFQI7DgB5BKHQrryFlR02n1bK-&index=5 */}
      {/* start at 36:42 */}
      <Header />
      
      <main className="main">
        <Home />
      </main>
    </>
  )
}

export default App
