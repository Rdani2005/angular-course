import {
  signal,
  viewChild,
  Component,
  ElementRef,
  AfterViewInit
} from '@angular/core';

import { v4 as UUIDV4 } from 'uuid';

import mapboxgl, { LngLatLike, Map, MapMouseEvent, Marker as MapboxMarker } from 'mapbox-gl';

import { environment } from '../../../environments/environment';
import { JsonPipe } from '@angular/common';

mapboxgl.accessToken = environment.mapboxKey;

interface Marker {
  id: string;
  mapboxMarker: MapboxMarker;
}

@Component({
  selector: 'app-markers-page',
  imports: [JsonPipe],
  templateUrl: './markers-page.component.html',
  styles: ``
})
export class MarkersPageComponent implements AfterViewInit {
  divElement = viewChild<ElementRef>("map");
  markers = signal<Array<Marker>>([])

  map = signal<Map | null>(null);

  async ngAfterViewInit(): Promise<void> {
    if (!this.divElement()?.nativeElement) return;
    await new Promise((resolve) => setTimeout(resolve, 80))

    const element = this.divElement()!.nativeElement;

    const map = new mapboxgl.Map({
      container: element,
      center: [-84.025830, 9.982600],
      zoom: 11,
      style: 'mapbox://styles/mapbox/streets-v12',
    })

    this.mapListeners(map);
  }

  mapListeners(map: Map) {
    map.on('click', (event) => this.mapClick(event));
    this.map.set(map);
  }

  mapClick(event: MapMouseEvent) {
    if (!this.map()) return;

    const map = this.map()!;
    const coords = event.lngLat;
    const color = '#xxxxxx'.replace(/x/g, (_) =>
      ((Math.random() * 16) | 0).toString(16)
    );

    const mapboxMarker = new mapboxgl.Marker({
      color: color,
    })
      .setLngLat(coords)
      .addTo(map);

    const newMarker: Marker = {
      id: UUIDV4(),
      mapboxMarker
    };

    this.markers.update((markers) => [newMarker, ...markers])
  }

  flyToMarker(lngLat: LngLatLike ) {
    if (!this.map()) return;
    this.map()?.flyTo({
      center: lngLat,
    })
  }

  deleteMarker(marker: Marker) {
    if (!this.map()) return;
    const map = this.map()!;

    marker.mapboxMarker.remove();
    this.markers.set(this.markers().filter(m => m.id !== marker.id));
  }
}
