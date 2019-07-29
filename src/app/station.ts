export interface Geometry {
  coordinates: number[];
  type: string;
}

export interface Properties {
  free_racks: string;
  bikes: string;
  label: string;
  bike_racks: string;
  updated: string;
}

export interface Feature {
  geometry: Geometry;
  id: string;
  type: string;
  properties: Properties;
}

export interface Properties2 {
  code: string;
}

export interface Crs {
  type: string;
  properties: Properties2;
}

export interface Station {
  features: Feature[];
  crs: Crs;
  type: string;
}
