import { ValueType } from './common';

export type LaunchType = {
  docs: {
    flightNumber: number;
    mission: string;
    rocket: string;
    launchDate: string;
    success: boolean;
    details: string;
    img: string;
    id: number;
  }[];
  totalPages: number;
  totalDocs: number;
}

export type PostLaunchData = {
  page: number;
  success: ValueType | boolean;
  rocket: ValueType;
  date: ValueType;
}
