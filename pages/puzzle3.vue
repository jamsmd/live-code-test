<template>
  <div class="puzzle-container">
    <div class="puzzle-header">
      <h1>📡 Puzzle 3: Async Data & Error Handling</h1>
      <div class="breadcrumb">
        <nuxt-link to="/puzzles">← Back to Puzzles</nuxt-link>
      </div>
    </div>

    <div class="puzzle-content">
      <div class="problem-statement">
        <h2>🎯 The Problem</h2>
        <p>Build a robust data fetching system that handles various scenarios gracefully:</p>
        <ul>
          <li>Build the api endpoints using Nuxt</li>
          <li>Implement <code>fetching</code> with proper loading states</li>
          <li>Add retry mechanism for failed API requests</li>
          <li>Handle different error types (network, 404, 500, timeout)</li>
          <li>Implement intelligent caching strategy</li>
          <li>Add offline detection and graceful degradation</li>
        </ul>
      </div>

      <div class="demo-section">
        <h3>🔧 Broken Implementation</h3>
        <p>The current data fetching has several issues. Fix the component below:</p>
        <div class="component-wrapper">
          <BrokenDataFetcher />
        </div>
      </div>

      <div class="api-endpoints">
        <h3>🌐 Test API Endpoints</h3>
        <div class="endpoint-list">
          <div class="endpoint-item">
            <code>/api/users</code>
            <span class="status success">✅ Working</span>
            <p>Returns list of users (fast response)</p>
          </div>
          
          <div class="endpoint-item">
            <code>/api/users/slow</code>
            <span class="status slow">⏳ Slow</span>
            <p>Returns users after 3 second delay</p>
          </div>
          
          <div class="endpoint-item">
            <code>/api/users/error</code>
            <span class="status error">❌ 500 Error</span>
            <p>Always returns server error</p>
          </div>
          
          <div class="endpoint-item">
            <code>/api/users/notfound</code>
            <span class="status error">🔍 404 Error</span>
            <p>Returns not found error</p>
          </div>
          
          <div class="endpoint-item">
            <code>/api/users/timeout</code>
            <span class="status error">⏱️ Timeout</span>
            <p>Never responds (timeout after 5s)</p>
          </div>
        </div>
      </div>

      <div class="requirements-section">
        <h3>📋 Requirements</h3>
        <div class="requirement-list">
          <div class="requirement-item">
            <h4>1. Loading States</h4>
            <p>Show proper loading indicators during data fetching</p>
          </div>
          
          <div class="requirement-item">
            <h4>2. Error Handling</h4>
            <p>Handle network errors, HTTP errors, and timeouts differently</p>
          </div>
          
          <div class="requirement-item">
            <h4>3. Retry Logic</h4>
            <p>Implement exponential backoff retry for failed requests</p>
          </div>
          
          <div class="requirement-item">
            <h4>4. Caching</h4>
            <p>Cache successful responses and serve stale data when offline</p>
          </div>
          
          <div class="requirement-item">
            <h4>5. Offline Handling</h4>
            <p>Detect offline status and show appropriate messaging</p>
          </div>
        </div>
      </div>

      <div class="solution-section">
        <h3>✅ Expected Behavior</h3>
        <p>When implemented correctly, your component should:</p>
        <ul>
          <li>Show loading spinner during initial fetch</li>
          <li>Display different error messages for different error types</li>
          <li>Allow manual retry with exponential backoff</li>
          <li>Work offline using cached data</li>
          <li>Show offline indicator when network is unavailable</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Puzzle3Page',
  head() {
    return {
      title: 'Puzzle 3: Async Data & Error Handling',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Build robust data fetching with error handling and offline support'
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
.api-endpoints,
.requirements-section,
.hints-section,
.solution-section {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.problem-statement h2,
.demo-section h3,
.api-endpoints h3,
.requirements-section h3,
.hints-section h3,
.solution-section h3 {
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

.endpoint-list {
  display: grid;
  gap: 1rem;
}

.endpoint-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 6px;
  flex-wrap: wrap;
}

.endpoint-item code {
  background: #e9ecef;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 0.9rem;
  min-width: 150px;
}

.status {
  padding: 0.2rem 0.8rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  min-width: 80px;
  text-align: center;
}

.status.success {
  background: #d4edda;
  color: #155724;
}

.status.slow {
  background: #fff3cd;
  color: #856404;
}

.status.error {
  background: #f8d7da;
  color: #721c24;
}

.endpoint-item p {
  color: #6c757d;
  margin: 0;
  font-size: 0.9rem;
  flex: 1;
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

.hints-section ul,
.solution-section ul {
  color: #5a6c7d;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .puzzle-container {
    padding: 1rem;
  }
  
  .problem-statement,
  .demo-section,
  .api-endpoints,
  .requirements-section,
  .hints-section,
  .solution-section {
    padding: 1.5rem;
  }
  
  .endpoint-item {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .endpoint-item code {
    min-width: auto;
  }
}
</style>
