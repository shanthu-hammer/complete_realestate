//download these
//npm i sass
//npm install react-router-dom@latest
//npm install react-icons --save
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/login";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Buy from "./components/Pages/buydir/buy";
const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/buy" element={<Buy />} />
        </Routes>
      </div>
    </ApolloProvider>
  );
}

export default App;
