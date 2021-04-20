import "../css/home.css";

function Home({ theme }) {
  return (
    <div className="home">
      <div className={`img-background bg-${theme}`}></div>
      <div className={`background background-${theme}`}></div>
    </div>
  );
}

export default Home;
