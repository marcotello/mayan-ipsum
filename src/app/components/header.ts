import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { IpsumStateService } from '../services/ipsum-state.service';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  host: {
    'class': 'block sticky top-0 z-50',
  },
  template: `
    <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/20 bg-bg-dark/95 backdrop-blur-sm px-6 py-4 lg:px-12 relative z-50">
      <a routerLink="/" (click)="closeMenu()">  
        <div class="flex items-center gap-4 text-white">
          <div class="size-8 text-primary">
            <span class="material-symbols-outlined text-4xl!">temple_hindu</span>
          </div>
          <h2 class="text-white text-xl font-bold leading-tight tracking-[-0.015em] hidden sm:block">Mayan Ipsum</h2>
        </div>
      </a>
      
      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-9 flex-1 justify-center relative z-20">
        <a class="text-white/80 hover:text-primary transition-colors text-sm font-medium" routerLink="/">Home</a>
        <a class="text-white/80 hover:text-primary transition-colors text-sm font-medium" routerLink="/about-popol-vuh">About Popol Vuh</a>
      </nav>
      
      <!-- Desktop Actions -->
      <div class="hidden md:flex justify-end gap-4 relative z-20">
        <button
          (click)="onGenerateClick()"
          class="flex items-center justify-center rounded-xl h-10 px-4 bg-primary hover:bg-primary/90 text-bg-dark text-sm font-bold transition-all shadow-lg shadow-primary/20 cursor-pointer hover:-translate-y-0.5"
        >
          <span class="material-symbols-outlined mr-2 text-lg">refresh</span>
          <span>Generate New</span>
        </button>
      </div>

      <!-- Mobile Hamburger Button -->
      <button 
        class="md:hidden text-white hover:text-primary transition-colors cursor-pointer relative z-50"
        (click)="toggleMenu()"
        [attr.aria-expanded]="isMenuOpen()"
        aria-label="Toggle navigation menu"
      >
        <span class="material-symbols-outlined text-3xl">
          {{ isMenuOpen() ? 'close' : 'menu' }}
        </span>
      </button>

      <!-- Mobile Full-Screen Drawer Overlay -->
      @if (isMenuOpen()) {
        <div class="fixed inset-0 bg-[#0e2218] backdrop-blur-xl z-40 md:hidden flex flex-col items-center justify-center pt-20">
          <nav class="flex flex-col items-center gap-8 text-2xl font-bold font-display w-full">
            <a class="text-white hover:text-primary transition-colors block w-full text-center py-2" routerLink="/" (click)="closeMenu()">Home</a>
            <a class="text-white hover:text-primary transition-colors block w-full text-center py-2" routerLink="/home2" (click)="closeMenu()">Home 2</a>
            <a class="text-white hover:text-primary transition-colors block w-full text-center py-2" routerLink="/about-popol-vuh" (click)="closeMenu()">About Popol Vuh</a>
            <a class="text-white hover:text-primary transition-colors block w-full text-center py-2" href="#" (click)="closeMenu()">Contact</a>
            
            <button
              (click)="onGenerateClick()"
              class="mt-8 flex items-center justify-center rounded-2xl h-14 px-8 bg-primary hover:bg-primary/90 text-bg-dark font-bold transition-all shadow-xl shadow-primary/20 cursor-pointer active:scale-95 text-xl"
            >
              <span class="material-symbols-outlined mr-3 text-3xl">refresh</span>
              <span>Generate New Text</span>
            </button>
          </nav>

          <!-- Decorative element for mobile drawer -->
          <div class="absolute bottom-10 opacity-10 pointer-events-none">
            <span class="material-symbols-outlined" style="font-size: 15rem;">temple_hindu</span>
          </div>
        </div>
      }
    </header>
  `,
})
export class Header {
  private readonly router = inject(Router);
  private readonly ipsumState = inject(IpsumStateService);

  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(v => !v);

    // Lock body scroll when menu is open
    if (this.isMenuOpen()) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMenu() {
    if (this.isMenuOpen()) {
      this.isMenuOpen.set(false);
      document.body.style.overflow = '';
    }
  }

  onGenerateClick() {
    this.closeMenu();
    this.ipsumState.triggerGeneration();
    if (this.router.url !== '/') {
      this.router.navigate(['/']);
    }
  }
}
