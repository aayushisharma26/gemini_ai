
import React, { useState, useEffect } from "react";
import "./Apps.css";

const AppsSlides = [
  {
    title: "Big Title Text",
    subtitle: "Bring it all together with Gemini and your favourite apps.",
    description:
      "Go from tons of tabs to one conversation. Gemini can now access info from new sources\nstarting with Maps, YouTube, Flights and Hotels so that you can bring your ideas to life easier and faster.",
  },
  {
    title: "Another Large Heading",
    subtitle: "The magic of Gemini comes to your stuff.",
    description:
      "Find, summarise and get quick answers from your email, docs and PDFs. For example, summarise recent university visit reservations from Gmail and put them in a table with their date and time.",
  },
  {
    title: "Final Slide",
    subtitle: "Manage which apps Gemini connects to.",
    description:
      "Gemini shares information with connected apps, such as your location, to provide the most relevant response - but you control which apps Gemini connects to.",
  },
];

const Apps = () => {
  const [AppsCurrentIndex, setAppsCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAppsCurrentIndex((prevIndex) => (prevIndex + 1) % AppsSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="Apps-slider">
      <div className="Apps-slide">
        <h1 className="Apps-title">{AppsSlides[AppsCurrentIndex].title}</h1>
        <h2 className="Apps-subtitle">{AppsSlides[AppsCurrentIndex].subtitle}</h2>
        <p className="Apps-description">
          {AppsSlides[AppsCurrentIndex].description.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p><br></br><br></br><br></br>
        <button className="Apps-btn">Learn More</button>
      </div>
      <button
        className="Apps-button Apps-prev"
        onClick={() =>
          setAppsCurrentIndex((AppsCurrentIndex - 1 + AppsSlides.length) % AppsSlides.length)
        }
      >
        ‹
      </button>
      <button
        className="Apps-button Apps-next"
        onClick={() => setAppsCurrentIndex((AppsCurrentIndex + 1) % AppsSlides.length)}
      >
        ›
      </button>
    </div>
    <div className="Apps-dis-btn">
        <button className="dis-btn">Productivity</button>
        <button className="dis-btn">Travel</button>
        <button className="dis-btn">Media</button>
    </div>
    </>
  );
};

export default Apps;
