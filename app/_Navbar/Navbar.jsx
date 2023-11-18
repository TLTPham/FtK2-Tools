import "./style.scss";

export function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-home">
          <a className="normal-case text-xl ui fade" href="/">Ftk2 Toolset</a>
        </div>
        <div className="navbar-links">
          <ul>
            <li className="sub-menu">
              <div>Character</div>
              <ul>
                <li><a href="/character/abilities">Special Abilities</a></li>
                <li><a href="/character/basic-cards">Character Cards</a></li>
                <li><a href="/character/simulator">Character Simulator</a></li>
              </ul>
            </li>
            <li><a href="/items">Items</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-spacer"/>
    </>
  )
}