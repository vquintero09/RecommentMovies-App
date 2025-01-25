import { Component, inject, OnInit } from '@angular/core';
import { NgClass} from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MoviesApiService } from '@core/services/movies-api.service';

import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-add-new-movie',
  standalone: true,
  imports: [MatCardModule,  MatSelectModule, FormsModule, ReactiveFormsModule, NgClass,MatDatepickerModule, MatNativeDateModule],
  templateUrl: './add-new-movie.component.html',
  styleUrl: './add-new-movie.component.scss',
	providers: [provideNativeDateAdapter()]
  
})
export class AddNewMovieComponent implements OnInit {
	private readonly _FormBuilder = inject(FormBuilder);
	private readonly _MoviesService = inject(MoviesApiService);
	private readonly _SnackBar = inject(MatSnackBar);
	
	submitted: boolean = false;
	showYearPicker = false;
	selectedYear: number | null = null;
	years: number[] = []; 
	rating: number = 5;
	hasErrors: {[key: string]: {[errorName: string]: boolean}} = {};
	errorMessage:string = '';
	genreList: string[] = ["Accion", "Comedia", "Aventura", "Drama", "Ciencia Ficcion", "Terror", "Romance", "Fantasia", "Suspenso", "Anime", "Crimen", "infantil", "Biografia"];
	plataformsList: string[] = ["Netflix", "Max", "Amazon Prime Video", "Disney+", "Paramount+", "Apple TV+", "Crunchyroll"];
	
	ngOnInit(): void {
		this.generateYears();		
	}
	
	newMovieForm = this._FormBuilder.nonNullable.group({
		title: ['', Validators.required],
		year: [null as number | null, Validators.required],
		duration: [null as number | null, [Validators.required, Validators.min(30)]],
		genre: [[], Validators.required],
		director: ['', [Validators.required]],
		description: ['', Validators.required],
		rate: [0, Validators.required],
		poster: ['', Validators.required],
		plataforms: [[], Validators.required]
	});

	createMovie(){
		if(this.newMovieForm.valid){
			const movie = {
				...this.newMovieForm.getRawValue()
			};

			this._MoviesService.createMovie(movie).subscribe({
				next: (value) => console.log(value),
				error: (error) => {
					this.errorMessage = error;
					this._SnackBar.open(this.errorMessage, '', {horizontalPosition: 'center', verticalPosition: 'bottom', duration: 5*1000})
				} 
			})
		}
	}

	updateHassErrorState(){
		for(const controlName in this.newMovieForm.controls) {
			const control = this.newMovieForm.get(controlName);			
			if(control) {
				this.hasErrors[controlName] = {};
				const errors = control.errors;
				if(errors){
					Object.keys(errors).forEach((errorName) => {
						this.hasErrors[controlName][errorName] = true
					})
				}
			}
		}
	};

	generateYears(){
		const currentYear = new Date().getFullYear();
		for(let i = currentYear; i >= currentYear - 40; i--) {
			this.years.push(i)
		}		
	};

	toggleYearPicker(){
		this.showYearPicker = !this.showYearPicker;
	};

	selectYear(year: number){
		this.selectedYear = year;
		this.newMovieForm.get('year')?.setValue(year);
		this.showYearPicker = false;
	};
	
	onSubmit(){
		this.submitted = true;
		this.createMovie();
		this.updateHassErrorState();
		this.generateYears();
	}
}
