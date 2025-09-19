<template>
  <div class="counter-component">
    <h4>Counter Component</h4>
    <div class="counter-display">
      <span class="count">{{ count }}</span>
      <span class="elapsed">Elapsed: {{ elapsedTime }}s</span>
    </div>
    
    <div class="controls">
      <button @click="increment" class="btn btn-primary">
        Increment (+1)
      </button>
      
      <button @click="toggleAutoMode" class="btn" :class="autoMode ? 'btn-danger' : 'btn-success'">
        {{ autoMode ? 'Stop Auto' : 'Start Auto' }}
      </button>
      
      <button @click="reset" class="btn btn-secondary">
        Reset
      </button>
    </div>
    
    <div class="status">
      <span :class="['status-indicator', autoMode ? 'active' : 'inactive']">
        {{ autoMode ? '🟢 Auto Mode ON' : '🔴 Auto Mode OFF' }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrokenCounter',
  data() {
    return {
      count: 0,
      autoMode: false,
      startTime: null,
      elapsedTime: 0
    }
  },
  
  // BUG: Wrong lifecycle hook - created() runs before DOM is ready
  created() {
    this.startTime = Date.now()
    
    // BUG: Setting up intervals in created() instead of mounted()
    this.setupAutoIncrement()
    this.setupElapsedTimer()
  },
  
  methods: {
    increment() {
      // BUG: Not properly updating reactive data
      this.count = this.count + 1
    },
    
    toggleAutoMode() {
      this.autoMode = !this.autoMode
      
      // BUG: Creating multiple intervals without clearing previous ones
      if (this.autoMode) {
        this.setupAutoIncrement()
      }
    },
    
    reset() {
      this.count = 0
      this.autoMode = false
      this.startTime = Date.now()
      this.elapsedTime = 0
      
      // BUG: Not clearing intervals when resetting
    },
    
    setupAutoIncrement() {
      // BUG: Not storing interval ID for cleanup
      if (this.autoMode) {
        setInterval(() => {
          // BUG: Incrementing even when autoMode is false
          this.count++
        }, 2000)
      }
    },
    
    setupElapsedTimer() {
      // BUG: Not storing interval ID for cleanup
      setInterval(() => {
        if (this.startTime) {
          // BUG: Inefficient calculation on every tick
          this.elapsedTime = Math.floor((Date.now() - this.startTime) / 1000)
        }
      }, 100)
    }
  }
  
  // BUG: Missing cleanup lifecycle hook - memory leaks!
}
</script>

<style scoped>
.counter-component {
  background: white;
  border: 2px solid #e74c3c;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
}

.counter-component h4 {
  color: #e74c3c;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
}

.counter-display {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1.5rem;
}

.count {
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
}

.elapsed {
  font-size: 0.9rem;
  color: #7f8c8d;
}

.controls {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #3498db;
  color: white;
}

.btn-success {
  background: #27ae60;
  color: white;
}

.btn-danger {
  background: #e74c3c;
  color: white;
}

.btn-secondary {
  background: #95a5a6;
  color: white;
}

.btn:hover {
  transform: translateY(-1px);
  opacity: 0.9;
}

.status {
  padding: 0.5rem;
}

.status-indicator {
  font-size: 0.9rem;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-weight: 500;
}

.status-indicator.active {
  background: #d5f4e6;
  color: #27ae60;
}

.status-indicator.inactive {
  background: #fadbd8;
  color: #e74c3c;
}

@media (max-width: 480px) {
  .counter-display {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .controls {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
  }
}
</style>
