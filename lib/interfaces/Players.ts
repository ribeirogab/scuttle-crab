export interface Player {
  ID: string;
  OverviewPage: string;
  Player: string;
  Image: string;
  Name: string;
  NativeName: string;
  NameAlphabet: string;
  NameFull: string;
  Country: string;
  Nationality: string[];
  NationalityPrimary: string;
  Age: number;
  Birthdate: string;
  ResidencyFormer: string;
  Team: string;
  Team2: string;
  CurrentTeams: string[];
  TeamSystem: string;
  Team2System: string;
  Residency: string;
  Role: string;
  FavChamps: string[];
  SoloqueueIds: string;
  Stream: string;
  Twitter: string;
  Facebook: string;
  Askfm: string;
  Reddit: string;
  Youtube: string;
  Weibo: string;
  Vk: string;
  Instagram: string;
  TeamLast: string;
  RoleLast: string;
  IsRetired: number;
  IsPersonality: number;
  IsSubstitute: number;
  IsTrainee: number;
  IsLowercase: number;
  IsAutoTeam: number;
  IsLowContent: number;
  _pageName: string;
  _pageTitle: string;
  _pageNamespace: number;
  _pageID: number;
  _ID: number;
  Birthdate__precision: number;
}

type Field =
  | 'ID'
  | 'OverviewPage'
  | 'Player'
  | 'Image'
  | 'Name'
  | 'NativeName'
  | 'NameAlphabet'
  | 'NameFull'
  | 'Country'
  | 'Nationality'
  | 'NationalityPrimary'
  | 'Age'
  | 'Birthdate'
  | 'ResidencyFormer'
  | 'Team'
  | 'Team2'
  | 'CurrentTeams'
  | 'TeamSystem'
  | 'Team2System'
  | 'Residency'
  | 'Role'
  | 'FavChamps'
  | 'SoloqueueIds'
  | 'Stream'
  | 'Twitter'
  | 'Facebook'
  | 'Askfm'
  | 'Reddit'
  | 'Youtube'
  | 'Weibo'
  | 'Vk'
  | 'Instagram'
  | 'TeamLast'
  | 'RoleLast'
  | 'IsRetired'
  | 'IsPersonality'
  | 'IsSubstitute'
  | 'IsTrainee'
  | 'IsLowercase'
  | 'IsAutoTeam'
  | 'IsLowContent'
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

export interface PlayersRepository {
  find({ fields, where, order_by, limit }: FindRequest): Promise<Player[]>;
}
