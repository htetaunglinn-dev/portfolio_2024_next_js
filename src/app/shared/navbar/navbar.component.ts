import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
})
export class NavbarComponent {
  showPopup: boolean = false;
  isClosing: boolean = false;
  popupPosition: { top: number; left: number } = { top: 0, left: 0 };

  // Method to toggle popup and set position dynamically
  togglePopup(menuButton: Element): void {
    this.showPopup = !this.showPopup;

    if (this.showPopup) {
      const rect = menuButton.getBoundingClientRect();
      const viewportWidth = window.innerWidth;

      let topPosition = rect.top + window.scrollY - 5;
      let leftPosition = rect.right + window.scrollX;
      const popupWidth = 400; // Match `.popup-menu` width

      if (leftPosition + popupWidth > viewportWidth) {
        leftPosition = rect.right - popupWidth + window.scrollX;
      }

      this.popupPosition = {
        top: topPosition,
        left: leftPosition,
      };
    }
  }

  closePopup(): void {
    this.isClosing = true;
    setTimeout(() => {
      this.showPopup = false;
      this.isClosing = false;
    }, 300);
  }
}
