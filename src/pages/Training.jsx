import React, { useState } from "react";
import { IoIosArrowDropright, IoMdTime } from "react-icons/io";
import TrainingImage from "../assets/DummyThumbnailImage.jpg"; // Replace with your image
import { MdOutlineStar, MdOutlineStarOutline } from "react-icons/md";
const trainingContent = [
    {
      name: 'Onboarding and Orientation',
      items: [
        {
          title: 'Introduction to the LMS',
          image: 'onboarding-lms-image.jpg',
          description: 'Learn how to navigate the LMS platform.',
          link: '/onboarding/lms-introduction',
          duration: '1 hour'
        },
        {
          title: 'Company Policies & Procedures',
          image: 'company-policies-image.jpg',
          description: 'Understand company policies and your role.',
          link: '/onboarding/company-policies',
          duration: '2 hours'
        },
        {
          title: 'Employee Expectations',
          image: 'employee-expectations-image.jpg',
          description: 'Get familiar with company expectations and culture.',
          link: '/onboarding/employee-expectations',
          duration: '1.5 hours'
        },
        {
          title: 'Compliance Training',
          image: 'compliance-training-image.jpg',
          description: 'Learn essential compliance rules and regulations.',
          link: '/onboarding/compliance-training',
          duration: '3 hours'
        }
      ]
    },
    {
      name: 'Technical Skills',
      items: [
        {
          title: 'Software Development',
          image: 'software-development-image.jpg',
          description: 'Learn programming languages and development techniques.',
          link: '/technical-skills/software-development',
          duration: '4 hours'
        },
        {
          title: 'Database Management',
          image: 'database-management-image.jpg',
          description: 'Master the art of managing and querying databases.',
          link: '/technical-skills/database-management',
          duration: '5 hours'
        },
        {
          title: 'Cloud Computing',
          image: 'cloud-computing-image.jpg',
          description: 'Understand cloud infrastructure and services.',
          link: '/technical-skills/cloud-computing',
          duration: '6 hours'
        },
        {
          title: 'IT Security',
          image: 'it-security-image.jpg',
          description: 'Learn how to secure systems and data against threats.',
          link: '/technical-skills/it-security',
          duration: '4 hours'
        }
      ]
    },
    {
      name: 'Soft Skills',
      items: [
        {
          title: 'Communication Skills',
          image: 'communication-skills-image.jpg',
          description: 'Enhance your verbal and written communication.',
          link: '/soft-skills/communication',
          duration: '2 hours'
        },
        {
          title: 'Leadership and Management',
          image: 'leadership-management-image.jpg',
          description: 'Develop leadership and management capabilities.',
          link: '/soft-skills/leadership',
          duration: '3 hours'
        },
        {
          title: 'Conflict Resolution',
          image: 'conflict-resolution-image.jpg',
          description: 'Learn how to handle workplace conflicts effectively.',
          link: '/soft-skills/conflict-resolution',
          duration: '2.5 hours'
        },
        {
          title: 'Time Management',
          image: 'time-management-image.jpg',
          description: 'Master the art of managing time and priorities.',
          link: '/soft-skills/time-management',
          duration: '2 hours'
        }
      ]
    },
    {
      name: 'Product Knowledge',
      items: [
        {
          title: 'Company Products and Services',
          image: 'company-products-image.jpg',
          description: 'Learn about the products and services offered by the company.',
          link: '/product-knowledge/products-services',
          duration: '3 hours'
        },
        {
          title: 'Product Features and Benefits',
          image: 'product-features-image.jpg',
          description: 'Understand the key features and benefits of the products.',
          link: '/product-knowledge/features-benefits',
          duration: '2 hours'
        },
        {
          title: 'Customer Support Training',
          image: 'customer-support-image.jpg',
          description: 'Train to support customers effectively and efficiently.',
          link: '/product-knowledge/customer-support',
          duration: '4 hours'
        },
        {
          title: 'Technical Support for Products',
          image: 'technical-support-image.jpg',
          description: 'Learn how to troubleshoot and support products technically.',
          link: '/product-knowledge/technical-support',
          duration: '5 hours'
        }
      ]
    },
    {
      name: 'Compliance and Regulations',
      items: [
        {
          title: 'Data Privacy and Security',
          image: 'data-privacy-image.jpg',
          description: 'Understand the best practices for data privacy and security.',
          link: '/compliance/data-privacy',
          duration: '2 hours'
        },
        {
          title: 'Health and Safety Standards',
          image: 'health-safety-image.jpg',
          description: 'Learn about workplace health and safety regulations.',
          link: '/compliance/health-safety',
          duration: '3 hours'
        },
        {
          title: 'Regulatory Compliance (GDPR, HIPAA)',
          image: 'regulatory-compliance-image.jpg',
          description: 'Ensure compliance with global regulations like GDPR and HIPAA.',
          link: '/compliance/regulatory-compliance',
          duration: '4 hours'
        },
        {
          title: 'Equal Opportunity & Diversity',
          image: 'equal-opportunity-image.jpg',
          description: 'Learn about diversity in the workplace and equal opportunities.',
          link: '/compliance/equal-opportunity',
          duration: '2 hours'
        }
      ]
    },
    {
      name: 'Customer Service',
      items: [
        {
          title: 'Customer Interaction and Communication',
          image: 'customer-interaction-image.jpg',
          description: 'Improve your skills in handling customer queries and interactions.',
          link: '/customer-service/customer-interaction',
          duration: '2.5 hours'
        },
        {
          title: 'Handling Difficult Customers',
          image: 'difficult-customers-image.jpg',
          description: 'Learn how to deal with challenging customer situations.',
          link: '/customer-service/difficult-customers',
          duration: '3 hours'
        },
        {
          title: 'Customer Feedback and Surveys',
          image: 'customer-feedback-image.jpg',
          description: 'Learn how to collect and use customer feedback.',
          link: '/customer-service/feedback-surveys',
          duration: '2 hours'
        },
        {
          title: 'Service Standards',
          image: 'service-standards-image.jpg',
          description: 'Ensure customer satisfaction by meeting service standards.',
          link: '/customer-service/service-standards',
          duration: '3 hours'
        }
      ]
    },
    {
      name: 'Sales and Marketing',
      items: [
        {
          title: 'Sales Strategies',
          image: 'sales-strategies-image.jpg',
          description: 'Master techniques for closing sales and boosting revenue.',
          link: '/sales-marketing/sales-strategies',
          duration: '4 hours'
        },
        {
          title: 'Customer Relationship Management (CRM) Systems',
          image: 'crm-systems-image.jpg',
          description: 'Learn how to use CRM tools to manage customer relationships.',
          link: '/sales-marketing/crm-systems',
          duration: '3 hours'
        },
        {
          title: 'Digital Marketing',
          image: 'digital-marketing-image.jpg',
          description: 'Explore digital marketing strategies for reaching a wider audience.',
          link: '/sales-marketing/digital-marketing',
          duration: '5 hours'
        },
        {
          title: 'Product Pricing and Negotiation',
          image: 'product-pricing-image.jpg',
          description: 'Learn pricing strategies and negotiation techniques.',
          link: '/sales-marketing/pricing-negotiation',
          duration: '3 hours'
        }
      ]
    }
  ];
  
  
