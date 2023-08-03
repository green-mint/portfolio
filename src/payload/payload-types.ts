/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    projects: Project;
    users: User;
  };
  globals: {};
}
export interface Project {
  id: string;
  title: string;
  oneLiner: string;
  isSelected?: boolean;
  position: number;
  url: string;
  techStack: {
    name: string;
    id?: string;
  }[];
  slug?: string;
  updatedAt: string;
  createdAt: string;
}
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  salt?: string;
  hash?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password?: string;
}
