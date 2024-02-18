export type DataItem = {
  name: string;
};

export type MetadataItem = {
  msg: string;
  status: number;
  response_id: string;
};

export type Pagination = {
  count: number;
  offset: number;
};

export type Data = {
  data: DataItem[];
  meta: MetadataItem;
  pagination: Pagination;
};
