'use client';
import "./style.scss";
import { createContext, useContext, useState } from "react";

const PopupCardContext = createContext(null);

export function PopupCardProvider({ children }) {
  const [ card, setCard ] = useState(<div/>);
  const setMouseEvents = (card) => {

    return {
      onMouseEnter: (e) => {
        let values = { child: card };
        let left = 475 > (window.innerWidth - e.nativeEvent.clientX);
        values.style = {
          ...(left) && { left: `20px`, float: `left` },
          ...(!left) && { right: `20px`, float: `right` },
        };
        setCard(values);
      },
      onMouseLeave: () => {
        setCard(<div/>);
      }
    }
  }
  return (
    <PopupCardContext.Provider value={{ setMouseEvents }}>
      <div className="popup" style={card.style}>{card.child}</div>
      {children}
    </PopupCardContext.Provider>
  );
}

export function usePopupCard() {
  const context = useContext(PopupCardContext);
  if (!context) {
    throw new Error('usePopupCard must be used within an PopupCardProvider');
  }
  return context;
}