export interface IOwner {
  account_id: number;
  display_name: string;
  link: string;
  profile_image: string;
  reputation: number;
  user_id: number;
  user_type: string;
}

export interface Items {
  body: string;
  answer_count: number;
  content_license: string;
  creation_date: number;
  is_answered: boolean;
  last_activity_date: number;
  last_edit_date: number;
  link: string;
  owner: IOwner;
  question_id: number;
  score: number;
  tags: string[];
  title: string;
  view_count: number;
}

export interface IData {
  has_more: boolean;
  items: Items[];
  quota_max: number;
  quota_remaining: number;
}

export interface IState {
  status: string;
  error: null;
  data: IData;
}