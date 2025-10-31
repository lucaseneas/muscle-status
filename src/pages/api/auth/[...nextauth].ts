import { Password, Token } from "@mui/icons-material";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";


export default NextAuth({

    secret: process.env.NEXT_AUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 5 * 60, // 5 minutos em segundos
         updateAge: 0 // desativa atualização automática (sliding) da sessão
    },
    jwt: { secret: process.env.JWT_SIGININ_PRIVATE_KEY, maxAge: 5*60 },
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
            console.log("JWT callback cima - user?", !!user, "existing token.exp:", (token as any).exp);
            // Executa no signin (user existe) e em chamadas subsequentes (user undefined).
            if (user) {
                console.log(token)
              // Inclui informações do usuário no token
              token.email = user.email;
              token.token = user.token;
              token.id = user.id;
              // define exp apenas ao criar o token (sign-in)
                if (!(token as any).exp) {
                    console.log("JWT callback - setting exp at sign-in:", (token as any).exp);
                    (token as any).exp = Math.floor(Date.now() / 1000) + 5 * 60; // 5 minutos
                }
            }
            return token;
          },
          async session({ session, token }) {
             // session.expires deve refletir token.exp (se existir)
             console.log("SESSION callback - session.expires:", session.expires);
            //if ((token as any).exp) {
            //    console.log("SESSION callback - session.expires:", session.expires);
            //    session.expires = new Date((token as any).exp * 1000).toISOString();
            //}
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