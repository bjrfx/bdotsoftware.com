// src/pages/WikiPage.js
import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // For SEO purposes
import wikiData from './wikiData'; // Import the data that contains all your wiki content
import './WikiPage.css';
import Logo from '../../images/logo192.png';

function WikiPage() {
    const { slug } = useParams(); // Get the dynamic part of the URL
    const pageContent = wikiData[slug]; // Fetch the content based on the slug

    if (!pageContent) {
        return <div>Page not found</div>; // If the content doesn't exist, show an error
    }

    return (
        <Fragment>
            <div className="wiki-page">
                {/* Add meta tags for SEO */}
                <Helmet>
                    <title>{pageContent.title} | bdotsoftware Wiki</title>
                    <meta name="description" content={`Learn more about ${pageContent.title}. Explore information about ${pageContent.title} at bdotsoftware.`} />
                    <meta name="keywords" content="bdotsoftware, web development, cloud migration, platform engineering, devops, digital transformation" />
                    <meta name="author" content="bdotsoftware" />
                    
                    {/* Open Graph (OG) tags for social media */}
                    <meta property="og:title" content={`${pageContent.title} | bdotsoftware Wiki`} />
                    <meta property="og:description" content={`Learn more about ${pageContent.title} at bdotsoftware.`} />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={`https://bdotsoftware.com/wiki/${slug}`} />
                    <meta property="og:image" content={Logo} />
                    <meta property="og:site_name" content="bdotsoftware Wiki" />

                    {/* Twitter Cards */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={`${pageContent.title} | bdotsoftware Wiki`} />
                    <meta name="twitter:description" content={`Find out more about ${pageContent.title} at bdotsoftware.`} />
                    <meta name="twitter:image" content={Logo} />

                    {/* Instagram Cards */}
                    <meta name="instagram:card" content="summary_large_image" />
                    <meta name="instagram:title" content={`${pageContent.title} | bdotsoftware Wiki`} />
                    <meta name="instagram:description" content={`Find out more about ${pageContent.title} at bdotsoftware.`} />
                    <meta name="instagram:image" content={Logo} />

                    {/* Mobile responsive meta tag */}
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Helmet>

                {/* Render the content */}
                <h1>{pageContent.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: pageContent.content }} />
            </div>
        </Fragment>
    );
}

export default WikiPage;