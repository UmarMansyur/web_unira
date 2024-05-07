const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
module.exports = {
  showAll: async (_, res, next) => {
    try {
      const response = await prisma.dokar.findMany();

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
      const response = await prisma.dokar.findUnique({
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
  createDokar: async (req, res, next) => {
    try {

      const exist = await prisma.dokar.findFirst({
        where: {
          nama: req.body.nama
        }
      });

      if (exist) {
        return res.status(400).json({
          status: false,
          message: 'fakultas already exist',
          data: exist
        });
      }

      const response = await prisma.dokar.create({
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
  updateDokar: async (req, res, next) => {
    try {
      const response = await prisma.dokar.update({
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
  deleteDokar: async (req, res, next) => {
    try {
      const response = await prisma.dokar.delete({
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