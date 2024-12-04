import React, { useState } from "react";
import { IoIosArrowDropright, IoMdTime } from "react-icons/io";
import OrientationImage from "../assets/PDFImage.jpg";  // Replace with your image

const orientationContent = [
  {
    title: "Welcome to the Company",
    description: "Get to know the company culture and values that drive us forward.",
    link: "/orientation/welcome",
    date: "2024-12-01",
  },
  {
    title: "Team Introduction",
    description: "Meet the team members who will support you in your journey.",
    link: "/orientation/team",
    date: "2024-12-02",
  },
  {
    title: "Tools and Resources",
    description: "Learn about the tools and resources you will use in your daily tasks.",
    link: "/orientation/tools",
    date: "2024-12-02",
  },
  {
    title: "Company Policies",
    description: "Familiarize yourself with the company's policies and procedures.",
    link: "/orientation/policies",
    date: "2024-12-02",
  },
  {
    title: "Health and Safety",
    description: "Get informed about the health and safety protocols at our company.",
    link: "/orientation/health-safety",
    date: "2024-12-01",
  },
];

const Orientations = () => {
  const [activeSection, setActiveSection] = useState("All");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  // Filter the content based on the selected section
  const filteredContent =
    activeSection === "All"
      ? orientationContent
      : orientationContent.filter((content) => content.title === activeSection);

  return (
    <div className="orientation">
      {/* Section Selection */}
      <div className="d-flex flex-wrap gap-2 mb-4">
        <div
          className={`category ${activeSection === "All" ? "active" : ""}`}
          onClick={() => handleSectionClick("All")}
        >
          All
        </div>
        {orientationContent.map((content, index) => (
          <div
            key={index}
            className={`category ${activeSection === content.title ? "active" : ""}`}
            onClick={() => handleSectionClick(content.title)}
          >
            {content.title}
          </div>
        ))}
      </div>

      {/* Display Content in Cards */}
      <div className="row">
        {filteredContent.map((content, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-12 mb-4">
            <div className="course-card">
              <img
                src={OrientationImage}
                className="course-image"
                alt="Orientation"
              />
              <div>
              <div className="p-3 d-flex flex-column justify-content-between h-100">
                <div>
                  <div className="d-flex justify-content-between align-items-start">
                    <h5 className="course-title">{content.title}</h5>
                    <div className="course-duration">
                      {/* If date is recent, show time ago */}
                      <IoMdTime size={18} />
                      {(() => {
                        const contentDate = new Date(content.date);
                        const today = new Date();
                        const timeDifference = today - contentDate;

                        const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
                        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                        const weeksDifference = Math.floor(daysDifference / 7);

                        if (hoursDifference < 24) {
                          return `${hoursDifference} hrs ago`;
                        } else if (daysDifference < 7) {
                          return `${daysDifference} days ago`;
                        } else if (daysDifference < 30) {
                          return `${weeksDifference} week${weeksDifference > 1 ? "s" : ""} ago`;
                        } else {
                          return contentDate.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          });
                        }
                      })()}
                    </div>
                  </div>
                  <p className="course-description">{content.description}</p>
                </div>
                <div>
                  <button className="button-one">
                    Learn More <IoIosArrowDropright size={24} />
                  </button>
                </div>
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orientations;
