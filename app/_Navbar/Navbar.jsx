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
            <details className="navItem">
              <summary>Character</summary>
              <ul className="border-2 p-2">
                <li><a href="/character/abilities">Abilities</a></li>
                <li><a href="/character/basic-cards">Basic Cards</a></li>
                <li><a href="/character/simulator">Simulator</a></li>
              </ul>
            </details>
          </li>
          <li><a className="navItem" href="/items">Items</a></li>
        </ul>
      </div>
    </div>
  )
}