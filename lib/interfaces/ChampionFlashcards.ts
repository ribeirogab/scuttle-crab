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

type Keys =
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

export interface FindRequest {
  fields?: Field[];
  where?: {
    $AND?: { $LIKE: { [key in Keys]?: string | number } };
    $OR?: { $LIKE: { [key in Keys]?: string | number } };
  };
  order_by?: {
    field: Field;
    order: 'ASC' | 'DESC';
  };
  limit?: number;
}

export interface ChampionFlashcardsRepository {
  find({
    fields,
    where,
    order_by,
    limit,
  }: FindRequest): Promise<ChampionFlashcard[]>;
}
