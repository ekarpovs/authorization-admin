'use strict';

import { NextFunction, Request, Response } from 'express';
// import { WriteError } from 'mongodb';

import Role from '../models/role';

export let postCreateRole = (req: Request, res: Response, next: NextFunction) => {
  const body = req.body;

  const role = new Role({
    name: req.body.name,
    description: req.body.description,
    permissions: req.body.permissions
  });

  Role.findOne({ name: req.body.name }, (err, existingRole) => {
    if (err) { return next(err); }
    if (existingRole) {
      return res.status(400).json({msg: 'Role with that name address already exists.'});
    }
    role.save((error) => {
      if (error) { return next(error); }
      return res.status(200).json({id: role._id});
    });
  });
};
