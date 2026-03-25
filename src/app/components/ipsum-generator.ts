import { Component, ChangeDetectionStrategy, signal, computed, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { IpsumStateService } from '../services/ipsum-state.service';

const KICHE_PARAGRAPHS_SHORT = [
  `Are u' paxik, u' c'aslemal ri', ri' u' tz'ibaxik. Wa'e' k'ut u' ch'a'tem, u' tzijoxik ri' chi'. Are u' xebal, u' tikarib'al, u' jek'al wuj.`,
  `K'a tz'inilik, k'a chamamik. K'a silan, k'a loman. K'a ca'n, k'a ch'a'n. K'a catz'in, k'a ca'lol. Xa' u' ch'a'tem, u' tzijoxik.`,
  `Mawi k'o, mawi k'o jun winak, jun chicop, jun tz'i', jun ak'. Xa' u' ch'a'tem, u' tzijoxik.`,
  `Xax k'o wi ri kaqulja, ri' ch'umil, ri' q'ij. K'a tz'inilik, k'a chamamik. K'a silan, k'a loman.`,
  `Are k'ut u' xe'nabal, u' tikarib'al, u' ch'a'tem chik. Ta x-ch'a'tex, ta x-tzijox. K'a tz'inilik, k'a chamamik.`,
];

const KICHE_PARAGRAPHS_MEDIUM = [
  `Are u' paxik, u' c'aslemal ri', ri' u' tz'ibaxik. Wa'e' k'ut u' ch'a'tem, u' tzijoxik ri' chi'. Are u' xebal, u' tikarib'al, u' jek'al wuj. Waral k'ut xtzi'bax wi'. Ta' ch'a'tem, ta' tzijonem. Xa' u' ch'a'tem, u' tzijoxik.`,
  `K'a tz'inilik, k'a chamamik. K'a silan, k'a loman. K'a ca'n, k'a ch'a'n. K'a catz'in, k'a ca'lol. Xa' u' ch'a'tem, u' tzijoxik. K'a tz'inilik, k'a chamamik. K'a silan, k'a loman. Keje k'ut xax k'o wi ri kaqulja, ri' ch'umil, ri' q'ij.`,
  `Mawi k'o, mawi k'o jun winak, jun chicop, jun tz'i', jun ak', jun k'o, jun che', jun abaj, jun k'o, jun sivan, jun k'o, jun k'im, jun k'o. Xa' u' ch'a'tem, u' tzijoxik. Ta x-ch'a'tex, ta x-tzijox ri' nab'e tzij.`,
  `Xax k'o wi ri kaqulja, ri' ch'umil, ri' q'ij. K'a tz'inilik, k'a chamamik. K'a silan, k'a loman. Are k'ut u' xe'nabal, u' tikarib'al, u' ch'a'tem chik. Xa' u' ch'a'tem, u' tzijoxik ri' chi'.`,
  `Ta x-ch'a'tex, ta x-tzijox ri' nab'e tzij, nab'e ch'a'tem. K'a tz'inilik, k'a chamamik. Are u' paxik, u' c'aslemal ri'. Wa'e' k'ut u' ch'a'tem, u' tzijoxik ri' chi'. K'a silan, k'a loman.`,
];

const KICHE_PARAGRAPHS_LONG = [
  `Are u' paxik, u' c'aslemal ri', ri' u' tz'ibaxik. Wa'e' k'ut u' ch'a'tem, u' tzijoxik ri' chi'. Are u' xebal, u' tikarib'al, u' jek'al wuj. Waral k'ut xtzi'bax wi'. Ta' ch'a'tem, ta' tzijonem. Xa' u' ch'a'tem, u' tzijoxik. K'a tz'inilik, k'a chamamik. K'a silan, k'a loman. K'a ca'n, k'a ch'a'n. K'a catz'in, k'a ca'lol. Xa' u' ch'a'tem, u' tzijoxik.`,
  `K'a tz'inilik, k'a chamamik. K'a silan, k'a loman. K'a ca'n, k'a ch'a'n. K'a catz'in, k'a ca'lol. Xa' u' ch'a'tem, u' tzijoxik. K'a tz'inilik, k'a chamamik. K'a silan, k'a loman. Keje k'ut xax k'o wi ri kaqulja, ri' ch'umil, ri' q'ij. Are k'ut u' xe'nabal, u' tikarib'al, u' ch'a'tem chik. Ta x-ch'a'tex, ta x-tzijox ri' nab'e tzij, nab'e ch'a'tem.`,
  `Mawi k'o, mawi k'o jun winak, jun chicop, jun tz'i', jun ak', jun k'o, jun che', jun abaj, jun k'o, jun sivan, jun k'o, jun k'im, jun k'o. Xa' u' ch'a'tem, u' tzijoxik. Ta x-ch'a'tex, ta x-tzijox ri' nab'e tzij. Are u' paxik, u' c'aslemal ri', ri' u' tz'ibaxik. Wa'e' k'ut u' ch'a'tem, u' tzijoxik ri' chi'.`,
  `Xax k'o wi ri kaqulja, ri' ch'umil, ri' q'ij. K'a tz'inilik, k'a chamamik. K'a silan, k'a loman. Are k'ut u' xe'nabal, u' tikarib'al, u' ch'a'tem chik. Xa' u' ch'a'tem, u' tzijoxik ri' chi'. Ta x-ch'a'tex, ta x-tzijox. K'a ca'n, k'a ch'a'n. K'a catz'in, k'a ca'lol. Mawi k'o jun winak, jun chicop.`,
  `Ta x-ch'a'tex, ta x-tzijox ri' nab'e tzij, nab'e ch'a'tem. K'a tz'inilik, k'a chamamik. Are u' paxik, u' c'aslemal ri'. Wa'e' k'ut u' ch'a'tem, u' tzijoxik ri' chi'. K'a silan, k'a loman. Keje k'ut xax k'o wi ri kaqulja, ri' ch'umil. Mawi k'o, mawi k'o jun winak. Xa' u' ch'a'tem, u' tzijoxik.`,
];

type TextLength = 'S' | 'M' | 'L';

@Component({
  selector: 'app-ipsum-generator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  host: {
    'class': 'block',
  },
  template: `
    <!-- Parchment Container -->
    <div class="w-full max-w-[960px] relative group mx-auto">
      <div class="absolute -top-3 -left-3 w-12 h-12 border-t-4 border-l-4 border-mayan-gold rounded-tl-xl z-20"></div>
      <div class="absolute -top-3 -right-3 w-12 h-12 border-t-4 border-r-4 border-mayan-gold rounded-tr-xl z-20"></div>
      <div class="absolute -bottom-3 -left-3 w-12 h-12 border-b-4 border-l-4 border-mayan-gold rounded-bl-xl z-20"></div>
      <div class="absolute -bottom-3 -right-3 w-12 h-12 border-b-4 border-r-4 border-mayan-gold rounded-br-xl z-20"></div>

      <div class="parchment-texture rounded-xl shadow-2xl overflow-hidden border-4 border-mayan-stone relative">
        <div class="p-6 md:p-10 text-slate-900">
          <div class="flex flex-col md:flex-row gap-8 items-start">

            <!-- Left: Visual/Controls -->
            <div class="w-full md:w-1/3 flex flex-col gap-6">
              <div class="relative aspect-4/3 rounded-lg overflow-hidden border-2 border-mayan-stone/20 shadow-inner bg-white p-10">
                <img
                  [ngSrc]="randomSymbolImage()"
                  alt="Ancient Mayan symbol from the Popol Vuh"
                  fill
                  priority
                  class="object-contain hover:scale-105 transition-transform duration-700 scale-80"
                />
              </div>

              <div class="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-stone-300">
                <h3 class="text-mayan-stone font-bold text-sm mb-3 uppercase tracking-wide">Settings</h3>
                <div class="flex flex-col gap-3">
                  <label class="flex items-center justify-between text-sm font-medium text-stone-700 cursor-pointer">
                    <span>Paragraphs</span>
                    <select
                      class="bg-white border border-stone-300 rounded-md text-sm py-1 pl-2 pr-8 focus:border-mayan-teal focus:ring-mayan-teal"
                      [value]="paragraphCount()"
                      (change)="onParagraphChange($event)"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="5">5</option>
                    </select>
                  </label>
                  <label class="flex items-center justify-between text-sm font-medium text-stone-700">
                    <span>Length</span>
                    <div class="flex gap-1 bg-stone-200 rounded-lg p-1">
                      @for (size of sizes; track size) {
                        <button
                          [class]="textLength() === size
                            ? 'px-2 py-0.5 rounded bg-white shadow-sm text-xs font-bold text-stone-800 cursor-pointer'
                            : 'px-2 py-0.5 rounded hover:bg-white/50 text-xs font-bold text-stone-600 cursor-pointer'"
                          (click)="textLength.set(size)"
                        >{{ size }}</button>
                      }
                    </div>
                  </label>
                </div>
              </div>

              <button
                (click)="copyToClipboard()"
                class="w-full flex items-center justify-center gap-2 bg-mayan-stone hover:bg-mayan-stone/90 text-white py-3 rounded-xl font-bold transition-all shadow-lg active:scale-95 cursor-pointer"
              >
                <span class="material-symbols-outlined">{{ copied() ? 'check' : 'content_copy' }}</span>
                {{ copied() ? 'Copied!' : 'Copy to Clipboard' }}
              </button>
            </div>

            <!-- Right: Text Output -->
            <div class="w-full md:w-2/3">
              <div class="flex items-center justify-between mb-4 border-b-2 border-stone-300 pb-2">
                <h2 class="text-2xl font-bold text-mayan-stone font-display">Generated Extract</h2>
                <div class="flex gap-2">
                  <button
                    class="text-stone-500 hover:text-mayan-red transition-colors cursor-pointer"
                    title="Regenerate"
                    (click)="regenerate()"
                  >
                    <span class="material-symbols-outlined">refresh</span>
                  </button>
                  <button
                    class="text-stone-500 hover:text-mayan-teal transition-colors cursor-pointer"
                    title="Copy to Clipboard"
                    (click)="copyToClipboard()"
                  >
                    <span class="material-symbols-outlined">{{ copied() ? 'check' : 'content_copy' }}</span>
                  </button>
                  <button
                    class="text-stone-500 hover:text-mayan-teal transition-colors cursor-pointer"
                    title="Download TXT"
                    (click)="downloadText()"
                  >
                    <span class="material-symbols-outlined">download</span>
                  </button>
                </div>
              </div>

              <div class="max-w-none">
                @for (paragraph of displayedParagraphs(); track $index; let first = $first) {
                  <p class="text-lg leading-relaxed text-stone-800 mb-4 font-serif">
                    @if (first) {
                      <span class="text-4xl float-left mr-2 mt-[-6px] text-mayan-red font-display font-black">{{ paragraph.charAt(0) }}</span>{{ paragraph.slice(1) }}
                    } @else {
                      {{ paragraph }}
                    }
                  </p>
                }
              </div>

              <div class="mt-8 pt-6 border-t border-stone-300/50 flex items-center justify-between text-stone-500 text-sm">
                <span>Words: {{ wordCount() }}</span>
                <span>Characters: {{ charCount() }}</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- Generate Another Button -->
      <div class="flex justify-center mt-8">
        <button
          (click)="regenerate()"
          class="group flex items-center justify-center gap-3 bg-mayan-gold text-mayan-stone hover:bg-[#ffca28] active:bg-[#ffb300] px-8 py-3 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(255,193,7,0.3)] hover:shadow-[0_0_30px_rgba(255,193,7,0.5)] transition-all transform hover:-translate-y-1 cursor-pointer"
        >
          <span class="material-symbols-outlined text-2xl group-hover:rotate-180 transition-transform duration-500">autorenew</span>
          Generate Another
        </button>
      </div>
    </div>
  `,
})
export class IpsumGenerator {
  private readonly ipsumState = inject(IpsumStateService);

