import { Password, Token } from "@mui/icons-material";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    
    secret : process.env.NEXT_AUTH_SECRET,
    session : {
        strategy: "jwt"
    },
    jwt:{secret: process.env.JWT_SIGININ_PRIVATE_KEY, maxAge: 60*60*60},
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials, req) {
                if (!credentials?.email && !credentials?.password) {
                    throw new Error("Email e senha requerido")
                }
                
                const url = `${process.env.BASEURL}`

                return await fetch(url+"/auth/login", {
                    method: "POST",
                    headers: { "Content-type": "application/json;charset=UTF-8" },
                    body: JSON.stringify({
                        email: credentials.email,
                        password: credentials.password,
                    }),
                    
                })
                    .then((response) => response.json())
                    .then((res) => {
                        const authorization = { id: res.token };
                        if (authorization.id) {
                            
                            return authorization;
                        }
                        else {
                            throw new Error("Usuario não encontrado");
                        }
                    })
                    .catch( (e) => {
                        console.log("Error auth", e)
                        throw new Error("Ocorreu um erro inesperado", e.message)
                    });
                // Add logic here to look up the user from the credentials supplied

            }
        })
    ],

    callbacks: {
        async jwt({ token, account }) {
           

          // Persist the OAuth access_token to the token right after signin
          if (token.sub) {
            return token
          }else{
            throw new Error("Usuario invalido")
          }
          
        },
        async session({ session, token, user }) {
           if(!token.sub){
            throw new Error("Sessão invalida");
           }
          // Send properties to the client, like an access_token from a provider.
          return { ...session, accessToken: token.sub}
        }
      }
});