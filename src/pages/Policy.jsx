import React, { useState } from "react";
import { IoIosArrowDropright, IoMdTime } from "react-icons/io";
// import { Container, Row, Col, Accordion, Card, Button, Form } from "react-bootstrap";
import PDFImage from "../assets/PDFImage.jpg"

const policies = [
  {
    category: "Workplace Conduct",
    policies: [
      { title: "Code of Conduct", description: "Guidelines for workplace behavior.", link: "/policies/conduct", date: "2023-12-01", },
      { title: "Anti-Harassment Policy", description: "Ensuring a harassment-free environment.", link: "/policies/harassment", date: "2024-12-03", },
    ],
  },
  {
    category: "Leave and Attendance",
    policies: [
      { title: "Leave Policy", description: "Details on leave entitlement and process.", link: "/policies/leave", date: "2024-12-01", },
      { title: "Attendance Policy", description: "Guidelines for recording and managing attendance.", link: "/policies/attendance", date: "2024-12-01", },
    ],
  },
  {
    category: "Compensation and Benefits",
    policies: [
      { title: "Compensation Policy", description: "Information on salaries and benefits.", link: "/policies/compensation", date: "2024-12-01", },
      { title: "Insurance Policy", description: "Details on employee insurance coverage.", link: "/policies/insurance", date: "2024-12-01", },
    ],
  },
  {
    category: "Health and Safety",
    policies: [
      { title: "Health Policy", description: "Guidelines on health and wellness.", link: "/policies/health", date: "2024-12-01", },
      { title: "Safety Policy", description: "Ensuring a safe working environment.", link: "/policies/safety", date: "2024-12-01", },
    ],
  },
  {
    category: "IT and Data Security",
    policies: [
      { title: "IT Policy", description: "Use of IT resources and systems.", link: "/policies/it", date: "2024-12-01", },
      { title: "Data Security Policy", description: "Guidelines for protecting data.", link: "/policies/data-security", date: "2024-12-01", },
    ],
  },
];

const Policies = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  // Filter the policies based on the selected category
  const filteredPolicies =
    activeCategory === "All"
      ? policies.flatMap((policy) => policy.policies)
      : policies.find((policy) => policy.category === activeCategory)?.policies || [];

  return (
    <div className="policy">
      {/* Category Selection */}
      <div className="d-flex flex-wrap gap-2 mb-4">
        <div
          className={`category ${activeCategory === "All" ? "active" : ""}`}
          onClick={() => handleCategoryClick("All")}
        >
          All
        </div>
        {policies.map((policy, index) => (
          <div
            key={index}
            className={`category ${activeCategory === policy.category ? "active" : ""}`}
            onClick={() => handleCategoryClick(policy.category)}
          >
            {policy.category}
          </div>
        ))}
      </div>

      {/* Display Policies in Cards */}
      <div className="row">
        {filteredPolicies.map((policy, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-12 mb-4">
            <div className="course-card">
              <img
                src={PDFImage}
                className="course-image"
                alt="Course"
              />
              <div >
                <div className="p-3 d-flex flex-column justify-content-between ">
                  <div>
                    <div className="d-flex justify-content-between align-items-start">
                      <h5 className="course-title">{policy.title}</h5>
                      <div className="course-duration">
                        <IoMdTime size={18} />
                        {(() => {
                          const policyDate = new Date(policy.date);
                          const today = new Date();
                          const timeDifference = today - policyDate;

                          // Calculate the difference in hours, days, and weeks
                          const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
                          const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                          const weeksDifference = Math.floor(daysDifference / 7);

                          if (hoursDifference < 24) {
                            return `${hoursDifference} hrs ago`;
                          } else if (daysDifference < 7) {
                            return `${daysDifference} days ago`;
                          } else if (daysDifference < 30) {
                            return `${weeksDifference} week${weeksDifference > 1 ? 's' : ''} ago`;
                          } else {
                            return policyDate.toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            });
                          }
                        })()}
                      </div>
                    </div>
                    <p className="course-card-details">{policy.description}</p>
                  </div>
                  {/* <div className="course-card-rating" ></div> */}
                  <div>
                    <button className="button-one">View PDF <IoIosArrowDropright size={24} /></button>
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

export default Policies;
