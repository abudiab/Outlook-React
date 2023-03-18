import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Inbox from "./components/inbox/Inbox";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Inbox />
    </div>
  );
}

export default App;
