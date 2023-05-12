import React from "react";
import { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition.`);
    let apiKey = "4af911bf6cc0a30d4ecc3adao79t646b";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function keywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={keywordChange} />
      </form>
      <Results results={results} />
    </div>
  );
}
