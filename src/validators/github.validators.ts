// Copyright 2020 Fazt Community ~ All rights reserved. MIT license.

import {check} from 'express-validator';

export const createGithubValidator = [
  check('title').not().isEmpty().withMessage('title is required'),
  check('url').not().isEmpty().withMessage('url is required')
];
