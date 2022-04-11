import {Bar} from "react-chartjs-2"
import React from "react";
function App() {
  return (
    <div className="App">
      <Bar
      height={400}
      width={600}
      data={{
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
      }}
      />
    </div>
  );
}

export default App;
