import Head from 'next/head'

function PageHead({ title }: { title: string }) {
    return (
        <Head>
            <meta name="description" content="" />
            <title>{title}</title>
            <link rel="icon" type="image/png" href="/favicon.png" />
        </Head>
    )
}

export default PageHead