export interface Champion {
  Name?: string;
  Title?: string;
  ReleaseDate?: string;
  BE?: number;
  RP?: number;
  Attributes?: string[];
  Resource?: string;
  RealName?: string;
  Health?: number;
  HPLevel?: number;
  HPDisplay?: number;
  HPLevelDisplay?: number;
  HPRegen?: number;
  HPRegenLevel?: number;
  Mana?: number | string;
  ManaLevel?: number | string;
  ManaRegen?: number | string;
  ManaRegenLevel?: number | string;
  Energy?: number | string;
  EnergyRegen?: number | string;
  Movespeed?: number;
  AttackDamage?: number;
  ASLevel?: number;
  AttackRange?: number;
  Armor?: number;
  ArmorLevel?: number;
  MagicResist?: number;
  MagicResistLevel?: number;
  Pronoun?: string;
  KeyDdragon?: string;
  KeyInteger?: string;
  _pageName?: string;
  _pageTitle?: string;
  _pageNamespace?: number;
  _pageID?: number;
  _ID?: number;
  ReleaseDate__precision: number;
}

type Field =
  | 'Name'
  | 'Title'
  | 'ReleaseDate'
  | 'BE'
  | 'RP'
  | 'Attributes'
  | 'Resource'
  | 'RealName'
  | 'Health'
  | 'HPLevel'
  | 'HPDisplay'
  | 'HPLevelDisplay'
  | 'HPRegen'
  | 'HPRegenLevel'
  | 'Mana'
  | 'ManaLevel'
  | 'ManaRegen'
  | 'ManaRegenLevel'
  | 'Energy'
  | 'EnergyRegen'
  | 'Movespeed'
  | 'AttackDamage'
  | 'ASLevel'
  | 'AttackRange'
  | 'Armor'
  | 'ArmorLevel'
  | 'MagicResist'
  | 'MagicResistLevel'
  | 'Pronoun'
  | 'KeyDdragon'
  | 'KeyInteger'
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

export interface ChampionsRepository {
  find({ fields, where, order_by, limit }: FindRequest): Promise<Champion[]>;
}
