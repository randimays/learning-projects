import type { User } from './User';
import type { Company } from './Company';

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  },
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(mapId: string) {
    const mapDiv = document.getElementById(mapId);

    if (!mapDiv) {
      throw new Error('no div found');
    }

    this.googleMap = new google.maps.Map(mapDiv, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      },
      mapId: 'TEST',
    });
  }

  addMarker(entity: Mappable) {
    const marker = new google.maps.marker.AdvancedMarkerElement({
      position: {
        lat: entity.location.lat,
        lng: entity.location.lng
      },
      map: this.googleMap
    })

    marker.addEventListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: entity.markerContent()
      });

      infoWindow.open(this.googleMap, marker);
    });
  }

  render() {
    return this.googleMap;
  }

}

