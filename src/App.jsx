import {Navbar,Header,Education,Experience,Projects,Contact} from "./components"
import "./App.scss";
function App() {
  return (
    <main className="app">
      <Navbar />
      <Header />
      <Education/>
      <Projects/>    
    </main>
  );
}

export default App;
