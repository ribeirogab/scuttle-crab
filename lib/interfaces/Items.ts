export interface Item {
  Name: string;
  Recipe: string[];
  Cost: string | number;
  TotalCost: string | number;
  AD: string | number;
  LifeSteal: string | number;
  Health: string | number;
  HPRegen: string | number;
  Armor: string | number;
  MR: string | number;
  AttackDamage: string | number;
  Crit: string | number;
  AttackSpeed: string | number;
  ArPen: string | number;
  AttackRange: string | number;
  Mana: string | number;
  ManaRegen: string | number;
  Energy: string | number;
  EnergyRegen: string | number;
  AP: string | number;
  CDR: string | number;
  SpellVamp: string | number;
  MPen: string | number;
  Movespeed: string | number;
  Tenacity: string | number;
  GoldGen: string | number;
  OnHit: string | number;
  BonusHP: string | number;
  Healing: string | number;
  _pageName: string;
  _pageTitle: string;
  _pageNamespace: number;
  _pageID: number;
  _ID: number;
}

type Field =
  | 'Name'
  | 'Recipe'
  | 'Cost'
  | 'TotalCost'
  | 'AD'
  | 'LifeSteal'
  | 'Health'
  | 'HPRegen'
  | 'Armor'
  | 'MR'
  | 'AttackDamage'
  | 'Crit'
  | 'AttackSpeed'
  | 'ArPen'
  | 'AttackRange'
  | 'Mana'
  | 'ManaRegen'
  | 'Energy'
  | 'EnergyRegen'
  | 'AP'
  | 'CDR'
  | 'SpellVamp'
  | 'MPen'
  | 'Movespeed'
  | 'Tenacity'
  | 'GoldGen'
  | 'OnHit'
  | 'BonusHP'
  | 'Healing'
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

export interface ItemsRepository {
  find({ fields, where, order_by, limit }: FindRequest): Promise<Item[]>;
}
