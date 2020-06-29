export interface ChampionFlashcard {
  Year: number;
  Champion: string;
  ChampionRange: string;
  DamageType: string;
  CCLevel: number;
  BurstLevel: number;
  SustainedLevel: number;
  TankLevel: number;
  Goal: string;
  Strengths: string;
  Weaknesses: string;
  Ultimate: string;
  Mechanic: string;
  Classes: string[];
  Roles: string;
  _pageName: string;
  _pageTitle: string;
  _pageNamespace: number;
  _pageID: number;
  _ID: number;
}

interface Field {
  name:
    | 'Year'
    | 'Champion'
    | 'ChampionRange'
    | 'DamageType'
    | 'CCLevel'
    | 'BurstLevel'
    | 'SustainedLevel'
    | 'TankLevel'
    | 'Goal'
    | 'Strengths'
    | 'Weaknesses'
    | 'Ultimate'
    | 'Mechanic'
    | 'Classes'
    | 'Roles'
    | '_pageName'
    | '_pageTitle'
    | '_pageNamespace'
    | '_pageID'
    | '_ID';
}

export interface FindRequest {
  order_by?: {
    field: Field;
    order: 'ASC' | 'DESC';
  };
  fields?: Field[];
  limit?: number;
}

export interface ChampionFlashcardsRepository {
  find({ order_by, fields, limit }: FindRequest): Promise<ChampionFlashcard[]>;
}
