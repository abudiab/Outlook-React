import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Inbox from "./components/inbox/Inbox";
import EmailPreview from "./components/inbox/EmailPreview";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <div id="inboxandpreview">
        <Inbox />
        <EmailPreview />
      </div>
    </div>
  );
}

export default App;
