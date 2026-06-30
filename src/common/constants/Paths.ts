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
    Post: '',
    Delete: '/:slug',
    Put: '/:slug',
  },
  About: {
    _: '/about',
    Get: '',
  },
  Lyrics: {
    _: '/lyrics',
    Get: '',
    GetOne: '/:slug',
    Delete: '/:slug',
    Put: '/:slug',
  },
  Albums: {
    _: '/albums',
    Get: '',
    Post: '',
  },
  Gallery: {
    _: '/gallery',
    Get: '',
    Post: '',
    Delete: '/:slug',
  },
  BandInfo: {
    _: '/band-info',
    Get: '',
    Put: '',
  },
  Uploads: {
    _: '/uploads',
    Post: '',
  },
} as const;

export const JetPaths = jetPaths(Paths);
export default Paths;
