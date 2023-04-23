<template>
  <div class="jumbotron">
  			<h1 class="display-3">Take the MMPI-2</h1>
  			<p class="lead">
  				The Minnesota Multiphasic Personality Inventory (MMPI) is a standardized psychometric test of adult personality and psychopathology.
  			</p>
  			<p><router-link class="btn btn-lg btn-success" to="/test/1" role="button">Start</router-link></p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
