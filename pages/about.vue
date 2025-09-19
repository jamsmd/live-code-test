<template>
  <div class="container">
    <div class="about-hero">
      <h1 class="title">About This Project</h1>
      <p class="subtitle">Learn more about this Nuxt 2 application</p>
    </div>
    
    <div class="content">
      <div class="section">
        <h2>What is Nuxt.js?</h2>
        <p>
          Nuxt.js is a free and open source framework providing all the tools you need to create
          your next Vue.js application with confidence. It makes web development simple and powerful.
        </p>
      </div>
      
      <div class="section">
        <h2>Key Benefits</h2>
        <ul class="benefits-list">
          <li>
            <strong>Zero Configuration:</strong> Automatic code splitting, file-system routing, 
            hot code reloading and universal rendering.
          </li>
          <li>
            <strong>Server-Side Rendered:</strong> Better SEO, faster time-to-content on slow networks.
          </li>
          <li>
            <strong>Static Site Generation:</strong> Pre-render your application and deploy it to any static hosting.
          </li>
          <li>
            <strong>Auto-routing:</strong> Automatic route generation based on Vue files in pages directory.
          </li>
          <li>
            <strong>Data Fetching:</strong> Built-in asyncData and fetch methods for data fetching.
          </li>
        </ul>
      </div>
      
      <div class="section">
        <h2>Project Structure</h2>
        <div class="code-block">
          <pre><code>nuxt2-project/
├── assets/          # Uncompiled assets
├── components/      # Vue.js components
├── layouts/         # Application layouts
├── middleware/      # Custom middleware
├── pages/          # Application views & routes
├── plugins/        # JavaScript plugins
├── static/         # Static files
├── store/          # Vuex store files
├── nuxt.config.js  # Nuxt.js configuration
└── package.json    # Project dependencies</code></pre>
        </div>
      </div>
      
      <div class="cta">
        <NuxtLink to="/" class="button--primary">
          ← Back to Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  head() {
    return {
      title: 'About - Nuxt 2 Project',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Learn more about this Nuxt 2 application and its features'
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 800px;
  padding: 0 1rem;
}

.about-hero {
  text-align: center;
  padding: 3rem 0;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 3rem;
}

.title {
  font-size: 2.5rem;
  color: #35495e;
  margin-bottom: 1rem;
  font-weight: 300;
}

.subtitle {
  font-size: 1.2rem;
  color: #526488;
  margin: 0;
}

.content {
  padding-bottom: 3rem;
}

.section {
  margin-bottom: 3rem;
}

.section h2 {
  color: #35495e;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: 400;
}

.section p {
  color: #4a5568;
  line-height: 1.7;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.benefits-list {
  list-style: none;
  padding: 0;
}

.benefits-list li {
  background: #f7fafc;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  border-left: 4px solid #3b8070;
  color: #4a5568;
  line-height: 1.6;
}

.benefits-list strong {
  color: #35495e;
}

.code-block {
  background: #2d3748;
  border-radius: 8px;
  padding: 1.5rem;
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
  color: #e2e8f0;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}

.code-block code {
  color: #e2e8f0;
}

.cta {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #e2e8f0;
}

.button--primary {
  display: inline-block;
  background-color: #3b8070;
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.button--primary:hover {
  background-color: #33695c;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 128, 112, 0.3);
}

@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }
  
  .code-block {
    font-size: 0.8rem;
  }
  
  .benefits-list li {
    padding: 1rem;
  }
}
</style>
