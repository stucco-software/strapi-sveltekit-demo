import { strapi } from '@strapi/client';
import {
  cmsurl,
  fullaccess,
  readaccess
} from '$env/static/private';

export const admin_client = strapi({
  baseURL: `${cmsurl}/api`,
  auth: fullaccess
})

export const read_client = strapi({
  baseURL: `${cmsurl}/api`,
  auth: readaccess
})