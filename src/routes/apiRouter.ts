import { Router } from 'express';

import Paths from '@src/common/constants/Paths';

import UserRoutes from './UserRoutes';

import FeaturedTrackRoutes from './FeaturedTrackRoutes';

import PostRoutes from './PostRoutes';

import AboutRoutes from './AboutRoutes';

import LyricsRoutes from './LyricsRoutes';

import AlbumRoutes from './AlbumRoutes';

import GalleryImageRoutes from './GalleryImageRoutes';

import BandInfoRoutes from './BandInfoRoutes';

/******************************************************************************
                                Setup
******************************************************************************/

const apiRouter = Router();

// ----------------------- Add UserRouter --------------------------------- //

const userRouter = Router();

userRouter.get(Paths.Users.Get, UserRoutes.getAll);
userRouter.post(Paths.Users.Add, UserRoutes.add);
userRouter.put(Paths.Users.Update, UserRoutes.update);
userRouter.delete(Paths.Users.Delete, UserRoutes.delete);

const featuredTrackRouter = Router();

featuredTrackRouter.get(Paths.FeaturedTracks.Get, FeaturedTrackRoutes.getAll);

const postRouter = Router()

postRouter.get(Paths.Posts.Get, PostRoutes.getAll);

const aboutRouter = Router()

aboutRouter.get(Paths.About.Get, AboutRoutes.getAll);

const lyricsRouter = Router()

lyricsRouter.get(Paths.Lyrics.Get, LyricsRoutes.getAll);

const albumsRouter = Router();

albumsRouter.get(Paths.Albums.Get, AlbumRoutes.getAll);

const galleryImageRouter = Router();

galleryImageRouter.get(Paths.Gallery.Get, GalleryImageRoutes.getAll);

const bandInfoRouter = Router();

bandInfoRouter.get(Paths.BandInfo.Get, BandInfoRoutes.getAll);

apiRouter.use(Paths.Users._, userRouter);
apiRouter.use(Paths.FeaturedTracks._, featuredTrackRouter);
apiRouter.use(Paths.Posts._, postRouter);
apiRouter.use(Paths.About._, aboutRouter);
apiRouter.use(Paths.Lyrics._, lyricsRouter);
apiRouter.use(Paths.Albums._, albumsRouter);
apiRouter.use(Paths.Gallery._, galleryImageRouter);
apiRouter.use(Paths.BandInfo._, bandInfoRouter);

/******************************************************************************
                                Export
******************************************************************************/

export default apiRouter;
