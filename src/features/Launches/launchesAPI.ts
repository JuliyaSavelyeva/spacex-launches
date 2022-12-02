import axios from 'axios';
import { PostLaunchData } from '../../models/launches';

const SPACEXAPI = 'https://api.spacexdata.com/v4/launches/query';

export const loadLaunches = ({ page, success, rocket, date }: PostLaunchData) => {
  const limit = rocket || date ? 200 : 20;
  const successQuery = typeof success === 'boolean' ? { success } : {};

  return axios.post(SPACEXAPI, {
    query: {
      upcoming: false,
      ...successQuery
    },
    options: {
      populate: {
        path: 'rocket',
        select: {
          name: 1
        }
      },
      page,
      limit,
      sort: {
        flight_number: -1
      }
    }
  });
};
