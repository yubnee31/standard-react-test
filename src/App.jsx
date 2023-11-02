import { useState } from "react";

function App() {
  const initialState = ["apple", "banana", "cherry", "date", "elderberry"];
  const [array, setArray] = useState(initialState);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState(""); // input을 위한 value

  const handleForEach = function () {
    let temp = "";
    array.forEach(function (item, index) {
      temp += `${index}: ${item} / `;
    });

    setResult(temp);
  };

  const handleFilter = function () {
    const filtered = array.filter((item, index) => item.includes(query));

    setResult(filtered.join(","));
  };

  const handleMap = function () {
    const mapped = array.map(function (item, index) {
      return item.toUpperCase();
    });

    setResult(mapped.join(","));
  };

  const handleReduce = function () {
    const reduced = array.reduce(function (acc, cur) {
      return `${acc} + ${cur}`;
    });

    setResult(reduced);
  };

  const handlePush = function () {
    if (query.length <= 0) {
      alert("추가하시려는 값을 입력해주세요.");
      return false;
    }
    const newArr = [...array, query];
    setArray(newArr);
    setResult(newArr.join(","));
  };

  const handlePop = function () {
    const newArr = [...array];
    newArr.pop();
    setArray(newArr);
    setResult(newArr.join(","));
  };

  const handleSlice = function () {
    const newArr = [...array];
    const newArray = newArr.slice(1, 4);
    setArray(newArray);
    setResult(newArray.join(","));
  };

  const handleSplice = function () {
    const newArr = [...array];
    newArr.splice(2, 2, "kiwi", "lime");
    setArray(newArr);
    setResult(newArr.join(","));
  };

  const handleIndexOf = function () {
    const indexof2 = array.indexOf(query);
    setResult(indexof2);
  };

  // 콘솔에는 찍히는데 결과물에 안나옴,,ㅠㅠ
  const handleIncludes = function () {
    const included = array.includes(query);
    setResult(included);
  };

  const handleFind = function () {
    const found = array.find((item, index) => item.includes(query));

    setResult(found);
  };

  //콘솔에는 찍히는데 결과물,,,,
  const handleSome = function () {
    const some2 = array.some((el) => el.includes(query));
    setResult(some2);
  };

  //결과물,,,
  const handleEvery = function () {
    const every2 = array.every((el) => el.length >= 2);
    setResult(every2);
  };

  const handleSort = function () {
    const sorted = array.sort();
    setArray(sorted);
    setResult(sorted.join(","));
  };

  const handleJoin = function () {
    const join2 = array.join("-");
    setResult(join2);
  };

  return (
    <div>
      <h1>Standard반 배열 API 테스트</h1>
      <input
        value={query}
        onChange={function (e) {
          setQuery(e.target.value);
        }}
      />
      <div>
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handleFilter}>filter</button>
        <button onClick={handleMap}>map</button>
        <button onClick={handleReduce}>reduce</button>
        <button onClick={handlePush}>push</button>
        <button onClick={handlePop}>pop</button>
        <button onClick={handleSlice}>slice</button>
        <button onClick={handleSplice}>splice</button>
        <button onClick={handleIndexOf}>indexOf</button>
        <button onClick={handleIncludes}>includes</button>
        <button onClick={handleIncludes}>includes</button>
        <button onClick={handleFind}>find</button>
        <button onClick={handleSome}>some</button>
        <button onClick={handleEvery}>every</button>
        <button onClick={handleSort}>sort</button>
        <button onClick={handleJoin}>join</button>
      </div>
      <div>
        <h3>원본배열</h3>
        <p>{array.join(", ")}</p>
      </div>
      <div>
        <h3>결과물</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
