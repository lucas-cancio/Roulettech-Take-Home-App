import Layout from "../components/layout/Layout";
import './styles/landingPage.css';

const LandingPage = () => {
    return (
        <Layout>
            <div className="pt-5 mt-5">
                <div className="container-fluid">
                    <div className="d-flex flex-row justify-content-center">
                        <div className="d-flex flex-column col-12">

                            <div className="d-flex flex-row justify-content-center mt-5 pt-5">
                                <h1> Welcome to <strong className="site-title">RecipeHaven</strong></h1>
                            </div>
                            <div className="d-flex flex-row justify-content-center mt-1 mb-5 pb-2">
                                <h5>Discover, Create, and Share Your Favorite Recipes</h5>
                            </div>

                            <div className="d-flex flex-row justify-content-around align-items-center flex-wrap my-4">
                                <div className="d-flex flex-column col-sm-10 col-md-7 col-lg-6 col-xl-5 justify-content-start align-items-center">
                                    <div>
                                        <h4>Your Culinary Adventure Starts Here</h4>
                                        <p>Welcome to Recipe Haven, your ultimate destination for all things delicious. 
                                            Whether you’re a seasoned chef or a home cook looking 
                                            for inspiration, Recipe Haven has everything you need to create culinary masterpieces.
                                        </p>
                                    </div>
                                    <div>
                                        <h4>Explore Our Extensive Collection</h4>
                                        <p>Browse through our extensive collection of recipes and find your next favorite dish. Our 
                                            easy-to-use search functionality allows you to find recipes by ingredients, cuisine, cook tim
                                            e, rating, and keywords. No matter what you’re in the mood for, we’ve got a recipe for you.
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex flex-column col-sm-10 col-md-3 col-lg-5 col-xl-5 align-items-center justify-content-center mt-5">
                                    <img className="sampleImage" src={`${process.env.PUBLIC_URL}/assets/images/SampleImg1.jpg`} alt="" />
                                </div>
                            </div>

                            <div className="d-flex flex-row justify-content-center flex-wrap my-5">
                                <div className="d-flex flex-column col-sm-8 col-md-6 col-lg-4 col-xl-3 p-4">
                                    <h5 className="colored-text text-center">Join Our Community</h5>
                                    <p className=" text-center">Sign up today to become a part of our vibrant cooking community. Share your own recipes, 
                                        rate others, and get inspired by the culinary creations of cooks from around the world.
                                    </p>
                                </div>
                                
                                <div className="d-flex flex-column col-sm-8 col-md-6 col-lg-4 col-xl-3 p-4">
                                    <h5 className="colored-text text-center">Our Mission</h5>
                                    <p className=" text-center">At Recipe Haven, our mission is to bring people together through the love of food. We believe that cooking should be fun, creative, and accessible to everyone. 
                                        That’s why we’ve created a platform that makes it easy to discover, create, and share amazing recipes.
                                    </p>
                                </div>
                                
                                <div className="d-flex flex-column col-sm-8 col-md-6 col-lg-4 col-xl-3 p-4">
                                    <h5 className="colored-text text-center">Get Started</h5>
                                    <p className=" text-center">Ready to start your culinary journey? Explore our recipes, find inspiration, and share your own creations. 
                                        Welcome to Recipe Haven, where every meal is a celebration.
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex flex-row justify-content-around align-items-center flex-wrap my-4">
                                <div className="d-flex flex-column col-sm-10 col-md-3 col-lg-5 col-xl-5 align-items-center mb-5">
                                    <img className="sampleImage" src={`${process.env.PUBLIC_URL}/assets/images/SampleImg2.jpg`} alt="" />
                                </div>
                                <div className="d-flex flex-column col-sm-10 col-md-6 col-lg-6 col-xl-5 justify-content-start align-items-start pt-2">
                                    <h2 className="colored-text pb-2">Key Features</h2>
                                    <div>
                                        <h5>Homepage with a List of Recipes</h5>
                                        <p>Discover a variety of recipes right from our homepage. From appetizers to desserts, we have it all.</p>

                                        <h5>Search Functionality</h5>
                                        <p>Easily find recipes that match your needs by searching for ingredients, cuisine, cook time, rating, or keywords.</p>

                                        <h5>Recipe Detail Page</h5>
                                        <p>Get detailed information about each recipe, including ingredients, instructions, a summary, ratings, cuisine type, and pictures.</p>

                                        <h5>Add New Recipes</h5>
                                        <p>Have a recipe you love? Share it with our community by adding it to our collection. Use our simple form to add a new recipe.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};


export default LandingPage;