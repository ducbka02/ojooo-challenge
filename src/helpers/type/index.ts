import { ImageSourcePropType } from 'react-native'

export interface Portion {
  id: number
}

export interface User {
  id: number
  email: string
  password: string
  first_name: string
  last_name: string
  active: boolean
}

export interface HomeCard {
  icon: ImageSourcePropType
  title: string
  description: string
}

export interface Job {
  id: number
  name: string
  type: string
  center: string
  estimate: string
  attachment: string
  address: string
  match_rate: number
  discipline: string
  specialty: string
  duration: string
  shift: string
  license: string
  license_state: string
}

export interface City {
  id: number
  name: string
  attachment: string
  address1: string
  address2: string
  matches: number
  rate: string
}

export interface ServerData {
  users: Array<User>
  jobs: Array<Job>
  citys: Array<City>
}
