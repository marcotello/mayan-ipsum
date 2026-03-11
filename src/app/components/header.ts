import { Component, ChangeDetectionStrategy, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  host: {
    'class': 'block sticky top-0 z-50',
  },
  template: `
    <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/20 bg-bg-dark/95 backdrop-blur-sm px-6 py-4 lg:px-12">
      <div class="flex items-center gap-4 text-white">
        <div class="size-8 text-primary">
          <span class="material-symbols-outlined text-4xl!">temple_hindu</span>
        </div>
        <h2 class="text-white text-xl font-bold leading-tight tracking-[-0.015em] hidden sm:block">Mayan Ipsum</h2>
      </div>
      <nav class="hidden md:flex items-center gap-9 flex-1 justify-center">
        <a class="text-white/80 hover:text-primary transition-colors text-sm font-medium" routerLink="/">Home</a>
        <a class="text-white/80 hover:text-primary transition-colors text-sm font-medium" routerLink="/about-popol-vuh">About Popol Vuh</a>
        <a class="text-white/80 hover:text-primary transition-colors text-sm font-medium" href="#">Contact</a>
      </nav>
      <div class="flex justify-end gap-4">
        <button
          (click)="generateClick.emit()"
          class="flex items-center justify-center rounded-xl h-10 px-4 bg-primary hover:bg-primary/90 text-bg-dark text-sm font-bold transition-all shadow-lg shadow-primary/20 cursor-pointer hover:-translate-y-0.5"
        >
          <span class="material-symbols-outlined mr-2 text-lg">refresh</span>
          <span>Generate New</span>
        </button>
      </div>
    </header>
  `,
})
export class Header {
  generateClick = output<void>();
}
