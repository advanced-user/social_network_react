const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 13},
        {id: 2, message: 'How are you', likesCount: 40},
        {id: 3, message: 'Yoo 2', likesCount: 40},
        {id: 4, message: 'Yoo', likesCount: 32},
        {id: 5, message: 'Yoo', likesCount: 45},
    ],
    newPostText: 'it-ka'
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return addPost(state)
        case UPDATE_NEW_POST_TEXT:
            return updateNewPostText(state, action.newPostText)
        default:
            return state
    }
}

const addPost = (state) => {
    let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
    }

    return  {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
    }
}

const updateNewPostText = (state, newPostText) => {
    return {
        ...state,
        newPostText: newPostText
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newPostText: text, })
