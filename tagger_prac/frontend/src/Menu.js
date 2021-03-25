import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <Link to="/rosters">
        <button>
          See Rosters
        </button>
      </Link>
      <Link to="/players">
        <button>
          See Players
        </button>
      </Link>
      <Link to="/tagger">
        <button>
          Start Tagging!
        </button>
      </Link>
    </div>
  );
}

export default Menu;