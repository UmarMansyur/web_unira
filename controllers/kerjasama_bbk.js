const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
module.exports = {
  showAll: async (_, res, next) => {
    try {
      const response = await prisma.kerjasama_bbk.findMany();

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
      const response = await prisma.kerjasama_bbk.findUnique({
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
  createKerjaSamaBBK: async (req, res, next) => {
    try {
      const response = await prisma.kerjasama_bbk.create({
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
  updateKerjaSamaBBK: async (req, res, next) => {
    try {
      const response = await prisma.kerjasama_bbk.update({
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
  deleteKerjaSamaBBK: async (req, res, next) => {
    try {
      const response = await prisma.kerjasama_bbk.delete({
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