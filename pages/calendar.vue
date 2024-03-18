<script setup lang="ts">
const rootElement = ref()
const options = {url: 'https://calendly.com/weeser/', text: 'Schedule time with me',}
</script>

<template>
  <h1>Calendar</h1>
  <div class="flex">
    <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&showTitle=0&mode=WEEK&src=d2Vlc2VyajEzQGdtYWlsLmNvbQ&src=bms1bDZ1OWF2bjZyZXE5amNiZWhnYm9hZm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=Y2kwMmNtZm5oZjdvaGtmdTZzMWZxOG1jNThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=NGdtdHR0aDNjZ2tidXNtbjRiczB1dmkzdG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZHExdnRvaDE4NzdnbG1ka3MxYm9qajBvMzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=azJ2azdlZGNmbWVhYmViZ3BwMWdiY2EzdDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=cTZsMmZtNzdkdWpuamphdDliYzFjMHFqMGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=anRkNzhxY29zNTl2a3NpaGs3NGVqZWgwY3NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=Mm0wY3JkbTcxZWltcjIzOGkxcW5sN3JsYzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZmFtaWx5MDEzNTk4Nzg0Nzk3NjY3MTA0OTRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23F09300&color=%23009688&color=%239E69AF&color=%23A79B8E&color=%23D50000&color=%23AD1457&color=%237CB342&color=%23B39DDB&color=%23D81B60&color=%23EF6C00&color=%23009688"
        style="border:solid 1px #777" width="1200" height="700" frameborder="0" scrolling="no"></iframe>

  </div>
  <CalendlyPopupWidget v-bind="options" :root-element="rootElement"/>
  <!-- Can be any element -->
  <div ref="rootElement"></div>
</template>

<style scoped>

</style>