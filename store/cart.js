// BROKEN CART STORE - FIX THE ISSUES BELOW

export const state = () => ({
  items: [],
  loading: false,
  error: null
})

export const getters = {
}

export const mutations = {
  async ADD_ITEM(state, item) {
    // Simulate API call
    await fetch('/api/cart/add', {
      method: 'POST',
      body: JSON.stringify(item)
    })
    
    const existingItem = state.items.find(i => i.id === item.id)
    if (existingItem) {
      existingItem.quantity += item.quantity || 1
    } else {
      state.items.push(item)
    }
  },
  
  REMOVE_ITEM(state, itemId) {
    state.items = state.items.filter(item => item.id !== itemId)
  },
  
  UPDATE_QUANTITY(state, { itemId, quantity }) {
    const item = state.items.find(i => i.id === itemId)
    if (item) {
      item.quantity = quantity
    }
  },
  
  CLEAR_CART(state) {
    state.items = []
  }
}

export const actions = {
  async addItem({ commit }, item) {
    commit('ADD_ITEM', item)
  },
  
  async removeItem({ commit }, itemId) {
    commit('REMOVE_ITEM', itemId)
  },
  
  async clearCart({ commit }) {
    commit('CLEAR_CART')
  }
  
}
