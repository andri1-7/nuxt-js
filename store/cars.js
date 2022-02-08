export const state = () => ({
    cars: 0
  })
  
  export const mutations = {
    STORE_CARS(state, cars) {
    if (cars) {
        state.cars++
    } else {
        state.cars--
    }
    }
  }
  
  export const actions = {
    storeCars({commit}, cars) {
      commit('STORE_CARS', cars)
    }
  }
  
  export const getters = {
    getCars(state) {
      return state.cars
    }
  }