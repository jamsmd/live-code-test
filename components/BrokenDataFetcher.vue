<template>
  <div class="data-fetcher">
    <h4>User Data Fetcher (Broken)</h4>
    
    <div class="controls">
      <select v-model="selectedEndpoint" class="endpoint-select">
        <option value="/api/users">Normal Endpoint</option>
        <option value="/api/users/slow">Slow Endpoint (3s)</option>
        <option value="/api/users/error">Server Error (500)</option>
        <option value="/api/users/notfound">Not Found (404)</option>
        <option value="/api/users/timeout">Timeout (5s)</option>
      </select>
      
      <button @click="fetchData" class="fetch-btn">
        Fetch Data
      </button>
      
      <button @click="clearData" class="clear-btn">
        Clear
      </button>
    </div>
    
    <div v-if="loading" class="loading">
      Loading...
    </div>
    
    <div v-if="error" class="error">
      Error: {{ error }}
    </div>
    
    <div class="data-display">
      <div v-if="users && users.length" class="user-list">
        <h5>Users ({{ users.length }})</h5>
        <div class="user-grid">
          <div v-for="user in users" :key="user.id" class="user-card">
            <strong>{{ user.name }}</strong>
            <span>{{ user.email }}</span>
          </div>
        </div>
      </div>
      
      <div v-else-if="!loading && !error" class="no-data">
        No data loaded. Click "Fetch Data" to load users.
      </div>
    </div>
    
    <div class="status-info">
      <div class="status-item">
        <span class="label">Requests Made:</span>
        <span class="value">{{ requestCount }}</span>
      </div>
      
      <div class="status-item">
        <span class="label">Cache Status:</span>
        <span class="value">{{ cacheStatus }}</span>
      </div>
      
      <div class="status-item">
        <span class="label">Network:</span>
        <span class="value">Unknown</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrokenDataFetcher',
  data() {
    return {
      users: [],
      loading: false,
      error: null,
      selectedEndpoint: '/api/users',
      requestCount: 0,
      cacheStatus: 'Empty'
    }
  },
  
  methods: {
    async fetchData() {
      this.loading = true
      this.error = null
      this.requestCount++
      
      try {
        const response = await fetch(this.selectedEndpoint)
        
        const data = await response.json()
        
        this.users = data.users || []
        this.cacheStatus = 'Fresh'
      } catch (err) {
        this.error = err.message
        this.cacheStatus = 'Error'
      } finally {
        this.loading = false
      }
    },
    
    clearData() {
      this.users = []
      this.error = null
      this.cacheStatus = 'Empty'
    } 
  }
}
</script>

<style scoped>
.data-fetcher {
  background: white;
  border: 2px solid #e74c3c;
  border-radius: 8px;
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
}

.data-fetcher h4 {
  color: #e74c3c;
  margin-bottom: 1.5rem;
  text-align: center;
}

.controls {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.endpoint-select {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 200px;
}

.fetch-btn,
.clear-btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.fetch-btn {
  background: #3498db;
  color: white;
}

.clear-btn {
  background: #95a5a6;
  color: white;
}

.fetch-btn:hover,
.clear-btn:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.loading {
  text-align: center;
  color: #3498db;
  font-weight: 500;
  padding: 2rem;
  background: #f0f8ff;
  border-radius: 6px;
  margin-bottom: 1rem;
}

.error {
  background: #f8d7da;
  color: #721c24;
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  border-left: 4px solid #dc3545;
}

.data-display {
  min-height: 200px;
  margin-bottom: 1.5rem;
}

.user-list h5 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.user-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.user-card {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.user-card strong {
  color: #2c3e50;
}

.user-card span {
  color: #6c757d;
  font-size: 0.9rem;
}

.no-data {
  text-align: center;
  color: #6c757d;
  padding: 3rem;
  background: #f8f9fa;
  border-radius: 6px;
  border: 2px dashed #dee2e6;
}

.status-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #dee2e6;
}

.status-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background: #f8f9fa;
  border-radius: 4px;
}

.label {
  font-weight: 500;
  color: #495057;
}

.value {
  color: #6c757d;
}

@media (max-width: 600px) {
  .controls {
    flex-direction: column;
  }
  
  .endpoint-select {
    min-width: auto;
  }
  
  .user-grid {
    grid-template-columns: 1fr;
  }
  
  .status-info {
    grid-template-columns: 1fr;
  }
}
</style>
