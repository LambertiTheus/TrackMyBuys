import { ClerkProvider, SignIn, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { type AppType } from "next/app"
import { api } from "~/utils/api"
import "~/styles/globals.css"
import BackgroundWrapper from "~/components/shared/BackgroundWrapper"
import Header from "~/components/shared/Header"
import PageHead from "~/components/shared/PageHead"

const App: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <PageHead title={"Sign-in or Log-in"} />
      <ClerkProvider
        appearance={{
          variables: {
            colorPrimary: '#285966'
          }
        }}
      >
        <BackgroundWrapper>
          <SignedIn>
            <Header />
            <Component {...pageProps} />
          </SignedIn>

          <SignedOut>
            <div className="flex justify-center p-48">
              <SignIn />
            </div>
          </SignedOut>
        </BackgroundWrapper>
      </ClerkProvider>
    </>
  )
}

export default api.withTRPC(App)

