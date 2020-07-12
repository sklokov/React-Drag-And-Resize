import React from 'react';
import './App.css';
import store from "./redux/redux-store";
import {Provider} from "react-redux";
import DesktopPageContainer from "./components/Desktop/DesktopPageContainer";

const App = (props) => {

    return (
        <Provider store={store}>
            <div className="App">
                <DesktopPageContainer/>
            </div>
        </Provider>
    );

}

export default App;




