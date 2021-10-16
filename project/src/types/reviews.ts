export type Users = {
  avatarUrl: string,
  id: number,
  isPro: boolean,
  name: string,
}

export type Reviews = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: Users,
}