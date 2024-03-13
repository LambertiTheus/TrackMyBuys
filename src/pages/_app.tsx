import { ClerkProvider, SignIn, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { type AppType } from "next/app"
import { api } from "~/utils/api"
import "~/styles/globals.css"
import BackgroundWrapper from "~/components/shared/BackgroundWrapper"
import PageHeader from "~/components/shared/PageHeader"

const App: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <PageHeader title={"Sign-in or Log-in"} />
      <ClerkProvider
        appearance={{
          variables: {
            colorPrimary: '#285966'
          }
        }}
      >
        <BackgroundWrapper>
          <SignedIn>
            <div className="z-30 fixed w-full py-2 bg-darkgrey border-b">
              <div className="w-10/12 mx-auto flex justify-between items-center">
                <div className="flex items-center">
                  <UserButton />
                  <div style={{ marginLeft: '0.5rem' }}>
                  </div>
                </div>
              </div>
            </div>
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

