import Image from "next/image";


export default function Home() {
  return (
    <div className="page page-home">
      <div className="page-inner container-fluid">
        <div className="page-hero">
          <h2>Welcome to My Website</h2>
          <p>This is the home page of my awesome website built with Next.js!</p>
        </div>
        <div className="page-content">
            <div className="page-section page-home-intro-image" style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
            <Image
              src="/images/annie-spratt-OjmhUpWfXyg-unsplash.jpg"
              alt="Intro Image"
              className="image-fluid"
              fill
              style={{ objectFit: "cover" }}
              sizes="100vw"
            />
            </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros
            quis consectetur.
          </p>
        </div>
      </div>
    </div>
  );
}
