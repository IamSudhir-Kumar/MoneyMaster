import React from 'react';
// Import your CSS styles

function Header() {
    return (
        <div className="App">
            {/* Header */}
            <header>
                <nav>
                    <div className="logo">MoneyMaster</div>
                    <ul>
                        <li><a href="#">Courses</a></li>
                        <li><a href="#">Financial Tools</a></li>
                        <li><a href="#">Community</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Register</a></li>
                    </ul>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Empower Yourself with Financial Knowledge</h1>
                    <p>Join MoneyMaster and take control of your financial future.</p>
                    <a href="#" className="cta-button">Explore Courses</a>
                </div>
                <div className="hero-image">
                </div>
            </section>

            {/* Featured Courses */}
            <div className="heading">
                <h2>Featured Courses</h2>
            </div>
            <section className="featured-courses">

                <div className="course-card">
                    {/* Course 1 */}
                    <div className="course-image">
                        {/* Add course image */}
                    </div>
                    <h3>Course Name 1</h3>
                    <p>Short course description goes here.</p>
                    <a href="#">Learn More</a>
                </div>
                <div className="course-card">
                    {/* Course 2 */}
                    <div className="course-image" id='course-image2'>
                        {/* Add course image */}
                    </div>
                    <h3>Course Name 2</h3>
                    <p>Another short course description here.</p>
                    <a href="#">Learn More</a>
                </div>
                <div className="course-card">
                    {/* Course 3 */}
                    <div className="course-image" id='course-image3'>
                        {/* Add course image */}
                    </div>
                    <h3>Course Name 3</h3>
                    <p>Another short course description here.</p>
                    <a href="#">Learn More</a>
                </div>
                <div className="course-card">
                    {/* Course 4 */}
                    <div className="course-image" id='course-image4'>
                        {/* Add course image */}
                    </div>
                    <h3>Course Name 4</h3>
                    <p>Another short course description here.</p>
                    <a href="#">Learn More</a>
                </div>
                <div className="course-card">
                    {/* Course 4 */}
                    <div className="course-image" id='course-image5'>
                        {/* Add course image */}
                    </div>
                    <h3>Course Name 4</h3>
                    <p>Another short course description here.</p>
                    <a href="#">Learn More</a>
                </div>
                <div className="course-card">
                    {/* Course 4 */}
                    <div className="course-image" id='course-image6'>
                        {/* Add course image */}
                    </div>
                    <h3>Course Name 4</h3>
                    <p>Another short course description here.</p>
                    <a href="#">Learn More</a>
                </div>
                
                {/* Add more course cards as needed */}
            </section>

            {/* Add other sections (testimonials, about, footer, etc.) */}
        </div>
    );
}

export default Header;
