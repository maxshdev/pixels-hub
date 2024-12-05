// utils/ResponseHandler.ts
import { Response } from 'express';

export class ResponseHandler {
  static handleResponse(
    res: Response,
    statusCode: number,
    message: string,
    data: any = null,
    error: any = null
  ): void {
    const response = {
      success: statusCode >= 200 && statusCode < 300,
      message,
      data,
      error: error ? error.message || error : null,
    };

    res.status(statusCode).json(response);
  }
}