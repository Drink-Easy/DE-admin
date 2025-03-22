export interface Wine {
  id: string;
  name: string;
  engName: string;
  variety: string;
  sort: string;
  price: string;
  region: string;
  country: string;
  date: string;
  vivinoRating: string;
  action1: string;
  action2: string;
}
export interface TitledWine {
  id: string;
  name: string;
  sort: string;
  region: string;
  country: string;
  date: string;
  action1: string;
  action2: string;
}
export interface User {
  id: string;
  name: string;
  userId: string;
  phone: string;
  status: string;
  joinDate: string;
  banEndDate: string;
  action: string;
}
export interface UserDetail {
  id: string;
  status: string;
  activityDate: string;
  gatheringDate: string;
}
