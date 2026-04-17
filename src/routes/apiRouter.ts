import { Router } from 'express';

import Paths from '@src/common/constants/Paths';

import UserRoutes from './UserRoutes';

import FeaturedTrackRoutes from './FeaturedTrackRoutes';

import PostRoutes from './PostRoutes';

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

apiRouter.use(Paths.Users._, userRouter);
apiRouter.use(Paths.FeaturedTracks._, featuredTrackRouter);
apiRouter.use(Paths.Posts._, postRouter);

/******************************************************************************
                                Export
******************************************************************************/

export default apiRouter;
