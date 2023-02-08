const initState = {
    themeId: 1,
}
type ThemeStateType = typeof initState

export const themeReducer = (state: ThemeStateType = initState, action: ChangeThemeAT): ThemeStateType => {
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

type ChangeThemeAT = {
    type: 'SET_THEME_ID'
    id: number
}
export const changeThemeId = (id: number): ChangeThemeAT => ({ type: 'SET_THEME_ID', id })
