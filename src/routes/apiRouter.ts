import { Router } from 'express';

import Paths from '@src/common/constants/Paths';

import UserRoutes from './UserRoutes';

import FeaturedTrackRoutes from './FeaturedTrackRoutes';

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

apiRouter.use(Paths.Users._, userRouter);
apiRouter.use(Paths.FeaturedTracks._, featuredTrackRouter);

/******************************************************************************
                                Export
******************************************************************************/

export default apiRouter;
