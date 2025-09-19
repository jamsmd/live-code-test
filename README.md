# Frontend Engineering Code Puzzles

A comprehensive test suite designed to evaluate frontend engineering skills in Vue.js, Nuxt.js, and web fundamentals.

## 🎯 Overview

This project contains 6 challenging code puzzles that test different aspects of frontend development:

1. **🔄 Component Lifecycle & Reactivity** - Fix Vue component issues and memory leaks
2. **🛣️ Routing & Middleware** - Implement dynamic routing with authentication
3. **📡 Async Data & Error Handling** - Build robust data fetching with retry logic
4. **🏪 State Management** - Fix broken Vuex patterns in a shopping cart
5. **🎨 CSS & Responsive Design** - Create responsive layouts with accessibility
6. **⚡ Performance & Web Fundamentals** - Optimize performance and add offline support

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Visit the puzzles
open http://localhost:3000/puzzles
```

## 📋 Instructions for Candidates

### Time Allocation
- **Total Time**: 3-4 hours
- **Per Puzzle**: 30-45 minutes
- **Difficulty**: Progressive (Easy → Hard)

### What You Can Use
- ✅ Vue.js and Nuxt.js documentation
- ✅ MDN Web Docs and web standards
- ✅ Search engines and Stack Overflow
- ✅ Browser DevTools
- ❌ AI assistants or code generators

### Evaluation Criteria
1. **Problem Solving** - Can you identify and fix the issues?
2. **Code Quality** - Clean, readable, and maintainable code
3. **Best Practices** - Following Vue/Nuxt conventions
4. **Performance** - Understanding of optimization techniques
5. **Accessibility** - Awareness of web accessibility standards
6. **Testing Approach** - How you verify your solutions work

## 🧩 Puzzle Details

### Puzzle 1: Component Lifecycle & Reactivity
**Focus**: Vue.js fundamentals, component lifecycle, memory management

**Issues to Fix**:
- Broken counter component with reactivity issues
- Memory leaks from uncleaned intervals
- Incorrect lifecycle hook usage
- Missing cleanup on component destruction

**Skills Tested**: `mounted()`, `beforeDestroy()`, reactive data, event handling

---

### Puzzle 2: Routing & Middleware
**Focus**: Nuxt.js routing, middleware, authentication

**Requirements**:
- Create dynamic user profile pages (`/user/:id`)
- Implement authentication middleware
- Add route validation and error handling
- Build breadcrumb navigation

**Skills Tested**: Dynamic routes, middleware, `asyncData()`, error handling

---

### Puzzle 3: Async Data & Error Handling
**Focus**: API integration, error handling, offline support

**Challenges**:
- Fix broken data fetching with loading states
- Implement retry mechanism with exponential backoff
- Handle different error types (network, HTTP, timeout)
- Add caching and offline detection

**Skills Tested**: `fetch()`, error boundaries, caching strategies, UX patterns

---

### Puzzle 4: State Management
**Focus**: Vuex patterns, state architecture

**Problems**:
- Broken shopping cart with direct state mutations
- Missing getters and improper actions
- No persistence or optimistic updates
- Poor error handling in async operations

**Skills Tested**: Vuex mutations, actions, getters, modules, persistence

---

### Puzzle 5: CSS & Responsive Design
**Focus**: Responsive design, accessibility, CSS performance

**Tasks**:
- Fix broken CSS Grid layout
- Implement mobile-first responsive design
- Add smooth animations and transitions
- Ensure accessibility compliance
- Optimize CSS performance

**Skills Tested**: CSS Grid, media queries, accessibility, performance optimization

---

### Puzzle 6: Performance & Web Fundamentals
**Focus**: Web performance, optimization, modern web standards

**Optimizations**:
- Fix memory leaks and performance bottlenecks
- Implement lazy loading for images and components
- Add SEO meta tags and structured data
- Create service worker for offline functionality
- Optimize bundle size and loading performance

**Skills Tested**: Performance profiling, lazy loading, SEO, service workers, bundling

## 🔧 Development Setup

### Project Structure
```
live-code-test/
├── components/          # Broken components to fix
│   ├── BrokenCounter.vue
│   ├── BrokenDataFetcher.vue
│   ├── BrokenShoppingCart.vue
│   ├── BrokenLayout.vue
│   └── SlowPerformanceDemo.vue
├── pages/              # Puzzle pages and navigation
│   ├── index.vue       # Home page
│   ├── puzzles.vue     # Puzzle overview
│   ├── puzzle1.vue     # Individual puzzle pages
│   └── ...
├── store/              # Vuex store (some modules broken)
│   └── cart.js         # Broken cart store
├── middleware/         # Authentication middleware (to be created)
└── static/            # Static assets
```

### Available Scripts
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run generate   # Generate static site
```

### Browser DevTools
Make sure to use browser developer tools for:
- **Console**: Check for errors and warnings
- **Network**: Monitor API requests and loading times
- **Performance**: Profile runtime performance
- **Lighthouse**: Audit performance, accessibility, and SEO
- **Application**: Inspect localStorage, service workers, etc.

## 📝 Submission Guidelines

### What to Submit
1. **Fixed Code**: All working solutions
2. **Documentation**: Brief explanation of changes made
3. **Testing Notes**: How you verified each solution works
4. **Assumptions**: Any assumptions made during implementation

### Code Quality Standards
- Follow Vue.js and Nuxt.js style guides
- Use meaningful variable and function names
- Add comments for complex logic
- Handle edge cases and errors gracefully
- Ensure responsive design works on all devices
- Test keyboard navigation and screen reader compatibility

## 🎓 Learning Resources

### Vue.js & Nuxt.js
- [Vue.js Guide](https://vuejs.org/guide/)
- [Nuxt.js Documentation](https://nuxtjs.org/docs)
- [Vue.js Style Guide](https://vuejs.org/style-guide/)

### Web Fundamentals
- [MDN Web Docs](https://developer.mozilla.org/)
- [Web.dev](https://web.dev/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### Performance & Optimization
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)

## 🤝 Support

If you encounter any setup issues or have questions about the puzzle requirements, please reach out to the interviewer.

Good luck! 🚀

---

## License

MIT
