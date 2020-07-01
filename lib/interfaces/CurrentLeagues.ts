export interface CurrentLeague {
  Event: string;
  Page: string;
  Priority: string;
  _pageName: string;
  _pageTitle: string;
  _pageNamespace: string;
  _pageID: string;
  _ID: string;
}

type Field =
  | 'Event'
  | 'Page'
  | 'Priority'
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

export interface CurrentLeaguesRepository {
  find({
    fields,
    where,
    order_by,
    limit,
  }: FindRequest): Promise<CurrentLeague[]>;
}
