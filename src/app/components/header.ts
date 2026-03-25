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
          <div class="size-9">
            <img src="/images/mayan-pyramid.svg" alt="Mayan Pyramid" class="w-full h-full" />
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
          <span class="material-symbols-outlined mr-2 text-lg">temp_preferences_custom</span>
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

      <!-- Mobile Drawer Backdrop -->
      @if (isMenuOpen()) {
        <div
          class="fixed inset-0 bg-black/50 z-40 md:hidden"
          (click)="closeMenu()"
        ></div>

        <!-- Mobile Drawer (slides in from right) -->
        <div class="mobile-drawer fixed top-0 right-0 w-72 h-[100vh] bg-[#0a1c12] border-l border-primary/20 z-50 md:hidden flex flex-col shadow-2xl shadow-black/60">
          <!-- Drawer Header -->
          <div class="flex items-center justify-between px-6 py-4 border-b border-primary/20">
            <div class="flex items-center gap-3">
              <div class="size-7">
                <img src="/images/mayan-pyramid.svg" alt="Mayan Pyramid" class="w-full h-full" />
              </div>
              <span class="text-white font-bold">Mayan Ipsum</span>
            </div>
            <button class="text-white/60 hover:text-white transition-colors cursor-pointer" (click)="closeMenu()">
              <span class="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>

          <!-- Drawer Nav Links -->
          <nav class="flex flex-col gap-1 px-4 py-6 flex-1 bg-[#0a1c12]">
            <a
              class="text-white/80 hover:text-primary hover:bg-primary/10 transition-colors text-lg font-semibold px-4 py-3 rounded-xl flex items-center gap-3"
              routerLink="/"
              (click)="closeMenu()"
            >
              <span class="material-symbols-outlined text-primary/70">home</span>
              Home
            </a>
            <a
              class="text-white/80 hover:text-primary hover:bg-primary/10 transition-colors text-lg font-semibold px-4 py-3 rounded-xl flex items-center gap-3"
              routerLink="/about-popol-vuh"
              (click)="closeMenu()"
            >
              <span class="material-symbols-outlined text-primary/70">menu_book</span>
              About Popol Vuh
            </a>
          </nav>

          <!-- Generate Button -->
          <div class="px-6 pb-8 bg-[#0a1c12]">
            <button
              (click)="onGenerateClick()"
              class="w-full flex items-center justify-center rounded-xl h-12 px-6 bg-primary hover:bg-primary/90 text-bg-dark font-bold transition-all shadow-lg shadow-primary/20 cursor-pointer active:scale-95 text-base gap-2"
            >
              <span class="material-symbols-outlined text-xl">temp_preferences_custom</span>
              <span>Generate New Text</span>
            </button>
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
