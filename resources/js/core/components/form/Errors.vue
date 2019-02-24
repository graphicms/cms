<template>
    <div class="bg-orange-lightest border-l-4 border-orange text-orange-dark p-4" role="alert" v-if="errors.length > 0 || apiErrors.length > 0">
        <p class="font-bold">Correct the following errors</p>
        <ul>
            <li v-for="error in errors">{{ error }}</li>
            <li v-for="error in apiErrors">{{ error }}</li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: "Errors",
    props: ['errors', 'apiErrors']
  }
</script>

<style scoped>

</style>