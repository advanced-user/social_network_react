const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS= 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 3
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return changeFollowed(state, true, action.userId)
        case UNFOLLOW:
            return changeFollowed(state, false, action.userId)
        case SET_USERS:
            return setUsers(state, action)
        case SET_CURRENT_PAGE:
            return setCurrentPage(state, action)
        case SET_USERS_TOTAL_COUNT:
            return setUsersTotalCount(state, action)
        default:
            return state
    }
}

const changeFollowed = (state, followed, userId) => {
    return  {
        ...state,
        users: state.users.map(u => {
            if (u.id === userId) {
                return {...u, followed: followed}
            }

            return u
        })
    }
}

const setUsers = (state, action) => {
    return { ...state, users: action.users }
}

const setCurrentPage = (state, action) => {
    return { ...state, currentPage: action.currentPage }
}

const setUsersTotalCount = (state, action) => {
    return { ...state, totalUsersCount: action.totalCount }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({ type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCountAC = (totalCount) => ({ type: SET_USERS_TOTAL_COUNT, totalCount })
