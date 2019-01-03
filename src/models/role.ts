import bcrypt from 'bcrypt-nodejs';
import mongoose from 'mongoose';

// export type RoleModel = mongoose.Document & {
//   name: string,
//   description: string,
//   permissions: PermissionModel[]
// };

// export type PermissionModel = mongoose.Document & {
//     permission: {
//       path: string,
//       crud: {
//         c: boolean,
//         r: boolean,
//         u: boolean,
//         d: boolean
//       }
//     }
// };

// type comparePasswordFunction = (candidatePassword: string, cb: (err: any, isMatch: any) => {}) => void;
// tslint:disable-next-line:one-variable-per-declaration
const permissionSchema = new mongoose.Schema({
  path: String,
  crud: {
    c: Boolean,
    r: Boolean,
    u: Boolean,
    d: Boolean
  }
}, { _id: false, autoIndex: false });

const roleSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  description: String,
  permissions: [permissionSchema]
}, { timestamps: true });

const Role = mongoose.model('Role', roleSchema);
export default Role;
