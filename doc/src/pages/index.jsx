import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Navbar from "@theme/Navbar";

export default function Home() {
  return (
    <Layout
      noNavbar
      noFooter
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <div id="welcome">
          <Navbar />
          <div className="tagline__headline-wrapper">
            <div className="tagline__headline">
              <h1 className="tagline__headline--title">
                Upgrade Your Code <br /> With <span>Iampact</span>
              </h1>
              <p className="tagline__headline--desc">
                Transform your development process with cutting-edge tools and
                techniques. Enhance your code quality, increase efficiency, and
                create solutions that make a difference.
              </p>
              <div className="actions-wrapper">
                <Link
                  className="button button--primary button--lg custom-button"
                  to="/docs/intro"
                >
                  GET STARTED
                </Link>
                <a
                  href="https://saweria.co/iampact"
                  className="button button-white button--lg custom-button"
                  target="_blank"
                >
                  SUPPORT US
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
