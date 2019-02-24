<template>
    <Card>
        <h2 slot="header" class="text-arsenic">My profile</h2>
        <loading :active.sync="$root.isLoading"
                 :is-full-page="false"></loading>
        <Form :form-fields="fields" :form-tabs="tabs" mutation-name="updateProfile" @after="refreshUser">
            <template #button="{ canSubmit }">
                <input type="submit" :disabled="!canSubmit"
                       class="bg-blue hover:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded"
                       value="Save profile" :canSubmit="canSubmit">
            </template>
        </Form>
    </Card>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    name: "MyAccount",
    data() {
      return {
        user: {},
      }
    },
    computed: {
      // ...mapState({
      //   user: state => state.auth.user,
      // })
    },
    parseForms: true,
    methods: {
      ...mapActions([
        'myProfile/getEditFields',
        'auth/getCurrentUser',
      ]),
      refreshUser() {
        this['auth/getCurrentUser']()
      },
    },
    async mounted() {
      this.fields = [];
      this.user = {};
      global.app.bus.$emit('showLoading')
      let fieldsApi = await this['myProfile/getEditFields']()
      let fields = [...fieldsApi]
      let user = await this['auth/getCurrentUser']()
      this.$nextTick(() => {
        this.parseFields(fields, user)
        global.app.bus.$emit('hideLoading')
      })
    }
  }
</script>

<style scoped>

</style>