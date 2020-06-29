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

interface Field {
  name:
    | 'Event'
    | 'Page'
    | 'Priority'
    | '_pageName'
    | '_pageTitle'
    | '_pageNamespace'
    | '_pageID'
    | '_ID';
}

type Keys =
  | 'Event'
  | 'Page'
  | 'Priority'
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

export interface CurrentLeaguesRepository {
  find({
    fields,
    where,
    order_by,
    limit,
  }: FindRequest): Promise<CurrentLeague[]>;
}
