import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { DatePipe, NgClass} from '@angular/common';
import { MatInput } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';


@Component({
  selector: 'app-add-new-movie',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatSelectModule, MatToolbarModule, FormsModule, ReactiveFormsModule, NgClass, DatePipe, MatDatepickerModule],
  templateUrl: './add-new-movie.component.html',
  styleUrl: './add-new-movie.component.scss',
  
})
export class AddNewMovieComponent {
	isDropdownHidden = true;
	submitted: boolean = false;
	rating: number = 0.0;
	selectedYear: Date | null = null;
	movieForm: any;
	// selectedGenres: string[] = [];
	genreList: string[] = ["Acción", "Comedia", "Aventura", "Drama", "Ciencia Ficción", "Terror", "Romance", "Fantasía","Suspenso", "Anime", "Crimen", "infantil"];
	plataformsList: string[] = ["Netflix", "Max", "Amazon Prime Video", "Disney+", "Paramount+", "Apple TV+", "Crunchyroll"];

	private readonly _formBuilder = inject(FormBuilder);


	newMovieForm = this._formBuilder.nonNullable.group({
		title: ['', Validators.required],
		release: [0, Validators.required],
		duration: [0, [Validators.required, Validators.min(30)]],
		genre: [[''], Validators.required],
		director: ['', Validators.required],
		description: ['', Validators.required],
		rate: [0, Validators.required],
		poster: ['', Validators.required],
		plataforms: [[''], Validators.required]
		// comments: ['']
	})
  
	toggleDropdown() {
		this.isDropdownHidden = !this.isDropdownHidden;
	};

	createMovie(){
		console.log(this.newMovieForm.value);
		console.log(this.newMovieForm.valid);
		
	}

  hasError(controlName: string, errorName: string): boolean {
		const control = this.newMovieForm.get(controlName);
		return control ? control.hasError(errorName) : false;
	};

	onSubmit(){
		this.submitted = true;
		this.createMovie();
	}

	chosenYearHandler(normalizedYear: Date, datepicker: any) {
		this.selectedYear = normalizedYear;
		console.log('Selected Year:', normalizedYear.getFullYear());
		datepicker.close(); // Cierra el datepicker después de seleccionar el 
	}
		
  
}
