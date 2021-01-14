import React, { useState } from 'react';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

export default function SideMenu(props) {
    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
      });
    
    return (
        <div>
        <button className="btn btn-link" style={{marginLeft:'580px', padding: 0}} onClick={() => setState({ isPaneOpen: true })}>
        View Cart
      </button>

      <SlidingPane
        className="some-custom-class"
        overlayClassName="some-custom-overlay-class"
        isOpen={state.isPaneOpen}
        title="Cart"
        onRequestClose={() => {
          // triggered on "<" on left top click or on outside click
          setState({ isPaneOpen: false });
        }}
      >
        <div>{props.children}</div>
        <br />
      </SlidingPane>
        </div>
    )
}

