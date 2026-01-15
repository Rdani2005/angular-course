import {
  signal,
  viewChild,
  AfterViewInit,
  Component,
  ElementRef,
  WritableSignal,
  effect,
} from '@angular/core';
import mapboxgl, { Map } from 'mapbox-gl';
import { DecimalPipe, JsonPipe } from '@angular/common';
import { environment } from '../../../environments/environment';

mapboxgl.accessToken = environment.mapboxKey;

interface Coordinates {
    lng: number;
    lat: number;
}

@Component({
  selector: 'app-fullscreen-map-page',
  imports: [DecimalPipe, JsonPipe],
  templateUrl: './fullscreen-map-page.component.html',
  styles: `
    div {
      width: 100vw;
      height: calc(100vh - 64px);
    }
  `
})

export class FullscreenMapPageComponent implements AfterViewInit {
  divElement = viewChild<ElementRef>("map");
  zoom = signal(14);

  map: WritableSignal<Map | null> = signal<Map | null>(null);
  coordinates: WritableSignal<Coordinates> = signal<Coordinates>({
    lng: -84.025830,
    lat: 9.982600,
  })

  async ngAfterViewInit(): Promise<void> {
    if (!this.divElement()?.nativeElement) return;

    await new Promise((resolve) => setTimeout(resolve, 80))

    const element = this.divElement()!.nativeElement;

    const map = new mapboxgl.Map({
      container: element,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [
        this.coordinates().lng,
        this.coordinates().lat,
      ],
      zoom: this.zoom(),
    })

    this.mapListeners(map);
  }



  mapListeners(map: Map) {
    map.on('zoomend', (event) => {
      const newZoom = event.target.getZoom();
      this.zoom.set(newZoom)
    });

    map.on('moveend', () => {
      const center = map.getCenter();
      this.coordinates.set(center);
    });

    map.addControl(new mapboxgl.FullscreenControl());
    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.ScaleControl());


    this.map.set(map);
  }

  zoomEffect = effect(() => {
    if (!this.map()) return;

    this.map()?.zoomTo(this.zoom());
  });
}
