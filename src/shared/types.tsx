export interface Coordinates {
  lat: number;
  long: number;
}

export interface College {
  name: string;
  coordinates: Coordinates;
}

export interface BarData {
  name: string;
  coordinates: Coordinates;
  attendance: number;
}

export interface MapData {
  coordinates: Coordinates;
  zoom: number;
  bars: BarData[];
}

export interface SocialData {}

export interface SettingsData {}
