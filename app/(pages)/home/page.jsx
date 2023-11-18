import "./style.scss";
import YoutubeEmbed from "@/components/YoutubeEmbed";
export default function Page() {
  return(
    <div className="w-full flex flex-col gap-10 p-10">
      <div/>
      <div className="grid grid-cols-3 grid-flow-row gap-5 p-5">
        <div className="display-card">
          <div className="header">Welcome new players!</div>
          <YoutubeEmbed embedId="LpmQUi4EWPQ"/>
          <p>Here are some useful links:</p>
          <ul>
            <li>
              <a href="https://discord.com/invite/fortheking">Official Discord Server</a>
            </li>
            <li>
              <a href="https://www.reddit.com/r/ForTheKing/">Reddit subreddit</a>
            </li>
            <li>
              <a href="https://store.steampowered.com/app/527230/For_The_King/">Steam Page - For the King</a>
            </li>
            <li>
              <a href="https://store.steampowered.com/app/1676840/For_The_King_II/">Steam Page - For the King II</a>
            </li>
          </ul>
        </div>
        <div className="display-card">
          <div className="header">For the King II</div>
          <p>Battle against Fahrul's tyrannical Queen alone or as a party of four players in the sequel to For The King, the massively popular turn-based roguelite tabletop RPG. Will you unravel the once beloved Queen's terrible secret?</p>
        </div>
      </div>
    </div>
  )
}