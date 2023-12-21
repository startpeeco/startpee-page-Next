import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Testimonal from '../components/testimonal'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>startpee</title>
          <meta property="og:title" content="startpee" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/1ee26364-8625-43fe-a459-a6927a9c2b87/6f8106f0-1242-4a44-8ab9-d0fd23dec068?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <section className="home-hero">
          <div className="home-menu">
            <div id="mobile-menu" className="home-mobile-navigation">
              <img
                alt="pastedImage"
                src="/startpee2024bar-1500h.png"
                className="home-logo"
              />
              <div className="home-links">
                <span className="Link">Consultoria marketplaces</span>
                <span className="Link">Seja um Parceiro</span>
                <span className="Link">Serviços  </span>
              </div>
              <div id="close-mobile-menu" className="home-close-mobile-menu">
                <svg viewBox="0 0 804.5714285714286 1024" className="home-icon">
                  <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
                </svg>
              </div>
            </div>
            <div className="home-desktop-navigation">
              <nav className="home-centered">
                <div className="home-left">
                  <img
                    alt="pastedImage"
                    src="/startpee2024bar-1500h.png"
                    className="home-logo1"
                  />
                  <div className="home-links1">
                    <a href="#serv" className="home-link Link">
                      Serviços
                    </a>
                    <span className="Link">Seja parceiro</span>
                    <span className="Link">Consultoria marketplaces</span>
                  </div>
                </div>
                <div className="home-right">
                  <span className="home-sign-in Link">Sign in</span>
                  <div className="home-get-started">
                    <span className="home-text05">Conversar</span>
                  </div>
                  <div id="open-mobile-menu" className="home-burger-menu">
                    <img
                      alt="pastedImage"
                      src="/pastedimage-yxbd.svg"
                      className="home-mobile-menu-button"
                    />
                  </div>
                </div>
              </nav>
              <iframe
                src="https://www.youtube.com/embed/DeQkMK5LME4"
                className="home-iframe"
              ></iframe>
            </div>
            <div>
              <div className="home-container2">
                <Script
                  html={`<script>
/*
Mobile menu - Code Embed
*/

// Mobile menu
const mobileMenu = document.querySelector("#mobile-menu")

// Buttons
const closeButton = document.querySelector("#close-mobile-menu")
const openButton = document.querySelector("#open-mobile-menu")

// On openButton click, set the mobileMenu position left to -100vw
openButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(0%)"
})

// On closeButton click, set the mobileMenu position to 0vw
closeButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(100%)"
})
</script>`}
                ></Script>
              </div>
            </div>
          </div>
          <h1 className="home-text06">
            Livecommerce vai aumentar suas vendas na shopee
          </h1>
          <div className="home-get-started1">
            <span className="home-text07">Eu quero </span>
          </div>
        </section>
        <section className="home-quote-container">
          <div className="home-quote">
            <span className="home-message">
              “é surreal o tanto de pessoas que entra em uma live da shopee são
              poucos que estão usando esse novo recurso😱.”
            </span>
            <div className="home-author">
              <img
                alt="image"
                src="/imagem%20do%20whatsapp%20de%202023-09-18%20%C3%A3%C2%A0(s)%2018.03.41-200w.jpg"
                className="home-avatar"
              />
              <span className="home-quote1">
                <span className="home-text08">—  JUNIOR BRZ</span>
                <span>, fundador CEO, STARTPEE</span>
              </span>
            </div>
          </div>
        </section>
        <section className="home-how-it-works">
          <div className="home-centered-container">
            <div className="home-heading">
              <span className="home-text10">Oque precisa fazer</span>
              <span className="home-text11 title">
                para sua loja na shopee vender bastante nos próximos  7 dias
              </span>
            </div>
            <div className="home-category">
              <div className="home-headng">
                <span className="home-text12">1 -Consultoria </span>
                <span className="home-text13">
                  <span className="home-text14">
                    precisa ser feito uma conversa para descobrir se os seus
                    produtos tem potêncial de vendas.
                  </span>
                  <br></br>
                </span>
                <div className="home-get-started2 template-button">
                  <span className="home-text16">Quero começar</span>
                </div>
              </div>
              <div className="home-container3"></div>
            </div>
            <div className="home-category1">
              <div className="home-headng1">
                <span className="home-text17">2-Parceria </span>
                <span className="home-text18">
                  <span className="home-text19">
                    O perfil @presentelive faz live dentro da shopee para lojas
                    iniciantes, você só precisa mandar a amostra do seu produto.
                  </span>
                  <br></br>
                  <br></br>
                  <span>Obs: apenas para São Paulo - SP</span>
                  <br></br>
                </span>
              </div>
              <div className="home-container4"></div>
            </div>
            <div className="home-row"></div>
          </div>
        </section>
        <section className="home-pricing">
          <div className="home-centered-container1">
            <div className="home-heading1">
              <span className="home-text24 title">
                Preço fixo lives para seu produtos
              </span>
              <span className="home-text25">
                Create next-generation solutions for small business customers
                with pricing options that accommodate everyone.
              </span>
              <div className="home-selection">
                <span className="home-text26">Monthly</span>
                <span className="home-text27">Yearly</span>
              </div>
            </div>
            <div className="home-cards">
              <div className="home-card">
                <span className="home-text28">Free</span>
                <span className="home-text29">
                  Unlimited lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed doliqua.
                </span>
                <Link href="/live-shopee">
                  <a className="home-link1">
                    <div className="home-get-started3 template-button">
                      <span className="home-text30">Start for free</span>
                    </div>
                  </a>
                </Link>
                <span className="home-text31">What&apos;s included</span>
                <div className="home-bullet-points">
                  <div className="home-point">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon02"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text32">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="home-point01">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon04"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text33">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
              <div className="home-card1">
                <span className="home-text34">Pay as you go</span>
                <span className="home-text35">
                  <span>Launch your lorem for $49/mo</span>
                  <br></br>
                  <span>
                    lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                </span>
                <div className="home-get-started4 template-button">
                  <span className="home-text39">
                    <span>Upgrade now</span>
                    <br></br>
                  </span>
                </div>
                <span className="home-text42">What&apos;s included</span>
                <div className="home-bullet-points1">
                  <div className="home-point02">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon06"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text43">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="home-point03">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon08"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text44">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="home-point04">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon10"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text45">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="home-point05">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon12"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text46">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
              <div className="home-card2">
                <span className="home-text47">Enterprise</span>
                <span className="home-text48">
                  <span>
                    Custom-built lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed doliqua.
                  </span>
                  <br></br>
                </span>
                <div className="home-get-started5 template-button">
                  <span className="home-text51">
                    <span>Contact us</span>
                    <br></br>
                  </span>
                </div>
                <span className="home-text54">What&apos;s included</span>
                <div className="home-bullet-points2">
                  <div className="home-point06">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon14"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text55">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="home-point07">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon16"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text56">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="home-point08">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon18"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text57">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="home-point09">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon20"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text58">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-testimonals">
          <div className="home-left1">
            <span className="home-text59">Testimonals</span>
            <span className="home-text60 title">
              What people say about Active
            </span>
          </div>
          <div className="home-right1">
            <div className="home-column">
              <Testimonal
                Quote='"Pellentesque sodales libero nulla, ac imperdiet ante tincidunt vel. Fusce auctor augue sed massa finibus, et dictum sem mollis. In luctus.”'
                Avatar_src="/image552912-e3yq-200h.png"
              ></Testimonal>
              <Testimonal
                From="Social Club"
                Name="Jessica Smith"
                Quote="“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.\u2028 Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.”"
                Avatar_src="/image312912-mvsg-200h.png"
              ></Testimonal>
              <Testimonal
                From="BeMe"
                Name="Logan Boy"
                Quote="“Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo..”"
                Avatar_src="/image502912-6wy-200h.png"
              ></Testimonal>
              <Testimonal
                From="Hello W."
                Name="Laraine Summers"
                Quote="“Rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.”"
                Avatar_src="/image202912-zekh-200h.png"
              ></Testimonal>
            </div>
            <div className="home-column1">
              <Testimonal
                From="Handsly"
                Name="William McPau"
                Quote='"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”'
                Avatar_src="/image572912-0d3-200h.png"
              ></Testimonal>
              <Testimonal
                From="Share"
                Name="Mariah Mae"
                Quote="“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”"
                Avatar_src="/image632913-swij-200h.png"
              ></Testimonal>
              <Testimonal
                From="Gather"
                Name="John Finati"
                Quote='"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”'
                Avatar_src="/image102913-x4z8-200h.png"
              ></Testimonal>
              <Testimonal
                From="Zigo"
                Name="Mary Pau"
                Quote='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ”'
                Avatar_src="/image562913-ycff-200h.png"
              ></Testimonal>
            </div>
          </div>
          <span className="home-text61">
            <span>Show more</span>
            <br></br>
          </span>
        </section>
        <section className="home-faq">
          <div className="home-heading2">
            <span className="home-text64 title">Perguntas Frequentes</span>
          </div>
          <div className="home-accordion">
            <div data-faq="closed" className="accordionContainer">
              <div className="home-header">
                <span className="home-text65">
                  — como faço para ativar a live na minha loja da shopee?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <svg viewBox="0 0 1024 1024" className="accordionIcon">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
              <div className="accordionContent">
                <span className="home-text66">
                  é simples até lojas ativa 1 semana pode ativar só entrar em
                  contato conosco que a gente te orienta sem cobra Nada 100%
                  grátis .
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="accordionContainer">
              <div className="home-header1">
                <span className="home-text67">
                  — quanto vocês cobram pra divulgar os meus produtos por live?
                </span>
                <svg viewBox="0 0 1024 1024" className="accordionIcon">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
              <div className="accordionContent">
                <span className="home-text68">
                  Oferecemos esse serviço de forma personalizada  podemos fazer
                  um teste grátis.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div data-faq="closed" className="accordionContainer">
              <div className="home-header2">
                <span className="home-text69">
                  — estou querendo abrir uma loja na shopee, vocês dão suporte
                  passo a passo para vender?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <svg viewBox="0 0 1024 1024" className="accordionIcon">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
              <div className="accordionContent">
                <span className="home-text70">
                  Sim,primeiro é necessario conversar oferecemos um seviço de
                  acompanhamento na qual ensinamos a você a gerenciar e  a
                  vender na plataforma.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div data-faq="closed" className="accordionContainer">
              <div className="home-header3">
                <span className="home-text71">
                  — você me ajuda a vender em outras plataformas?.
                </span>
                <svg viewBox="0 0 1024 1024" className="accordionIcon">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
              <div className="accordionContent">
                <span className="home-text72">
                  sim,Mercadolivre,shein,magalu precisamos marcar uma conversa.
                  .
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="home-container6">
              <Script
                html={`<script>
// Accordion - Code Embed

const accordionContainers = document.querySelectorAll(".accordionContainer"); // All accordion containers
const accordionContents = document.querySelectorAll(".accordionContent"); // All accordion content
const accordionIcons = document.querySelectorAll(".accordionIcon"); // All accordion icons

accordionContents.forEach((accordionContent) => {
    accordionContent.style.display = "none"; //Hides all accordion contents
});

accordionContainers.forEach((accordionContainer, index) => {
    accordionContainer.addEventListener("click", () => {
        accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
        });

        accordionIcons.forEach((accordionIcon) => {
            accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
        });

        if (accordionContainer.classList.contains("accordion-open")) { // Checks if this container has class "accordion-open"
            accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open"
        } else {
            accordionContainers.forEach((accordionContainer) => {
                accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open" from all containers
            });

            accordionContainer.classList.add("accordion-open"); // Adds class "accordion-open" to this container
            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        }
    });
});

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
              ></Script>
            </div>
          </div>
        </section>
        <footer className="home-footer">
          <div className="home-top">
            <div className="home-right2">
              <div id="serv" className="home-category2">
                <span className="home-text73">SoluÇões </span>
                <div className="home-links2">
                  <span className="home-text74">Ativar live na shopee</span>
                  <span className="home-text75">
                    divulgar sua loja shopee live
                  </span>
                  <span className="home-text76">Consultoria marketplaces</span>
                  <span className="home-text77">Consultoria de negócios</span>
                </div>
              </div>
              <div className="home-category3">
                <span className="home-text78">Empresa</span>
                <div className="home-links3">
                  <span className="home-text79">Reclame aqui</span>
                  <span className="home-text80">Falar com o chefe</span>
                  <span className="home-text81">seja parceiro</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-bottom">
            <img
              alt="pastedImage"
              src="/startpee2024bar-1500h.png"
              className="home-branding"
            />
            <span className="home-text82">Copyright © Startpee - 2024</span>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            flex-direction: column;
            background-color: #000000;
          }
          .home-hero {
            width: 100%;
            height: 796px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            background-color: #009cff;
          }
          .home-menu {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-mobile-navigation {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100vw;
            height: 100vh;
            display: none;
            z-index: 150;
            position: fixed;
            transform: translateX(100%);
            transition: transform 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .home-logo {
            width: 64px;
          }
          .home-links {
            gap: var(--dl-space-space-twounits);
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-close-mobile-menu {
            top: var(--dl-space-space-oneandhalfunits);
            right: var(--dl-space-space-oneandhalfunits);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-icon {
            width: 24px;
            height: 24px;
            display: flex;
          }
          .home-desktop-navigation {
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: column;
          }
          .home-centered {
            width: 100%;
            display: flex;
            max-width: 1200px;
            box-sizing: initial;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 50px;
            margin-bottom: 55px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
            background-color: #ffffff;
          }
          .home-left {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 38px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .home-logo1 {
            width: 123px;
            height: 56px;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-links1 {
            display: flex;
            align-items: center;
            margin-left: 33px;
            flex-direction: row;
          }
          .home-link {
            text-decoration: none;
          }
          .home-right {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-sign-in {
            display: none;
            margin-right: 20px;
          }
          .home-get-started {
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 56px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            background-color: #000000;
          }
          .home-get-started:hover {
            background-color: #5228f5;
          }
          .home-text05 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
          }
          .home-burger-menu {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-mobile-menu-button {
            width: 40px;
            height: 40px;
            display: none;
          }
          .home-iframe {
            width: 580px;
            height: 350px;
          }
          .home-container2 {
            display: contents;
          }
          .home-text06 {
            color: rgb(255, 255, 255);
            display: none;
            font-size: 72px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 80px;
          }
          .home-get-started1 {
            color: white;
            cursor: pointer;
            display: flex;
            margin-top: 40px;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 56px;
            margin-bottom: 53px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            background-color: #000000;
          }
          .home-get-started1:hover {
            color: black;
            background-color: #ffffff;
          }
          .home-text07 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .home-quote-container {
            width: 100%;
            height: 574px;
            display: flex;
            margin-top: 33px;
            align-items: center;
            padding-top: 160px;
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: 160px;
            justify-content: center;
            background-color: #000000;
          }
          .home-quote {
            width: 100%;
            display: flex;
            max-width: 1200px;
            flex-direction: column;
            justify-content: center;
          }
          .home-message {
            color: rgb(255, 255, 255);
            font-size: 40px;
            max-width: 800px;
            line-height: 52px;
          }
          .home-author {
            width: 800px;
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: row;
          }
          .home-avatar {
            width: 64px;
            height: 64px;
            object-fit: cover;
            border-radius: 50%;
          }
          .home-quote1 {
            color: rgb(151, 126, 249);
            width: 100%;
            font-size: 14px;
            max-width: 800px;
            margin-left: var(--dl-space-space-unit);
          }
          .home-text08 {
            font-style: normal;
            font-weight: 600;
          }
          .home-how-it-works {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            background-color: #0162d5;
          }
          .home-centered-container {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-end;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-heading {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text10 {
            color: rgb(220, 212, 253);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .home-text11 {
            color: var(--dl-color-gray-white);
          }
          .home-category {
            color: white;
            width: 100%;
            display: flex;
            overflow: hidden;
            padding-left: var(--dl-space-space-fourunits);
            border-radius: 50px;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: row;
            background-color: #5228f5;
          }
          .home-headng {
            width: 601px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .home-text12 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .home-text13 {
            color: rgb(238, 233, 254);
            font-size: 20px;
            align-self: center;
            line-height: 24px;
            margin-bottom: 40px;
          }
          .home-get-started2 {
            margin-bottom: 0px;
          }
          .home-get-started2:hover {
            color: black;
            background-color: #ffffff;
          }
          .home-text16 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .home-container3 {
            flex: 1;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-self: flex-end;
            flex-direction: row;
          }
          .home-category1 {
            color: white;
            width: 100%;
            display: flex;
            overflow: hidden;
            border-color: rgba(0, 0, 0, 0.08);
            border-width: 1px;
            padding-left: var(--dl-space-space-fourunits);
            border-radius: 50px;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: row;
            background-color: #5228f5;
          }
          .home-headng1 {
            width: 601px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .home-text17 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .home-text18 {
            color: rgb(238, 233, 254);
            font-size: 20px;
            align-self: center;
            line-height: 24px;
            margin-bottom: 40px;
          }
          .home-container4 {
            flex: 1;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-self: flex-end;
            flex-direction: row;
          }
          .home-row {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            grid-gap: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: row;
          }
          .home-pricing {
            width: 100%;
            display: none;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
            background-color: #5228f5;
          }
          .home-centered-container1 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading1 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text24 {
            color: var(--dl-color-gray-white);
            text-align: center;
          }
          .home-text25 {
            color: rgb(238, 233, 254);
            width: 600px;
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-selection {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-text26 {
            color: rgb(238, 233, 254);
            width: 128px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: rgba(255, 255, 255, 0.3);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            border-bottom-width: 2px;
          }
          .home-text27 {
            color: rgb(255, 255, 255);
            width: 128px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: #ffffff;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            border-bottom-width: 2px;
          }
          .home-cards {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .home-card {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-threeunits);
            border-radius: 50px;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .home-text28 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text29 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-link1 {
            display: contents;
          }
          .home-get-started3 {
            transition: 0.3s;
            text-decoration: none;
          }
          .home-get-started3:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .home-text30 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-text31 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-bullet-points {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-point {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon02 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text32 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-point01 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon04 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text33 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-card1 {
            flex: 1;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: 40px;
            border-radius: 50px;
            padding-right: 40px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .home-text34 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text35 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-get-started4 {
            transition: 0.3s;
          }
          .home-get-started4:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .home-text39 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-text42 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-bullet-points1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-point02 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon06 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text43 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-point03 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon08 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text44 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-point04 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon10 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text45 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-point05 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon12 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text46 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-card2 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: 40px;
            border-radius: 50px;
            padding-right: 40px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
            background-color: #000000;
          }
          .home-text47 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text48 {
            color: rgb(255, 255, 255);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-get-started5 {
            color: var(--dl-color-gray-black);
            transition: 0.3s;
            background-color: #ffffff;
          }
          .home-get-started5:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .home-text51 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .home-text54 {
            color: #ffffff;
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-bullet-points2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-point06 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon14 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text55 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-point07 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon16 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text56 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-point08 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon18 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text57 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-point09 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon20 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text58 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-testimonals {
            width: 100%;
            display: none;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .home-left1 {
            width: 375px;
            display: flex;
            margin-top: 375px;
            align-items: flex-start;
            margin-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-text59 {
            color: rgb(82, 40, 245);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .home-text60 {
            text-align: left;
          }
          .home-right1 {
            gap: 40px;
            display: flex;
            flex-direction: row;
          }
          .home-column {
            gap: 40px;
            display: flex;
            flex-direction: column;
          }
          .home-column1 {
            gap: 40px;
            display: flex;
            flex-direction: column;
          }
          .home-text61 {
            cursor: pointer;
            display: none;
          }
          .home-faq {
            width: 100%;
            display: flex;
            padding: 120px;
            align-items: center;
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            background-color: #eff0f2;
          }
          .home-heading2 {
            width: 100%;
            display: flex;
            align-items: center;
            user-select: none;
            flex-direction: column;
          }
          .home-text64 {
            text-align: center;
          }
          .home-accordion {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-header {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text65 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text66 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .home-header1 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text67 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text68 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .home-header2 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text69 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text70 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .home-header3 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text71 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text72 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .home-container6 {
            display: contents;
          }
          .home-footer {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sevenunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sevenunits);
            background-color: #000000;
          }
          .home-top {
            width: 100%;
            display: flex;
            max-width: 1200px;
            border-color: #3b3b3b;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-right2 {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-category2 {
            width: 240px;
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .home-text73 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-links2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text74 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
          }
          .home-text75 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text76 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text77 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-category3 {
            width: 240px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text78 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-links3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text79 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text80 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text81 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-bottom {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
            user-select: none;
            flex-direction: column;
          }
          .home-branding {
            width: var(--dl-size-size-large);
            filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
              brightness(103%) contrast(103%);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text82 {
            color: rgb(104, 104, 104);
            font-size: 14px;
            line-height: 30px;
          }
          @media (max-width: 991px) {
            .home-hero {
              height: 694px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              background-color: #009cff;
            }
            .home-mobile-navigation {
              display: flex;
            }
            .home-close-mobile-menu {
              align-items: center;
              justify-content: center;
            }
            .home-desktop-navigation {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-centered {
              height: 60px;
              padding-left: 10px;
              margin-bottom: 33px;
              padding-right: 10px;
            }
            .home-left {
              margin-left: var(--dl-space-space-halfunit);
            }
            .home-logo1 {
              width: 70px;
              height: 34px;
            }
            .home-links1 {
              display: none;
            }
            .home-sign-in {
              display: none;
            }
            .home-get-started {
              display: none;
            }
            .home-mobile-menu-button {
              display: flex;
            }
            .home-iframe {
              width: 540px;
              height: 301px;
            }
            .home-quote-container {
              padding-top: var(--dl-space-space-sevenunits);
              padding-bottom: var(--dl-space-space-sevenunits);
            }
            .home-message {
              width: 100%;
              max-width: 800px;
            }
            .home-author {
              width: 100%;
              max-width: 800px;
            }
            .home-how-it-works {
              background-color: #0162d5;
            }
            .home-category {
              padding-left: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
              flex-direction: column;
              background-color: var(--dl-color-gray-black);
            }
            .home-headng {
              margin-left: var(--dl-space-space-fourunits);
            }
            .home-text13 {
              color: var(--dl-color-gray-white);
              font-size: 19px;
            }
            .home-container3 {
              width: 100%;
            }
            .home-category1 {
              padding-left: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
              flex-direction: column;
              background-color: var(--dl-color-gray-black);
            }
            .home-headng1 {
              margin-left: var(--dl-space-space-fourunits);
            }
            .home-text18 {
              color: var(--dl-color-gray-white);
              font-size: 19px;
            }
            .home-container4 {
              width: 100%;
            }
            .home-text25 {
              width: 100%;
              max-width: 600px;
            }
            .home-cards {
              display: flex;
              flex-direction: column;
            }
            .home-card {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-text29 {
              font-size: 16px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text31 {
              font-size: 16px;
            }
            .home-card1 {
              width: 100%;
              align-items: flex-start;
            }
            .home-card2 {
              width: 100%;
              align-items: flex-start;
            }
            .home-testimonals {
              align-items: center;
              flex-direction: column;
            }
            .home-left1 {
              margin-top: 0px;
              align-items: center;
              margin-bottom: ThreeUnits;
            }
            .home-text60 {
              font-size: 36px;
              text-align: center;
              line-height: 40px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-right1 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: row;
            }
            .home-column {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-column1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-accordion {
              width: 100%;
              max-width: 1200px;
            }
            .home-footer {
              padding: var(--dl-space-space-sixunits);
            }
            .home-top {
              flex-direction: column;
            }
            .home-right2 {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-links2 {
              gap: var(--dl-space-space-unit);
            }
            .home-links3 {
              gap: var(--dl-space-space-unit);
            }
            .home-branding {
              width: var(--dl-size-size-medium);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-text82 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .home-hero {
              height: 610px;
              position: relative;
              padding-bottom: 180px;
              background-color: #009cff;
            }
            .home-desktop-navigation {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-centered {
              margin-top: 0px;
              padding-left: 0px;
              margin-bottom: 33px;
              padding-right: 0px;
            }
            .home-left {
              margin-left: var(--dl-space-space-unit);
            }
            .home-logo1 {
              width: 74px;
              height: 38px;
            }
            .home-right {
              margin-right: var(--dl-space-space-unit);
            }
            .home-sign-in {
              display: none;
            }
            .home-get-started {
              display: none;
            }
            .home-iframe {
              width: 484px;
              height: 272px;
            }
            .home-text06 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
            }
            .home-get-started1 {
              margin-top: var(--dl-space-space-twounits);
            }
            .home-quote-container {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-message {
              font-size: 24px;
              line-height: 31px;
            }
            .home-author {
              width: 100%;
            }
            .home-avatar {
              width: 40px;
              height: 40px;
            }
            .home-quote1 {
              font-size: 14px;
              max-width: 800px;
            }
            .home-how-it-works {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-heading {
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-text11 {
              margin-bottom: 0px;
            }
            .home-category {
              background-color: var(--dl-color-gray-black);
            }
            .home-headng {
              padding-bottom: 0px;
            }
            .home-text13 {
              color: rgb(238, 233, 254);
              line-height: 24px;
            }
            .home-text14 {
              font-size: 18px;
            }
            .home-get-started2 {
              display: none;
            }
            .home-container3 {
              width: 100%;
            }
            .home-category1 {
              background-color: var(--dl-color-gray-black);
            }
            .home-headng1 {
              padding-bottom: 0px;
            }
            .home-text18 {
              color: rgb(238, 233, 254);
              line-height: 24px;
            }
            .home-text19 {
              font-size: 18px;
            }
            .home-container4 {
              width: 100%;
            }
            .home-row {
              height: auto;
              flex-direction: column;
            }
            .home-pricing {
              width: 100%;
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .home-card {
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text28 {
              font-size: 28px;
            }
            .home-card1 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-text34 {
              font-size: 28px;
            }
            .home-card2 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-text47 {
              font-size: 28px;
            }
            .home-testimonals {
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
              padding-bottom: 0px;
            }
            .home-right1 {
              width: 100%;
              flex-direction: column;
            }
            .home-column1 {
              display: none;
            }
            .home-text61 {
              display: flex;
              font-style: normal;
              margin-top: var(--dl-space-space-oneandhalfunits);
              font-weight: 600;
            }
            .home-faq {
              padding: var(--dl-space-space-fourunits);
            }
            .home-heading2 {
              width: 100%;
            }
            .home-text64 {
              font-size: 36px;
              line-height: 36px;
            }
            .home-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .home-container {
              background-color: #000000;
            }
            .home-hero {
              height: 485px;
              padding-bottom: 160px;
              background-color: #009cff;
            }
            .home-mobile-navigation {
              width: 383px;
              display: flex;
            }
            .home-logo {
              margin-left: 0px;
            }
            .home-icon {
              align-items: center;
              justify-content: center;
            }
            .home-centered {
              margin-bottom: 50px;
            }
            .home-left {
              width: 92px;
              height: 72px;
            }
            .home-logo1 {
              width: 86px;
              height: 46px;
            }
            .home-iframe {
              width: 334px;
              height: 201px;
              margin: 0px;
              padding-top: 0px;
            }
            .home-get-started1 {
              width: 263px;
              height: 67px;
            }
            .home-quote-container {
              height: 426px;
              padding-top: 4px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-message {
              color: rgb(255, 255, 255);
            }
            .home-quote1 {
              color: #fcfaff;
            }
            .home-text08 {
              font-style: normal;
              font-weight: 600;
            }
            .home-text11 {
              color: var(--dl-color-gray-white);
            }
            .home-category {
              padding-left: 0px;
              padding-right: var(--dl-space-space-halfunit);
              flex-direction: column;
              background-color: var(--dl-color-gray-black);
            }
            .home-headng {
              width: 223px;
            }
            .home-text12 {
              font-size: 32px;
              align-self: center;
              font-style: normal;
              text-align: left;
              font-weight: 700;
            }
            .home-text13 {
              color: var(--dl-color-gray-white);
              font-size: 20px;
              align-self: center;
              line-height: 24px;
              margin-left: 0px;
            }
            .home-text14 {
              font-size: 18px;
            }
            .home-category1 {
              padding-left: 0px;
              padding-right: var(--dl-space-space-halfunit);
              flex-direction: column;
              background-color: var(--dl-color-gray-black);
            }
            .home-headng1 {
              width: 223px;
            }
            .home-text17 {
              font-size: 32px;
              align-self: center;
              font-style: normal;
              text-align: left;
              font-weight: 700;
            }
            .home-text18 {
              color: var(--dl-color-gray-white);
              font-size: 20px;
              align-self: center;
              line-height: 24px;
              margin-left: 0px;
            }
            .home-text19 {
              font-size: 18px;
            }
            .home-pricing {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-get-started5 {
              background-color: var(--dl-color-gray-white);
            }
            .home-testimonals {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-text65 {
              font-size: 20px;
              font-style: normal;
              font-weight: 500;
            }
            .home-text66 {
              line-height: 24px;
            }
            .home-text67 {
              font-size: 20px;
              font-style: normal;
              font-weight: 500;
            }
            .home-text68 {
              line-height: 24px;
            }
            .home-text69 {
              font-size: 20px;
              font-style: normal;
              font-weight: 500;
            }
            .home-text70 {
              line-height: 24px;
            }
            .home-text71 {
              font-size: 20px;
              font-style: normal;
              font-weight: 500;
            }
            .home-text72 {
              line-height: 24px;
            }
            .home-footer {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
