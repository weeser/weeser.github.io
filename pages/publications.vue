<script setup>
// Libraries
import fs from 'fs';
import {ref} from 'vue'
import {BibtexParser} from 'assets/js/bibtex_js';
import { FilterMatchMode, FilterService } from 'primevue/api';

//read the bibtex file
let bib_file = fs.readFileSync('data/publications.bib', 'utf8');
let parser = new BibtexParser();
parser.setInput(bib_file)
parser.bibtex();
let entry_dict = parser.getEntries()
let entry_list = [];
for (let key in entry_dict) {
  if ('BIBTEXTYPE' in entry_dict[key]) {
    entry_dict[key]['BIBTEXTYPE'] = entry_dict[key]['BIBTEXTYPE'].split(',');
  } else {
    entry_dict[key]['BIBTEXTYPE'] = ['misc'];
  }
  entry_list.push(entry_dict[key]);
}

const bib_entries = ref(entry_list);
console.log(entry_list);
// console.log(entry_list.length);

// Define filters
const filters = ref({
  'BIBTEXTYPE': {value: null, matchMode: FilterMatchMode.CONTAINS},
  // Add more fields to filter here
});

// Define a method to filter as you type
const filterAsYouType = () => {
  // Perform the filtering operation here
  // This could involve calling an API, filtering an array, etc.
  // For example, if `bib_entries` is an array of objects:
  bib_entries.value = entry_list.filter(entry => entry['BIBTEXTYPE'].includes(filters.value['BIBTEXTYPE'].value));
};

const sortKey = ref();
const sortOrder = ref();
const sortField = ref();
const sortOptions = ref([
  {label: 'Latest', value: '!YEAR'},
  {label: 'Earliest', value: 'YEAR'},
]);
const onSortChange = (event) => {
  const value = event.value.value;
  const sortValue = event.value;

  if (value.indexOf('!') === 0) {
    sortOrder.value = -1;
    sortField.value = value.substring(1, value.length);
    sortKey.value = sortValue;
  }
  else {
    sortOrder.value = 1;
    sortField.value = value;
    sortKey.value = sortValue;
  }
};


</script>

<template>
  <div class="card">
    <DataView v-model:filters="filters" :value="bib_entries"
              paginator :rows="8"
              :sortOrder="sortOrder" :sortField="sortField">
      <template #header>
        <!-- Add filter inputs for each field you want to filter -->
        <InputText v-model="filters['BIBTEXTYPE'].value" placeholder="Filter by type" @input="filterAsYouType"/>
        <Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By Year" @change="onSortChange($event)" />
      </template>
      <template #empty> No publications found. </template>

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