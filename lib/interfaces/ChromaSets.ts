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

export interface FindRequest {
  order_by?: {
    field: Field;
    order: 'ASC' | 'DESC';
  };
  fields?: Field[];
  limit?: number;
}

export interface ChromaSetsRepository {
  find({ order_by, fields, limit }: FindRequest): Promise<ChromaSet[]>;
}
