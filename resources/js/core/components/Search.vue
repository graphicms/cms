<template>
    <div v-on-clickaway="close" class="relative z-50 w-full max-w-xs  md:min-w-400">
        <div class="relative">
            <div class="relative">
                <i class="material-icons absolute ml-1" style="top:15%;">search</i>
                <input type="text" class="w-full p-2 pl-8"
                       v-model="term"
                       @input.stop="search"
                       @focus="activate"
                       ref="search"
                       @keydown.down.stop="moveDown"
                       @keydown.up.stop="moveUp"
                       @keydown.enter.stop="gotoSelected"
                       @keydown.esc.stop="close"
                       placeholder='Type "/" anywhere on page to focus'
                >
            </div>
            <div
                    v-if="loading"
                    class="bg-white py-3 overflow-hidden absolute shadow-lg w-full mt-2 max-h-search overflow-y-auto"
            >
                <p>loading</p>
            </div>
            <div
                    v-if="active && !loading && searched && term && results.length == 0"
                    class="bg-white py-3 overflow-hidden absolute shadow-lg w-full mt-2 max-h-search overflow-y-auto"
            >
                <p>No results found</p>
            </div>
            <div v-if="active && results.length > 0" class="bg-white py-3 overflow-hidden absolute shadow-lg w-full mt-2 max-h-search-dropdown overflow-y-auto" ref="dropdown">
                <template v-for="result in results">
                    <div class="font-black uppercase pl-3 text-sm" v-text="result.collection.name"></div>
                    <ul class="list-reset">
                        <li v-for="resource in result.results" :key="result.collection.key + '-' + resource.identifier">
                            <a href='#'
                               @click.prevent="goTo(result.collection, resource)"
                               class="cursor-pointer flex hover:bg-grey-lightest block py-2 px-3 no-underline hover:no-underline font-normal text-black flex flex-col text-left items-start"
                               :class="{'bg-grey-lightest': highlightKey == `${result.collection.key}-${resource.identifier}`}"
                               ref="searchResult"
                               :data-identify="`${result.collection.key}-${resource.identifier}`"
                            >
                                <div>{{ resource.title }}</div>
                                <small v-if="resource.subtitle" v-text="resource.subtitle" class="text-xs block"></small>
                            </a>
                        </li>
                    </ul>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
  import { mixin as clickaway } from 'vue-clickaway'
  import debounce from 'lodash-es/debounce'
  import find from 'lodash-es/find'
  import gql from 'graphql-tag'
  import {apiClient} from "../../api";
  export default {
    name: "Search",
    mixins: [clickaway],
    data() {
      return {
        term: null,
        highlight: -1,
        highlightKey: null,
        results: [],
        loading: false,
        active: false,
        searched: false,
      }
    },
    methods: {
      close() {
        this.term = '';
        this.active = false
        this.searched = false
        this.highlightKey = null;
        this.$refs.search.blur()
        this.results = []
      },
      search(e) {
        this.highlight = -1;
        this.highlightKey = null;
        if (e.target.value === '') {
          this.loading = false
          this.results = []
        } else {
          this.delay(() => {
            this.queryEndpoint(e.target.value)
          }, 500)
        }
      },
      async queryEndpoint(term) {
        if(this.term === '') return;
        this.searched = true
        let searchQuery = gql`
        query search($term: String!){
          search(term: $term) {
            collection {
              name,
              key
            },
            results {
              identifier
              title
              subtitle
            }
          }
        }
        `;
        this.loading = true;
        this.highlight = -1;
        this.highlightKey = null;
        let {data: {search}} = await apiClient.query({
          query: searchQuery,
          variables: {
            term
          }
        })
        console.log(search)
        this.results = search;
        this.loading = false;
      },
      delay: debounce(callback => callback(), 500),

      activate() {
        this.term = '';
        this.$refs.search.focus()
        this.active = true
        this.searched = false
        this.results = []
      },

      goTo(collection, resource) {
        this.$router.push(`/entity/${collection.key}/${resource.identifier}`)
        this.close()
      },

      moveDown() {
        if(!this.$refs.searchResult) return;
        let next = this.highlight + 1;
        if(next < this.$refs.searchResult.length) {
          this.highlight = next;
          this.highlightKey = this.$refs.searchResult[next].dataset.identify
          this.$nextTick(() => {
            this.$refs.searchResult[next].scrollIntoView({block: 'center', inline: 'center'})
          })
        }
      },

      moveUp() {
        if(!this.$refs.searchResult) return;
        let next = this.highlight - 1;
        if(next <= this.$refs.searchResult.length && next != -1) {
          this.highlight = next;
          this.highlightKey = this.$refs.searchResult[next].dataset.identify
          this.$nextTick(() => {
            this.$refs.searchResult[next].scrollIntoView({block: 'center', inline: 'center'})
          })
        }
      },

      gotoSelected() {
        let selected = find(this.$refs.searchResult, (item) => {
          return item.dataset.identify === this.highlightKey;
        })
        selected.click()
      },
      notOnInputs(event) {
        const tagName = event.target.tagName
        return Boolean(tagName !== 'INPUT' && tagName !== 'TEXTAREA')
      },

      globalShortcut(event) {
        if (event.keyCode == 191 && this.notOnInputs(event)) {
          event.preventDefault()
          event.stopPropagation()
          this.activate()
        }
      },
    },
    mounted() {
      document.addEventListener('keydown', this.globalShortcut)
    },

    destroyed() {
      document.removeEventListener('keydown', this.globalShortcut)
    },
  }
</script>

<style scoped>

</style>