import React from "react";
import Navbar from "../HomePage/Hero/Navbar";
import Footer from "../HomePage/Footer/page";
import BlogHeader from "./header/page";
import FeaturedArticle from "./Featured_article/page";
import ArticleList from "./ArticleList/page";
import BlogCategories from "./Categories/page";
import NewsletterSection from "./Newsletter/page";


const BlogPage: React.FC = ()=>{
    return(
        <section>
            <Navbar/>
            <BlogHeader/>
            <FeaturedArticle/>
            <ArticleList/>
            <BlogCategories/>
            <NewsletterSection/>
            <Footer/>
        </section>
    )
}
export default BlogPage;