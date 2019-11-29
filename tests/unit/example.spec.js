import { shallowMount } from '@vue/test-utils';
import LightBox from '@/components/LightBox.vue';

describe('LightBox.vue', () => {
  it('renders', () => {
    const items = [
      {
        src: 'https://placekitten.com/600/400',
        w: 600,
        h: 400,
      },
      {
        src: 'https://placekitten.com/1200/900',
        w: 1200,
        h: 900,
      },
    ];

    const wrapper = shallowMount(LightBox, {
      props: {
        items,
      },
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
