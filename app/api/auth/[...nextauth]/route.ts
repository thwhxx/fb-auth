import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';

const options = {
    providers: [
        FacebookProvider({
          clientId: process.env.FACEBOOK_ID ?? '',
          clientSecret: process.env.FACEBOOK_SECRET ?? ''
        }),
    ],
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options)