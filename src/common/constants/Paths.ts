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
    Put: '/featured',
    PutOne: '/:id',
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
    Put: '',
  },
  Lyrics: {
    _: '/lyrics',
    Get: '',
    GetOne: '/:slug',
    Post: '',
    Delete: '/:slug',
    Put: '/:slug',
  },
  Albums: {
    _: '/albums',
    Get: '',
    Post: '',
    Put: '/:id',
    Delete: '/:id',
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
