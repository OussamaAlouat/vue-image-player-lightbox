<template>
  <div class="pswp ligth" ref="pswp" tabindex="-1" aria-hidden="true">
    <div class="pswp__bg"></div>
    <div class="pswp__scroll-wrap">
      <div class="pswp__container">
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
      </div>
      <div class="pswp__ui pswp__ui--hidden">
          <div class="pswp__top-bar">
              <div class="pswp__counter"></div>
              <button
                class="pswp__button pswp__button--close"
                title="Close (Esc)"
              >
              </button>
              <button
                class="pswp__button pswp__button--share"
                title="Share"
              >
              </button>
              <button
                class="pswp__button pswp__button--fs"
                title="Toggle fullscreen"
              >
              </button>
              <button
                class="pswp__button pswp__button--zoom"
                title="Zoom in/out"
              >
              </button>
              <div class="pswp__preloader">
                  <div class="pswp__preloader__icn">
                    <div class="pswp__preloader__cut">
                      <div class="pswp__preloader__donut"></div>
                    </div>
                  </div>
              </div>
          </div>
          <div
            class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"
          >
            <div class="pswp__share-tooltip"></div>
          </div>

          <button
            class="pswp__button pswp__button--arrow--left"
            title="Previous (arrow left)"
          >
          </button>
          <button
            class="pswp__button pswp__button--arrow--right"
            title="Next (arrow right)"
          >
          </button>
          <div class="pswp__caption">
              <div class="pswp__caption__center"></div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import PhotoSwipe from 'photoswipe';
import PhotoSwipeUIDefault from 'photoswipe/dist/photoswipe-ui-default';

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      options: {
        history: false,
        focus: false,
        showAnimationDuration: 0,
        hideAnimationDuration: 0,
        shareEl: false,
        fullscreenEl: false,
        zoomEl: false,
        loop: false,
      },
    };
  },
  methods: {
    openPhotoSwipe() {
      const pswpElement = this.$refs.pswp;
      const gallery = new PhotoSwipe(
        pswpElement, PhotoSwipeUIDefault, this.items, this.options,
      );
      gallery.listen('close', () => { this.emitClose(); });
      gallery.init();
    },
    emitClose() {
      this.$emit('close');
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.openPhotoSwipe();
    });
  },
};
</script>
<style>
@import '~photoswipe/dist/photoswipe.css';
@import '~photoswipe/dist/default-skin/default-skin.css';
</style>
