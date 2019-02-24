<template>
    <Card no-padding class="bg-grey-lighter">
        <loading :active.sync="$root.isLoading"
                 :is-full-page="false"></loading>
        <b-button v-b-modal.modal1>Launch demo modal</b-button>

        <!-- Modal Component -->
        <b-modal id="modal1" title="BootstrapVue">
            <p class="my-4">Hello from modal!</p>
        </b-modal>
        <vuetable ref="vuetable"
                  :fields="tableFields"
                  :api-mode="false"
                  :css="style.table"
                  :per-page="perPage"
                  :data-manager="dataManager"
                  :load-on-start="false"
                  pagination-path="pagination"
                  @vuetable:pagination-data="onPaginationData"
        >
            <div slot="graphi-actions" slot-scope="props">
                <router-link :to="`/entity/${$route.params.entity}/${getId(props.rowData)}`" title="edit"><i
                        class="material-icons">
                    edit
                </i></router-link>
            </div>
        </vuetable>
        <div class="pagination">
            <vuetable-pagination-info ref="paginationInfo"
            ></vuetable-pagination-info>

            <vuetable-pagination ref="pagination"
                                 :css="style.pagination"
                                 @vuetable-pagination:change-page="onChangePage"
            ></vuetable-pagination>
        </div>
    </Card>
</template>

<script>
  import gql from "graphql-tag";
  import {apiClient} from "../../../api";
  import {DynamicFieldFragment} from "../../fragments/DynamicField";
  import g from 'graphql-tag'
  import {TableBsStyle} from "../../TableBsStyle";
  import VuetableFieldHandle from 'vuetable-2/src/components/VuetableFieldHandle.vue'
  import {DynamicColumnFragment} from "../../fragments/DynamicColumn";
  import {fieldsFromAll} from "../../../helpers/fieldsFromAll";

  let blank = {
    entityFields: [],
    entityCols: [],
    entityInfo: {},
    localData: [],
    data: [],
    tableFields: [],
    style: TableBsStyle,
    perPage: 15,
    hasActions: false,
  };

  export default {
    name: "Index",
    data() {
      return {
        ...blank
      }
    },
    methods: {
      onPaginationData(paginationData) {
        this.$refs.pagination.setPaginationData(paginationData);
        this.$refs.paginationInfo.setPaginationData(paginationData);
      },
      getId(row) {
        if(row._id !== undefined) {
          return row._id;
        }
        return row.id;
      },
      onChangePage(page) {
        this.$refs.vuetable.changePage(page);
      },
      async dataManager(sortOrder, pagination) {
        global.app.bus.$emit('showLoading')
        let fieldsToGet = []
        this.entityFields.forEach(field => {
          fieldsToGet.push(field.name.replace(/\./g, '_'))
        })

        let {data: {info}} = await apiClient.query({
          query: gql`
          query {
              info: introspection(for: "${this.$route.params.entity}") {
                  code,
                  fields
              }
          }
      `
        });
        let userInfo = JSON.parse(JSON.stringify(info[0]));
        userInfo.fields = JSON.parse(userInfo.fields)
        let allFields = fieldsFromAll(userInfo.fields);

        let q = `
        query getData($per_page: Int, $current_page: Int, $sort: Sorting) {
                apidata: ${this.$route.params.entity}(
                pagination: {per_page: $per_page, current_page: $current_page},
                includeDeleted: true,
                sort: $sort
            ) {
                    ...on ${this.entityInfo.collection} {
                        total
                        current_page
                        from
                        last_page
                        per_page
                        to
                        total
                        data {
                            ${allFields}
                        }
                    }
                }
            }
        `;
        console.log(q)
        let {data: {apidata}} = await apiClient.query({
          query: g`
            ${q}
        `,
          variables: {
            ...pagination,
            sort: sortOrder.length == 1 ? {field: sortOrder[0].sortField, direction: sortOrder[0].direction} : {}
          }
        })

        this.data = apidata.data

        if (this.data.length < 1) return;

        let local = this.data;

        // sortOrder can be empty, so we have to check for that as well
        // if (sortOrder.length > 0) {
        //   console.log("orderBy:", sortOrder[0].sortField, sortOrder[0].direction);
        //   local = _.orderBy(
        //     local,
        //     sortOrder[0].sortField,
        //     sortOrder[0].direction
        //   );
        // }

        pagination = this.$refs.vuetable.makePagination(
          apidata.total,
          apidata.perPage
        );
        let from = pagination.from - 1;
        let to = from + this.perPage;
        global.app.bus.$emit('hideLoading')
        return {
          pagination: pagination,
          data: local
        };
      },
      async load() {
        global.app.bus.$emit('showLoading')
        let {data: {fields, cols, typeInfo}} = await apiClient.query({
          query: g`
        query {
            fields: getFields(for:"${this.$route.params.entity}") {
                ...DynamicField
            }
            cols: getColumns(for:"${this.$route.params.entity}") {
                ...DynamicColumn
            }
            typeInfo(for:"${this.$route.params.entity}") {
                type,
                collection
            }
        }
        ${DynamicFieldFragment}
        ${DynamicColumnFragment}
        `
        })
        this.entityFields = fields;
        this.entityCols = cols;
        this.entityInfo = typeInfo;

        this.tableFields = []

        this.entityCols.forEach(item => {
          switch (item.type) {
            case 'actions':
              this.hasActions = true;
              this.tableFields.push({name: 'graphi-actions', title: item.label})
              break;
            default:
              let obj = {name: item.field, title: item.label};
              if (item.sortable) {
                obj.sortField = item.field;
              }
              this.tableFields.push(obj)
              break;
          }
        })

        this.$nextTick(() => {
          this.$refs.vuetable.callDataManager();
        })
        global.app.bus.$emit('hideLoading')
      }
    },
    async mounted() {
      this.load();
    },
    beforeRouteUpdate(to, from, next) {
      // Object.keys(this.$data).forEach(key => this.$data[key] = null);
      // Object.entries({...blank}).forEach(entry => Vue.set(this.$data, entry[0], entry[1]));
      // this.$forceUpdate()
      // this.load()
      next();
    }
  }
</script>

<style scoped>

</style>