<template>
    <form @submit.prevent="gql" novalidate>
        <Errors :errors="showErrors" :api-errors="serverErrors"></Errors>
        <Fields :fields="formFields" :tabs="formTabs"></Fields>
        <slot name="button" :canSubmit="canSubmit">
            <input type="submit" :disabled="!canSubmit"
                   class="bg-blue hover:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded"
                   value="Save" slot="button" :canSubmit="canSubmit">
        </slot>
    </form>
</template>

<script>
  import gqltag from 'graphql-tag'
  import {apiClient} from "../../../api";

  export default {
    name: "Form",
    $_veeValidate: {
      validator: 'new'
    },
    parseForms: true,
    data() {
      return {
        showErrors: [],
      }
    },
    props: {
      mutationName: {
        type: String,
        required: true
      },
      formFields: {
        type: Array,
        default: function () {
          return [];
        },
      },
      formTabs: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    methods: {
      async gql() {
        let isValid = await this.$validator.validateAll()
        this.showErrors = this.$validator.errors.all();
        this.resetGqlErrors()
        if (!isValid) {
          return false;
        }
        let variables = '';
        let props = '';
        let vars = {};
        let fromFields = (arr => {
          arr.forEach(field => {
            if (!field.readonly) {
              let attr = field.gql.attribute.replace(/\./g,'_')
              variables += `$${attr}: ${field.gql.type},`
              props += `${attr}: $${attr},`
              vars[attr] = this.serializeForApi(field);
            }
          })
        })
        fromFields(this.formFields);
        Object.values(this.formTabs).forEach(item => {
          fromFields(item.fields);
        })
        variables = variables.replace(/(^,)|(,$)/g, "")
        props = props.replace(/(^,)|(,$)/g, "")
        let final = gqltag`mutation update(${variables}) {
            ${this.mutationName}(${props}) {
                id
            }
        }`
        let save = async () => {
          global.app.bus.$emit('showLoading')
          let res;
          try {
            res = await apiClient.mutate({
              mutation: final,
              variables: vars
            })
            global.app.bus.$emit('showToast', 'Your profile has been saved');
          } catch (e) {
            console.log(e)
            this.parseGqlErrors(e)
            global.app.bus.$emit('showToast', 'Error while saving the profile', {type: 'error'});
          }
          this.$emit('after', res)
          global.app.bus.$emit('hideLoading')
        }
        return save()
      },
    }
  }
</script>

<style scoped>

</style>