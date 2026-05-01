import jetPaths from 'jet-paths';

const Paths = {
  _: '/api',
  Users: {
    _: '/users',
    Get: '/all',
    Add: '/add',
    Update: '/update',
    Delete: '/delete/:id',
  },
  FeaturedTracks: {
    _: '/tracks',
    Get: '/featured',
  },
  Posts: {
    _: '/posts',
    Get: '',
    GetOne: '/:slug',
  },
  About: {
    _: '/about',
    Get: '',
  },
  Lyrics: {
    _: '/lyrics',
    Get: '',
    GetOne: '/:slug',
  },
  Albums: {
    _: '/albums',
    Get: '',
  },
  Gallery: {
    _: '/gallery',
    Get: '',
  },
  BandInfo: {
    _: '/band-info',
    Get: '',
  },
} as const;

export const JetPaths = jetPaths(Paths);
export default Paths;
