import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import DummyThumbnailImage from '../assets/DummyThumbnailImage.jpg';
import { FaRegClock } from 'react-icons/fa';
import { IoIosArrowDropright, IoIosStar, IoIosStarOutline } from 'react-icons/io';
import { CiStar } from 'react-icons/ci';

const Popular = () => {
    // Dummy data with different types of durations
    const courses = [
        { id: 1, title: "Introduction to Programming", description: "Learn the fundamentals of programming using Python. Ideal for beginners.", image: DummyThumbnailImage, duration: 5000 },  // minutes
        { id: 2, title: "Web Development Basics", description: "Master the basics of web development, including HTML, CSS, and JavaScript.", image: DummyThumbnailImage, duration: 3 },  // hours
        { id: 3, title: "Advanced JavaScript", description: "Deep dive into JavaScript, focusing on advanced concepts and techniques.", image: DummyThumbnailImage, duration: 2 },  // days
        { id: 4, title: "Data Science with Python", description: "Learn data science concepts using Python libraries like Pandas and Matplotlib.", image: DummyThumbnailImage, duration: 30 },  // minutes
        { id: 5, title: "Machine Learning Fundamentals", description: "Get started with machine learning and AI, covering supervised and unsupervised learning.", image: DummyThumbnailImage, duration: 5 },  // hours
        { id: 6, title: "Cloud Computing Essentials", description: "Understand the basics of cloud computing and its applications in business.", image: DummyThumbnailImage, duration: 10 },  // days
        { id: 7, title: "UI/UX Design Principles", description: "Learn the essential principles of user interface and user experience design.", image: DummyThumbnailImage, duration: 120 }, // minutes
        { id: 8, title: "Digital Marketing 101", description: "An introduction to digital marketing strategies, including SEO, social media, and content marketing.", image: DummyThumbnailImage, duration: 8 },  // hours
    ];

    // Function to format the duration
    const formatDuration = (duration) => {
        if (duration >= 1440) {
            // If the duration is 1440 minutes or more, display in days
            const days = Math.floor(duration / 1440);
            return `${days} day${days > 1 ? 's' : ''}`;
        } else if (duration >= 60) {
            // If the duration is 60 minutes or more, display in hours
            const hours = Math.floor(duration / 60);
            return `${hours} hour${hours > 1 ? 's' : ''}`;
        } else {
            // Otherwise, display in minutes
            return `${duration} minute${duration > 1 ? 's' : ''}`;
        }
    };

    // Function to create slices of the course array with 4 courses each
    const getCourseChunks = () => {
        const chunkSize = 4;
        let result = [];
        for (let i = 0; i < courses.length; i += chunkSize) {
            result.push(courses.slice(i, i + chunkSize));
        }
        return result;
    };

    return (
        <div className="popular">
            <div className='d-sm-flex justify-content-between mb-3'>
                <p className="popular-title">Most Popular</p>
                <div>
                    <button className="button-one">View All <IoIosArrowDropright size={28} /></button>
                </div>
            </div>

            {/* Carousel for Desktop and Tablet Views */}
            <Carousel className="d-none d-md-block px-5" >
                {getCourseChunks().map((chunk, index) => (
                    <Carousel.Item key={index} >
                        <Row className="justify-content-center">
                            {chunk.map(course => (
                                <Col md={3} key={course.id} className="mb-4">
                                    
                                    <div className="course-card">
                                        <img src={course.image} alt={course.title} className="course-image" />
                                        <div className="p-2 d-flex flex-column justify-content-between ">
                                            <div className="d-flex justify-content-between align-items-center h-100">
                                                <div className="course-title">{course.title}</div>
                                                <div className="course-duration">
                                                    <FaRegClock size={12} /> {formatDuration(course.duration)}
                                                </div>
                                            </div>
                                            <div className="course-card-details">
                                                <p>{course.description}</p>
                                            </div>
                                            <div className='d-flex justify-content-between align-items-center my-2'>
                                            <div className='course-card-rating'>
                                                <IoIosStar size={24}/> <IoIosStar size={24}/> <IoIosStar size={24}/> <IoIosStar size={24}/> <IoIosStarOutline size={24} />
                                            </div>
                                            <button className='button-one'>Enroll <IoIosArrowDropright size={24}/></button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                ))}
            </Carousel>

            {/* Carousel for Mobile View (1 course per slide) */}
            <Carousel className="d-sm-none px-4">
                {courses.map(course => (
                    <Carousel.Item key={course.id} >
                        <Row className="justify-content-center">
                            <Col xs={12}>
                                <div className="course-card">
                                    <img src={course.image} alt={course.title} className="course-image" />
                                    <div className="p-2 d-flex flex-column justify-content-between h-100">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="course-title">{course.title}</div>
                                            <div className="course-duration">
                                                <FaRegClock size={12} /> {formatDuration(course.duration)}
                                            </div>
                                        </div>
                                        <div className="course-card-details">
                                            <p>{course.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                ))}
            </Carousel>

        </div>
    );
};

export default Popular;
