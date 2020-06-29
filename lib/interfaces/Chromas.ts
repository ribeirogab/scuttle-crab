export interface Chroma {
  Name: string;
  Skin: string;
  Champion: string;
  IsBundleExclusive: string;
  IsLootExclusive: string;
  Special: string;
  ReleaseDate: string;
  BundleRP: string;
  RP: string;
  Hex1: string;
  Hex2: number;
  UniqueSet: string;
  _pageName: string;
  _pageTitle: string;
  _pageNamespace: number;
  _pageID: number;
  _ID: number;
  ReleaseDate__precision: string | number;
}

interface Field {
  name:
    | 'Name'
    | 'Skin'
    | 'Champion'
    | 'IsBundleExclusive'
    | 'IsLootExclusive'
    | 'Special'
    | 'ReleaseDate'
    | 'BundleRP'
    | 'RP'
    | 'Hex1'
    | 'Hex2'
    | 'UniqueSet'
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

export interface ChromasRepository {
  find({ order_by, fields, limit }: FindRequest): Promise<Chroma[]>;
}
