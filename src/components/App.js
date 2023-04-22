import React from "react";
import data from "../data/blog";
import About from "./About";
import ArticleList from "./ArticleList";
import Header from "./Header";


function App() {
  return (
    <div className="App">
      <Header blogData={data.name}/>
      <main>
        <About image={data.image} aboutText={data.about} />
        <ArticleList articles={data.posts} />
      </main>
    </div>
  );
}

export default App;
