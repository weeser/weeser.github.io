<script setup>
// Libraries
import {ref} from 'vue'
import {BibtexParser} from 'assets/js/bibtex_js';
import {FilterMatchMode, FilterService} from 'primevue/api';

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
//console.log(entry_list.length);

//-------------------------------- Define filters -----------------------------------


// Define a method to filter as you type
const filterAsYouType = (filterID, field, isList) => {
  // Perform the filtering operation here
  // This could involve calling an API, filtering an array, etc.
  // For example, if `bib_entries` is an array of objects:
  console.debug('Filtering as you type');

  if (entry_list.length === 0) {
    console.debug('entry_list is empty');
  } else if (filters.value[filterID].value === null) {
    console.debug('No filter defined for ' + filterID);
    bib_entries.value = entry_list;
  } else if (isList) {
    console.debug('Filtering list');
    bib_entries.value = entry_list.filter(entry =>
        entry[field].some(type => type.includes(filters.value[filterID].value))
    );
  } else {
    console.debug('Filtering string');

    console.debug(FilterService.filter(entry_list, filters.value[filterID].value, filters.value[filterID].matchMode));
    bib_entries.value = entry_list.filter(entry => entry[field].includes(filters.value[filterID].value));
  }
  console.debug(bib_entries.value);
};

const filterMultiSelectCallback = (key) => {
  // Implement your custom filter logic here
  // `value` is the current value of the filter input
  console.debug('Filtering with value:', filters.value[key].value);
  bib_entries.value = entry_list.filter(entry =>
      entry[key].some(type => type.includes(filters.value[key].value))
  );
};

const filters = ref({
  'TEXT': {value: null, matchMode: FilterMatchMode.CONTAINS, callback: filterAsYouType},
  'BIBTEXTYPE': {value: null, matchMode: FilterMatchMode.IN, callback: filterMultiSelectCallback}
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
    <DataView v-model:filters="filters" :value="bib_entries"
              paginator :rows="8"
              :sortOrder="sortOrder" :sortField="sortField">
      <template #header>
        <div class="flex md:flex-row sm:flex-column justify-content-between align-items-center gap-3">
          <h2 class="text-2xl font-semibold text-900">Publications</h2>
          <!-- Add filter inputs for each field you want to filter -->
          <div class="flex flex-wrap gap-2 flex-grow-1 md:flex-grow-0">
            <FloatLabel class="">
              <Dropdown inputId="sortYear" v-model="sortKey"
                        variant="filled" showClear placeholder="Sort By Year"
                        :options="sortOptions" optionLabel="label"
                        @change="onSortChange($event)"/>
              <label for="sortYear">Sort By Year</label>
            </FloatLabel>
            <MultiSelect v-model="filters['BIBTEXTYPE'].value" display="chip"
                         variant="filled" placeholder="Filter by type"
                         :options="bib_types" optionLabel="label"
                         @change="filters['BIBTEXTYPE'].callback('BIBTEXTYPE')"
            />
            <InputText v-model="filters['TEXT'].value"
                       placeholder="Filter by title"
                       @input="filters['TEXT'].callback('TEXT','TITLE',false)"/>
          </div>
          <!--          <div class="flex flex-row gap-4">-->
          <!--            <Button icon="pi pi-file-pdf" label="Export to PDF" class="p-button-sm p-button-outlined"></Button>-->
          <!--            <Button icon="pi pi-file-excel" label="Export to bib" class="p-button-sm p-button-outlined"></Button>-->
          <!--          </div>-->
        </div>

      </template>
      <template #empty> No publications found.</template>

      <template #list="slotProps">
        <div class="grid grid-nogutter">
          <div v-for="(entry, index) in slotProps.items" :key="entry.BIBTEXKEY" class="col-12">
            <!-- citation-->
            <div class="p-2" :class="{ 'border-top-1 surface-border': index !== 0 }">
              <!--              <div class="p-2" :class="{ 'border-top-1 surface-border': index !== 0 }">-->
              <div class="row">
                <div class="flex flex-column md:flex-row justify-content-between md:align-items-left flex-1 gap-4">
                  <div class="flex flex-row md:flex-column justify-content-between align-items-start gap-2">
                    <div class="citation-text">
                      <span v-if="entry.AUTHOR" class="author">{{ entry.AUTHOR }}&nbsp</span>
                      <span v-if="entry.YEAR"><span class="year">({{ entry.YEAR }}).&nbsp</span></span>
                      <span v-if="entry.TITLE" class="title">{{ entry.TITLE }}.&nbsp</span>
                      <span v-if="entry.BOOKTITLE" class="book_title">{{ entry.BOOKTITLE }}.&nbsp</span>
                      <span v-if="entry.JOURNAL"><em><span class="journal">{{ entry.JOURNAL }}.&nbsp</span></em></span>
                    </div>
                  </div>
                  <div class="flex flex-column md:align-items-end gap-5">
                    <!--                      <span class="text-xl font-semibold text-900">{{ index }}</span>-->
                    <div class="flex flex-row-reverse md:flex-row gap-1">
                      <Button icon="pi pi-bookmark" label=""
                              class="flex-auto md:flex-initial white-space-nowrap"></Button>
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