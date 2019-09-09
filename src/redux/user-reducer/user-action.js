
import {userActions} from './user.types';
export const setCurrentUser = user=>(
    {
        type:userActions.SET_CURRENT_USER,
        payload:user
    }
)