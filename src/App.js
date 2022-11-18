import { useEffect, useState } from "react";
import "./App.css";
import Follower from "./Follower/Follower";
import { useFetch } from "./useFetch";

function App() {
  const { loading, data } = useFetch();
 const [page, setPage] = useState(0);
 const [followers, setFollowers] = useState([]);

 useEffect(() => {
   if (loading) {
     return;
   }
   setFollowers(data[page]);
 }, [loading]);

  return (
    <div className="App">
      <div className="section-title">
        <h1> {loading ? "loading..." : "Pagination"}</h1>
        <div className="underline"> </div>
      </div>

      <div className="followers">
        <div className="followers-container">
          {followers.map((follower) => (
            <Follower key={follower.id} {...follower} />
          ))}
        </div>
        {!loading && <div className="btn-container"> </div>}
      </div>
    </div>
  );
}

export default App;
