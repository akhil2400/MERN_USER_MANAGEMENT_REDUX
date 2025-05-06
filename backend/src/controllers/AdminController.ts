import { adminService } from "../services/AdminServices";
import { Request, Response } from "express";
import { HttpStatus } from "../constants/httpStatus";

class AdminController {
  async getAllUsers(req: Request, res: Response) {
    console.log('HHHHHH')
    try {
      const users = await adminService.getAllUsers();
      res.status(HttpStatus.OK).json({ success: true, users });
    } catch (err) {
      const error = err as Error;
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: error.message });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      await adminService.deleteUser(parseInt(req.params.id));
      res.status(HttpStatus.OK).json({ success: true, message: "User Deleted" });
    } catch (err) {
      const error = err as Error;

      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: error.message });
    }
  }

  async addUser(req: Request, res: Response) {
    try {
      const newUser = await adminService.addUser(req.body);
      res.status(HttpStatus.OK).json({ success: true, user: newUser });
    } catch (err) {
      console.log(err);
      const error = err as Error;
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: error.message });
    }
  }
  async updateUser(req: Request, res: Response) {
    try {
      console.log(req.params)
      console.log(req.body)
      const updatedUser = await adminService.updateUser(parseInt(req.params.id), req.body);
      res.status(HttpStatus.OK).json({ success: true, user: updatedUser });
    } catch (err) {
      console.log(err);
      const error = err as Error;
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: error.message });
    }
  }
}

export const adminController = new AdminController();