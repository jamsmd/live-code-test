<template>
  <div class="puzzle-container">
    <div class="puzzle-header">
      <h1>⚡ Puzzle 6: Performance & Web Fundamentals</h1>
      <div class="breadcrumb">
        <nuxt-link to="/puzzles">← Back to Puzzles</nuxt-link>
      </div>
    </div>

    <div class="puzzle-content">
      <div class="problem-statement">
        <h2>🎯 The Problem</h2>
        <p>Optimize a slow-performing application with multiple performance issues:</p>
        <ul>
          <li>Fix memory leaks and performance bottlenecks</li>
          <li>Implement lazy loading for images and components</li>
          <li>Add proper SEO meta tags and structured data</li>
          <li>Implement service worker for offline functionality</li>
          <li>Optimize bundle size and loading performance</li>
        </ul>
      </div>

      <div class="demo-section">
        <h3>🔧 Slow Performance Demo</h3>
        <p>Open DevTools Performance tab and observe the issues:</p>
        <div class="component-wrapper">
          <SlowPerformanceDemo />
        </div>
      </div>

      <div class="performance-issues">
        <h3>🐌 Performance Issues to Fix</h3>
        <div class="issue-grid">
          <div class="issue-card memory-leak">
            <h5>🧠 Memory Leaks</h5>
            <ul>
              <li>Uncleaned event listeners</li>
              <li>Uncleared intervals/timeouts</li>
              <li>Circular references</li>
              <li>Large object retention</li>
            </ul>
          </div>
          
          <div class="issue-card bundle-size">
            <h5>📦 Bundle Size</h5>
            <ul>
              <li>Unused dependencies</li>
              <li>No code splitting</li>
              <li>Large images/assets</li>
              <li>Duplicate code</li>
            </ul>
          </div>
          
          <div class="issue-card rendering">
            <h5>🎨 Rendering Issues</h5>
            <ul>
              <li>Layout thrashing</li>
              <li>Unnecessary re-renders</li>
              <li>Heavy DOM manipulations</li>
              <li>Missing virtualization</li>
            </ul>
          </div>
          
          <div class="issue-card network">
            <h5>🌐 Network Problems</h5>
            <ul>
              <li>No resource caching</li>
              <li>Blocking requests</li>
              <li>Large payload sizes</li>
              <li>No compression</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="optimization-tasks">
        <h3>🚀 Optimization Tasks</h3>
        <div class="task-list">
          <div class="task-item">
            <h4>1. Memory Management</h4>
            <div class="task-details">
              <p><strong>Issues:</strong> Component has memory leaks from uncleared timers and event listeners</p>
              <p><strong>Fix:</strong> Add proper cleanup in beforeDestroy/unmounted hooks</p>
              <div class="code-example">
                <pre><code>// Bad
mounted() {
  setInterval(() => { /* ... */ }, 1000)
  window.addEventListener('resize', this.handleResize)
}

// Good
mounted() {
  this.timer = setInterval(() => { /* ... */ }, 1000)
  window.addEventListener('resize', this.handleResize)
},
beforeDestroy() {
  clearInterval(this.timer)
  window.removeEventListener('resize', this.handleResize)
}</code></pre>
              </div>
            </div>
          </div>
          
          <div class="task-item">
            <h4>2. Lazy Loading</h4>
            <div class="task-details">
              <p><strong>Issues:</strong> All images and components load immediately</p>
              <p><strong>Fix:</strong> Implement intersection observer for images and dynamic imports for components</p>
              <div class="code-example">
                <pre><code>// Lazy load images
&lt;img v-lazy="image.src" :alt="image.alt"&gt;

