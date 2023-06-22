import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container px-5 pt-5">
        <TextForm heading="Enter Text to Analyze: " />
      </div>
    </>
  );
}

export default App;
