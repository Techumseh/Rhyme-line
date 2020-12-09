import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/"><div>Your Playlist  |</div></Link>
      <Link to="/new"><div>Add to Playlist</div></Link>
    </nav>
  );
}

export default Nav;