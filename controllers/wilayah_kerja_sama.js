const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
module.exports = {
  showAll: async (_, res, next) => {
    try {
      const response = await prisma.wilayah_kerjasama.findMany();

      if (response.length == 0) {
        return res.status(404).json({
          status: false,
          message: 'data not found',
          data: response
        });
      }

      return res.json({
        status: true,
        message: 'success',
        data: response
      });
    } catch (error) {
      next(error);
    }
  },
  showById: async (req, res, next) => {
    try {
      const response = await prisma.wilayah_kerjasama.findUnique({
        where: {
          id: parseInt(req.params.id)
        }
      });

      if (!response) {
        return res.status(404).json({
          status: false,
          message: 'data not found',
          data: response
        });
      }

      return res.json({
        status: true,
        message: 'success',
        data: response
      });
    } catch (error) {
      next(error);
    }
  },
  createWilayahKerjasama: async (req, res, next) => {
    try {
      const response = await prisma.wilayah_kerjasama.create({
        data: {
          ...req.body
        }
      });

      return res.json({
        status: true,
        message: 'success',
        data: response
      });
    } catch (error) {
      next(error);
    }
  },
  updateWilayahKerjasama: async (req, res, next) => {
    try {
      const response = await prisma.wilayah_kerjasama.update({
        where: {
          id: parseInt(req.params.id)
        },
        data: {
          ...req.body
        }
      });

      return res.json({
        status: true,
        message: 'success',
        data: response
      });
    } catch (error) {
      next(error);
    }
  },
  deleteWilayahKerjasama: async (req, res, next) => {
    try {
      const response = await prisma.wilayah_kerjasama.delete({
        where: {
          id: parseInt(req.params.id)
        }
      });

      return res.json({
        status: true,
        message: 'success',
        data: response
      });
    } catch (error) {
      next(error);
    }
  }
};