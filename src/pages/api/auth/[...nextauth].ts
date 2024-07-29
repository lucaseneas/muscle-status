import { Password, Token } from "@mui/icons-material";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";


export default NextAuth({

    secret: process.env.NEXT_AUTH_SECRET,
    session: {
        strategy: "jwt"
    },
    jwt: { secret: process.env.JWT_SIGININ_PRIVATE_KEY, maxAge: 60 * 60 * 60 },
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


                const response = await fetch(url+"/auth/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json;charset=UTF-8" },
                    body: JSON.stringify({
                        email: credentials.email,
                        password: credentials.password,
                    }),
                });

                const res = await response.json();

                if (response.ok && res.token && res.email) {
                    // Retorna um objeto com as informações do usuário que serão armazenadas no JWT
                    return {
                        token: res.token,
                        email: res.email,
                        id: res.id
                    };
                }

                // Se a autenticação falhar, retorna null
                return null;
                
            }
        })
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                console.log(token)
              // Inclui informações do usuário no token
              token.email = user.email;
              token.token = user.token;
              token.id = user.id;
            }
            return token;
          },
          async session({ session, token }) {
            if (token) {
              // Inclui informações do token na sessão
              session.user.email = token.email;
              session.accessToken = token.token;
              session.id = token.id;
            }
            return session;
          },
    }
});