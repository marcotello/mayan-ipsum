import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home2',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'block',
  },
  template: `
<main class="flex flex-col items-center w-full px-4 md:px-10 lg:px-40 py-5">
<div class="flex flex-col w-full max-w-[960px] flex-1 gap-10">
<div class="@container w-full">
<div class="relative overflow-hidden rounded-xl">
<div class="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 items-center justify-center p-8 relative group" data-alt="Lush Mayan jungle with ancient ruins background" style='background-image: linear-gradient(rgba(17, 34, 24, 0.5) 0%, rgba(17, 34, 24, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBgwt-tkZD6xeHqGv-IxMMneKvtXRMr7OgYqAN8ZLbHDcgyHsC1BwqkJLaf1yY-LqtjwG4qoUkqw_Zf2rdDN9NStvQzb7cXTQIDXykaasfyI7Ih34sQSdGCIWc3MY0w9L3pUwt-pOykJjfrzTDTLRZ8Tp1xVBv90ngS4hKjE5wwe88nFvM85fqW273RntkC2GsLhURnJuCjFopY9-bbaDX9Hu8TZ8YFBuKrOtkOqksESOjkAwqZFOrrtAU1WNMBvsDkZLb4HnMxtg");'>
<div class="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-90"></div>
<div class="relative z-10 flex flex-col gap-4 text-center max-w-2xl">
<div class="flex justify-center mb-2">
<span class="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary uppercase tracking-wider">
<span class="material-symbols-outlined text-sm">history_edu</span>
                                            Popol Vuh Edition
                                        </span>
</div>
<h1 class="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl drop-shadow-lg">
                                        A Mayan Ipsum <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">Generator</span>
</h1>
<h2 class="text-slate-200 text-lg font-normal leading-relaxed @[480px]:text-xl max-w-lg mx-auto">
                                        Generate mystical placeholder text sourced directly from the sacred creation myth for your modern designs.
                                    </h2>
</div>
<div class="relative z-10 pt-4">
<button class="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 bg-primary text-background-dark text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary-dark hover:scale-105 transition-all shadow-lg shadow-primary/25 border-b-4 border-emerald-900 active:border-b-0 active:translate-y-1">
<span class="material-symbols-outlined mr-2">temp_preferences_custom</span>
<span class="truncate uppercase">Generate Text</span>
</button>
</div>
</div>
</div>
</div>
<div class="relative w-full rounded-2xl bg-surface-dark border border-border-dark overflow-hidden">
<div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div class="absolute bottom-0 left-0 w-64 h-64 bg-emerald-700/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
<div class="relative z-10 flex flex-col items-center justify-center gap-8 px-6 py-16 text-center">
<div class="flex flex-col gap-2">
<h2 class="text-white tracking-tight text-3xl font-bold leading-tight md:text-4xl">
                                    Try it now
                                </h2>
<p class="text-text-muted text-base font-normal">Enter the number of paragraphs you need for your project.</p>
</div>
<div class="w-full max-w-md">
<label class="flex flex-col w-full h-16 relative group">
<div class="flex w-full h-full items-stretch rounded-xl bg-background-dark border border-border-dark focus-within:border-primary transition-colors overflow-hidden">
<div class="flex items-center justify-center pl-4 text-text-muted">
<span class="material-symbols-outlined">format_paragraph</span>
</div>
<input class="flex w-full min-w-0 flex-1 resize-none bg-transparent text-white focus:outline-0 focus:ring-0 border-none h-full placeholder:text-text-muted/50 px-4 text-base" max="50" min="1" placeholder="3 paragraphs" type="number" value="3"/>
<div class="flex items-center justify-center pr-2 py-2">
<button class="flex h-full cursor-pointer items-center justify-center rounded-lg px-6 bg-primary text-background-dark text-sm font-bold hover:bg-primary-dark transition-colors">
                                                Generate
                                            </button>
</div>
</div>
</label>
</div>
</div>
</div>
<div class="flex flex-col gap-10 py-5 @container">
<div class="flex flex-col gap-4 text-center md:text-left">
<h2 class="text-white tracking-tight text-3xl font-bold leading-tight max-w-[720px]">
                                Why use Mayan Ipsum?
                            </h2>
<p class="text-text-muted text-base font-normal leading-normal max-w-[720px]">
                                Move away from standard Lorem Ipsum and embrace the rich cultural heritage of the Maya civilization.
                            </p>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
<div class="group flex flex-col gap-4 rounded-xl border border-border-dark bg-surface-dark p-6 transition-all hover:border-primary/50 hover:bg-surface-dark/80">
<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
<span class="material-symbols-outlined text-2xl">menu_book</span>
</div>
<div class="flex flex-col gap-2">
<h3 class="text-white text-lg font-bold leading-tight">Authentic Texts</h3>
<p class="text-text-muted text-sm font-normal leading-relaxed">
                                        Sourced directly from the Popol Vuh creation myth, preserving the original spirit.
                                    </p>
</div>
</div>
<div class="group flex flex-col gap-4 rounded-xl border border-border-dark bg-surface-dark p-6 transition-all hover:border-primary/50 hover:bg-surface-dark/80">
<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
<span class="material-symbols-outlined text-2xl">temple_hindu</span>
</div>
<div class="flex flex-col gap-2">
<h3 class="text-white text-lg font-bold leading-tight">Cultural Richness</h3>
<p class="text-text-muted text-sm font-normal leading-relaxed">
                                        Infuse your mockups with ancient history, myth, and deep cultural meaning.
                                    </p>
</div>
</div>
<div class="group flex flex-col gap-4 rounded-xl border border-border-dark bg-surface-dark p-6 transition-all hover:border-primary/50 hover:bg-surface-dark/80">
<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
<span class="material-symbols-outlined text-2xl">palette</span>
</div>
<div class="flex flex-col gap-2">
<h3 class="text-white text-lg font-bold leading-tight">Unique Aesthetic</h3>
<p class="text-text-muted text-sm font-normal leading-relaxed">
                                        Stand out with placeholder text that sparks curiosity and conversation.
                                    </p>
</div>
</div>
</div>
</div>
</div>
</main>
  `
})
export default class Home2 {
}
