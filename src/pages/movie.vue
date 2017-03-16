<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <img :src="movie.Poster" class="img-responsive thumnail">
      </div>
      <div class="col-md-8">
        <h3>{{ movie.Title }}</h3>
        <ul class="list-group">
          <li class="list-group-item"><strong>Genre:</strong><span class="pull-right">{{movie.Genre}}</span></li>
          <li class="list-group-item"><strong>Released:</strong><span class="pull-right">{{movie.Released}}</span></li>
          <li class="list-group-item"><strong>Rated:</strong><span class="pull-right">{{movie.Rated}}</span></li>
          <li class="list-group-item"><strong>IMDB Rating:</strong><span class="pull-right">{{movie.imdbRating}}</span></li>
          <li class="list-group-item"><strong>Director:</strong><span class="pull-right">{{movie.Director}}</span></li>
          <li class="list-group-item"><strong>Writer:</strong><span class="pull-right">{{movie.Writer}}</span></li>
          <li class="list-group-item"><strong>Actors:</strong><span class="pull-right">{{movie.Actors}}</span></li>
        </ul>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="well">
        <h3>Plot</h3>
        {{movie.Plot}}
        <hr>
        <a :href="'http://imdb.com/title/' + movie.imdbID" target="_blank" class="btn btn-primary">View IMDB</a>
        <router-link to="/" class="btn btn-default">
          Go back to search
        </router-link>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      movie: {}
    }
  },
  mounted () {
    axios.get(`http://www.omdbapi.com/?t=${this.$route.params.title}`)
    .then((res) => {
      this.movie = res.data
    })
  }
}
</script>
