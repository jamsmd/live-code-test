<template>
  <div class="broken-layout">
    <h4>Product Gallery (Broken Layout)</h4>
    
    <!-- BUG: Poor responsive grid implementation -->
    <div class="product-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <!-- BUG: Images not responsive -->
        <img :src="product.image" :alt="product.name" class="product-image">
        
        <div class="product-info">
          <!-- BUG: Typography doesn't scale -->
          <h5 class="product-title">{{ product.name }}</h5>
          <p class="product-description">{{ product.description }}</p>
          
          <div class="product-meta">
            <span class="price">${{ product.price }}</span>
            <span class="rating">★{{ product.rating }}/5</span>
          </div>
          
          <!-- BUG: No hover states or accessibility -->
          <button class="add-to-cart-btn">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    
    <!-- BUG: No loading animation -->
    <div v-if="loading" class="loading-state">
      Loading products...
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrokenLayout',
  data() {
    return {
      loading: false,
      products: [
        {
          id: 1,
          name: 'Wireless Headphones',
          description: 'High-quality wireless headphones with noise cancellation and long battery life.',
          price: 199.99,
          rating: 4.5,
          image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop'
        },
        {
          id: 2,
          name: 'Smart Watch',
          description: 'Feature-rich smartwatch with health monitoring and GPS tracking capabilities.',
          price: 299.99,
          rating: 4.2,
          image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop'
        },
        {
          id: 3,
          name: 'Laptop Stand',
          description: 'Ergonomic laptop stand for better posture and improved workspace organization.',
          price: 79.99,
          rating: 4.8,
          image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop'
        },
        {
          id: 4,
          name: 'USB-C Hub',
          description: 'Multi-port USB-C hub with HDMI, USB 3.0, and power delivery support.',
          price: 49.99,
          rating: 4.3,
          image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop'
        },
        {
          id: 5,
          name: 'Wireless Mouse',
          description: 'Ergonomic wireless mouse with precision tracking and long battery life.',
          price: 39.99,
          rating: 4.6,
          image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&h=300&fit=crop'
        },
        {
          id: 6,
          name: 'Bluetooth Speaker',
          description: 'Portable Bluetooth speaker with premium sound quality and waterproof design.',
          price: 129.99,
          rating: 4.4,
          image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop'
        }
      ]
    }
  }
}
</script>

<style scoped>
.broken-layout {
  background: white;
  border: 2px solid #e74c3c;
  border-radius: 8px;
  padding: 2rem;
  max-width: 100%;
  margin: 0 auto;
}

.broken-layout h4 {
  color: #e74c3c;
  margin-bottom: 2rem;
  text-align: center;
  /* BUG: Fixed font size, not responsive */
  font-size: 24px;
}

/* BUG: Poor grid implementation that breaks on mobile */
.product-grid {
  display: grid;
  /* BUG: Fixed column count, doesn't adapt to screen size */
  grid-template-columns: repeat(3, 1fr);
  /* BUG: Fixed gap size */
  gap: 20px;
  margin-bottom: 2rem;
}

.product-card {
  background: #fff;
  /* BUG: No smooth transitions */
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  /* BUG: Fixed height causes layout issues */
  height: 400px;
}

/* BUG: Images not responsive, can overflow */
.product-image {
  width: 100%;
  /* BUG: Fixed height */
  height: 200px;
  object-fit: cover;
  /* BUG: No loading state or error handling */
}

.product-info {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  /* BUG: No proper spacing */
}

/* BUG: Typography doesn't scale properly */
.product-title {
  /* BUG: Fixed font size */
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
  /* BUG: No text overflow handling */
}

.product-description {
  /* BUG: Fixed font size and line height */
  font-size: 14px;
  line-height: 1.4;
  color: #666;
  margin-bottom: 1rem;
  /* BUG: Text can overflow */
  overflow: hidden;
}

.product-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.price {
  font-weight: 700;
  /* BUG: Fixed font size */
  font-size: 16px;
  color: #27ae60;
}

.rating {
  /* BUG: Fixed font size */
  font-size: 14px;
  color: #f39c12;
}

/* BUG: Button with poor accessibility and no hover states */
.add-to-cart-btn {
  background: #3498db;
  color: white;
  border: none;
  /* BUG: Fixed padding */
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  /* BUG: Fixed font size */
  font-size: 14px;
  font-weight: 500;
  /* BUG: No transitions */
  /* BUG: No focus states */
  /* BUG: Touch target too small for mobile */
}

/* BUG: Poor loading state styling */
.loading-state {
  text-align: center;
  /* BUG: Fixed padding */
  padding: 40px;
  color: #666;
  /* BUG: Fixed font size */
  font-size: 16px;
  /* BUG: No loading animation */
}

/* BUG: No media queries for responsive design */
/* BUG: No mobile-first approach */
/* BUG: Missing breakpoints for tablet and mobile */

/* BUG: When screen gets small, layout completely breaks */
@media (max-width: 600px) {
  /* Minimal and broken responsive styles */
  .product-grid {
    /* BUG: Still trying to fit 3 columns on mobile */
    grid-template-columns: repeat(2, 1fr);
  }
}

/* BUG: Missing accessibility styles */
/* BUG: No focus indicators */
/* BUG: Poor color contrast */
/* BUG: No reduced motion preferences */
/* BUG: No high contrast mode support */
</style>
