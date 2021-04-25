import { NextApiRequest, NextApiResponse } from 'next'
import { query } from "faunadb";
import { fauna } from "../../services/fauna";

export default async (request:NextApiRequest, response:NextApiResponse) => {
  const {name, email, phone, message} = request.query

  try {
    await fauna.query(
      query.Create(
        query.Collection('contacts'),
        {
          data: {
            name,
            email,
            phone,
            message,
            webapp: 'blog-family'
          }
        }
      )
    )

    return response.status(200).json({message:"OK"});
  } catch {
    return response.status(500).json({message:"Problema ao enviar menssagem"});
  }
}
