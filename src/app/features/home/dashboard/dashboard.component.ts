import { Component, inject, OnInit } from '@angular/core';
import { Imovies } from '@core/interfaces/movies-api.interface';
import { MoviesApiService } from '@core/services/movies-api.service';
import { AuthService } from '@features/auth/auth.service';
import { addIcons } from 'ionicons';
import { star, starOutline, chevronBackOutline, chevronForwardOutline, timeOutline, add, filmOutline } from 'ionicons/icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
    private readonly _moviesService = inject(MoviesApiService);
    private readonly _authService = inject(AuthService);

    movies!: Imovies[];
    dataMovies!: any;
    currentIndex: number = 0;
    intervalId: any

    constructor() {
        addIcons({star, starOutline, chevronBackOutline, chevronForwardOutline, timeOutline, add, filmOutline});
    }

    ngOnInit(): void {
        
        this.getMovies();
        // this.slideAuto()
    }

    getMovies() {
        this._moviesService.getMovies().subscribe((m) => {
            this.movies = m.slice(0, 5);
        })
    };

    slideAuto() {
        this.intervalId = setInterval(() => {
            this.nextSlide()
        }, 5000)
    }
    nextSlide(): void {
        this.currentIndex = (this.currentIndex + 1) % this.movies.length;
    }

    selectSlide(index: number): void {
        this.currentIndex = index
    };

    logout(): void {
        this._authService.logout()
    }
}
