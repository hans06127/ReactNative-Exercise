export const CHANGE_SYTLE = "CHANGE_STYLE"
export const USER_INFORMATION = 'USER_INFORMATION'


export function changeStyle(_change) {
  return {
    type: CHANGE_SYTLE,
    payload: { basicStyle: _change }
  }
}

export function LoginInformation(_data) {
  return {
    type: USER_INFORMATION,
    payload: { userLoginInformation: _data }
  }

}