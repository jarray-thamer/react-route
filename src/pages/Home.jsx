import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <a href="/about">Go to About</a>| |
      <Link to={"/contact"}>Go to Contact (link)</Link>
      <h1>Home Page</h1>
      <Link to={"/dashboard"}>Go to Dashboard (link)</Link>
    </div>
  );
};

export default Home;
