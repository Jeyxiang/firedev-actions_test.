import { shallowMount } from "@vue/test-utils";
import RandomNumber from "@/components/RandomNumber.vue";

describe("RandomNumber.vue", () => {
  it("default value should be zero", () => {
    const wrapper = shallowMount(RandomNumber)
    expect(wrapper.html()).toContain("0");
  })

  //async await enable test for asynchronous operations
  test('iF Button clicked the random number should be 1-10',async () => {
    const wrapper = shallowMount(RandomNumber)
    await wrapper.find('button').trigger('click')
    const random_number = parseInt(wrapper.find('h2').text())
    expect(random_number).toBeGreaterThanOrEqual(1)
    expect(random_number).toBeLessThanOrEqual(10)
  })

  //Testing the props
  test('iF Button clicked the random number should be 50-100',async () => {
    const wrapper = shallowMount(RandomNumber, {
      props: {
        min:50, max:100
      }
    })
    await wrapper.find('button').trigger('click')
    const random_number = parseInt(wrapper.find('h2').text())
    expect(random_number).toBeGreaterThanOrEqual(50)
    expect(random_number).toBeLessThanOrEqual(100)
  })

  
});