  readonly sizes: TextLength[] = ['S', 'M', 'L'];

  paragraphCount = signal(3);
  textLength = signal<TextLength>('S');
  copied = signal(false);

  randomSymbolImage = computed(() => {
    const trigger = this.ipsumState.generateTrigger();
    const index = (Math.abs(trigger * 2654435761) % 8) + 1;
    return `/images/mayan-symbol-${index}.jpeg`;
  });

  displayedParagraphs = computed(() => {
    this.ipsumState.generateTrigger();
    const pool = this.getPool();
    const count = this.paragraphCount();
    const shuffled = this.shuffle([...pool]);
    return shuffled.slice(0, count);
  });

  wordCount = computed(() => {
    return this.displayedParagraphs()
      .join(' ')
      .split(/\s+/)
      .filter(Boolean).length;
  });

  charCount = computed(() => {
    return this.displayedParagraphs().join(' ').length;
  });

  onParagraphChange(event: Event) {
    const value = +(event.target as HTMLSelectElement).value;
    this.paragraphCount.set(value);
  }

  regenerate() {
    this.ipsumState.triggerGeneration();
  }

  async copyToClipboard() {
    const text = this.displayedParagraphs().join('\n\n');
    await navigator.clipboard.writeText(text);
    this.copied.set(true);
    setTimeout(() => this.copied.set(false), 2000);
  }

  downloadText() {
    const text = this.displayedParagraphs().join('\n\n');
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mayan-ipsum.txt';
    a.click();
    URL.revokeObjectURL(url);
  }

  private getPool(): string[] {
    switch (this.textLength()) {
      case 'M':
        return KICHE_PARAGRAPHS_MEDIUM;
      case 'L':
        return KICHE_PARAGRAPHS_LONG;
      default:
        return KICHE_PARAGRAPHS_SHORT;
    }
  }

  private shuffle<T>(arr: T[]): T[] {
    let seed = this.ipsumState.generateTrigger() + 1;
    for (let i = arr.length - 1; i > 0; i--) {
      seed = (seed * 16807 + 0) % 2147483647;
      const j = seed % (i + 1);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}
