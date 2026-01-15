import { AfterViewInit, Component, ElementRef, input, signal, viewChild, WritableSignal } from '@angular/core';
import mapboxgl, { Map } from "mapbox-gl";
import { environment } from '../../../../environments/environment';

mapboxgl.accessToken = environment.mapboxKey;

@Component({
  selector: 'app-mini-map',
  imports: [],
  templateUrl: './mini-map.component.html',
  styles: `
    div {
      width: 100%;
      height: 260px;
    }
  `
})
export class MiniMapComponent implements AfterViewInit {
  divElement = viewChild<ElementRef>('map');

  map: WritableSignal<Map | null> = signal<Map | null>(null);

  lngLat = input.required<{lng: number, lat: number}>();
  zoom = input<number>(14);



  async ngAfterViewInit(): Promise<void> {
    if (!this.divElement()?.nativeElement) return;
    await new Promise((resolve) => setTimeout(resolve, 80));

    const element = this.divElement()!.nativeElement;

    const map: Map = new mapboxgl.Map({
      container: element,
      style: "mapbox://styles/mapbox/streets-v12",
      center: this.lngLat(),
      zoom: this.zoom(),
      interactive: false,
    });

    new mapboxgl.Marker().setLngLat(this.lngLat()).addTo(map);

    this.mapListeners(map);
  }

  mapListeners(map: Map) {
    this.map.set(map);
  }
}
