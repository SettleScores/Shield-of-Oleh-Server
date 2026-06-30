export interface SocialLinkDto {
  platform: string;
  url: string;
}

export interface BandInfoDto {
  name: string;
  copyright: string;
  socialLinks: SocialLinkDto[];
}