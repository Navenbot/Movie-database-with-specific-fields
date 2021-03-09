import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  movies: any[];
  
  constructor(private movieService: MovieServiceService, private router: Router) {

  }

  searchForMovie(event, key) {
      if(event.target.value.length > 2) {
          this.movieService.searchMovies(event.target.value).subscribe((res)=>{
              this.movies = res;
          });
      }
  }  
    
  selectMovie(event, movie) {
      console.log(movie);
      this.router.navigateByUrl('/info/' + movie.id);
  }
}
