import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-popol-vuh',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, RouterLink],
  host: {
    'class': 'block',
  },
  template: `
    <main class="grow">
      <!-- Hero Section -->
      <section class="relative h-[400px] flex items-end overflow-hidden">
        <div class="absolute inset-0 bg-linear-to-t from-bg-dark via-bg-dark/40 to-transparent z-10"></div>
        <div class="absolute inset-0">
          <img
            ngSrc="/images/popol-vuh-hero.jpg"
            alt="Mayan jungle with a stepped pyramid and exotic birds"
            fill
            priority
            class="object-cover object-center"
          />
        </div>
        <div class="relative z-20 max-w-4xl mx-auto px-6 pb-12 text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">About the Sacred Popol Vuh</h1>
          <div class="inline-block px-4 py-1 bg-primary text-bg-dark font-bold rounded-full text-sm uppercase tracking-widest">The Council Book</div>
        </div>
      </section>

      <!-- Content Sections -->
      <section class="max-w-5xl mx-auto px-6 py-16 space-y-12">
        <!-- What is the Popol Vuh? -->
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="about-card p-8 rounded-xl shadow-2xl border-l-8 border-primary">
            <h2 class="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
              <span class="material-symbols-outlined">auto_stories</span>
              What is the Popol Vuh?
            </h2>
            <p class="leading-relaxed text-slate-300">
              The Popol Vuh, or "Book of the People," is a foundational sacred text of the Kʼicheʼ Maya
              people. It is a masterpiece of world literature that preserves the profound mythology,
              spiritual wisdom, and history of the ancestors who lived in the highlands of present-day Guatemala.
            </p>
          </div>
          <div class="relative flex justify-center">
            <div class="w-64 h-64 bg-primary/10 rounded-full flex items-center justify-center border-4 border-dashed border-primary/30 overflow-hidden">
              <img
                ngSrc="/images/mayan-glyph.jpg"
                alt="Mayan stone glyph representing wisdom"
                width="192"
                height="192"
                class="opacity-80"
              />
            </div>
          </div>
        </div>

        <!-- Feature Cards -->
        <div class="grid md:grid-cols-3 gap-6">
          @for (card of featureCards; track card.title) {
            <div class="border border-mayan-stone/50 p-6 rounded-xl hover:bg-primary/5 transition-colors group">
              <div class="text-mayan-gold mb-4">
                <span class="material-symbols-outlined text-4xl!">{{ card.icon }}</span>
              </div>
              <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{{ card.title }}</h3>
              <p class="text-sm text-slate-400">{{ card.description }}</p>
            </div>
          }
        </div>

        <!-- The Jungle's Memory -->
        <div class="bg-primary/10 rounded-2xl overflow-hidden border border-primary/20">
          <div class="p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
            <div class="flex-1 space-y-4">
              <h2 class="text-3xl font-bold text-white">The Jungle's Memory</h2>
              <p class="text-slate-300">
                Just as the jungle thrives with interconnected life, the Popol Vuh connects the Maya
                people to their celestial and terrestrial origins. Every glyph tells a story of survival,
                magic, and the eternal cycle of time.
              </p>
              <a
                routerLink="/"
                class="bg-primary hover:bg-primary/80 text-bg-dark px-6 py-2 rounded-lg font-bold transition-all inline-flex items-center gap-2"
              >
                Discover More Stories
                <span class="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
            <div class="w-full md:w-1/3 aspect-video md:aspect-square rounded-xl shadow-xl overflow-hidden relative">
              <img
                ngSrc="/images/hero-twins.jpg"
                alt="Hunahpu and Xbalanque playing the ritual ballgame"
                fill
                class="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: `
    .about-card {
      background-color: #1a2e23;
      border: 4px solid var(--color-primary);
      position: relative;
    }
    .about-card::before {
      content: "";
      position: absolute;
      inset: 0;
      background-image: radial-gradient(circle, rgba(17, 212, 98, 0.05) 1px, transparent 1px);
      background-size: 20px 20px;
      pointer-events: none;
    }
  `,
})
export default class AboutPopolVuh {
  readonly featureCards = [
    {
      icon: 'public',
      title: 'Creation Myth',
      description:
        'Narrates how the world was formed from the primordial sea and the failed attempts to create humans from mud and wood before corn.',
    },
    {
      icon: 'swords',
      title: 'The Hero Twins',
      description:
        'The epic adventures of Hunahpú and Xbalanqué as they outsmart the Lords of Xibalba (the underworld) in a ballgame.',
    },
    {
      icon: 'history_edu',
      title: 'Kʼicheʼ Lineage',
      description:
        'A detailed account of the genealogy and migrations of the Kʼicheʼ Maya tribes up until the Spanish conquest.',
    },
  ];
}
