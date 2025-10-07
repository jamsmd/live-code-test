<template>
  <div class="puzzle-container">
    <div class="puzzle-header">
      <h1>🔄 Puzzle 1: Component Lifecycle & Reactivity</h1>
      <div class="breadcrumb">
        <nuxt-link to="/puzzles">← Back to Puzzles</nuxt-link>
      </div>
    </div>

    <div class="puzzle-content">
      <div class="problem-statement">
        <h2>🎯 The Problem</h2>
        <p>The counter component below has several issues that need to be fixed. It should:</p>
        <ul>
          <li>Display a counter that can be incremented manually</li>
          <li>Auto-increment every 2 seconds when the "Auto Mode" is active</li>
          <li>Show elapsed time since component was mounted</li>
          <li>Clean up properly when the component is destroyed</li>
          <li>Handle edge cases and prevent memory leaks</li>
        </ul>
      </div>

      <div class="demo-section">
        <h3>🔧 Broken Component (Fix This!)</h3>
        <div class="component-wrapper">
          <BrokenCounter />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Puzzle1Page',
  head() {
    return {
      title: 'Puzzle 1: Component Lifecycle & Reactivity',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Fix Vue component lifecycle and reactivity issues'
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
.hints-section,
.solution-section {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.problem-statement h2,
.demo-section h3,
.hints-section h3,
.solution-section h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.problem-statement ul,
.hints-section ul {
  color: #5a6c7d;
  line-height: 1.6;
}

.component-wrapper {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  border: 2px dashed #dee2e6;
  margin-top: 1rem;
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

@media (max-width: 768px) {
  .puzzle-container {
    padding: 1rem;
  }
  
  .problem-statement,
  .demo-section,
  .hints-section,
  .solution-section {
    padding: 1.5rem;
  }
}
</style>
