import React from 'react'
import Head from 'next/head'

const LiveShopee = (props) => {
  return (
    <>
      <div className="live-shopee-container">
        <Head>
          <title>live-shopee - startpee page</title>
          <meta property="og:title" content="live-shopee - startpee page" />
        </Head>
      </div>
      <style jsx>
        {`
          .live-shopee-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default LiveShopee
