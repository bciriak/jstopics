import { NextApiRequest, NextApiResponse } from 'next'
import * as SibApiV3Sdk from 'sib-api-v3-typescript'
let apiInstance = new SibApiV3Sdk.ContactsApi()
// @ts-ignore
apiInstance.setApiKey(SibApiV3Sdk.AccountApiApiKeys.apiKey, process.env.SENDINBLUE_API_KEY)
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
    if (error.statusCode === 400) {
      return res.status(400).json({error: error.response.body.message})
    }

    return res.status(500).json({error: error})
  }
}
