export interface IUploadResult {
  url: string;
  objectKey: string;
  thumbnailUrl?: string; /// For Images si needed; for audios it will be undefined
}