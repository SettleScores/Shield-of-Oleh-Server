import { z } from 'zod';

const SocialLinkSchema = z.object({
  platform: z.enum(['youtube', 'bandcamp', 'myspace', 'spotify', 'instagram']),
  url: z.url(),
});

export const BandInfoSchema = z.object({
  name: z.string().min(1),
  copyright: z.string().min(1),
  socialLinks: z.array(SocialLinkSchema),
});