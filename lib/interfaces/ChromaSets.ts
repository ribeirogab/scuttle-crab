export interface ChromaSet {
  Champion: string;
  Skin: string;
  ReleaseDate: string;
  RP: number;
  Name: string;
  NumberOfChromas: number;
  UniqueSet: string;
  _pageName: string;
  _pageTitle: string;
  _pageNamespace: number;
  _pageID: number;
  _ID: number;
  ReleaseDate__precision: string | number;
}

type Field =
  | 'Champion'
  | 'Skin'
  | 'ReleaseDate'
  | 'RP'
  | 'Name'
  | 'NumberOfChromas'
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

export interface ChromaSetsRepository {
  find({ fields, where, order_by, limit }: FindRequest): Promise<ChromaSet[]>;
}
