import { mount, shallowMount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'

describe('Logo.vue', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(Logo)
    expect(wrapper.vm).toBeTruthy()
  })
  it('have right size', () => {
    const wrapper = shallowMount(Logo)
    const width = wrapper.vm.$refs.logo.getAttribute('width')
    const height = wrapper.vm.$refs.logo.getAttribute('height')
    expect(width).toBe('70')
    expect(height).toBe('70')
  })
})
