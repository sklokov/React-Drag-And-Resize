import React from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import RGL, { WidthProvider } from "react-grid-layout";


const ReactGridLayout = WidthProvider(RGL);

class DesktopPage extends React.PureComponent {

    static defaultProps = {
        isDraggable: true,
        isResizable: true,
        items: 5,
        rowHeight: 30,
        preventCollision: false,
        cols: 12
    };

    render() {
        let state = this.props;
        let layout = state.desktopPage.layout;
        let layoutSecond = state.desktopPage.layoutSecond;

        return (
            <Tabs>
                <TabList>
                    <Tab>Рабочий стол 1</Tab>
                    <Tab>Рабочий стол 2</Tab>
                </TabList>
                <TabPanel>
                    <ReactGridLayout
                        {...this.props}
                        onLayoutChange={layout =>({layout})}
                    >
                        {layout.map(item => {
                            return (
                                <div key={item.i} data-grid={item}>
                                    <button onClick={this.move('layout', 'layoutSecond', item.i)}>Переместить</button>
                                    <span>{item.i}</span>
                                </div>
                            )
                        })}
                    </ReactGridLayout>
                </TabPanel>
                <TabPanel>
                    <ReactGridLayout
                        {...this.props}
                        onLayoutChange={layoutSecond => ({layoutSecond})}
                    >
                        {layoutSecond.map(item => {
                            return (
                                <div key={item.i} data-grid={item}>
                                    <button onClick={this.move('layoutSecond', 'layout', item.i)}>Переместить</button>
                                    <span>{item.i}</span>
                                </div>
                            )
                        })}
                    </ReactGridLayout>
                </TabPanel>
            </Tabs>
        )


    }

    move = (currentLayout, nextLayout, widgetId) => () => {
        this.props.moveWidget(currentLayout, nextLayout, widgetId)
    }

}

export default DesktopPage;
