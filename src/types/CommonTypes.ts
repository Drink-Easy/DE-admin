export interface WineDataTypes {
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

export interface UserDataTypes {
  id: string;
  name: string;
  userId: string;
  phone: string;
  status: string;
  joinDate: string;
  banEndDate: string;
  action: string;
}

export interface UserDetailDataTypes {
  id: string;
  status: string;
  activityDate: string;
  gatheringDate: string;
}

export interface WineRow {
  id: string;
  wineId: string;
  name: string;
  sort: string;
  region: string;
  country: string;
  variety: string;
  createdAt: string;
}

export interface UserRow {
  id: string;
  userNum: string;
  name: string;
  userId: string;
  phone: string;
  status: string;
  createdAt: string;
  banEndDate: string;
}
