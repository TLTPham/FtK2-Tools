import './globals.scss'
import { Navbar, NavbarProvider } from "./_Navbar/Navbar";
import { PopupCardProvider } from "@/app/_PopUpCard/PopupCardProvider";
import { Toaster } from "react-hot-toast";

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
      </PopupCardProvider>
    </main>
    </body>
    </html>
  )
}
