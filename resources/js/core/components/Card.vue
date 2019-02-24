<template>
    <div class="w-full bg-white rounded relative">
        <div v-if="$slots.header" class="bg-grey-lightest rounded-t pl-8">
            <slot name="header"></slot>
        </div>
        <div :class="{'p-8': !noPadding}"><slot /></div>
    </div>
</template>

<script>
  export default {
    name: "Card",
    props: {
      noPadding: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>

</style>