import React from 'react';
import {connect} from "react-redux";
import {moveWidgetCreator} from "../../redux/widget-reducer";
import DesktopPage from "./DesktopPage";

class DesktopPageContainer extends React.Component {

     render() {
        return(
            <DesktopPage {...this.props} />
        )
     }

}

let mapStateToProps = (state) => {
    return {
        desktopPage: state.desktopPage
    }
}

 let mapDispatchToProps = (dispatch) => {
     return {
         moveWidget: (currentLayout, nextLayout, widgetId) => {
             dispatch(moveWidgetCreator(currentLayout, nextLayout, widgetId));
        }
     }
 }

export default connect(mapStateToProps, mapDispatchToProps)(DesktopPageContainer);