import React from 'react'
import Head from 'next/head'

const LiveShopee = (props) => {
  return (
    <>
      <div className="live-shopee-container">
        <Head>
          <title>live-shopee - startpee</title>
          <meta property="og:title" content="live-shopee - startpee" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/1ee26364-8625-43fe-a459-a6927a9c2b87/6f8106f0-1242-4a44-8ab9-d0fd23dec068?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <img
          alt="image"
          src="/shopee-lives-contribuem-com-vendas-e-engajamento-de-consumidores-e-vendedores-no-brasil-1500w.png"
          className="live-shopee-image"
        />
        <div className="live-shopee-get-started">
          <span className="live-shopee-text">Quero ativar</span>
        </div>
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
            justify-content: center;
          }
          .live-shopee-image {
            width: 100%;
            height: 434px;
            object-fit: cover;
          }
          .live-shopee-get-started {
            color: white;
            cursor: pointer;
            display: flex;
            margin-top: 40px;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 56px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            background-color: #000000;
          }
          .live-shopee-get-started:hover {
            color: black;
            background-color: #ffffff;
          }
          .live-shopee-text {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          @media (max-width: 767px) {
            .live-shopee-get-started {
              margin-top: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .live-shopee-get-started {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default LiveShopee
