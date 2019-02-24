<template>
    <Card>
        <h2 slot="header" class="text-arsenic">Entity edit</h2>
        <loading :active.sync="$root.isLoading"
                 :is-full-page="false"></loading>
        <div class="bg-orange-lightest border-l-4 border-orange text-orange-dark p-4" role="alert" v-if="isDeleted">
            <p><span class="font-bold">Warning:</span> This entity is marked as deleted.</p>
        </div>
        <Form :form-fields="fields" :form-tabs="tabs" mutation-name="updateProfile">
            <template #button="{ canSubmit }">
                <input type="submit" :disabled="!canSubmit"
                       class="bg-blue hover:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded"
                       value="Save entity" :canSubmit="canSubmit">
            </template>
        </Form>
    </Card>
</template>

<script>
  import {mapActions} from 'vuex'
  import {apiClient} from "../../../api";
  import g from 'graphql-tag'
  import {DynamicFieldFragment} from "../../fragments/DynamicField";
  import {fieldsFromAll} from "../../../helpers/fieldsFromAll";

  export default {
    name: "Edit",
    parseForms: true,
    data() {
      return {
        typeInfo: {},
        entityFields: [],
        entity: {},
        isDeleted: false,
      }
    },
    methods: {
      ...mapActions([
        'system/getIntrospection'
      ])
    },
    async mounted() {
      global.app.bus.$emit('showLoading')
      let f = await this['system/getIntrospection']();
      let {data: {fields, typeInfo}} = await apiClient.query({
        query: g`
        query {
            fields: getFields(for:"${this.$route.params.entity}") {
                ...DynamicField
            }
            typeInfo(for:"${this.$route.params.entity}") {
                type
            }
        }
        ${DynamicFieldFragment}
        `
      })
      this.typeInfo = typeInfo;
      let fieldsToGet = []
      console.log(f, 'fffff')
      if(f[this.$route.params.entity]) {
        fieldsToGet = fieldsFromAll(f[this.$route.params.entity].fields);
      } else {
        fields.forEach(field => {
          fieldsToGet.push(field.name)
        })
        if(f[this.$route.params.entity]) {
          let def = f[this.$route.params.entity];
          if(def.isSoftDeleted) {
            fieldsToGet.push('_deleted: deleted_at');
          }
        }
        fieldsToGet = fieldsToGet.join('\n');
      }
      // fields.forEach(field => {
      //   fieldsToGet.push(field.name)
      // })

      let {data} = await apiClient.query({
        query: g`
            query getData($id: String!) {
                ${this.$route.params.entity}(whereId: $id, includeDeleted: true) {
                    ...on ${this.typeInfo.type} {
                        ${fieldsToGet}
                    }
                }
            }
        `,
        variables: {
          id: this.$route.params.id
        }
      })
      let prostie = data[this.$route.params.entity]
      if (!prostie) {
        this.$router.push({name: '404'})
        return;
      }
      this.entity = prostie;
      if(this.entity._deleted !== null && parseInt(this.entity._deleted) > 0) {
        this.isDeleted = true;
      }
      this.entityFields = fields;
      console.log(fields, this.entity)
      this.parseFields(fields, this.entity)
      global.app.bus.$emit('hideLoading')
    }
  }
</script>

<style scoped>

</style>