<template>
  <div class="slow-demo">
    <h4>Performance Demo (Intentionally Slow)</h4>
    
    <div class="demo-controls">
      <button @click="startHeavyOperation" class="heavy-btn">
        Start Heavy Operation
      </button>
      
      <button @click="loadManyImages" class="images-btn">
        Load Many Images
      </button>
      
      <button @click="createMemoryLeak" class="leak-btn">
        Create Memory Leak
      </button>
      
      <button @click="triggerLayoutThrashing" class="layout-btn">
        Trigger Layout Thrashing
      </button>
    </div>
    
    <!-- BUG: All images load immediately, no lazy loading -->
    <div class="image-grid" v-if="showImages">
      <div v-for="i in 50" :key="i" class="image-container">
        <!-- BUG: Large images without optimization -->
        <img 
          :src="`https://picsum.photos/400/300?random=${i}`" 
          :alt="`Image ${i}`"
          class="demo-image"
          @load="onImageLoad"
        >
        <div class="image-overlay">Image {{ i }}</div>
      </div>
    </div>
    
    <!-- BUG: Heavy DOM manipulation -->
    <div class="data-list" v-if="heavyData.length">
      <div 
        v-for="(item, index) in heavyData" 
        :key="index"
        class="data-item"
        :style="{ transform: `translateX(${item.x}px)` }"
      >
        <!-- BUG: Complex calculations in template -->
        {{ expensiveCalculation(item.value) }} - {{ item.timestamp }}
      </div>
    </div>
    
    <!-- BUG: No virtualization for large lists -->
    <div class="large-list" v-if="showLargeList">
      <div v-for="n in 10000" :key="n" class="list-item">
        <!-- BUG: Expensive operations in v-for -->
        Item {{ n }} - {{ Math.random().toString(36).substring(7) }}
      </div>
    </div>
    
    <div class="performance-stats">
      <div class="stat-item">
        <span>Images Loaded:</span>
        <span>{{ loadedImages }}</span>
      </div>
      <div class="stat-item">
        <span>Heavy Operations:</span>
        <span>{{ heavyOperations }}</span>
      </div>
      <div class="stat-item">
        <span>Memory Leaks:</span>
        <span>{{ memoryLeaks.length }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlowPerformanceDemo',
  data() {
    return {
      showImages: false,
      showLargeList: false,
      loadedImages: 0,
      heavyOperations: 0,
      heavyData: [],
      memoryLeaks: []
    }
  },
  
  mounted() {
    // BUG: Creating memory leaks immediately
    this.createInitialMemoryLeaks()
  },
  
  // BUG: Missing cleanup - memory leaks!
  // beforeDestroy() { ... }
  
  methods: {
    startHeavyOperation() {
      this.heavyOperations++
      
      // BUG: Blocking the main thread with synchronous heavy computation
      const start = performance.now()
      const data = []
      
      for (let i = 0; i < 100000; i++) {
        // BUG: Expensive calculations on main thread
        const value = Math.sin(i) * Math.cos(i) * Math.random()
        data.push({
          value,
          x: Math.random() * 1000,
          timestamp: new Date().toISOString()
        })
      }
      
      this.heavyData = data
      
      console.log(`Heavy operation took ${performance.now() - start}ms`)
    },
    
    loadManyImages() {
      // BUG: Loading all images at once, no lazy loading
      this.showImages = true
      this.loadedImages = 0
    },
    
    onImageLoad() {
      // BUG: Triggering re-render for each image load
      this.loadedImages++
    },
    
    createMemoryLeak() {
      // BUG: Creating objects that won't be garbage collected
      const leak = {
        id: Date.now(),
        data: new Array(100000).fill('memory leak data'),
        timer: null,
        element: null
      }
      
      // BUG: Creating timers without cleanup
      leak.timer = setInterval(() => {
        leak.data.push(Math.random())
      }, 100)
      
      // BUG: Creating DOM elements without cleanup
      leak.element = document.createElement('div')
      leak.element.innerHTML = 'Memory leak element'
      
      // BUG: Event listeners without cleanup
      leak.element.addEventListener('click', () => {
        console.log('Leaked element clicked')
      })
      
      this.memoryLeaks.push(leak)
    },
    
    triggerLayoutThrashing() {
      // BUG: Causing layout thrashing by reading and writing DOM properties
      const elements = document.querySelectorAll('.data-item')
      
      for (let i = 0; i < elements.length; i++) {
        // BUG: Reading layout properties
        const height = elements[i].offsetHeight
        const width = elements[i].offsetWidth
        
        // BUG: Immediately changing styles (causes reflow)
        elements[i].style.height = `${height + 1}px`
        elements[i].style.width = `${width + 1}px`
        
        // BUG: Reading again (forces recalculation)
        const newHeight = elements[i].offsetHeight
      }
      
      // BUG: Show large list without virtualization
      this.showLargeList = true
    },
    
    expensiveCalculation(value) {
      // BUG: Expensive calculation in template (runs on every render)
      let result = value
      for (let i = 0; i < 1000; i++) {
        result = Math.sin(result) + Math.cos(result)
      }
      return result.toFixed(6)
    },
    
    createInitialMemoryLeaks() {
      // BUG: Creating memory leaks on component mount
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          this.createMemoryLeak()
        }, i * 1000)
      }
    }
  }
}
</script>

<style scoped>
.slow-demo {
  background: white;
  border: 2px solid #e74c3c;
  border-radius: 8px;
  padding: 2rem;
  max-width: 100%;
  margin: 0 auto;
}

.slow-demo h4 {
  color: #e74c3c;
  margin-bottom: 2rem;
  text-align: center;
}

.demo-controls {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.demo-controls button {
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.heavy-btn {
  background: #e74c3c;
  color: white;
}

.images-btn {
  background: #f39c12;
  color: white;
}

.leak-btn {
  background: #8e44ad;
  color: white;
}

.layout-btn {
  background: #2c3e50;
  color: white;
}

.demo-controls button:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* BUG: Inefficient CSS Grid */
.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
  /* BUG: Fixed height causes layout issues */
  max-height: 600px;
  overflow-y: auto;
}

.image-container {
  position: relative;
  /* BUG: Fixed aspect ratio */
  aspect-ratio: 4/3;
  border-radius: 8px;
  overflow: hidden;
}

/* BUG: Images not optimized */
.demo-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* BUG: No loading state */
  /* BUG: No error handling */
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.5rem;
  font-size: 0.9rem;
}

/* BUG: Expensive animations */
.data-list {
  margin-bottom: 2rem;
  max-height: 400px;
  overflow-y: auto;
}

.data-item {
  padding: 1rem;
  background: #f8f9fa;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  /* BUG: Expensive transform on every item */
  transition: transform 0.3s ease;
}

.data-item:hover {
  /* BUG: Triggering layout on hover */
  transform: scale(1.02);
}

/* BUG: No virtualization */
.large-list {
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 2rem;
}

.list-item {
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #e9ecef;
  /* BUG: Expensive hover effects on many items */
}

.list-item:hover {
  background: #f8f9fa;
  /* BUG: Layout-triggering properties */
  transform: translateX(10px);
}

.performance-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding-top: 2rem;
  border-top: 1px solid #e9ecef;
}

.stat-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 6px;
}

.stat-item span:first-child {
  font-weight: 500;
  color: #495057;
}

.stat-item span:last-child {
  font-weight: 700;
  color: #e74c3c;
}

/* BUG: No media queries for responsive design */
/* BUG: Heavy styles that cause repaints */
/* BUG: No will-change optimization */
/* BUG: No contain property for performance isolation */
</style>
