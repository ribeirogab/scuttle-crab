export interface ExternalContent {
  Title: string;
  URL: string;
  ContentType: string;
  MediaType: string;
  Language: string;
  Players: string[];
  Tournaments: string[];
  Teams: string[];
  Date: string;
  Year: number;
  Publication: string;
  'N ItemInDate': number;
  Authors: string[];
  Translators: string;
  Series: string;
  SeriesSeason: string;
  SeriesSeasonNumber: string;
  _pageName: string;
  _pageTitle: string;
  _pageNamespace: number;
  _pageID: number;
  _ID: number;
  Date__precision: number;
}

type Field =
  | 'Title'
  | 'URL'
  | 'ContentType'
  | 'MediaType'
  | 'Language'
  | 'Players'
  | 'Tournaments'
  | 'Teams'
  | 'Date'
  | 'Year'
  | 'Publication'
  | 'N_ItemInDate'
  | 'Authors'
  | 'Translators'
  | 'Series'
  | 'SeriesSeason'
  | 'SeriesSeasonNumber'
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

export interface ExternalContentRepository {
  find({
    fields,
    where,
    order_by,
    limit,
  }: FindRequest): Promise<ExternalContent[]>;
}
