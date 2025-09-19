<template>
  <div class="puzzle-container">
    <div class="puzzle-header">
      <h1>🛣️ Puzzle 2: Routing & Middleware</h1>
      <div class="breadcrumb">
        <nuxt-link to="/puzzles">← Back to Puzzles</nuxt-link>
      </div>
    </div>

    <div class="puzzle-content">
      <div class="problem-statement">
        <h2>🎯 The Problem</h2>
        <p>You need to implement a user profile system with proper routing and authentication middleware:</p>
        <ul>
          <li>Create dynamic user profile pages at <code>/user/:id</code></li>
          <li>Implement authentication middleware that protects user routes</li>
          <li>Add proper route validation (user ID must be numeric)</li>
          <li>Handle 404 errors gracefully for non-existent users</li>
          <li>Implement breadcrumb navigation</li>
        </ul>
      </div>

      <div class="demo-section">
        <h3>🔧 Current State</h3>
        <p>Try navigating to these URLs and observe the broken behavior:</p>
        <div class="test-links">
          <nuxt-link to="/user/1" class="test-link">👤 User Profile #1</nuxt-link>
          <nuxt-link to="/user/abc" class="test-link invalid">❌ Invalid User ID</nuxt-link>
          <nuxt-link to="/user/999" class="test-link">🔍 Non-existent User</nuxt-link>
        </div>
        
        <div class="auth-demo">
          <h4>Authentication Status</h4>
          <div class="auth-status">
            <span :class="['status-badge', isAuthenticated ? 'authenticated' : 'unauthenticated']">
              {{ isAuthenticated ? '🔓 Authenticated' : '🔒 Not Authenticated' }}
            </span>
            <button @click="toggleAuth" class="auth-toggle">
              {{ isAuthenticated ? 'Logout' : 'Login' }}
            </button>
          </div>
        </div>
      </div>

      <div class="requirements-section">
        <h3>📋 Requirements</h3>
        <div class="requirement-list">
          <div class="requirement-item">
            <h4>1. Dynamic Routes</h4>
            <p>Create <code>pages/user/_id.vue</code> that displays user information</p>
          </div>
          
          <div class="requirement-item">
            <h4>2. Authentication Middleware</h4>
            <p>Create <code>middleware/auth.js</code> that redirects unauthenticated users to login</p>
          </div>
          
          <div class="requirement-item">
            <h4>3. Route Validation</h4>
            <p>Validate that user ID is numeric, show 404 for invalid IDs</p>
          </div>
          
          <div class="requirement-item">
            <h4>4. Error Handling</h4>
            <p>Handle non-existent users (IDs > 100) with proper error pages</p>
          </div>
          
          <div class="requirement-item">
            <h4>5. Breadcrumbs</h4>
            <p>Show navigation breadcrumbs: Home > Users > User Name</p>
          </div>
        </div>
      </div>

      <div class="hints-section">
        <h3>💡 Hints</h3>
        <details>
          <summary>Click to reveal hints</summary>
          <ul>
            <li>Use <code>validate()</code> method in pages to validate route parameters</li>
            <li>Middleware should check authentication status and redirect if needed</li>
            <li>Use <code>asyncData()</code> to fetch user data server-side</li>
            <li>Handle errors with <code>error()</code> method</li>
            <li>Consider using Vuex for authentication state management</li>
            <li>Remember to handle both client-side and server-side navigation</li>
          </ul>
        </details>
      </div>

      <div class="file-structure">
        <h3>📁 Expected File Structure</h3>
        <pre><code>middleware/
  └── auth.js
pages/
  └── user/
      ├── _id.vue
      └── index.vue (user list)
store/
  └── auth.js (optional)</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Puzzle2Page',
  data() {
    return {
      isAuthenticated: false
    }
  },
  
  mounted() {
    // Check authentication status from localStorage
    this.isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
  },
  
  methods: {
    toggleAuth() {
      this.isAuthenticated = !this.isAuthenticated
      localStorage.setItem('isAuthenticated', this.isAuthenticated.toString())
    }
  },
  
  head() {
    return {
      title: 'Puzzle 2: Routing & Middleware',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Implement Nuxt routing and authentication middleware'
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
.requirements-section,
.hints-section,
.file-structure {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.problem-statement h2,
.demo-section h3,
.requirements-section h3,
.hints-section h3,
.file-structure h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.problem-statement ul,
.hints-section ul {
  color: #5a6c7d;
  line-height: 1.6;
}

.problem-statement code,
.requirement-item code,
.file-structure code {
  background: #f1f3f4;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 0.9rem;
}

.test-links {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  flex-wrap: wrap;
}

.test-link {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: #667eea;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.test-link:hover {
  background: #5a67d8;
  transform: translateY(-1px);
}

.test-link.invalid {
  background: #e53e3e;
}

.auth-demo {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e2e8f0;
}

.auth-demo h4 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.auth-status {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.status-badge {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 500;
  font-size: 0.9rem;
}

.status-badge.authenticated {
  background: #c6f6d5;
  color: #22543d;
}

.status-badge.unauthenticated {
  background: #fed7d7;
  color: #742a2a;
}

.auth-toggle {
  padding: 0.5rem 1rem;
  background: #4299e1;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.auth-toggle:hover {
  background: #3182ce;
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

.file-structure pre {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
  margin: 1rem 0 0 0;
}

.file-structure code {
  background: none;
  padding: 0;
  font-size: 0.9rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .puzzle-container {
    padding: 1rem;
  }
  
  .problem-statement,
  .demo-section,
  .requirements-section,
  .hints-section,
  .file-structure {
    padding: 1.5rem;
  }
  
  .test-links {
    flex-direction: column;
  }
  
  .auth-status {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
