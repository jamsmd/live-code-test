// BROKEN CART STORE - FIX THE ISSUES BELOW

export const state = () => ({
  items: [],
  loading: false,
  error: null
})

// BUG: Missing proper getters
export const getters = {
  // TODO: Implement proper getters
  // itemCount, totalPrice, cartIsEmpty, etc.
}

// BUG: Mutations with async operations and side effects
export const mutations = {
  // BUG: Async operation in mutation (should be in action)
  async ADD_ITEM(state, item) {
    // Simulate API call
    await fetch('/api/cart/add', {
      method: 'POST',
      body: JSON.stringify(item)
    })
    
    const existingItem = state.items.find(i => i.id === item.id)
    if (existingItem) {
      // BUG: Direct object mutation
      existingItem.quantity += item.quantity || 1
    } else {
      // BUG: Pushing mutable object
      state.items.push(item)
    }
  },
  
  // BUG: Mutation doesn't handle edge cases
  REMOVE_ITEM(state, itemId) {
    // BUG: No validation
    state.items = state.items.filter(item => item.id !== itemId)
  },
  
  // BUG: Missing quantity validation
  UPDATE_QUANTITY(state, { itemId, quantity }) {
    const item = state.items.find(i => i.id === itemId)
    if (item) {
      item.quantity = quantity // BUG: No validation for negative quantities
    }
  },
  
  // BUG: Not resetting error state
  CLEAR_CART(state) {
    state.items = []
  }
}

// BUG: Actions without proper error handling
export const actions = {
  // BUG: No error handling, no loading state
  async addItem({ commit }, item) {
    commit('ADD_ITEM', item)
  },
  
  // BUG: No optimistic updates
  async removeItem({ commit }, itemId) {
    commit('REMOVE_ITEM', itemId)
  },
  
  // BUG: No persistence to localStorage
  async clearCart({ commit }) {
    commit('CLEAR_CART')
  }
  
  // BUG: Missing actions for:
  // - updateQuantity
  // - loadCart (from localStorage)
  // - saveCart (to localStorage)
  // - checkout
}

// BUG: No plugins for persistence
// TODO: Add plugin to save/load cart from localStorage
