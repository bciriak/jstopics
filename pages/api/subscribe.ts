import { NextApiRequest, NextApiResponse } from 'next'
import * as SibApiV3Sdk from '@sendinblue/client'

const apiInstance = new SibApiV3Sdk.ContactsApi()

apiInstance.setApiKey(SibApiV3Sdk.ContactsApiApiKeys.apiKey, process.env.SENDINBLUE_API_KEY as string)
let createContact = new SibApiV3Sdk.CreateContact();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  createContact.email = email;
  createContact.listIds = [2];

  try {
    await apiInstance.createContact(createContact)
    return res.status(201).json({error: ''})
  } catch (error: any) {
    if (error.response.statusCode === 400) {
      return res.status(400).json({error: error.response.body.message})
    }

    return res.status(500).json({error: error})
  }
}
