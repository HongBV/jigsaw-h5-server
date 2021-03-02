/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  account?: string;
  password?: string;
}
/**
 * @description Page-Service parameters
 */
export interface IPageOptions {
  id?: number;
  name?: string;
  page?: Array<any>;
  is_delete?: boolean;
  creatorId?: number;
}
