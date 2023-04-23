<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import { Line } from 'vue-chartjs'
import "bootstrap/dist/css/bootstrap.min.css"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)


export default {
  name: 'App',
  components: { Line }
}

import 'bootstrap/dist/js/bootstrap.js'

</script>

<template>
  <header class="header clearfix">
  	<nav class="navbar navbar-expand-lg navbar-light bg-light">
      <RouterLink class="nav-link" to="/">About</RouterLink>
      <RouterLink class="nav-link" to="/report">Report</RouterLink>
    </nav>
    <h3 class="text-muted">MMPI-2 for all</h3>
  </header>
  <RouterView />

  <footer class="footer">
    <p>Unlicensed. Dedicated to Liberty. <a href="https://github.com/tachomex/mmpi-2">Fork me on GitHub.</a></p>
  </footer>    
</template>
