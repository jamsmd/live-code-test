<template>
  <div class="container">
    <div class="hero">
      <h1 class="title">
        Welcome to Nuxt 2!
      </h1>
      <h2 class="subtitle">
        Your Vue.js application is ready to gooo
      </h2>
      <div class="links">
        <nuxt-link
          to="/puzzles"
          class="button--green"
        >
          Start Code Puzzles
        </nuxt-link>
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          Documentation
        </a>
      </div>
    </div>
    
    <div class="features">
      <h3>Features</h3>
      <div class="feature-grid">
        <div class="feature-card">
          <h4>🚀 Fast Development</h4>
          <p>Hot module replacement and fast refresh for rapid development</p>
        </div>
        <div class="feature-card">
          <h4>📱 Universal</h4>
          <p>Server-side rendering and static site generation out of the box</p>
        </div>
        <div class="feature-card">
          <h4>🔧 Modular</h4>
          <p>Extensive module ecosystem to extend functionality</p>
        </div>
        <div class="feature-card">
          <h4>⚡ Performance</h4>
          <p>Automatic code splitting and optimization</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      title: 'Home - Nuxt 2 Project',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Welcome to your new Nuxt 2 application'
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1rem;
}

.hero {
  text-align: center;
  padding: 4rem 0;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 3rem;
  color: #35495e;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

.subtitle {
  font-weight: 300;
  font-size: 1.5rem;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 2rem;
}

.links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.button--green,
.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid;
  text-decoration: none;
  padding: 10px 30px;
  margin: 10px 0;
  transition: all 0.3s ease;
}

.button--green {
  background-color: #3b8070;
  border-color: #3b8070;
  color: #fff;
}

.button--green:hover {
  background-color: #33695c;
  border-color: #33695c;
}

.button--grey {
  background-color: transparent;
  border-color: #35495e;
  color: #35495e;
}

.button--grey:hover {
  background-color: #35495e;
  color: #fff;
}

.features {
  padding: 4rem 0;
}

.features h3 {
  text-align: center;
  font-size: 2rem;
  color: #35495e;
  margin-bottom: 3rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

.feature-card h4 {
  color: #35495e;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.feature-card p {
  color: #526488;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
  
  .links {
    flex-direction: column;
    align-items: center;
  }
}
</style>
