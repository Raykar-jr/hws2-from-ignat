import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }


export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': { // by name
            let stateCopy = state.map(u => ({...u}))
            stateCopy.sort((a, b) => a.name.localeCompare(b.name))
            return action.payload === 'up' ? stateCopy : stateCopy.reverse()
        }
        case 'check': {
            return state.map(u => ({...u})).filter(u => u.age > action.payload)
        }
        default:
            return state
    }
}
