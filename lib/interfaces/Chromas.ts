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

type Field =
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

export interface ChromasRepository {
  find({ fields, where, order_by, limit }: FindRequest): Promise<Chroma[]>;
}
