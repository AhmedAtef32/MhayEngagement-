import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

const MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.0581057500985!2d29.719747599999994!3d31.05575679999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f593c9b3baefbb%3A0xfc93a2aafcae7555!2sRadisson%20Blu%20Hotel%20%26%20Convention%20Center%2C%20Alexandria!5e1!3m2!1sen!2seg!4v1781124486148!5m2!1sen!2seg';

const DIRECTIONS_URL =
  'https://www.google.com/maps/place/Radisson+Blu+Hotel+%26+Convention+Center,+Alexandria/@31.0557568,29.7197476,17z/data=!3m1!4b1!4m6!3m5!1s0x14f593c9b3baefbb:0xfc93a2aafcae7555!8m2!3d31.0557568!4d29.7197476';

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
            Radisson Blu Hotel &amp; Convention Center
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
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          }

          <div
            class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8"
          >
            <div class="text-white">
              <h4 class="text-lg md:text-2xl font-serif font-bold mb-2">
                Radisson Blu Hotel &amp; Convention Center
              </h4>
              <p class="text-sm md:text-base text-gray-300 mb-3">
                Alexandria, Egypt
              </p>
              <div class="flex gap-4">
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

  ngOnInit() {
    this.mapEmbedUrl.set(
      this.sanitizer.bypassSecurityTrustResourceUrl(MAP_EMBED),
    );
  }
}
