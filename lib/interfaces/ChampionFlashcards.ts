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

type Field =
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

interface Query {
  $LIKE?: {
    [key in Field]?: string | number;
  };
}

interface Where extends Query {
  $AND?: Query[];
  $OR?: Query[];
}

export interface FindRequest {
  fields?: Field[];
  where?: Where;
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
