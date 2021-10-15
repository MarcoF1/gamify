<template>
  <button class="Button">
    <slot> {{ msg }} </slot>
  </button>
</template>

<script>
export default {
  props: {
    msg: String,
    onClick: {
      type: Function,
      required: false,
    },
  },
};
</script>
