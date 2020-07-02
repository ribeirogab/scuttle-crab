export interface MatchSchedule {
  Team1: string;
  Team2: string;
  Team1Final: string;
  Team2Final: string;
  Winner: string;
  Team1Points: string;
  Team2Points: string;
  Team1PointsTB: string;
  Team2PointsTB: string;
  Team1Score: string;
  Team2Score: string;
  Team1Poster: string;
  Team2Poster: string;
  Team1Advantage: string;
  Team2Advantage: string;
  FF: string;
  Player1: string;
  Player2: string;
  MatchDay: number;
  'DateTime UTC': string;
  HasTime: number;
  DST: string;
  IsFlexibleStart: number;
  IsReschedulable: string;
  OverrideAllowPredictions: number;
  IsTiebreaker: number;
  OverviewPage: string;
  ShownName: string;
  ShownRound: string;
  BestOf: 1;
  Round: string;
  Phase: string;
  N_MatchInPage: number;
  Tab: string;
  'N MatchInTab': number;
  'N TabInPage': number;
  'N Page': number;
  Patch: string;
  Hotfix: string;
  Disabled: string[];
  PatchFootnote: string;
  InitialN_MatchInTab: number;
  InitialPageAndTab: string;
  GroupName: string;
  Team1From: string;
  Team2From: string;
  Team1FromResult: string;
  Team2FromResult: string;
  Stream: string;
  StreamDisplay: string;
  Venue: string;
  CastersPBP: string;
  CastersColor: string;
  Casters: string[];
  MVP: string;
  MVPPoints: number;
  VodInterview: string;
  VodHighlights: string;
  InterviewWith: string[];
  Recap: string;
  Reddit: string;
  PageAndTeam1: string;
  PageAndTeam2: string;
  Team1Footnote: string;
  Team2Footnote: string;
  Footnote: string;
  UniqueMatch: string;
  _pageName: string;
  _pageTitle: string;
  _pageNamespace: number;
  _pageID: number;
  _ID: number;
  'DateTime UTC__precision': number;
}

type Field =
  | 'Team1'
  | 'Team2'
  | 'Team1Final'
  | 'Team2Final'
  | 'Winner'
  | 'Team1Points'
  | 'Team2Points'
  | 'Team1PointsTB'
  | 'Team2PointsTB'
  | 'Team1Score'
  | 'Team2Score'
  | 'Team1Poster'
  | 'Team2Poster'
  | 'Team1Advantage'
  | 'Team2Advantage'
  | 'FF'
  | 'Player1'
  | 'Player2'
  | 'MatchDay'
  | 'DateTime_UTC'
  | 'HasTime'
  | 'DST'
  | 'IsFlexibleStart'
  | 'IsReschedulable'
  | 'OverrideAllowPredictions'
  | 'IsTiebreaker'
  | 'OverviewPage'
  | 'ShownName'
  | 'ShownRound'
  | 'BestOf'
  | 'Round'
  | 'Phase'
  | 'N_MatchInPage'
  | 'Tab'
  | 'N_MatchInTab'
  | 'N_TabInPage'
  | 'N_Page'
  | 'Patch'
  | 'Hotfix'
  | 'Disabled'
  | 'PatchFootnote'
  | 'InitialN_MatchInTab'
  | 'InitialPageAndTab'
  | 'GroupName'
  | 'Team1From'
  | 'Team2From'
  | 'Team1FromResult'
  | 'Team2FromResult'
  | 'Stream'
  | 'StreamDisplay'
  | 'Venue'
  | 'CastersPBP'
  | 'CastersColor'
  | 'Casters'
  | 'MVP'
  | 'MVPPoints'
  | 'VodInterview'
  | 'VodHighlights'
  | 'InterviewWith'
  | 'Recap'
  | 'Reddit'
  | 'PageAndTeam1'
  | 'PageAndTeam2'
  | 'Team1Footnote'
  | 'Team2Footnote'
  | 'Footnote'
  | 'UniqueMatch'
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

export interface MatchScheduleRepository {
  find({
    fields,
    where,
    order_by,
    limit,
  }: FindRequest): Promise<MatchSchedule[]>;
}
