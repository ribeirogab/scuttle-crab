export interface Disambiguation {
  FinalLocation: string | number;
  Term: string;
  DisambigType: string;
  'N LineInPage': number;
  DisambigID: string;
  _pageName: string;
  _pageTitle: string;
  _pageNamespace: number;
  _pageID: number;
  _ID: number;
}

type Field =
  | 'FinalLocation'
  | 'Term'
  | 'DisambigType'
  | 'N_LineInPage'
  | 'DisambigID'
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

export interface DisambiguationsRepository {
  find({
    fields,
    where,
    order_by,
    limit,
  }: FindRequest): Promise<Disambiguation[]>;
}
