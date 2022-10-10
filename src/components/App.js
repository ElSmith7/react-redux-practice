import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const birds = useSelector((state) => state.birds);
  return (
    <div className="App">
      <div className="wrapper">
        <h1>Bird List</h1>
        <ul>
          {birds.map((bird) => (
            <li key={bird.name}>
              <h3>{bird.name}</h3>
              <div>Views: {bird.views}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
