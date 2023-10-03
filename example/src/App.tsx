import './App.css';
import GlitchText from '@johnn-e/react-glitch-text';

function App() {
  return (
    <>
      <GlitchText
        $text='GLITCHY'
        style={{ color: '#000', fontSize: '8rem', fontWeight: 700 }}
        $colorA='#f0f'
        $colorB='#0ff'
      />
    </>
  );
}

export default App;
