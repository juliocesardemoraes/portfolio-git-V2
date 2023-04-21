import Spline from "@splinetool/react-spline";
import "./App.css";

function App() {
  return (
    <div className="h__100">
      <header className="flex__container">
        <h1>JM</h1>
        <h5>Contato</h5>
      </header>
      <main className="flex__container">
        <div>
          <h2>SOBRE</h2>
          <p>
            Olá, meu nome é júlio moraes, sou um desenvolvedor fullstack.
            Trabalho com Reactjs e nodejs.
          </p>
        </div>
        <Spline
          className="spline"
          scene={"https://prod.spline.design/IMW-AgFZs3RYFg9s/scene.splinecode"}
        ></Spline>
      </main>
      <footer className="flex__container">
        <h3>Fullstack Developer</h3>
        <a href="/projetos">
          <h2>PROJETOS</h2>
        </a>
      </footer>
    </div>
  );
}

export default App;
