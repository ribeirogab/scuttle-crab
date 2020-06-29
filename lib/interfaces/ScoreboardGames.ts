export interface ScoreboardGame {
  Tournament: string;
  Team1: string;
  Team2: string;
  WinTeam: string;
  LossTeam: string;
  DateTime_UTC: string;
  DST: string;
  Team1Score: number;
  Team2Score: number;
  Winner: number;
  Gamelength: string;
  Gamelength_Number: number;
  Team1Bans: string[];
  Team2Bans: string[];
  Team1Picks: string[];
  Team2Picks: string[];
  Team1Names: string[];
  Team2Names: string[];
  Team1Links: string[];
  Team2Links: string[];
  Team1Dragons: number;
  Team2Dragons: number;
  Team1Barons: number;
  Team2Barons: number;
  Team1Towers: number;
  Team2Towers: number;
  Team1Gold: number;
  Team2Gold: number;
  Team1Kills: number;
  Team2Kills: number;
  Team1RiftHeralds: number;
  Team2RiftHeralds: number;
  Team1Inhibitors: number;
  Team2Inhibitors: number;
  Patch: number;
  MatchHistory: string;
  VOD: string;
  N_Page: number;
  N_MatchInTab: string;
  N_GameInMatch: number;
  Gamename: string;
  OverviewPage: string;
  UniqueGame: string;
  UniqueLine: string;
  ScoreboardID_Wiki: string;
  ScoreboardID_Riot: string;
  Note1: string;
  Note2: string;
  Note3: string;
  Note4: string;
  _pageName: string;
  _pageTitle: string;
  _pageNamespace: number;
  _pageID: number;
  _ID: number;
  DateTime_UTC__precision: number;
}

interface Field {
  name:
    | 'Tournament'
    | 'Team1'
    | 'Team2'
    | 'WinTeam'
    | 'LossTeam'
    | 'DateTime_UTC'
    | 'DST'
    | 'Team1Score'
    | 'Team2Score'
    | 'Winner'
    | 'Gamelength'
    | 'Gamelength_Number'
    | 'Team1Bans'
    | 'Team2Bans'
    | 'Team1Picks'
    | 'Team2Picks'
    | 'Team1Names'
    | 'Team2Names'
    | 'Team1Links'
    | 'Team2Links'
    | 'Team1Dragons'
    | 'Team2Dragons'
    | 'Team1Barons'
    | 'Team2Barons'
    | 'Team1Towers'
    | 'Team2Towers'
    | 'Team1Gold'
    | 'Team2Gold'
    | 'Team1Kills'
    | 'Team2Kills'
    | 'Team1RiftHeralds'
    | 'Team2RiftHeralds'
    | 'Team1Inhibitors'
    | 'Team2Inhibitors'
    | 'Patch'
    | 'MatchHistory'
    | 'VOD'
    | 'N_Page'
    | 'N_MatchInTab'
    | 'N_GameInMatch'
    | 'Gamename'
    | 'OverviewPage'
    | 'UniqueGame'
    | 'UniqueLine'
    | 'ScoreboardID_Wiki'
    | 'ScoreboardID_Riot'
    | 'Note1'
    | 'Note2'
    | 'Note3'
    | 'Note4'
    | '_pageName'
    | '_pageTitle'
    | '_pageNamespace'
    | '_pageID'
    | '_ID';
}

type Keys =
  | 'Tournament'
  | 'Team1'
  | 'Team2'
  | 'WinTeam'
  | 'LossTeam'
  | 'DateTime_UTC'
  | 'DST'
  | 'Team1Score'
  | 'Team2Score'
  | 'Winner'
  | 'Gamelength'
  | 'Gamelength_Number'
  | 'Team1Bans'
  | 'Team2Bans'
  | 'Team1Picks'
  | 'Team2Picks'
  | 'Team1Names'
  | 'Team2Names'
  | 'Team1Links'
  | 'Team2Links'
  | 'Team1Dragons'
  | 'Team2Dragons'
  | 'Team1Barons'
  | 'Team2Barons'
  | 'Team1Towers'
  | 'Team2Towers'
  | 'Team1Gold'
  | 'Team2Gold'
  | 'Team1Kills'
  | 'Team2Kills'
  | 'Team1RiftHeralds'
  | 'Team2RiftHeralds'
  | 'Team1Inhibitors'
  | 'Team2Inhibitors'
  | 'Patch'
  | 'MatchHistory'
  | 'VOD'
  | 'N_Page'
  | 'N_MatchInTab'
  | 'N_GameInMatch'
  | 'Gamename'
  | 'OverviewPage'
  | 'UniqueGame'
  | 'UniqueLine'
  | 'ScoreboardID_Wiki'
  | 'ScoreboardID_Riot'
  | 'Note1'
  | 'Note2'
  | 'Note3'
  | 'Note4'
  | '_pageName'
  | '_pageTitle'
  | '_pageNamespace'
  | '_pageID'
  | '_ID';

export interface FindRequest {
  fields?: Field[];
  where?: {
    $AND?: { $LIKE?: { [key in Keys]?: string | number } };
    $OR?: { $LIKE?: { [key in Keys]?: string | number } };
  };
  order_by?: {
    field: Field;
    order: 'ASC' | 'DESC';
  };
  limit?: number;
}

export interface ScoreboardGamesRepository {
  find({
    fields,
    where,
    order_by,
    limit,
  }: FindRequest): Promise<ScoreboardGame[]>;
}
