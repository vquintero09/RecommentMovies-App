import { Component } from "@angular/core";
import { MatIconButton } from "@angular/material/button";
import {MatBadge} from "@angular/material/badge";
import { Iicons } from "@core/interfaces/icons.interface";
import { IonIcon } from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import {
  searchOutline,
  notificationsOutline,
  personCircleOutline,
  homeOutline,
  bookmarksOutline,
  addCircleOutline,
  home,
  bookmarks,
  addCircle,
  search,
} from "ionicons/icons";

@Component({
  selector: "app-navigation",
  standalone: true,
  imports: [ IonIcon, MatIconButton, MatBadge],
  templateUrl: "./navigation.component.html",
  styleUrl:"./navigation.component.scss",
})
export class NavigationComponent {
  constructor() {
    addIcons({ bookmarksOutline, notificationsOutline,
      personCircleOutline, homeOutline, searchOutline,
      addCircleOutline, home, bookmarks, addCircle,
      search,
    });
  }

  selectedIcon!: string;

  toggleIcon(icon: string) {
    this.selectedIcon = icon;
  }
}
