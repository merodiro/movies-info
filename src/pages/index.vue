<template>
  <section class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <input type="text" placeholder="Type the name of movie here" class="form-control" v-model="query">
      </div>
    </div>

    <hr>

    <div class="row" v-if="movies.lengh">
      <div class="col-md-3" v-for="movie in movies" :key="movie">
        <div class="panel panel-default">
          <div class="panel-heading">
            <router-link :to="{name: 'movie', params: { title: movie.Title }}">
              {{ movie.Title }}
            </router-link>
          </div>
          <div class="panel-body">
            <img :src="movie.Poster" class="img-responsive">
          </div>
        </div>
      </div>
    </div>
    <div class="lead text-center" v-else-if="query == ''">
      Type something to search
    </div>
    <div class="lead text-center" v-else>
      No movies found
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'
export default {
  data () {
    return {
      query: '',
      movies: {}
    }
  },
  watch: {
    query: function (searchQuery) {
      this.search()
    }
  },
  methods: {
    search: _.debounce(
      function () {
        axios.get('https://www.omdbapi.com/?s=' + this.query)
          .then(res => {
            this.movies = res.data.Search
          })
      },
      500
    )
  }
}
</script>
