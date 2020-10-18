
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';
import OrphanageView from '../views/orphanages_views';

import * as yup from 'yup';

export default {
  async index(request: Request, response: Response) {
    const orphanageRepository = getRepository(Orphanage);
    const orphanages = await orphanageRepository.find({
      relations: ['images']
    })
    return response.json(OrphanageView.renderMany(orphanages))
  },

  async show(request: Request, response: Response) {
    const { id } = request.params
    const orphanageRepository = getRepository(Orphanage);
    const orphanage = await orphanageRepository.findOneOrFail(id, {
      relations: ['images']
    })

    return response.json(OrphanageView.render(orphanage))
  },

  async create(request: Request, response: Response) {
    const {
      name,
      latitude,
      longitudade,
      about,
      instructions,
      open_on_weekends,
      opening_hours
    } = request.body

    const orphanageRepository = getRepository(Orphanage);

    const requestImages = request.files as Express.Multer.File[]

    const images = requestImages.map(image => {
      return { path: image.filename }
    })

    const data = {
      name,
      latitude,
      longitudade,
      about,
      instructions,
      open_on_weekends,
      opening_hours,
      images
    }

    const schema = yup.object().shape({
      name: yup.string().required(),
      latitude: yup.number().required(),
      longitudade: yup.number().required(),
      about: yup.string().required(),
      instructions: yup.string().required(),
      open_on_weekends: yup.boolean().required(),
      opening_hours: yup.string().required(),
      images: yup.array(yup.object().shape({
        path: yup.string().required()
      })),
    })

    await schema.validate(data, { abortEarly: false })
    const orphanage = orphanageRepository.create(data)

    await orphanageRepository.save(orphanage)

    return response.status(201).json(orphanage)
  }
}