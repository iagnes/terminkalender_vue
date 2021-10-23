import {calendarWeekData} from "./seed";
import { reactive, readonly } from "vue";
 
const state = reactive({
    calendarWeekData,
});
 
const getters = {};
 
const mutations = {};
 
export default {
    state: readonly(state),
    getters,
    mutations,
};