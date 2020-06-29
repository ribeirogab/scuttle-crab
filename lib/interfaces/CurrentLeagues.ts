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

export interface FindRequest {
  order_by?: {
    field: Field;
    order: 'ASC' | 'DESC';
  };
  fields?: Field[];
  limit?: number;
}

export interface CurrentLeaguesRepository {
  find({ order_by, fields, limit }: FindRequest): Promise<CurrentLeague[]>;
}
