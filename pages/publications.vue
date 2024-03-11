<script setup>
// Libraries
import fs from  'fs';
import {ref} from 'vue'
import {BibtexParser} from 'assets/js/bibtex_js';
// import publications from '../data/publications.bib';

//read the bibtex file
let bib_file = fs.readFileSync('data/publications.bib', 'utf8');
let parser = new BibtexParser();
parser.setInput(bib_file)
parser.bibtex();
const bib_entries = ref(parser.getEntries());

</script>

<template>
  <div class="container">
    <h1>Rendered</h1>
    <ul>
      <li v-for="entry in bib_entries">
        <span v-if="entry.TITLE" class="title">{{ entry.TITLE }}</span>,
        <div v-if="entry.AUTHOR">
          <span class="author">{{ entry.AUTHOR }}</span>
        </div>
        <div>
          <span v-if="entry.JOURNAL"><em><span class="journal">{{ entry.JOURNAL }}</span></em></span>
          <span v-if="entry.MONTH"><span class="month">{{ entry.MONTH }}</span>,</span>
          <span v-if="entry.YEAR"><span class="year">{{ entry.YEAR }}</span></span>.
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>