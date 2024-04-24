import React, { Component, useState, useEffect, useReducer } from "react";
import axios from "axios";
import "./style.css";

type State =
  | { status: "empty" }
  | { status: "loading" }
  | { status: "error"; error: string }
  | { status: "success"; data: HNResponse };

type HNResponse = {
  hits: {
    title: string;
    objectID: string;
    url: string;
  }[];
};

type Action =
  | { type: "request" }
  | { type: "success"; results: HNResponse }
  | { type: "failure"; error: string };

function display(action: Action) {
  if (action.type === "success") {
    console.log(action.results);
  }
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "request":
      return { status: "loading" };
    case "success":
      return { status: "success", data: action.results };
    case "failure":
      return { status: "error", error: action.error };
  }
}

function App() {
  const [query, setQuery] = useState<string>();
  const [state, dispatch] = useReducer(reducer, { status: "empty" });

  useEffect(() => {
    dispatch({ type: "request" });
    axios
      .get<HNResponse>(`https://hn.algolia.com/api/v1/search?query=${query}`)
      .then((res) => {
        dispatch({ type: "success", results: res.data });
      })
      .catch((error) => dispatch({ type: "failure", error }));
  }, [query]);

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      {state.status === "loading" && <span>Loading...</span>}
      {state.status === "success" && (
        <ul>
          {state.data &&
            state.data.hits &&
            state.data.hits.map((item) => (
              <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
        </ul>
      )}
      {state.status === "error" && <span>Error: {state.error}</span>}
    </div>
  );
}
