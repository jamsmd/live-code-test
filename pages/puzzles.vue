<template>
  <div class="puzzles-container">
    <div class="header">
      <h1>Frontend Engineering Code Puzzles</h1>
      <p class="subtitle">Test your Vue.js, Nuxt.js, and web fundamentals skills</p>
    </div>

    <div class="puzzle-grid">
      <!-- Puzzle 1: Vue Component Lifecycle & Reactivity -->
      <div class="puzzle-card">
        <div class="puzzle-header">
          <h2>🔄 Puzzle 1: Component Lifecycle & Reactivity</h2>
          <span class="difficulty">Difficulty: Medium</span>
        </div>
        <div class="puzzle-content">
          <p><strong>Challenge:</strong> Fix the broken counter component and implement proper lifecycle management.</p>
          <div class="requirements">
            <h4>Requirements:</h4>
            <ul>
              <li>Fix the counter that doesn't update properly</li>
              <li>Implement auto-increment every 2 seconds when active</li>
              <li>Add proper cleanup on component destroy</li>
              <li>Show elapsed time since component mount</li>
              <li>Prevent memory leaks</li>
            </ul>
          </div>
          <nuxt-link to="/puzzle1" class="puzzle-btn">Start Puzzle 1</nuxt-link>
        </div>
      </div>

      <!-- Puzzle 2: Nuxt Routing & Middleware -->
      <div class="puzzle-card">
        <div class="puzzle-header">
          <h2>🛣️ Puzzle 2: Routing & Middleware</h2>
          <span class="difficulty">Difficulty: Medium</span>
        </div>
        <div class="puzzle-content">
          <p><strong>Challenge:</strong> Implement dynamic routing with authentication middleware.</p>
          <div class="requirements">
            <h4>Requirements:</h4>
            <ul>
              <li>Create dynamic user profile pages (/user/:id)</li>
              <li>Implement auth middleware that redirects unauthenticated users</li>
              <li>Add route validation for user IDs</li>
              <li>Handle 404 errors gracefully</li>
              <li>Implement breadcrumb navigation</li>
            </ul>
          </div>
          <nuxt-link to="/puzzle2" class="puzzle-btn">Start Puzzle 2</nuxt-link>
        </div>
      </div>

      <!-- Puzzle 3: Async Data & Error Handling -->
      <div class="puzzle-card">
        <div class="puzzle-header">
          <h2>📡 Puzzle 3: Async Data & Error Handling</h2>
          <span class="difficulty">Difficulty: Hard</span>
        </div>
        <div class="puzzle-content">
          <p><strong>Challenge:</strong> Build a robust data fetching system with proper error handling.</p>
          <div class="requirements">
            <h4>Requirements:</h4>
            <ul>
              <li>Implement asyncData with loading states</li>
              <li>Add retry mechanism for failed requests</li>
              <li>Handle different error types (network, 404, 500)</li>
              <li>Implement caching strategy</li>
              <li>Add offline detection and handling</li>
            </ul>
          </div>
          <nuxt-link to="/puzzle3" class="puzzle-btn">Start Puzzle 3</nuxt-link>
        </div>
      </div>

      <!-- Puzzle 4: Vuex State Management -->
      <div class="puzzle-card">
        <div class="puzzle-header">
          <h2>🏪 Puzzle 4: State Management</h2>
          <span class="difficulty">Difficulty: Medium</span>
        </div>
        <div class="puzzle-content">
          <p><strong>Challenge:</strong> Fix the broken shopping cart with proper Vuex patterns.</p>
          <div class="requirements">
            <h4>Requirements:</h4>
            <ul>
              <li>Fix cart state mutations that aren't working</li>
              <li>Implement proper getters for computed values</li>
              <li>Add async actions for cart operations</li>
              <li>Handle cart persistence in localStorage</li>
              <li>Implement optimistic updates</li>
            </ul>
          </div>
          <nuxt-link to="/puzzle4" class="puzzle-btn">Start Puzzle 4</nuxt-link>
        </div>
      </div>

      <!-- Puzzle 5: CSS & Responsive Design -->
      <div class="puzzle-card">
        <div class="puzzle-header">
          <h2>🎨 Puzzle 5: CSS & Responsive Design</h2>
          <span class="difficulty">Difficulty: Medium</span>
        </div>
        <div class="puzzle-content">
          <p><strong>Challenge:</strong> Create a responsive layout that works across all devices.</p>
          <div class="requirements">
            <h4>Requirements:</h4>
            <ul>
              <li>Fix broken CSS Grid layout</li>
              <li>Implement proper responsive breakpoints</li>
              <li>Add smooth animations and transitions</li>
              <li>Ensure accessibility (focus states, contrast)</li>
              <li>Optimize for performance (CSS critical path)</li>
            </ul>
          </div>
          <nuxt-link to="/puzzle5" class="puzzle-btn">Start Puzzle 5</nuxt-link>
        </div>
      </div>

      <!-- Puzzle 6: Web Fundamentals & Performance -->
      <div class="puzzle-card">
        <div class="puzzle-header">
          <h2>⚡ Puzzle 6: Performance & Web Fundamentals</h2>
          <span class="difficulty">Difficulty: Hard</span>
        </div>
        <div class="puzzle-content">
          <p><strong>Challenge:</strong> Optimize a slow-performing application.</p>
          <div class="requirements">
            <h4>Requirements:</h4>
            <ul>
              <li>Fix memory leaks and performance bottlenecks</li>
              <li>Implement lazy loading for images and components</li>
              <li>Add proper SEO meta tags and structured data</li>
              <li>Implement service worker for offline functionality</li>
              <li>Optimize bundle size and loading performance</li>
            </ul>
          </div>
          <nuxt-link to="/puzzle6" class="puzzle-btn">Start Puzzle 6</nuxt-link>
        </div>
      </div>
    </div>

    <div class="instructions">
      <h3>📋 Instructions</h3>
      <div class="instruction-content">
        <p>Each puzzle is designed to test different aspects of frontend development:</p>
        <ul>
          <li><strong>Time Limit:</strong> Each puzzle should take 30-45 minutes</li>
          <li><strong>Resources:</strong> You can use documentation and search engines</li>
          <li><strong>Goal:</strong> Fix the broken code and implement the required features</li>
          <li><strong>Evaluation:</strong> Focus on code quality, best practices, and problem-solving approach</li>
        </ul>
        <p><strong>Tips:</strong> Read the requirements carefully, test your solutions, and don't forget about edge cases!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PuzzlesPage',
  head() {
    return {
      title: 'Code Puzzles - Frontend Engineering Test',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Frontend engineering code puzzles testing Vue.js, Nuxt.js, and web fundamentals skills'
        }
      ]
    }
  }
}
</script>

