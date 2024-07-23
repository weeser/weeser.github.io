<script setup>
// Libraries
import {ref} from 'vue'
import {BibtexParser} from 'assets/js/bibtex_js';
import {FilterMatchMode, FilterService} from '@primevue/core/api';

//read the bibtex file
// let bib_file = fs.readFileSync('data/publications.bib', 'utf8');
let bib_file = (await import(`../data/publications.bib?raw`)).default;
let parser = new BibtexParser();
parser.setInput(bib_file)
parser.bibtex();
let entry_dict = parser.getEntries()
let entry_list = [];
let bib_types_set = new Set();
for (let key in entry_dict) {
  if ('BIBTEXTYPE' in entry_dict[key]) {
    let types = entry_dict[key]['BIBTEXTYPE'].split(',');
    entry_dict[key]['BIBTEXTYPE'] = types;
    types.forEach(type => bib_types_set.add(type)); // Add each type to the set
  } else {
    entry_dict[key]['BIBTEXTYPE'] = ['misc'];
    bib_types_set.add('misc');
  }
  entry_list.push(entry_dict[key]);
}
let bib_types = [];
for (let type of bib_types_set) {
  bib_types.push({label: type, value: type});
}

const bib_entries = ref(entry_list);
//console.log(entry_list);
console.log(entry_list.length);

//-------------------------------- Define filters -----------------------------------

function filterHelper(filterID) {
  if (entry_list.length === 0) {
    console.debug('entry_list is empty');
    return false;
  } else if (filters.value[filterID].value === null) {
    console.debug('No filter defined for ' + filterID);
    bib_entries.value = entry_list;
    return false;
  }
  return true;
}

// Define a method to filter as you type
const customFilterCallback = (filterID, field) => {
  // Perform the filtering operation here
  // This could involve calling an API, filtering an array, etc.
  // For example, if `bib_entries` is an array of objects:
  console.debug('Filtering...');

  if (filterHelper(filterID)) {
    console.debug('Filtering ' + field + ' with value:', filters.value[filterID].value);
    if (!Array.isArray(field)) {
      field = [field];
    }
    bib_entries.value = FilterService.filter(entry_list, field, filters.value[filterID].value, filters.value[filterID].matchMode);
    console.debug(bib_entries.value.length + ' entries found');
  }
};

const customFilterMultiSelectCallback = (filterID, field) => {
  console.debug('\nOriginal filter values:', filters.value[filterID].value);
  let filter_values = filters.value[filterID].value.map(item => item.value);
  console.debug('Filtering ' + field + ' with values:', filter_values);
  bib_entries.value = FilterService.filter(entry_list, [field], filter_values, filters.value[filterID].matchMode);

  console.debug(bib_entries.value.length + ' entries found');
};

// custom filter for multi-select to check if any of the selected items are in an array
FilterService.register('arrayItemsInArray', (arr, filter) => {
  if (filter === undefined || filter === null || filter.length === 0) {
    return true;
  }

  if (arr === undefined || arr === null || arr.length === 0) {
    return false;
  }

  return arr.some(item => filter.includes(item));
});

const filters = ref({
  'CONTAINS_TEXT': {value: null, matchMode: FilterMatchMode.CONTAINS, callback: customFilterCallback},
  'MULTI_SELECT': {value: null, matchMode: 'arrayItemsInArray', callback: customFilterMultiSelectCallback}
});

//-------------------------------- Define sorting -----------------------------------

const sortKey = ref();
const sortOrder = ref();
const sortField = ref();
const sortOptions = ref([
  {label: 'Latest', value: '!YEAR'},
  {label: 'Earliest', value: 'YEAR'},
]);
// const sortKey = ref(sortOptions.value[0].value);
const onSortChange = (event) => {
  console.debug("sorting")
  const sortValue = event.value;
  if (sortValue === null) {
    sortOrder.value = null;
    sortField.value = null;
    sortKey.value = null;
  } else {
    const value = event.value.value;

    if (value.indexOf('!') === 0) {
      sortOrder.value = -1;
      sortField.value = value.substring(1, value.length);
      sortKey.value = sortValue;
    } else {
      sortOrder.value = 1;
      sortField.value = value;
      sortKey.value = sortValue;
    }
  }

};

