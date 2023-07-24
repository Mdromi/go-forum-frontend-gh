import { LIKE_CREATE_SUCCESS, LIKE_CREATE_ERROR, GET_LIKES_SUCCESS, GET_LIKES_ERROR, LIKE_DELETE_SUCCESS, LIKE_DELETE_ERROR } from '../likeTypes'

export const initstate = {
    likeItems: [],
    likesError: null
}

export const likesState = (state = initstate, action) => {
    const {payload, type} = action

    switch (type) {
        case GET_LIKES_SUCCESS:
            return {
                ...state,
                likeItems: [...state.likeItems, {postID: payload.postID, likes: payload.likes}], 
                likesError: null
            }
        case GET_LIKES_ERROR:
            return {
                ...state,
                likesError: payload,
                likeItems: []
            }
        case LIKE_CREATE_SUCCESS:
            return {
                ...state,
                likeItems: state.likeItems.map(likeItem => likeItem.postID === payload.postID ? {...likeItem, likes: [...likeItem.likes, payload.oneLike]} : likeItem),
                likesErrorL: null
            }
        case LIKE_CREATE_ERROR:
            return { 
                ...state, 
                likesError: payload 
            }
        case LIKE_DELETE_SUCCESS:
            return {
                ...state,
                likeItem: state.likeItems.map(likeItem => Number(likeItem.postID) === payload.postID ? {...likeItem, likes: likeItem.likes.filter(({id}) => id !== payload.likeID)} : likeItem)
            }
        case LIKE_DELETE_ERROR:
            return {
                ...state,
                likesError: payload
            }
        default :
            return state
    }
}