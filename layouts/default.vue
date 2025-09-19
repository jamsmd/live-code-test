<template>
  <div>
    <nav class="navbar">
      <div class="nav-container">
        <NuxtLink to="/" class="nav-logo">
          Nuxt 2 App
        </NuxtLink>
        <div class="nav-menu">
          <NuxtLink to="/" class="nav-link">
            Home
          </NuxtLink>
          <NuxtLink to="/about" class="nav-link">
            About
          </NuxtLink>
        </div>
      </div>
    </nav>
    <main class="main-content">
      <Nuxt />
    </main>
    <footer class="footer">
      <p>&copy; 2025 Nuxt 2 Project</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style scoped>
.navbar {
  background-color: #2d3748;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}

.nav-logo {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

.nav-menu {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: #cbd5e0;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: white;
}

.main-content {
  min-height: calc(100vh - 140px);
  padding: 2rem 0;
}

.footer {
  background-color: #1a202c;
  color: white;
  text-align: center;
  padding: 1rem 0;
}

.footer p {
  margin: 0;
}
</style>
