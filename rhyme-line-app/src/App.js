import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Form from "./components/Form";
import Artist from "./components/Artist";
import Nav from "./components/Nav";
import { baseURL, config } from "./services/generic";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";



function App() {
  const [artists, setArtist] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  useEffect(() => {
    const getArtist = async () => {
      const resp = await axios.get(baseURL, config);
      setArtist(resp.data.records);
      console.log(resp)
    };
    getArtist();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Header/>
      <Nav />
      <Route exact path="/">
        {artists.map((artist) => (
          <Artist artist={artist} key={artist.id} setToggleFetch={setToggleFetch} />
        ))}
      </Route>
      <Route path="/new">
        <Form setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/edit/:id">
        <Form artists={artists} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Footer/>
    </div>
  );
}
export default App;