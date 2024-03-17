import { type NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import ModalComponent from "~/components/shared/ModalComponent"
import PageHead from "~/components/shared/PageHead"
// import CreateAccount from "~/components/shared/createAccountModal"
import { api } from "~/utils/api"

const Home: NextPage = () => {
  const query = api.example.userEmail.useQuery()
  const email = query.data?.email

  return (
    <>
      <PageHead title={"Home"} />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Create <span className="text-[hsl(280,100%,70%)]">T3</span> App {email}
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://create.t3.gg/en/usage/first-steps"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">First Steps →</h3>
              <div className="text-lg">
                Just the basics - Everything you need to know to set up your
                database and authentication.
              </div>
            </Link>
            <ModalComponent
              isOpen={false}
              openButtonTitle="abrir                                 "
              closeButtonTitle="fechar"
              onChange={() => ''}>
              <div>
                test
              </div>
            </ModalComponent>
            {/* <CreateAccount/> */}
          </div>
          <p className="text-2xl text-white">
          </p>
        </div>
      </main>
    </>
  )
}

export default Home
