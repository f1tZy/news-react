import './App.css';
import Header from "./components/Header/Header";
import SearchBlock from "./components/SearchBlock/SearchBlock";
import React from "react";
import CardList from "./components/CardList/CardList";

function App() {
  return (
      <>
        <Header/>
        <SearchBlock />
        <CardList />
      </>
  );
}

export default App;
