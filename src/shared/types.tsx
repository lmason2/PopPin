export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface College {
  name: string;
  coordinates: Coordinates;
}

export interface BarData {
  name: string;
  location: Coordinates;
  attendance: number;
}

export interface MapData {
  coordinates: Coordinates;
  zoom: number;
  bars: BarData[];
}

export interface SocialData {}

export interface SettingsData {}