<style scoped>
.puzzles-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

.header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.2rem;
  color: #7f8c8d;
  margin: 0;
}

.puzzle-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.puzzle-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.puzzle-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.puzzle-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.puzzle-header h2 {
  margin: 0;
  font-size: 1.3rem;
}

.difficulty {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.puzzle-content {
  padding: 2rem;
}

.puzzle-content p {
  color: #34495e;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.requirements {
  margin-bottom: 2rem;
}

.requirements h4 {
  color: #2c3e50;
  margin-bottom: 0.8rem;
  font-size: 1rem;
}

.requirements ul {
  margin: 0;
  padding-left: 1.5rem;
}

.requirements li {
  color: #5a6c7d;
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.puzzle-btn {
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  padding: 0.8rem 2rem;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(102, 126, 234, 0.3);
}

.puzzle-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
}

.instructions {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 2rem;
  border-left: 4px solid #667eea;
}

.instructions h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.instruction-content p {
  color: #5a6c7d;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.instruction-content ul {
  margin-bottom: 1rem;
}

.instruction-content li {
  color: #5a6c7d;
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .puzzles-container {
    padding: 1rem;
  }
  
  .header h1 {
    font-size: 2rem;
  }
  
  .puzzle-grid {
    grid-template-columns: 1fr;
  }
  
  .puzzle-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .puzzle-content {
    padding: 1.5rem;
  }
}
</style>

