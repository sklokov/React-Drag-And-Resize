const MOVE_WIDGET = 'MOVE_WIDGET';

const initialState = {
    layout: [
        {x: 0, y: 0, w: 3, h: 3, i: '0'},
        {x: 0, y: 1, w: 3, h: 3, i: '1'}
    ],
    layoutSecond: []
};

const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVE_WIDGET:
            let currentLayout = action.currentLayout;
            let widgetId = action.widgetId;
            let nextLayout = action.nextLayout;
            const widget = state[currentLayout].find(w => w.i === widgetId);
            const filteredLayout = state[currentLayout].filter(w => w.i !== widgetId);
            debugger;
            return {
                ...state,
                [currentLayout]: filteredLayout,
                [nextLayout]: [...state[nextLayout], widget]
            }
        default:
            return state;
    }
}


export const moveWidgetCreator = (currentLayout, nextLayout, widgetId) => ({type: MOVE_WIDGET, currentLayout, nextLayout, widgetId})


export default widgetReducer;
























// const MOVE_WIDGET = 'MOVE_WIDGET';
//
// let initialState = {
//     widgets: [
//         {key: "a"},
//         {key: "b"}
//     ]
// };
//
// const widgetReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case MOVE_WIDGET: {
//             let moveWidget = {
//                 id: 5,
//                 message: action.newPostText,
//                 likesCount: 0
//             };
//             return {
//                 ...state,
//                 posts: state.posts.filter(p => p.id != action.postId),
//                 widgets: [...state.widgets],
//                 newPostText: ''
//             };
//         }
//
//         default:
//             return state;
//     }
// }
//
//
// export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})
// export default widgetReducer;
//
