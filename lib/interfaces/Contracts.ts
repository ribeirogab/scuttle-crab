export interface Contract {
  Player: string | number;
  Team: string;
  ContractEnd: string;
  IsRemoval: string;
  NewsId: string;
  _pageName: string;
  _pageTitle: string;
  _pageNamespace: number;
  _pageID: number;
  _ID: number;
  ContractEnd__precision: number;
}

type Field =
  | 'Player'
  | 'Team'
  | 'ContractEnd'
  | 'IsRemoval'
  | 'NewsId'
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

export interface ContractsRepository {
  find({ fields, where, order_by, limit }: FindRequest): Promise<Contract[]>;
}
