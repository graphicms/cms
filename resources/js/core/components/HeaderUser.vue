<template>
    <div class="header-user">
        <b-dropdown id="ddown1" :text="user.name || ''" right class="m-md-2">
            <b-dropdown-item to="/my-account"><v-icon name="user"/> Profile</b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item @click="logout" class="text-red"><v-icon name="sign-out-alt"/> Logout</b-dropdown-item>
        </b-dropdown>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import 'vue-awesome/icons/sign-out-alt'
  import 'vue-awesome/icons/user'
  export default {
    name: "HeaderUser",
    computed: {
      ...mapGetters({
        // map `this.doneCount` to `this.$store.getters.doneTodosCount`
        user: 'auth/user'
      })
    },
    methods: {
      async logout() {
        let resp = await this.$store.dispatch('auth/logout');
        window.location.reload(true)
      }
    }
  }
</script>

<style lang="scss">
    .header-user {
        .dropdown {
            .dropdown-menu {
                padding: 0;
                transition: all 0.1s;
                overflow: hidden;
                transform-origin: top center;
                transform: scale(1,0);
                display: block;
                .dropdown-divider {
                    margin: .1rem 0;
                }
            }
            &:hover {
                .dropdown-menu {
                    transform: scale(1);
                }
            }
        }
    }
</style>