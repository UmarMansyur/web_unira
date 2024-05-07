const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
module.exports = {
  showAll: async (_, res, next) => {
    try {
      const response = await prisma.prodi.findMany();

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
      const response = await prisma.prodi.findUnique({
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
  createProdi: async (req, res, next) => {
    try {

      const exist = await prisma.prodi.findFirst({
        where: {
          nama_fakultas: req.body.nama_fakultas
        }
      });

      if (exist) {
        return res.status(400).json({
          status: false,
          message: 'fakultas already exist',
          data: exist
        });
      }

      const response = await prisma.prodi.create({
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
  updateProdi: async (req, res, next) => {
    try {
      const response = await prisma.prodi.update({
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
  deleteProdi: async (req, res, next) => {
    try {
      const response = await prisma.prodi.delete({
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