import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template:`
    <div class="app-container">
      <header class="app-header">
        <h1>{{ title }}</h1>
        <nav>
          <a routerLink="/gallery" routerLinkActive="active">Gallery</a>
        </nav>
      </header>

      <main class="main-content">
        <router-outlet></router-outlet>
      </main>

      <footer class="app-footer">
        <p>&copy; 2025 REC</p>
      </footer>
    </div>

  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected title = 'viewer';
}
