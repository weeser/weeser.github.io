<script setup lang="ts">
const contactCard = ref()
const options = {url: 'https://calendly.com/weeser/', text: 'Schedule time with me',}
</script>

<template>
  <section ref="contactCard">
    <h1>Contact</h1>
    <p>
      Dr. Josh Weese
      <br/>
      Teaching Assistant Professor
      <br/>
      Kansas State University
      <br/>
      Department of Computer Science
      <br/>
      2214 Engineering Hall, 1701D Platt St.
      <br/>
      Manhattan, KS 66502
      <br/>
      For office hours, please see my <a href="/calendar">calendar</a>.
      <br/>
      <a href="mailto:weeser@ksu.edu">weeser at ksu dot edu</a>
      <a href="tel:7855327929">785-532-7929</a>
      <br/>
      <CalendlyPopupButton v-bind="options" :root-element="contactCard" class="p-button"/>
    </p>
  </section>
</template>

<style scoped>

</style>