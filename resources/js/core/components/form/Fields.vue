<template>
    <div class="w-full">
        <div class="flex flex-col md:flex-row md:flex-wrap">
            <div :class="['mb-4 pr-8', getFieldWidth(field), validationStyle(field)]" v-for="field in fields">
                <label class="form-label" :for="field.name" v-if="field.label">
                    {{ field.label }}
                </label>
                <input class="form-input"
                       :id="field.name" :required="field.required" v-validate="getValidationRules(field)" type="text"
                       v-model="field.value" :placeholder="field.placeholder || field.label" v-if="field.type == 'text'"
                       :name="field.name" :data-vv-as="field.label">
                <textarea class="form-input"
                       :id="field.name" :required="field.required" v-validate="getValidationRules(field)"
                       v-model="field.value" :placeholder="field.placeholder || field.label" v-if="field.type == 'textarea'"
                          :name="field.name" :data-vv-as="field.label"></textarea>
                <datetime class="form-input"
                          v-model="field.value"
                          :format="dateTimeFormat"
                          type="datetime"
                          :readonly="field.readonly"
                          :id="field.name" :required="field.required" v-validate="getValidationRules(field)"
                          :placeholder="field.placeholder || field.label" v-else-if="field.type == 'datetime' && !field.readonly"
                          :name="field.name" :data-vv-as="field.label"></datetime>
                <input class="form-input"
                       :id="field.name" :required="field.required" v-validate="getValidationRules(field)" type="text"
                       readonly
                       v-model="field.value" :placeholder="field.placeholder || field.label" v-else-if="field.type == 'datetime' && field.readonly"
                       :name="field.name" :data-vv-as="field.label">
                <small v-if="errors.has(field.name)">{{ errors.first(field.name )}}</small>
            </div>
        </div>
        <b-tabs content-class="mt-3">
            <b-tab :title="tab.key" v-for="tab in tabs"  :key="tab.key">
                <Fields :fields="tab.fields"></Fields>
            </b-tab>
        </b-tabs>
    </div>
</template>

<script>
  import { DateTime } from "luxon";
  export default {
    name: "Fields",
    data() {
      return {
        dateTimeFormat: DateTime.DATETIME_SHORT
      }
    },
    props: {
      fields: {
        type: Array,
        default: function() {
          return [];
        },
      },
      tabs: {
        type: Object,
        default: function() {
          return {}
        }
      }
    },
    inject: ['$validator'],
    methods: {
      getFieldWidth(field) {
        switch (field.size) {
          default:
          case 'full':
            return 'w-full'
          case 'half':
            return 'w-1/2';
          case 'left':
            return 'w-1/2 mr-half';
          case 'right':
            return 'w-1/2 ml-half';
        }
      },
      getValidationRules(field) {
        let rules = [];
        if (field.required) {
          rules.push('required');
        }
        return rules.join('|');
      },
      validationStyle(field) {
        if (this._fields[field.name]) {
          let validator = this._fields[field.name];
          if (validator.invalid) {
            return 'is-invalid'
          }
        }
        return '';
      }
    }
  }
</script>

<style scoped>

</style>