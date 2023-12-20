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
          <title>startpee page</title>
          <meta property="og:title" content="startpee page" />
        </Head>
        <section className="home-hero">
          <div className="home-menu">
            <div id="mobile-menu" className="home-mobile-navigation">
              <img
                alt="pastedImage"
                src="/pastedimage-no9b-1500h.png"
                className="home-logo"
              />
              <div className="home-links">
                <span className="Link">Solutions</span>
                <span className="Link">How it works</span>
                <span className="Link">Prices</span>
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
                    src="/startpee2024remo-200h.png"
                    className="home-logo1"
                  />
                  <div className="home-links1">
                    <span className="Link">Solutions</span>
                    <span className="Link">How it works</span>
                    <span className="Link">Ativar live shopee</span>
                  </div>
                </div>
                <div className="home-right">
                  <span className="home-sign-in Link">Sign in</span>
                  <div className="home-get-started">
                    <span className="home-text006">começar</span>
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
          <header className="home-header">
            <h1 className="home-text007">Live ecommerce é o futuro</h1>
            <p className="home-text008">
              Somos o apio que você precisa para decolar suas vendas na shopee.
            </p>
            <div className="home-get-started1">
              <span className="home-text009">Começar</span>
            </div>
          </header>
          <div className="home-dashboard-preview">
            <div className="home-outline">
              <img
                alt="pastedImage"
                src="/pastedimage-cdo-1000h.png"
                loading="lazy"
                className="home-image"
              />
            </div>
          </div>
        </section>
        <section className="home-features">
          <div className="home-title">
            <span className="home-text010">
              <span>
                Let&apos;s grow your social media
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>presence</span>
            </span>
            <span className="home-text014">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>eiusmod tempor incididunt.</span>
            </span>
          </div>
          <div className="home-cards">
            <div className="home-container3">
              <div className="card">
                <img
                  alt="pastedImage"
                  src="/pastedimage-fii6m-200h.png"
                  className="home-icon02"
                />
                <span className="home-text017">Schedule</span>
                <span className="home-text018">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
              <div className="home-publish card">
                <img
                  alt="pastedImage"
                  src="/pastedimage-mimg-200h.png"
                  className="home-icon03"
                />
                <span className="home-text019">Publish</span>
                <span className="home-text020">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr
                </span>
              </div>
            </div>
            <div className="home-container4">
              <div className="card home-analyze">
                <img
                  alt="pastedImage"
                  src="/pastedimage-l6p-200h.png"
                  className="home-icon04"
                />
                <span className="home-text021">Analyze</span>
                <span className="home-text022">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
              <div className="card">
                <img
                  alt="pastedImage"
                  src="/pastedimage-vyi5-200h.png"
                  className="home-icon05"
                />
                <span className="home-text023">Get leads</span>
                <span className="home-text024">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="home-quote-container">
          <div className="home-quote">
            <span className="home-message">
              “Scale your content, grew lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.”
            </span>
            <div className="home-author">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGdpcmx8ZW58MHx8fHwxNjY0ODA5MjE1&amp;ixlib=rb-1.2.1&amp;w=200"
                className="home-avatar"
              />
              <span className="home-quote1">
                <span className="home-text025">—  Peter McPau</span>
                <span>, Founder and CEO, Active</span>
              </span>
            </div>
          </div>
        </section>
        <section className="home-banners"></section>
        <section className="home-how-it-works">
          <div className="home-centered-container">
            <div className="home-heading">
              <span className="home-text027">How it works</span>
              <span className="home-text028 title">
                Being social and getting leads has never been easier
              </span>
            </div>
            <div className="home-category">
              <div className="home-headng">
                <span className="home-text029">
                  1 — Sign up
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text030">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
                <div className="home-get-started2 template-button">
                  <span className="home-text031">Get started</span>
                </div>
              </div>
              <div className="home-container5">
                <img
                  alt="pastedImage"
                  src="/pastedimage-k5xi%201-1200w.png"
                  className="home-pasted-image"
                />
              </div>
            </div>
            <div className="home-row">
              <div className="home-category1">
                <div className="home-headng1">
                  <span className="home-text032">2 — Act</span>
                  <span className="home-text033">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. vv
                  </span>
                </div>
                <img
                  alt="pastedImage"
                  src="/pastedimage-ibg-1200w.png"
                  className="home-pasted-image1"
                />
              </div>
              <div className="home-category2">
                <div className="home-headng2">
                  <span className="home-text034">2 — Act</span>
                  <span className="home-text035">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. vv
                  </span>
                </div>
                <img
                  alt="pastedImage"
                  src="/pastedimage-3c4o-1200w.png"
                  className="home-pasted-image2"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="home-pricing">
          <div className="home-centered-container1">
            <div className="home-heading1">
              <span className="home-text036 title">
                Preço fixo lives para seu produtos
              </span>
              <span className="home-text037">
                Create next-generation solutions for small business customers
                with pricing options that accommodate everyone.
              </span>
              <div className="home-selection">
                <span className="home-text038">Monthly</span>
                <span className="home-text039">Yearly</span>
              </div>
            </div>
            <div className="home-cards1">
              <div className="home-card">
                <span className="home-text040">Free</span>
                <span className="home-text041">
                  Unlimited lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed doliqua.
                </span>
                <Link href="/live-shopee">
                  <a className="home-link">
                    <div className="home-get-started3 template-button">
                      <span className="home-text042">Start for free</span>
                    </div>
                  </a>
                </Link>
                <span className="home-text043">What&apos;s included</span>
                <div className="home-bullet-points">
                  <div className="home-point">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon06"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text044">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="home-point01">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon08"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text045">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
              <div className="home-card1">
                <span className="home-text046">Pay as you go</span>
                <span className="home-text047">
                  <span>Launch your lorem for $49/mo</span>
                  <br></br>
                  <span>
                    lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                </span>
                <div className="home-get-started4 template-button">
                  <span className="home-text051">
                    <span>Upgrade now</span>
                    <br></br>
                  </span>
                </div>
                <span className="home-text054">What&apos;s included</span>
                <div className="home-bullet-points1">
                  <div className="home-point02">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon10"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text055">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="home-point03">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon12"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text056">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="home-point04">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon14"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text057">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="home-point05">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon16"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text058">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
              <div className="home-card2">
                <span className="home-text059">Enterprise</span>
                <span className="home-text060">
                  <span>
                    Custom-built lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed doliqua.
                  </span>
                  <br></br>
                </span>
                <div className="home-get-started5 template-button">
                  <span className="home-text063">
                    <span>Contact us</span>
                    <br></br>
                  </span>
                </div>
                <span className="home-text066">What&apos;s included</span>
                <div className="home-bullet-points2">
                  <div className="home-point06">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon18"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text067">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="home-point07">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon20"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text068">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="home-point08">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon22"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text069">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="home-point09">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon24"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text070">
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
            <span className="home-text071">Testimonals</span>
            <span className="home-text072 title">
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
          <span className="home-text073">
            <span>Show more</span>
            <br></br>
          </span>
        </section>
        <section className="home-faq">
          <div className="home-heading2">
            <span className="home-text076 title">
              Frequently asked questions
            </span>
            <span className="home-text077">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
            </span>
          </div>
          <div className="home-accordion">
            <div data-faq="closed" className="accordionContainer">
              <div className="home-header1">
                <span className="home-text078">
                  — What is sit amet, consectetur adipiscing elit, sed do?
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
                <span className="home-text079">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="accordionContainer">
              <div className="home-header2">
                <span className="home-text080">
                  — Why is dolore magna aliqua excepteur sint
                </span>
                <svg viewBox="0 0 1024 1024" className="accordionIcon">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
              <div className="accordionContent">
                <span className="home-text081">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
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
                <span className="home-text082">
                  — Is excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum?
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
                <span className="home-text083">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div data-faq="closed" className="accordionContainer">
              <div className="home-header4">
                <span className="home-text084">
                  — Who quasi architecto beatae vitae dicta sunt explicabo. Nemo
                  enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                  aut fugit, sed quia consequuntur magni
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
                <span className="home-text085">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div data-faq="closed" className="accordionContainer">
              <div className="home-header5">
                <span className="home-text086">
                  — Is minim veniam quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </span>
                <svg viewBox="0 0 1024 1024" className="accordionIcon">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
              <div className="accordionContent">
                <span className="home-text087">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
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
            <div className="home-container7">
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
              <div className="home-category3">
                <span className="home-text088">Solutions</span>
                <div className="home-links2">
                  <span className="home-text089">Responsive Web Design</span>
                  <span className="home-text090">Responsive Prototypesv</span>
                  <span className="home-text091">Design to Code</span>
                  <span className="home-text092">Static Website Builder</span>
                  <span className="home-text093">Static Website Generator</span>
                </div>
              </div>
              <div className="home-category4">
                <span className="home-text094">Company</span>
                <div className="home-links3">
                  <span className="home-text095">About</span>
                  <span className="home-text096">Team</span>
                  <span className="home-text097">News</span>
                  <span className="home-text098">Partners</span>
                  <span className="home-text099">Careers</span>
                  <span className="home-text100">Press &amp; Media</span>
                </div>
              </div>
              <div className="home-category5">
                <span className="home-text101">Solutions</span>
                <div className="home-links4">
                  <span className="home-text102">Twitter</span>
                  <span className="home-text103">Linkedin</span>
                  <span className="home-text104">Crunchbase</span>
                  <span className="home-text105">Instagram</span>
                  <span className="home-text106">Facebook</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-bottom">
            <img
              alt="pastedImage"
              src="/startpee2024remo-200h.png"
              className="home-branding"
            />
            <span className="home-text107">Copyright © Active - 2022</span>
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
          }
          .home-hero {
            width: 100%;
            height: 1000px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            background-color: #5228f5;
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
            display: flex;
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
          .home-right {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-sign-in {
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
          .home-text006 {
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
          .home-container2 {
            display: contents;
          }
          .home-header {
            display: flex;
            margin-top: 140px;
            align-items: center;
            flex-direction: column;
          }
          .home-text007 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 80px;
          }
          .home-text008 {
            color: rgb(238, 233, 254);
            font-size: 20px;
            max-width: 600px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
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
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            background-color: #000000;
          }
          .home-get-started1:hover {
            color: black;
            background-color: #ffffff;
          }
          .home-text009 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .home-dashboard-preview {
            top: 650px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: #633df6;
            border-width: 30px;
            border-radius: 100px;
            flex-direction: column;
            background-color: #633df6;
          }
          .home-outline {
            display: flex;
            align-items: center;
            border-color: #7350f7;
            border-width: 20px;
            border-radius: 70px;
            flex-direction: column;
            background-color: #7350f7;
          }
          .home-image {
            width: 900px;
            z-index: 10;
            user-select: none;
          }
          .home-features {
            width: 100%;
            display: flex;
            z-index: 1;
            align-items: center;
            padding-top: 400px;
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            background-color: EFF0F2;
          }
          .home-title {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text010 {
            font-size: 56px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 72px;
          }
          .home-text014 {
            font-size: 20px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .home-cards {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: 80px;
            align-items: center;
            flex-direction: column;
          }
          .home-container3 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-icon02 {
            width: 32px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text017 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text018 {
            line-height: 24px;
          }
          .home-publish {
            height: initial;
          }
          .home-icon03 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text019 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text020 {
            line-height: 24px;
          }
          .home-container4 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: row;
          }
          .home-icon04 {
            width: 35px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text021 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: 16px;
          }
          .home-text022 {
            line-height: 24px;
          }
          .home-icon05 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text023 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text024 {
            line-height: 24px;
          }
          .home-quote-container {
            width: 100%;
            display: flex;
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
            max-width: 800px;
            margin-left: var(--dl-space-space-unit);
          }
          .home-text025 {
            font-style: normal;
            font-weight: 600;
          }
          .home-banners {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: column;
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
            background-color: #211062;
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
          .home-text027 {
            color: rgb(220, 212, 253);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .home-text028 {
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
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .home-text029 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .home-text030 {
            color: #eee9fe;
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
          .home-text031 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .home-container5 {
            flex: 1;
            height: 100%;
            display: flex;
            align-self: flex-end;
            flex-direction: row;
          }
          .home-pasted-image {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          .home-row {
            display: flex;
            grid-gap: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: row;
          }
          .home-category1 {
            flex: 1;
            color: white;
            height: 555px;
            display: flex;
            overflow: hidden;
            align-items: flex-end;
            border-radius: 50px;
            flex-direction: column;
            justify-content: space-between;
            background-color: #ffffff;
          }
          .home-headng1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: 0px;
          }
          .home-text032 {
            color: rgb(0, 0, 0);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .home-text033 {
            color: #1e1e1e;
            line-height: 24px;
          }
          .home-pasted-image1 {
            width: 100%;
          }
          .home-category2 {
            flex: 1;
            color: white;
            height: 555px;
            display: flex;
            overflow: hidden;
            align-items: flex-end;
            border-radius: 50px;
            flex-direction: column;
            justify-content: space-between;
            background-color: #000000;
          }
          .home-headng2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: 0px;
          }
          .home-text034 {
            color: #ffffff;
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .home-text035 {
            color: rgb(238, 233, 254);
            line-height: 24px;
          }
          .home-pasted-image2 {
            width: 100%;
            object-fit: contain;
          }
          .home-pricing {
            width: 100%;
            display: flex;
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
          .home-text036 {
            color: var(--dl-color-gray-white);
            text-align: center;
          }
          .home-text037 {
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
          .home-text038 {
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
          .home-text039 {
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
          .home-cards1 {
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
          .home-text040 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text041 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-link {
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
          .home-text042 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-text043 {
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
          .home-icon06 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text044 {
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
          .home-icon08 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text045 {
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
          .home-text046 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text047 {
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
          .home-text051 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-text054 {
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
          .home-icon10 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text055 {
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
          .home-icon12 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text056 {
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
          .home-icon14 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text057 {
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
          .home-icon16 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text058 {
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
          .home-text059 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text060 {
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
          .home-text063 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .home-text066 {
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
          .home-icon18 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text067 {
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
          .home-icon20 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text068 {
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
          .home-icon22 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text069 {
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
          .home-icon24 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text070 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-testimonals {
            width: 100%;
            display: flex;
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
          .home-text071 {
            color: rgb(82, 40, 245);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .home-text072 {
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
          .home-text073 {
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
          .home-text076 {
            text-align: center;
          }
          .home-text077 {
            color: rgb(0, 0, 0);
            width: 100%;
            max-width: 600px;
            text-align: center;
            margin-bottom: var(--dl-space-space-fiveunits);
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
          .home-header1 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text078 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text079 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .home-header2 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text080 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text081 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .home-header3 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text082 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text083 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .home-header4 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text084 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text085 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .home-header5 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text086 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text087 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .home-container7 {
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
          .home-category3 {
            width: 240px;
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .home-text088 {
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
          .home-text089 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
          }
          .home-text090 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text091 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text092 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text093 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-category4 {
            width: 240px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text094 {
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
          .home-text095 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text096 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text097 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text098 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text099 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text100 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-category5 {
            width: 240px;
            display: flex;
            flex-direction: column;
          }
          .home-text101 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-links4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text102 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text103 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text104 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text105 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text106 {
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
          .home-text107 {
            color: #686868;
            font-size: 14px;
            line-height: 30px;
          }
          @media (max-width: 991px) {
            .home-hero {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
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
              padding-right: 10px;
            }
            .home-left {
              margin-left: var(--dl-space-space-halfunit);
            }
            .home-logo1 {
              width: 64px;
              height: 39px;
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
            .home-header {
              width: 100%;
              max-width: 1200px;
            }
            .home-image {
              width: 100%;
            }
            .home-features {
              padding-top: 260px;
            }
            .home-title {
              width: 100%;
              max-width: 1200px;
            }
            .home-text010 {
              font-size: 36px;
              line-height: 40px;
            }
            .home-text014 {
              font-size: 20px;
              margin-top: var(--dl-space-space-unit);
              line-height: 30px;
            }
            .home-cards {
              margin-top: var(--dl-space-space-fiveunits);
            }
            .home-text018 {
              line-height: 21px;
            }
            .home-text020 {
              line-height: 21px;
            }
            .home-text022 {
              line-height: 21px;
            }
            .home-text023 {
              font-size: 24px;
            }
            .home-text024 {
              line-height: 21px;
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
            .home-category {
              padding-left: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-headng {
              margin-left: var(--dl-space-space-fourunits);
            }
            .home-container5 {
              width: 100%;
            }
            .home-pasted-image {
              height: auto;
            }
            .home-headng1 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .home-headng2 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .home-text037 {
              width: 100%;
              max-width: 600px;
            }
            .home-cards1 {
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
            .home-text041 {
              font-size: 16px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text043 {
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
            .home-text072 {
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
            .home-links4 {
              gap: var(--dl-space-space-unit);
            }
            .home-branding {
              width: var(--dl-size-size-medium);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-text107 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .home-hero {
              height: 620px;
              position: relative;
              padding-bottom: 180px;
              background-color: var(--dl-color-template-blue-bg);
            }
            .home-desktop-navigation {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-centered {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-left {
              margin-left: var(--dl-space-space-unit);
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
            .home-header {
              height: 100%;
              margin-top: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .home-text007 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
            }
            .home-text008 {
              color: rgb(238, 233, 254);
              font-size: 16px;
              margin-top: var(--dl-space-space-unit);
              line-height: 24px;
            }
            .home-get-started1 {
              margin-top: var(--dl-space-space-twounits);
            }
            .home-dashboard-preview {
              top: 520px;
              width: 90%;
              border-width: 10px;
              border-radius: 45px;
            }
            .home-outline {
              border-width: 10px;
              border-radius: 35px;
            }
            .home-image {
              width: 100%;
            }
            .home-features {
              padding-top: 350px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-text010 {
              font-size: 36px;
              font-style: normal;
              font-weight: 700;
              line-height: 40px;
            }
            .home-container3 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-text017 {
              font-size: 24px;
            }
            .home-text018 {
              font-size: 14px;
            }
            .home-publish {
              margin-left: 0px;
            }
            .home-text019 {
              font-size: 24px;
            }
            .home-text020 {
              font-size: 14px;
            }
            .home-container4 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-analyze {
              margin-right: 0px;
            }
            .home-text021 {
              font-size: 24px;
            }
            .home-text022 {
              font-size: 14px;
            }
            .home-text024 {
              font-size: 14px;
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
            .home-text028 {
              margin-bottom: 0px;
            }
            .home-headng {
              padding-bottom: 0px;
            }
            .home-get-started2 {
              display: none;
            }
            .home-container5 {
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
            .home-text040 {
              font-size: 28px;
            }
            .home-card1 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-text046 {
              font-size: 28px;
            }
            .home-card2 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-text059 {
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
            .home-text073 {
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
            .home-text076 {
              font-size: 36px;
              line-height: 36px;
            }
            .home-text077 {
              width: 100%;
              max-width: 600p;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              padding-bottom: 160px;
            }
            .home-logo {
              margin-left: 0px;
            }
            .home-icon {
              align-items: center;
              justify-content: center;
            }
            .home-logo1 {
              width: 64px;
              height: 38px;
            }
            .home-text008 {
              color: #eee9fe;
            }
            .home-get-started1 {
              width: 100%;
            }
            .home-dashboard-preview {
              top: 500px;
            }
            .home-features {
              padding-top: 200px;
            }
            .home-cards {
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-container3 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container4 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .home-analyze {
              margin-bottom: 0px;
            }
            .home-category {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
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
