<template>
  <div class="broken-layout">
    <h4>Product Gallery (Broken Layout)</h4>
    
    <div class="product-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" :alt="product.name" class="product-image">
        
        <div class="product-info">
          <h5 class="product-title">{{ product.name }}</h5>
          <p class="product-description">{{ product.description }}</p>
          
          <div class="product-meta">
            <span class="price">${{ product.price }}</span>
            <span class="rating">★{{ product.rating }}/5</span>
          </div>
          
          <button class="add-to-cart-btn">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    
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
  font-size: 24px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 2rem;
}

.product-card {
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  height: 400px;
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-info {
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.product-title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
}

.product-description {
  font-size: 14px;
  line-height: 1.4;
  color: #666;
  margin-bottom: 1rem;
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
  font-size: 16px;
  color: #27ae60;
}

.rating {
  font-size: 14px;
  color: #f39c12;
}

.add-to-cart-btn {
  background: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
}

.loading-state {
  text-align: center;
  padding: 40px;
  color: #666;
  font-size: 16px;
}

@media (max-width: 600px) {
  /* Minimal and broken responsive styles */
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

</style>
