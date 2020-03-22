import { TOGGLE_SIDEBAR } from './mutation-type'

export default {
  [TOGGLE_SIDEBAR](state){
    state.toggleSideBar=!state.toggleSideBar
  }
}