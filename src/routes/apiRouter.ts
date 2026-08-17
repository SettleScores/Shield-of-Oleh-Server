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

import { validate } from '@src/middleware/validator';

import { BandInfoSchema } from '@src/services/band_info/bandInfo.schema';

import UploadRoutes from './UploadRoutes';
import { uploadMiddleware } from '@src/middleware/uploadMiddleware';

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
featuredTrackRouter.put(Paths.FeaturedTracks.Put, FeaturedTrackRoutes.putFeatured);
featuredTrackRouter.put(Paths.FeaturedTracks.PutOne, FeaturedTrackRoutes.putOne);

const postRouter = Router()

postRouter.get(Paths.Posts.Get, PostRoutes.getAll);
postRouter.get(Paths.Posts.GetOne, PostRoutes.getOne);
postRouter.post(Paths.Posts.Post, PostRoutes.post);
postRouter.delete(Paths.Posts.Delete, PostRoutes.deletee);
postRouter.put(Paths.Posts.Delete, PostRoutes.put);

const aboutRouter = Router()

aboutRouter.get(Paths.About.Get, AboutRoutes.getAll);
aboutRouter.put(Paths.About.Put, AboutRoutes.putt);

const lyricsRouter = Router()

lyricsRouter.get(Paths.Lyrics.Get, LyricsRoutes.getAll);
lyricsRouter.get(Paths.Lyrics.GetOne, LyricsRoutes.getOne);
lyricsRouter.post(Paths.Lyrics.Post, LyricsRoutes.post);
lyricsRouter.delete(Paths.Lyrics.Delete, LyricsRoutes.deletee);
lyricsRouter.put(Paths.Lyrics.Put, LyricsRoutes.putt);

const albumsRouter = Router();

albumsRouter.get(Paths.Albums.Get, AlbumRoutes.getAll);
albumsRouter.post(Paths.Albums.Post, AlbumRoutes.post);
albumsRouter.put(Paths.Albums.Put, AlbumRoutes.putt);
albumsRouter.delete(Paths.Albums.Delete, AlbumRoutes.deletee);

const galleryImageRouter = Router();

galleryImageRouter.get(Paths.Gallery.Get, GalleryImageRoutes.getAll);
galleryImageRouter.post(Paths.Gallery.Post, GalleryImageRoutes.post);
galleryImageRouter.delete(Paths.Gallery.Delete, GalleryImageRoutes.deletee);

const bandInfoRouter = Router();

bandInfoRouter.get(Paths.BandInfo.Get, BandInfoRoutes.getAll);
bandInfoRouter.put(Paths.BandInfo.Put, validate(BandInfoSchema), BandInfoRoutes.putt); /// TODO Extend Others with this Zod validate Too!

const uploadRouter = Router();

uploadRouter.post(Paths.Uploads.Post, uploadMiddleware.single('file'), UploadRoutes.upload);

apiRouter.use(Paths.Users._, userRouter);
apiRouter.use(Paths.FeaturedTracks._, featuredTrackRouter);
apiRouter.use(Paths.Posts._, postRouter);
apiRouter.use(Paths.About._, aboutRouter);
apiRouter.use(Paths.Lyrics._, lyricsRouter);
apiRouter.use(Paths.Albums._, albumsRouter);
apiRouter.use(Paths.Gallery._, galleryImageRouter);
apiRouter.use(Paths.BandInfo._, bandInfoRouter);
apiRouter.use(Paths.Uploads._, uploadRouter);

/******************************************************************************
                                Export
******************************************************************************/

export default apiRouter;
