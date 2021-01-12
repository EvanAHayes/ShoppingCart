import React, { Component } from 'react'
//import Backdrop from '../backdrop/backdrop';
import classes from './SidePanel.css'
import Aux from '../../../hoc/aux.js'


class SidePanel extends Component {
    
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
 }

      render() {
       return(
           <Aux>
           <div className={classes.panelwrap} style={{transform: this.props.show ? 'translateX(0)' : 'translateX(100%)',
           opacity: this.props.show ? '1' : '0'}}>
           <div className={classes.panel}>
               {this.props.children}
          </div>
           </div>
           </Aux>
       )
    }

}


export default SidePanel;