const Trainings = () => {
  const [activeSection, setActiveSection] = useState("All");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  // Filter the content based on the selected section
  const filteredContent =
  activeSection === "All"
    ? trainingContent
    : trainingContent.filter((content) => content.name === activeSection);

      return (
        <div className="training">
          {/* Section Selection */}
          <div className="d-flex flex-wrap gap-2 mb-4">
            <div
              className={`category ${activeSection === "All" ? "active" : ""}`}
              onClick={() => handleSectionClick("All")}
            >
              All
            </div>
            {trainingContent.map((content, index) => (
              <div
                key={index}
                className={`category ${activeSection === content.name ? "active" : ""}`}
                onClick={() => handleSectionClick(content.name)}
              >
                {content.name}
              </div>
            ))}
          </div>
    
          {/* Display Training Content in Cards */}
          <div className="row">
            {filteredContent.map((category, index) => (
              <div key={index} className="col-12 mb-4">
                <h4 className="training-category-title">{category.name}</h4>
                <div className="row">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="col-lg-3 col-md-4 col-12 mb-4">
                      <div className="course-card">
                        <div className="course-image-container">
                       <img
                          src={TrainingImage} // Use item.image here if each has a unique image
                          className="course-image"
                          alt="Training"
                        />
                        </div>
                        <div>
                          <div className="p-3 d-flex flex-column justify-content-between">
                            <div>
                              <div className="d-flex justify-content-between align-items-start">
                                <h5 className="course-title">{item.title}</h5>
                                <div className="course-duration">
                                  <IoMdTime size={18} />
                                  {/* Display time ago or formatted date */}
                                  <span >{item.duration}</span>
                                </div>
                              </div>
                              <p className="course-description">{item.description}</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="course-card-rating" ><MdOutlineStar size={24} /> <MdOutlineStar size={24} /> <MdOutlineStar size={24} /> <MdOutlineStar size={24} /><MdOutlineStarOutline size={24} /> </div>
                              <button  className="button-one">
                                Enroll Now <IoIosArrowDropright size={24} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };

export default Trainings;
