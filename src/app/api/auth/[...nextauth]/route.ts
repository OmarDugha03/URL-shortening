import { connectMongoDB } from "@lib/mongodb";
import User from "@models/user";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"

/* interface NextAuthSession {
  user: {
    id: string | number; 
    name?: string;      
    email?: string;      

  };
  expires: string;      

} */

export  const config = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string ,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET  as string
      }),
      GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID as string ,
        clientSecret: process.env.GITHUB_CLIENT_SECRET  as string
      })
      
],

  secret:process.env.NEXTAUTH_SECRET,
 
 callbacks: {
        async session({session, token}: any){
          const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();
            return session
        },
    async signIn({ user, account } :any) {
      if (account.provider === "google" || 'github') {
        const { name, email } = user;
        try {
          await connectMongoDB();
          const userExists = await User.findOne({ email });

          if (!userExists) {
          try {
          await connectMongoDB();
          const userExists = await User.findOne({ email });
          if (!userExists) {
             await connectMongoDB();
             User.create({name, email})
          }
        } catch (error) {
          console.log(error);
        }
          }
        } catch (error) {
          console.log(error);
        }
      }

      return user;
    },
    
  }, 
  
}

const handler = NextAuth(config);
export { handler as GET, handler as POST }