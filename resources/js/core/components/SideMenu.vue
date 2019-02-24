<template>
    <div class="side-menu">
        <div :class="[getNestClass(), main()]" v-for="item in myItems">
            <component :is="item.link && {template:item.link}" class="flex flex-row items-start flex-wrap w-full"/>
            <div class="break"></div>
            <div class="submenu" v-if="item.children.length > 0">
                <side-menu :subitems="item.children" :nest="nest + 1" ></side-menu>
            </div>
        </div>
    </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: "side-menu",
    props: {
      'subitems': null,
      'nest': {
        type: Number,
        default: 0
      },
      'load': null,
    },
    data() {
      return {
        stringA: '<i class="material-icons">dashboard</i>',
        stringB: `<router-link to='/entity/prostie'>Prostie</router-link>`
      }
    },
    methods: {
      ...mapActions([
        'menu/getMenuItems'
      ]),
      getNestClass() {
        if(this.nest > 0) {
          return `nested nested-${this.nest}`
        }
        return null;
      },
      main() {
        if(this.nest == 0) {
          return `root-side-menu mt-2`
        }
        return null;
      }
    },
    computed: {
      ...mapGetters({
        items: 'menu/items'
      }),
      myItems() {
        if(this.load)
          return this.items;

        return this.subitems;
      }
    },
    async mounted() {
      if(this.load) {
        let items = this['menu/getMenuItems']()
      }
    }
  }
</script>

<style scoped>

</style>