import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/"><h1>Your Playlist</h1></Link>
      <Link to="/new"><h1>Add to Playlist</h1></Link>
    </nav>
  );
}

export default Nav;