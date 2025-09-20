<template>
  <div class="puzzle-container">
    <div class="puzzle-header">
      <h1>🎨 Puzzle 5: CSS & Responsive Design</h1>
      <div class="breadcrumb">
        <nuxt-link to="/puzzles">← Back to Puzzles</nuxt-link>
      </div>
    </div>

    <div class="puzzle-content">
      <div class="problem-statement">
        <h2>🎯 The Problem</h2>
        <p>Fix the broken responsive layout and CSS issues in the component below:</p>
        <ul>
          <li>Fix the broken CSS Grid layout that doesn't work on mobile</li>
          <li>Implement proper responsive breakpoints</li>
          <li>Add smooth animations and transitions</li>
          <li>Ensure accessibility (focus states, contrast ratios)</li>
          <li>Optimize for performance (CSS critical path)</li>
        </ul>
      </div>

      <div class="demo-section">
        <h3>🔧 Broken Layout (Fix This!)</h3>
        <p>Resize your browser window and observe the layout issues:</p>
        <div class="component-wrapper">
          <BrokenLayout />
        </div>
      </div>

      <div class="requirements-section">
        <h3>📋 Requirements</h3>
        <div class="requirement-list">
          <div class="requirement-item">
            <h4>1. Responsive Grid</h4>
            <p>Fix the CSS Grid to work properly on all screen sizes</p>
          </div>
          
          <div class="requirement-item">
            <h4>2. Mobile-First Design</h4>
            <p>Implement mobile-first responsive breakpoints</p>
          </div>
          
          <div class="requirement-item">
            <h4>3. Smooth Animations</h4>
            <p>Add hover effects, transitions, and loading animations</p>
          </div>
          
          <div class="requirement-item">
            <h4>4. Accessibility</h4>
            <p>Ensure proper focus states, ARIA labels, and contrast ratios</p>
          </div>
          
          <div class="requirement-item">
            <h4>5. Performance</h4>
            <p>Optimize CSS for critical path and avoid layout thrashing</p>
          </div>
        </div>
      </div>

      <div class="breakpoints-section">
        <h3>📱 Target Breakpoints</h3>
        <div class="breakpoint-list">
          <div class="breakpoint-item">
            <strong>Mobile:</strong> 320px - 767px
            <span class="description">Single column, stacked layout</span>
          </div>
          <div class="breakpoint-item">
            <strong>Tablet:</strong> 768px - 1023px
            <span class="description">2-column grid, adjusted spacing</span>
          </div>
          <div class="breakpoint-item">
            <strong>Desktop:</strong> 1024px - 1199px
            <span class="description">3-column grid, full features</span>
          </div>
          <div class="breakpoint-item">
            <strong>Large:</strong> 1200px+
            <span class="description">4-column grid, maximum width</span>
          </div>
        </div>
      </div>

      <div class="css-issues">
        <h3>🐛 CSS Issues to Fix</h3>
        <div class="issue-list">
          <div class="issue-item">
            <h5>❌ Grid Layout</h5>
            <p>Grid doesn't collapse properly on mobile devices</p>
          </div>
          
          <div class="issue-item">
            <h5>❌ Image Sizing</h5>
            <p>Images overflow containers and aren't responsive</p>
          </div>
          
          <div class="issue-item">
            <h5>❌ Typography</h5>
            <p>Text doesn't scale properly, poor line heights</p>
          </div>
          
          <div class="issue-item">
            <h5>❌ Animations</h5>
            <p>Missing hover states and smooth transitions</p>
          </div>
          
          <div class="issue-item">
            <h5>❌ Accessibility</h5>
            <p>No focus indicators, poor color contrast</p>
          </div>
        </div>
      </div>

      <div class="accessibility-checklist">
        <h3>♿ Accessibility Checklist</h3>
        <div class="checklist">
          <div class="checklist-item">
            <span class="checkbox">☐</span>
            <span>Minimum 4.5:1 contrast ratio for normal text</span>
          </div>
          <div class="checklist-item">
            <span class="checkbox">☐</span>
            <span>Visible focus indicators on all interactive elements</span>
          </div>
          <div class="checklist-item">
            <span class="checkbox">☐</span>
            <span>Touch targets at least 44px × 44px</span>
          </div>
          <div class="checklist-item">
            <span class="checkbox">☐</span>
            <span>Proper heading hierarchy (h1, h2, h3, etc.)</span>
          </div>
          <div class="checklist-item">
            <span class="checkbox">☐</span>
            <span>Alt text for all images</span>
          </div>
          <div class="checklist-item">
            <span class="checkbox">☐</span>
            <span>Keyboard navigation support</span>
          </div>
        </div>
      </div>

      <div class="performance-tips">
        <h3>⚡ Performance Tips</h3>
        <div class="tip-list">
          <div class="tip-item">
            <h5>🎯 Critical CSS</h5>
            <p>Inline critical CSS and defer non-critical styles</p>
          </div>
          
          <div class="tip-item">
            <h5>🔄 Layout Thrashing</h5>
            <p>Avoid properties that trigger layout recalculation</p>
          </div>
          
          <div class="tip-item">
            <h5>🖼️ Image Optimization</h5>
            <p>Use appropriate formats (WebP, AVIF) and lazy loading</p>
          </div>
          
          <div class="tip-item">
            <h5>🎨 CSS Containment</h5>
            <p>Use <code>contain</code> property to isolate layout changes</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Puzzle5Page',
  head() {
    return {
      title: 'Puzzle 5: CSS & Responsive Design',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Fix responsive design and CSS performance issues'
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
.breakpoints-section,
.css-issues,
.hints-section,
.accessibility-checklist,
.performance-tips {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.problem-statement h2,
.demo-section h3,
.requirements-section h3,
.breakpoints-section h3,
.css-issues h3,
.hints-section h3,
.accessibility-checklist h3,
.performance-tips h3 {
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

.breakpoint-list {
  display: grid;
  gap: 1rem;
}

.breakpoint-item {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 6px;
  border-left: 4px solid #3498db;
}

.breakpoint-item strong {
  color: #2c3e50;
  font-size: 1.1rem;
}

.breakpoint-item .description {
  color: #6c757d;
  font-size: 0.9rem;
}

.issue-list {
  display: grid;
  gap: 1rem;
}

.issue-item {
  padding: 1rem;
  background: #fef5f5;
  border-radius: 6px;
  border-left: 4px solid #e53e3e;
}

.issue-item h5 {
  color: #e53e3e;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.issue-item p {
  color: #5a6c7d;
  margin: 0;
  line-height: 1.5;
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

.checklist {
  display: grid;
  gap: 0.8rem;
}

.checklist-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem;
  background: #f8f9fa;
  border-radius: 6px;
}

.checkbox {
  font-size: 1.2rem;
  color: #6c757d;
  min-width: 20px;
}

.checklist-item span:last-child {
  color: #5a6c7d;
  line-height: 1.5;
}

.tip-list {
  display: grid;
  gap: 1.5rem;
}

.tip-item {
  padding: 1.5rem;
  background: #f0fff4;
  border-radius: 6px;
  border-left: 4px solid #38a169;
}

.tip-item h5 {
  color: #38a169;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.tip-item p {
  color: #5a6c7d;
  margin: 0;
  line-height: 1.5;
}

.tip-item code {
  background: rgba(56, 161, 105, 0.1);
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 0.85rem;
}

@media (max-width: 768px) {
  .puzzle-container {
    padding: 1rem;
  }
  
  .problem-statement,
  .demo-section,
  .requirements-section,
  .breakpoints-section,
  .css-issues,
  .hints-section,
  .accessibility-checklist,
  .performance-tips {
    padding: 1.5rem;
  }
}
</style>
