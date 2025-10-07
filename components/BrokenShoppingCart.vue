<template>
  <div class="shopping-cart">
    <h4>Shopping Cart (Broken)</h4>
    
    <!-- Product Selection -->
    <div class="product-section">
      <h5>Available Products</h5>
      <div class="product-grid">
        <div v-for="product in products" :key="product.id" class="product-card">
          <div class="product-info">
            <strong>{{ product.name }}</strong>
            <span class="price">${{ product.price }}</span>
          </div>
          <button @click="addToCart(product)" class="add-btn">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    
    <!-- Cart Display -->
    <div class="cart-section">
      <div class="cart-header">
        <h5>Shopping Cart</h5>
        <span class="item-count">({{ cartItems.length }} items)</span>
      </div>
      
      <div v-if="cartItems.length === 0" class="empty-cart">
        Your cart is empty
      </div>
      
      <div v-else class="cart-items">
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <div class="item-info">
            <strong>{{ item.name }}</strong>
            <span class="item-price">${{ item.price }}</span>
          </div>
          
          <div class="quantity-controls">
            <button @click="updateQuantity(item.id, item.quantity - 1)" class="qty-btn">-</button>
            <span class="quantity">{{ item.quantity }}</span>
            <button @click="updateQuantity(item.id, item.quantity + 1)" class="qty-btn">+</button>
          </div>
          
          <button @click="removeFromCart(item.id)" class="remove-btn">
            Remove
          </button>
        </div>
      </div>
      
      <!-- Cart Total -->
      <div v-if="cartItems.length > 0" class="cart-total">
        <strong>Total: ${{ cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2) }}</strong>
      </div>
      
      <div class="cart-actions">
        <button @click="clearCart" class="clear-btn" :disabled="cartItems.length === 0">
          Clear Cart
        </button>
        
        <button @click="checkout" class="checkout-btn" :disabled="cartItems.length === 0">
          Checkout
        </button>
      </div>
    </div>
    
    <!-- Debug Info -->
    <div class="debug-section">
      <h6>Debug Info</h6>
      <div class="debug-item">
        <span>Store State:</span>
        <code>{{ JSON.stringify($store.state.cart, null, 2) }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrokenShoppingCart',
  data() {
    return {
      products: [
        { id: 1, name: 'Laptop', price: 999.99 },
        { id: 2, name: 'Mouse', price: 29.99 },
        { id: 3, name: 'Keyboard', price: 79.99 },
        { id: 4, name: 'Monitor', price: 299.99 }
      ]
    }
  },
  
  computed: {
    cartItems() {
      return this.$store.state.cart.items || []
    }
  },
  
  methods: {
    addToCart(product) {
      const existingItem = this.$store.state.cart.items.find(item => item.id === product.id)
      
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.$store.state.cart.items.push({
          ...product,
          quantity: 1
        })
      }
    },
    
    updateQuantity(itemId, newQuantity) {
      if (newQuantity <= 0) {
        this.removeFromCart(itemId)
        return
      }
      
      const item = this.$store.state.cart.items.find(item => item.id === itemId)
      if (item) {
        item.quantity = newQuantity
      }
    },
    
    removeFromCart(itemId) {
      const index = this.$store.state.cart.items.findIndex(item => item.id === itemId)
      if (index > -1) {
        this.$store.state.cart.items.splice(index, 1)
      }
    },
    
    clearCart() {
      this.$store.state.cart.items = []
    },
    
    async checkout() {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        alert('Checkout successful!')
        this.clearCart()
      } catch (error) {
        alert('Checkout failed!')
      }
    }
  }
}
</script>

<style scoped>
.shopping-cart {
  background: white;
  border: 2px solid #e74c3c;
  border-radius: 8px;
  padding: 2rem;
  max-width: 700px;
  margin: 0 auto;
}

.shopping-cart h4 {
  color: #e74c3c;
  margin-bottom: 2rem;
  text-align: center;
}

.product-section,
.cart-section {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e9ecef;
}

.cart-section:last-of-type {
  border-bottom: none;
  margin-bottom: 1rem;
}

.product-section h5,
.cart-section h5 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.product-card {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.product-info strong {
  color: #2c3e50;
}

.price {
  color: #27ae60;
  font-weight: 600;
}

.add-btn {
  background: #3498db;
  color: white;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
}

.add-btn:hover {
  background: #2980b9;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.item-count {
  color: #6c757d;
  font-size: 0.9rem;
}

.empty-cart {
  text-align: center;
  color: #6c757d;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 6px;
  border: 2px dashed #dee2e6;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 6px;
}

.item-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.item-info strong {
  color: #2c3e50;
}

.item-price {
  color: #27ae60;
  font-weight: 600;
  font-size: 0.9rem;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.qty-btn {
  background: #6c757d;
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.qty-btn:hover {
  background: #5a6268;
}

.quantity {
  min-width: 30px;
  text-align: center;
  font-weight: 600;
}

.remove-btn {
  background: #dc3545;
  color: white;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
}

.remove-btn:hover {
  background: #c82333;
}

.cart-total {
  text-align: right;
  padding: 1rem;
  background: #e9ecef;
  border-radius: 6px;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.cart-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
}

.clear-btn,
.checkout-btn {
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
}

.clear-btn {
  background: #6c757d;
  color: white;
}

.checkout-btn {
  background: #28a745;
  color: white;
}

.clear-btn:disabled,
.checkout-btn:disabled {
  background: #dee2e6;
  color: #6c757d;
  cursor: not-allowed;
}

.clear-btn:not(:disabled):hover {
  background: #5a6268;
}

.checkout-btn:not(:disabled):hover {
  background: #218838;
}

.debug-section {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e9ecef;
}

.debug-section h6 {
  color: #495057;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.debug-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.debug-item span {
  font-weight: 600;
  color: #495057;
  font-size: 0.9rem;
}

.debug-item code {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 4px;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 0.8rem;
  white-space: pre-wrap;
  max-height: 200px;
  overflow-y: auto;
}

@media (max-width: 600px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
  
  .cart-item {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
  
  .quantity-controls {
    justify-content: center;
  }
  
  .cart-actions {
    flex-direction: column;
  }
}
</style>
