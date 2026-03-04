export interface Parkolas {
  id?: number;
  jarmu_id: number | null;
  parkolo_id: number;
  parkolas_kezdete: string | null; // datetime
  parkolas_vege: string | null;    // datetime
  parkolas_idotartama: number | null;
}