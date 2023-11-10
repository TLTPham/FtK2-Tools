import './globals.scss'
import { Navbar } from "./_Navbar/Navbar";
import { PopupCardProvider } from "@/app/_PopUpCard/PopupCardProvider";
import { Toaster } from "react-hot-toast";
import { KofiButton } from "react-kofi-button";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className="custom-scroll">
    <main className="">
      <PopupCardProvider>
        <Navbar/>
        <Toaster position="bottom-right"/>
        <div className="navbar-spacer"/>
        {children}
        <div className="page">
        </div>
        <div className="support">
          <KofiButton username='zotea' label='Support me' color='#29abe0' size='sm' />
        </div>
      </PopupCardProvider>
    </main>
    </body>
    </html>
  )
}
