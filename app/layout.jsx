'use client'
import './globals.scss'
import { Navbar } from "./_Navbar/Navbar";
import { PopupCardProvider } from "@/app/_PopUpCard/PopupCardProvider";
import { Toaster } from "react-hot-toast";
import { KofiButton } from "react-kofi-button";
import { ContextMenu, onContextMenu } from "react-contexted";

export default function RootLayout({ children }) {
  const testCLick = (e) => {
    onContextMenu(
      {
        label: 'test',
        onClick: () => {
          console.log('test');
        },
        divider: true,
        // disabled: true,
      },)(e)
  }
  return (
    <html lang="en">
    <body className="custom-scroll">
    <main className="">
      <PopupCardProvider>
        <Navbar/>
        <Toaster position="bottom-right"/>
        <div className="page">
          {children}
        </div>
        <div className="support">
          <div className="border w-12 h-12" onContextMenu={testCLick}>test</div>
          {/*<KofiButton username='zotea' label='Support me' color='#29abe0' size='sm'/>*/}
        </div>
        <ContextMenu/>
      </PopupCardProvider>
    </main>
    </body>
    </html>
  )
}
