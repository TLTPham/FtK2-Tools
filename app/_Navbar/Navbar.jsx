import "./style.scss";
export function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl" href="/">For the King 2</a>
      </div>
      <div className="navbar-center">
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details className="border-2 rounded-2xl">
              <summary>Character</summary>
              <ul className="border-2 p-2">
                <li><a href="/character/abilities">Abilities</a></li>
                <li><a href="/character/basic-cards">Basic Cards</a></li>
                <li><a href="/character/simulator">Simulator</a></li>
              </ul>
            </details>
          </li>
          <li>
            <details className="border-2 rounded-2xl">
              <summary>Items</summary>
              <ul className="border-2 p-2">
                <li><a>Basic Cards</a></li>
                <li><a>Character </a></li>
              </ul>
            </details>
          </li>
          <li/>
        </ul>
      </div>
    </div>
  )
}