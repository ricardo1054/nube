import logo from './logo.svg';
import './App.css';
 
function App() {
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1>Mi Video en Streaming</h1>
      <video
        width="80%"
        controls
        style={{ maxWidth: '800px', borderRadius: '10px' }}
      >
        <source src="/videoprueba.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
 
  );
}
 
export default App;