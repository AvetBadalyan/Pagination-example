import "./App.css";
import Follower from "./Follower/Follower";
import { useFetch } from "./useFetch";

function App() {
  const { loading, data } = useFetch();
  console.log(loading, "data");
  console.log(data, "data");
  return (
    <div className="App">
      <div className="section-title">
        <h1> {loading ? "loading..." : "Pagination"}</h1>
        <div className="underline"> </div>
      </div>

      <div className="followers">
        <div className="followers-container">
          {data.map((follower) => (
            <Follower key={follower.id} {...follower} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
