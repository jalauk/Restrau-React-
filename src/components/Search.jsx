import React, { useState } from "react";
import API from "../FoodApi";
import ViewMore from "./ViewMore";

const Search = () => {
  const [sear, setSearch] = useState("");
  const [data, setdata] = useState(API);
  const [Find, setFind] = useState(false);
  let n = sear.toUpperCase();
  const find = function () {
    data.map((e) => {
      if (e.name === n) {
        setFind(true);
      }
    });
    console.log("clicked");
  };
  return (
    <div className="se">
      <div className="search">
        <label for="exampleDataList" class="form-label">
          Search Here
        </label>
        <input
          class="form-control"
          type="search"
          value={sear}
          placeholder="search food....."
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button className="btn btn-primary my-3" onClick={find}>
          Search
        </button>
      </div>
      {Find ? (
        <>
          <ViewMore choose={n} />
        </>
      ) : (
        <>
          <h1 className="found">Item!!!! Not Found</h1>
        </>
      )}
      <br />
    </div>
  );
};

export default Search;
