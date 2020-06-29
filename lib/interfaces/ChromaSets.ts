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

interface Field {
  name:
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
}

type Keys =
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

export interface ChromaSetsRepository {
  find({ fields, where, order_by, limit }: FindRequest): Promise<ChromaSet[]>;
}
