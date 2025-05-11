import { useRoutes } from 'react-router-dom';
import routes from './routes';
import Header from './components/Header'; // Import Header
import Footer from './components/Footer'; // Import Footer

function App() {
  const element = useRoutes(routes);

  return (
    <div className="flex flex-col min-h-screen">
      <Header /> {/* Header at the top */}
      <main className="flex-grow">{element}</main> {/* Main content */}
      <Footer /> {/* Footer at the bottom */}
    </div>
  );
}

export default App;
