import "./App.css";
import JobDesc from "./compositions/JobDesc";
import * as React from "react";
import JobList from "./compositions/JobList";

function App() {
  return (
    <div className="App flex md:justify-center m-1">
      <JobList className="flex-1" />
      <JobDesc className="flex-1" />
    </div>
  );
}

export default App;
