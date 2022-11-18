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
  }, [data, loading, page]);

  const handlePage = (index) => {
    setPage(index);
  };

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage === data.length) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  return (
    <div className="App">
      <div className="section-title">
        <h1> {loading ? "Loading..." : "Pagination"}</h1>
        <div className="underline"> </div>
      </div>

      <div className="followers">
        <div className="followers-container">
          {followers.map((follower) => (
            <Follower key={follower.id} {...follower} />
          ))}
        </div>
        {!loading && (
          <div className="btn-container">
            <button className="prev-btn" onClick={prevPage}>
              prev
            </button>
            {data.map((item, index) => (
              <button
                key={index}
                className={`page-btn ${index === page ? "active-btn" : null}`}
                onClick={() => handlePage(index)}
              >
                {index + 1}
              </button>
            ))}
            <button className="next-btn" onClick={nextPage}>
              next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
