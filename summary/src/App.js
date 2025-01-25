import './App.scss';
import { useState } from "react";
import json from './data/data.json'
function App() {
  const [data, setData] = useState(json);

  return (
    <div className="test-summary">

    </div>
  );
}

export default App;
