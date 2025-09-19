<template>
  <div class="puzzle-container">
    <div class="puzzle-header">
      <h1>🏪 Puzzle 4: State Management</h1>
      <div class="breadcrumb">
        <nuxt-link to="/puzzles">← Back to Puzzles</nuxt-link>
      </div>
    </div>

    <div class="puzzle-content">
      <div class="problem-statement">
        <h2>🎯 The Problem</h2>
        <p>Fix the broken shopping cart implementation that uses Vuex incorrectly:</p>
        <ul>
          <li>Fix cart state mutations that aren't working properly</li>
          <li>Implement proper getters for computed cart values</li>
          <li>Add async actions for cart operations</li>
          <li>Handle cart persistence in localStorage</li>
          <li>Implement optimistic updates with rollback on failure</li>
        </ul>
      </div>

      <div class="demo-section">
        <h3>🔧 Broken Shopping Cart</h3>
        <p>Try adding items to the cart and observe the broken behavior:</p>
        <div class="component-wrapper">
          <BrokenShoppingCart />
        </div>
      </div>

      <div class="store-structure">
        <h3>📁 Current Store Structure</h3>
        <p>The existing store files have several issues that need to be fixed:</p>
        <pre><code>store/
├── index.js          // Root store
├── cart.js          // Cart module (BROKEN)
└── products.js      // Product module (working)</code></pre>
      </div>

      <div class="requirements-section">
        <h3>📋 Requirements</h3>
        <div class="requirement-list">
          <div class="requirement-item">
            <h4>1. Fix Mutations</h4>
            <p>Mutations should properly update state without side effects</p>
          </div>
          
          <div class="requirement-item">
            <h4>2. Implement Getters</h4>
            <p>Create getters for cart total, item count, and formatted prices</p>
          </div>
          
          <div class="requirement-item">
            <h4>3. Async Actions</h4>
            <p>Add async actions for adding/removing items with API calls</p>
          </div>
          
          <div class="requirement-item">
            <h4>4. Persistence</h4>
            <p>Save cart state to localStorage and restore on app initialization</p>
          </div>
          
          <div class="requirement-item">
            <h4>5. Optimistic Updates</h4>
            <p>Update UI immediately, then rollback if server request fails</p>
          </div>
        </div>
      </div>

      <div class="vuex-patterns">
        <h3>🔧 Vuex Patterns to Fix</h3>
        <div class="pattern-list">
          <div class="pattern-item bad">
            <h5>❌ Bad: Direct State Mutation</h5>
            <pre><code>// In component
this.$store.state.cart.items.push(item)</code></pre>
          </div>
          
          <div class="pattern-item good">
            <h5>✅ Good: Using Mutations</h5>
            <pre><code>// In component
this.$store.commit('cart/addItem', item)</code></pre>
          </div>
          
          <div class="pattern-item bad">
            <h5>❌ Bad: Async in Mutations</h5>
            <pre><code>// In mutation
async ADD_ITEM(state, item) {
  await api.addToCart(item)
  state.items.push(item)
}</code></pre>
          </div>
          
          <div class="pattern-item good">
            <h5>✅ Good: Async in Actions</h5>
            <pre><code>// In action
async addItem({ commit }, item) {
  await api.addToCart(item)
  commit('ADD_ITEM', item)
}</code></pre>
          </div>
        </div>
      </div>

      <div class="hints-section">
        <h3>💡 Hints</h3>
        <details>
          <summary>Click to reveal hints</summary>
          <ul>
            <li>Mutations must be synchronous and pure functions</li>
            <li>Use actions for async operations and business logic</li>
            <li>Getters are like computed properties for the store</li>
            <li>Use <code>mapState</code>, <code>mapGetters</code>, <code>mapActions</code> in components</li>
            <li>For persistence, use plugins or actions with localStorage</li>
            <li>Implement optimistic updates by committing first, then handling failures</li>
            <li>Use proper TypeScript types if available</li>
          </ul>
        </details>
      </div>

      <div class="expected-api">
        <h3>🌐 Expected Store API</h3>
        <div class="api-section">
          <h5>State</h5>
          <pre><code>state: {
  items: [],
  loading: false,
  error: null
}</code></pre>
          
          <h5>Getters</h5>
          <pre><code>getters: {
  itemCount: (state) => state.items.length,
  totalPrice: (state) => /* calculate total */,
  cartIsEmpty: (state) => state.items.length === 0
}</code></pre>
          
          <h5>Actions</h5>
          <pre><code>actions: {
  addItem({ commit }, item),
  removeItem({ commit }, itemId),
  updateQuantity({ commit }, { itemId, quantity }),
  clearCart({ commit })
}</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Puzzle4Page',
  head() {
    return {
      title: 'Puzzle 4: State Management',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Fix Vuex state management patterns in a shopping cart'
        }
      ]
    }
  }
}
</script>

<style scoped>
.puzzle-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}

.puzzle-header {
  text-align: center;
  margin-bottom: 3rem;
}

.puzzle-header h1 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.breadcrumb a {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
}

.breadcrumb a:hover {
  text-decoration: underline;
}

.puzzle-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.problem-statement,
.demo-section,
.store-structure,
.requirements-section,
.vuex-patterns,
.hints-section,
.expected-api {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.problem-statement h2,
.demo-section h3,
.store-structure h3,
.requirements-section h3,
.vuex-patterns h3,
.hints-section h3,
.expected-api h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.component-wrapper {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  border: 2px dashed #dee2e6;
  margin-top: 1rem;
}

.store-structure pre,
.expected-api pre {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
  margin: 1rem 0;
}

.store-structure code,
.expected-api code {
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 0.9rem;
  line-height: 1.6;
}

.requirement-list {
  display: grid;
  gap: 1.5rem;
}

.requirement-item {
  border-left: 4px solid #667eea;
  padding-left: 1rem;
}

.requirement-item h4 {
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.requirement-item p {
  color: #5a6c7d;
  margin: 0;
  line-height: 1.6;
}

.pattern-list {
  display: grid;
  gap: 1.5rem;
}

.pattern-item {
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid;
}

.pattern-item.bad {
  background: #fef5f5;
  border-left-color: #e53e3e;
}

.pattern-item.good {
  background: #f0fff4;
  border-left-color: #38a169;
}

.pattern-item h5 {
  margin-bottom: 0.8rem;
  font-size: 1rem;
}

.pattern-item.bad h5 {
  color: #e53e3e;
}

.pattern-item.good h5 {
  color: #38a169;
}

.pattern-item pre {
  background: rgba(0, 0, 0, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin: 0;
  overflow-x: auto;
}

.pattern-item code {
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 0.85rem;
  line-height: 1.5;
}

.hints-section details {
  margin-top: 1rem;
}

.hints-section summary {
  cursor: pointer;
  color: #667eea;
  font-weight: 600;
  padding: 0.5rem;
  border-radius: 4px;
  background: #f8f9fa;
}

.hints-section summary:hover {
  background: #e9ecef;
}

.hints-section ul {
  color: #5a6c7d;
  line-height: 1.6;
}

.api-section h5 {
  color: #2d3748;
  margin: 1.5rem 0 0.5rem 0;
  font-size: 1.1rem;
}

.api-section h5:first-child {
  margin-top: 0;
}

@media (max-width: 768px) {
  .puzzle-container {
    padding: 1rem;
  }
  
  .problem-statement,
  .demo-section,
  .store-structure,
  .requirements-section,
  .vuex-patterns,
  .hints-section,
  .expected-api {
    padding: 1.5rem;
  }
}
</style>
