export { default as BrokenCounter } from '../../components/BrokenCounter.vue'
export { default as BrokenDataFetcher } from '../../components/BrokenDataFetcher.vue'
export { default as BrokenLayout } from '../../components/BrokenLayout.vue'
export { default as BrokenShoppingCart } from '../../components/BrokenShoppingCart.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as SlowPerformanceDemo } from '../../components/SlowPerformanceDemo.vue'
export { default as WorkingCounter } from '../../components/WorkingCounter.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