// Lazy load components
const LazyComponent = () =&gt; import('./HeavyComponent.vue')</code></pre>
              </div>
            </div>
          </div>
          
          <div class="task-item">
            <h4>3. SEO & Meta Tags</h4>
            <div class="task-details">
              <p><strong>Issues:</strong> Missing meta tags, structured data, and social media tags</p>
              <p><strong>Fix:</strong> Add comprehensive meta tags and JSON-LD structured data</p>
              <div class="code-example">
                <pre><code>head() {
  return {
    title: 'Product Name | Site Name',
    meta: [
      { hid: 'description', name: 'description', content: '...' },
      { property: 'og:title', content: '...' },
      { property: 'og:image', content: '...' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ],
    script: [
      {
        type: 'application/ld+json',
        json: { /* structured data */ }
      }
    ]
  }
}</code></pre>
              </div>
            </div>
          </div>
          
          <div class="task-item">
            <h4>4. Service Worker</h4>
            <div class="task-details">
              <p><strong>Issues:</strong> No offline support or caching strategy</p>
              <p><strong>Fix:</strong> Implement service worker with cache-first strategy</p>
              <div class="code-example">
                <pre><code>// In service worker
self.addEventListener('fetch', event =&gt; {
  if (event.request.destination === 'image') {
    event.respondWith(cacheFirst(event.request))
  }
})</code></pre>
              </div>
            </div>
          </div>
          
          <div class="task-item">
            <h4>5. Bundle Optimization</h4>
            <div class="task-details">
              <p><strong>Issues:</strong> Large bundle size, no tree shaking, unused dependencies</p>
              <p><strong>Fix:</strong> Configure webpack/Nuxt for optimal bundling</p>
              <div class="code-example">
                <pre><code>// nuxt.config.js
export default {
  build: {
    analyze: true,
    extractCSS: true,
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  }
}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="performance-metrics">
        <h3>📊 Performance Metrics to Improve</h3>
        <div class="metrics-grid">
          <div class="metric-card">
            <h5>🚀 First Contentful Paint (FCP)</h5>
            <div class="metric-values">
              <span class="current bad">Current: 3.2s</span>
              <span class="target good">Target: &lt; 1.8s</span>
            </div>
          </div>
          
          <div class="metric-card">
            <h5>📱 Largest Contentful Paint (LCP)</h5>
            <div class="metric-values">
              <span class="current bad">Current: 4.8s</span>
              <span class="target good">Target: &lt; 2.5s</span>
            </div>
          </div>
          
          <div class="metric-card">
            <h5>⚡ First Input Delay (FID)</h5>
            <div class="metric-values">
              <span class="current bad">Current: 180ms</span>
              <span class="target good">Target: &lt; 100ms</span>
            </div>
          </div>
          
          <div class="metric-card">
            <h5>🎯 Cumulative Layout Shift (CLS)</h5>
            <div class="metric-values">
              <span class="current bad">Current: 0.25</span>
              <span class="target good">Target: &lt; 0.1</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hints-section">
        <h3>💡 Hints</h3>
        <details>
          <summary>Click to reveal hints</summary>
          <ul>
            <li>Use Chrome DevTools Performance tab to identify bottlenecks</li>
            <li>Implement <code>v-once</code> for static content</li>
            <li>Use <code>Object.freeze()</code> for immutable data</li>
            <li>Consider using Web Workers for heavy computations</li>
            <li>Implement virtual scrolling for large lists</li>
            <li>Use <code>requestAnimationFrame</code> for smooth animations</li>
            <li>Optimize images with modern formats (WebP, AVIF)</li>
            <li>Use <code>loading="lazy"</code> for native image lazy loading</li>
            <li>Implement proper error boundaries</li>
            <li>Use <code>will-change</code> property carefully</li>
          </ul>
        </details>
      </div>

      <div class="testing-tools">
        <h3>🔧 Testing Tools</h3>
        <div class="tool-list">
          <div class="tool-item">
            <h5>Lighthouse</h5>
            <p>Run audit to check performance, accessibility, SEO, and best practices</p>
          </div>
          <div class="tool-item">
            <h5>Chrome DevTools</h5>
            <p>Use Performance tab to profile runtime performance and memory usage</p>
          </div>
          <div class="tool-item">
            <h5>WebPageTest</h5>
            <p>Test loading performance from different locations and devices</p>
          </div>
          <div class="tool-item">
            <h5>Bundle Analyzer</h5>
            <p>Analyze bundle size and identify optimization opportunities</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Puzzle6Page',
  head() {
    return {
      title: 'Puzzle 6: Performance & Web Fundamentals',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Optimize web performance, implement lazy loading, and add offline support'
        }
      ]
    }
  }
}
</script>

<style scoped>
.puzzle-container {
  max-width: 1200px;
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
.performance-issues,
.optimization-tasks,
.performance-metrics,
.hints-section,
.testing-tools {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.problem-statement h2,
.demo-section h3,
.performance-issues h3,
.optimization-tasks h3,
.performance-metrics h3,
.hints-section h3,
.testing-tools h3 {
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

.issue-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.issue-card {
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid;
}

.issue-card.memory-leak {
  background: #fff5f5;
  border-left-color: #e53e3e;
}

.issue-card.bundle-size {
  background: #fffbeb;
  border-left-color: #f59e0b;
}

.issue-card.rendering {
  background: #f0f9ff;
  border-left-color: #3b82f6;
}

.issue-card.network {
  background: #f0fdf4;
  border-left-color: #10b981;
}

.issue-card h5 {
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.issue-card ul {
  margin: 0;
  padding-left: 1.5rem;
}

.issue-card li {
  color: #5a6c7d;
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.task-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.task-item {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
}

.task-item h4 {
  background: #667eea;
  color: white;
  padding: 1rem;
  margin: 0;
  font-size: 1.1rem;
}

.task-details {
  padding: 1.5rem;
}

.task-details p {
  color: #5a6c7d;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.task-details strong {
  color: #2d3748;
}

.code-example {
  background: #f7fafc;
  border-radius: 6px;
  overflow: hidden;
  margin-top: 1rem;
}

.code-example pre {
  margin: 0;
  padding: 1rem;
  overflow-x: auto;
}

.code-example code {
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 0.85rem;
  line-height: 1.5;
  color: #2d3748;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.metric-card {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.metric-card h5 {
  color: #2d3748;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.metric-values {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.metric-values span {
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 600;
}

.current.bad {
  background: #fed7d7;
  color: #742a2a;
}

.target.good {
  background: #c6f6d5;
  color: #22543d;
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

.hints-section ul {
  color: #5a6c7d;
  line-height: 1.6;
}

.hints-section code {
  background: #f1f3f4;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 0.85rem;
}

.tool-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.tool-item {
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #10b981;
}

.tool-item h5 {
  color: #2d3748;
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
}

.tool-item p {
  color: #5a6c7d;
  margin: 0;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .puzzle-container {
    padding: 1rem;
  }
  
  .problem-statement,
  .demo-section,
  .performance-issues,
  .optimization-tasks,
  .performance-metrics,
  .hints-section,
  .testing-tools {
    padding: 1.5rem;
  }
  
  .issue-grid,
  .metrics-grid,
  .tool-list {
    grid-template-columns: 1fr;
  }
}
</style>
