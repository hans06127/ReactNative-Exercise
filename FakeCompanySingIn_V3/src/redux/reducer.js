import { CHANGE_SYTLE, USER_INFORMATION } from "./action";



const initalState = {
  basicStyle: {
    DeepColor: 'off',
    fontColor: true ? 'black' : '#fff',
    borderColor: true ? '#fff' : '#1C1C1C'
  },
  userInformation: {}
}
export default function reducer(state = initalState, action) {
  switch (action.type) {
    // 深色 on/off
    case CHANGE_SYTLE:
      // console.log("action", action)
      return {
        ...state,
        basicStyle: {
          deepColor: action.payload.basicStyle,
          fontColor: action.payload.basicStyle == 'on' ? '#fff' : '#1C1C1C',
          backgroundColor: action.payload.basicStyle == 'on' ? '#1C1C1C' : '#fff'
        }
      }
    case USER_INFORMATION:
      return {
        ...state,
        userInformation: action.payload.userLoginInformation
      }
    default: {
      return state
    }
  }

}