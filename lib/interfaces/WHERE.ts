export interface Where {
  $AND?: {
    $LIKE?: {
      [key in string]: string | number;
    };
  };
  $OR?: { $LIKE?: { [key in string]: string | number } };
}