</script>

<template>
  <div class="card">
    <DataView :value="bib_entries"
              paginator :rows="8"
              :sortOrder=sortOrder :sortField="sortField">
      <template #header>
        <div class="flex md:flex-row sm:flex-col justify-between items-center gap-4">
          <h2 class="text-2xl font-semibold text-surface-900 dark:text-surface-0">Publications</h2>
          <!-- Add filter inputs for each field you want to filter -->
          <div class="flex flex-wrap gap-2 grow md:grow-0">
            <FloatLabel class="">
              <Dropdown inputId="sortYear" v-model="sortKey"
                        variant="filled" showClear placeholder="Sort By Year"
                        :options="sortOptions" optionLabel="label"
                        @change="onSortChange($event)"/>
              <label for="sortYear">Sort By Year</label>
            </FloatLabel>
            <MultiSelect v-model="filters['MULTI_SELECT'].value" display="chip"
                         variant="filled" placeholder="Filter by type"
                         :options="bib_types" optionLabel="label"
                         @change="filters['MULTI_SELECT'].callback('MULTI_SELECT', 'BIBTEXTYPE')"
            />
            <InputText v-model="filters['CONTAINS_TEXT'].value"
                       placeholder="Search"
                       @input="filters['CONTAINS_TEXT'].callback('CONTAINS_TEXT',['TITLE', 'AUTHOR', 'YEAR', 'BOOKTITLE', 'JOURNAL'])"/>
          </div>
          <!--          <div class="flex flex-row gap-6">-->
          <!--            <Button icon="pi pi-file-pdf" label="Export to PDF" class="p-button-sm p-button-outlined"></Button>-->
          <!--            <Button icon="pi pi-file-excel" label="Export to bib" class="p-button-sm p-button-outlined"></Button>-->
          <!--          </div>-->
        </div>

      </template>
      <template #empty> No publications found.</template>

      <template #list="slotProps">
        <div class="grid grid-cols-12 gap-4 grid-nogutter">
          <div v-for="(entry, index) in slotProps.items" :key="entry.BIBTEXKEY" class="col-span-12">
            <!-- citation-->
            <div class="p-2" :class="{ 'border-top-1 surface-border': index !== 0 }">
              <!--              <div class="p-2" :class="{ 'border-top-1 surface-border': index !== 0 }">-->
              <div class="row">
                <div class="flex flex-col md:flex-row justify-between md:align-items-left flex-1 gap-6">
                  <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                    <div class="citation-text">
                      <span v-if="entry.AUTHOR" class="author">{{ entry.AUTHOR }}&nbsp</span>
                      <span v-if="entry.YEAR"><span class="year">({{ entry.YEAR }}).&nbsp</span></span>
                      <span v-if="entry.TITLE" class="title">{{ entry.TITLE }}.&nbsp</span>
                      <span v-if="entry.BOOKTITLE" class="book_title">{{ entry.BOOKTITLE }}.&nbsp</span>
                      <span v-if="entry.JOURNAL"><em><span class="journal">{{ entry.JOURNAL }}.&nbsp</span></em></span>
                    </div>
                  </div>
                  <div class="flex flex-col md:items-end gap-8">
                    <!--                      <span class="text-xl font-semibold text-surface-900 dark:text-surface-0">{{ index }}</span>-->
                    <div class="flex flex-row-reverse md:flex-row gap-1">
                      <Button icon="pi pi-bookmark" label=""
                              class="flex-auto md:flex-initial whitespace-nowrap"></Button>
                    </div>
                  </div>
                </div>
              </div>
              <!--      tags        -->
              <div class="row mt-2">
                <div class="flex flex-row flex-wrap align-items-left ">
                  <Tag v-for="item in entry.BIBTEXTYPE" :key="index" :value="item" class="m-1"></Tag>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>

    </DataView>
  </div>
</template>

<style scoped>
.author, .year {
  font-weight: bold;
}

.title {
  font-style: italic;
}

span {
  overflow-wrap: break-word;
}
</style>