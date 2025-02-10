import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";

import { MatSidenavModule, MatDrawerContainer } from "@angular/material/sidenav"
import { MatIconButton } from "@angular/material/button";
import { IonIcon } from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import {
  searchOutline, notificationsOutline, personCircleOutline, homeOutline, 
  bookmarksOutline, addCircleOutline, home, bookmarks, addCircle, search,
} from "ionicons/icons";

@Component({
  selector: "app-navigation",
  standalone: true,
  imports: [ IonIcon, MatIconButton, RouterLink, MatSidenavModule],
  templateUrl: "./navigation.component.html",
  styleUrl:"./navigation.component.scss",
  providers: [MatDrawerContainer]
})
export class NavigationComponent {
  @Input() referenceDrawer!: any;

  constructor() {
    addIcons({ 
      bookmarksOutline, notificationsOutline,
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
