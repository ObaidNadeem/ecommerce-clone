

const INITIAL_STATE = {
    current_user: {}
}
export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case "SETUSER":          
            return({
                ...state,
                current_user: payload
            })
        }
        return state;                   
    }
    
    console.log("global state mai current user",state.current_user) 