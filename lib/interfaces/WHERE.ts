interface Query {
  $LIKE?: {
    [key in string]?: string | number;
  };
}

export interface Where extends Query {
  $AND?: Query[];
  $OR?: Query[];
}
