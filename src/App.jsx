import './App.css';
import Navbar from "./components/navbar/Navbar";
import Layout from "./components/content/Layout";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Layout />
    </div>
  );
}