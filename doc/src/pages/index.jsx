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
              <h1 className="tagline__headline--title">Welcome to Iampact</h1>
              <p className="tagline__headline--desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                aliquid praesentium numquam aperiam ipsum qui enim nobis in
                maiores, possimus cumque.
              </p>
              <Link
                className="button button--primary button--lg"
                to="/docs/intro"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
