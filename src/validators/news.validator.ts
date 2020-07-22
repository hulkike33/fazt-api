// Copyright 2020 Fazt Community ~ All rights reserved. MIT license.

import {check} from 'express-validator';

export const createNewValidator = [
  check('title').not().isEmpty().withMessage('title is required'),
  check('body').not().isEmpty().withMessage('body is required'),
  check('date').isDate().withMessage('date is required')
];
