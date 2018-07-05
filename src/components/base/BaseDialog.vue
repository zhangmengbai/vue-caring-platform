<template>
    <div class="dialog-wrap">
      <div class="dialog-cover"  v-if="isShow" @click="closeMyself()"></div>
      <transition name="drop">
        <slot v-if="isShow">empty</slot>
      </transition>
    </div>
</template>

<script>
  export default {
    props: {
      isShow: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
      }
    },
    methods: {
        closeMyself () {
          this.$emit('on-close')
        }
    }
  }
</script>

<style scoped>
  .drop-enter-active {
    transition: all 1s ease;
  }
  .drop-leave-active {
    transition: all 1s ease;
  }
  .drop-enter {
    transform: translateY(-200px);
    opacity: 0;
  }
  .drop-leave-active {
    transform: translateY(-200px);
    opacity: 0;
  }

  .dialog-wrap {
    position: fixed;
    width: 100%;
    height: 100%;
  }
  .dialog-cover {
    background: #000;
    opacity: .3;
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

</style>
