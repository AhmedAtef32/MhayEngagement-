import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
const MAP_EMBED =
  'https://maps.google.com/maps?q=Royal%20Lamour%20Classic%2C%20Alexandria%2C%20Egypt&output=embed';
const DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=31.1855941,29.9154707';
@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      class="relative w-full py-20 md:py-32 px-6 sm:px-12 bg-white overflow-hidden"
    >
      <div class="max-w-6xl mx-auto mb-16">
        <div class="text-center">
          <h2
            class="text-4xl md:text-6xl font-arabic font-bold text-gold-700 mb-4"
          >
            Our Location
          </h2>
          <p class="text-gray-600 text-lg md:text-xl font-serif">
            Royal Lamour Classic
          </p>
        </div>
      </div>
      <div class="max-w-6xl mx-auto">
        <div class="relative rounded-3xl overflow-hidden shadow-2xl">
          @if (mapEmbedUrl()) {
            <iframe
              [src]="mapEmbedUrl()"
              width="100%"
              height="500"
              style="border: 0"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Royal Lamour Classic Location"
            ></iframe>
          }
          <div
            class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8"
          >
            <div class="text-white">
              <h4 class="text-lg md:text-2xl font-serif font-bold mb-2">
                Royal Lamour Classic
              </h4>
              <p class="text-sm md:text-base text-gray-300 mb-3">
                Alexandria, Egypt
              </p>
              <div class="flex flex-wrap gap-4">
                <a
                  [href]="directionsUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-4 md:px-6 py-2 md:py-3 bg-gold-500 hover:bg-gold-600 text-white font-serif tracking-wider uppercase text-xs md:text-sm rounded-full transition-all duration-300"
                >
                  Get Directions
                </a>
                <a
                  [href]="directionsUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-4 md:px-6 py-2 md:py-3 border-2 border-gold-500 text-gold-400 hover:bg-gold-500/10 font-serif tracking-wider uppercase text-xs md:text-sm rounded-full transition-all duration-300"
                >
                  Save Location
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './map.component.css',
})
export class MapComponent implements OnInit {
  private readonly sanitizer = inject(DomSanitizer);
  readonly mapEmbedUrl = signal<SafeResourceUrl | null>(null);
  readonly directionsUrl = DIRECTIONS_URL;
  ngOnInit(): void {
    this.mapEmbedUrl.set(
      this.sanitizer.bypassSecurityTrustResourceUrl(MAP_EMBED),
    );
  }
}
