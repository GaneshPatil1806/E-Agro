import NextAuth from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import primsa from "@/libs/prismadb"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
        name: 'credentials',
        credentials: [
            email:{
                label:'email',
                type:'text'
            },
            password:{
                label:'email',
                type:'password'
            }
            email:{
                label:'email',
                type:'text'
            }
        ],
        
    })
  ],
})