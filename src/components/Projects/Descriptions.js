import React from 'react';

const candyLand = {}

candyLand.title = "Candy Town"

candyLand.links = <div className="project-links">
    <h2>Links</h2>
    <a href="https://jupemon.github.io/web-store-front-customer/">View Project (customer view)</a>
    <a href="https://jupemon.github.io/web-store-front-manage/">View Project (manage store)</a>
    <a href="https://github.com/Jupemon/web-store-back">Backend Code</a>
    <a href="https://github.com/Jupemon/web-store-front-manage">Frontend Code (manage store)</a>
    <a href="https://github.com/Jupemon/web-store-front-customer">Frontend Code (customer)</a>
    
</div>

candyLand.description = <div>
<p>Candy town is an online candy store</p>
<p>The project is split into two seperate front end views : customer view and interface managing page</p> 
<p style={{color:"yellow"}}>Website is currently deployed on heroku, so initial website loading might be slow!</p>
<p style={{color:"yellow"}}>I had to lock the store management interface with a password to prevent malicious behavior</p>
</div>

candyLand.whyCreateIt = <div>
    <p>I wanted to learn more about managing databases, creating a sign up functionality and about creating a management interface</p>
    <p>But the original idea was to create an entirely new ecommerce platform similiar to Shopify. Something which could be used by people with a need for an online store, but i quickly realized that was a little too ambitious.</p>
</div>

candyLand.whatILearned = <div>
<p>The importance of researching the current alternatives for your application is huge. While working on the project i noticed that there already exists a bunch of well established ecommerce platforms (Shopify, etc.), and trying to compete with them is pure madness. In the future i will focus on creating web apps that complement an already existing big service (Youtube, Twitter, Facebook, etc.)</p>
<p>I created a signup feature from scratch, but afterwards i discovered Google authentication API. Using google signup makes it alot more likely for users to register for your service. It also eliminates the need for creating your own sign up functionalities</p>
<p>More time bulding the visual appeal, and less on the functionalities</p>
</div>

candyLand.futurePlans = <div>
    <p>If i ever need to start my own ecommerce site i can easily modify the project to suit my needs</p>
</div>

candyLand.functionality = <ul>
<li>Log in and Register functionality</li>
<li>After the project size became too large i added conditional importing for react components to increase performance</li>
<li>Product filtering</li>
<li>Password hashing is implemented in the database ( Bcrypt )</li>
<li>JWT tokens used to secure certain backend routes</li>
<li>Css lazy loading</li>

</ul>

candyLand.tools = <div className="list-stylings">
    <h2>Main tools</h2>
    <ul>
        <li>React </li>
        <li>Bootsrap</li>
        <li>Node</li>
        <li>Express</li>
        <li>Postgres</li>
    </ul>
    <h2>Other tools</h2>
        <ul>
        <li>Bcrypt (password hashing)</li>
        <li>Knex (database transactions)</li>
        <li>Fontawesome (logos)</li>
    </ul>
</div>

const planB = {}

planB.title = "Plan B"

planB.links = <div className="project-links">
    <h2 id="links">Links</h2>
    <a href="https://jupemon.github.io/planb-restoraunt-site/">View Project</a>
    <a href="https://github.com/Jupemon/planb-restoraunt-site">View Code</a>
</div>

planB.description = <div>
<p>Plan b is a simple website created for a small restaurant operating in Oulu</p>
</div>

planB.functionality = <ul>
<li>Responsive web design</li>
<li>Mobile friendly</li>
</ul>

planB.tools =  <div className="list-stylings">
<ul>
    <li>React</li>
    <li>Bootsrap</li>
    <li>Javascript/Css/Html</li>
</ul>
</div>


const imageChecker = {}

imageChecker.title = "Image Checker"

imageChecker.links = <div className="project-links">
    <h2 id="links">Links</h2>
    <a href="https://jupemon.github.io/image-checker/">View Project</a>
    <a href="https://github.com/Jupemon/image-checker-server">Backend Code</a>
    <a href="https://github.com/Jupemon/image-checker">Frontend Code</a>
</div>

imageChecker.description = <div>
    <p>This is my personal project. It uses facial recognizing API to detect faces from images</p>
    <p style={{color:"yellow"}}>I have setup a default password/email and image for testing purposes</p>
</div>

imageChecker.functionality = <ul>
<li>Image recognizing API (Clarifai)</li>
<li>Login/Register functionality</li>
<li>Database password hashing with Bcrypt</li>
<li></li>
</ul>

imageChecker.tools = <div className="list-stylings">
<ul>
    <li>React</li>
    <li>Tachyons</li>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>Postgres</li>
    <li>Clarifai API</li>
    
</ul>
</div>

imageChecker.whatILearned = <div>
    <p>I learned the clear seperation of backend and frontend features. While working on the project i noticed that some frontend features could be moved to the backend, and access them with a ajax request. This saves alot in your performance budget</p>

</div>

const devDocs = {}

devDocs.title = "DevDocs"

devDocs.links = <div className="project-links">
    <h2>Links</h2>
    <p style={{color:"yellow"}}>Coming soon...</p>
    
</div>

devDocs.description = <div>
<p>Devdocs is an online tool for organizing your design documentation</p>
<p>The same way github is a place where you upload all your code, devdocs allows you to upload your design documentation</p> 
<p>The main purpose of the site is to allow non developers to see and understand a project by reading the documentation</p>
<p style={{color:"yellow"}}>The project is currently being developed</p>
</div>

devDocs.whyCreateIt = <div>
    <p>While searching for developer jobs, i have found it difficult to explain how and what i exactly did in a project. I hope to create a site that allows people to easily explain their own contribution towards a project</p>
</div>

devDocs.whatILearned = <div>
<p>
    i am still currently working on the project, lets see what i learn from it...
</p>
</div>

devDocs.futurePlans = <div>
    <p>I plan to publish a working build as quickly as i can. Hopefully the app can gain users.</p>
    <p>If the app can gain some attraction i plan on adding some more essential features to it</p>
</div>

devDocs.functionality = <ul>
<li>Log in and Register functionality</li>
<li>Postgres database</li>
<li>RoboHash</li>
<li>JWT tokens used to secure certain backend routes</li>
<li>Dropbox file uploading api</li>

</ul>

devDocs.tools = <div className="list-stylings">
    <h2>Main tools</h2>
    <ul>
        <li>React </li>
        <li>Bootsrap</li>
        <li>Node</li>
        <li>Express</li>
        <li>Postgres</li>
        <li>Dropbox API</li>
    </ul>
</div>


const linkitTV = {};

linkitTV.title = "linkitTV"

linkitTV.links = <div className="project-links">
    <h2>Links</h2>
    <a href="https://linkittv.herokuapp.com/">View Project</a>
    <a href="https://github.com/Jupemon/LinkitTV">View Code</a>
    
</div>

linkitTV.description = <div>
<p>LinkitTV allows streamers to view videos suggested by their audience</p>
<p style={{color:"yellow"}}>deployed on heroku which makes the initial loading times sometimes pretty long</p>
</div>

linkitTV.whyCreateIt = <div>
    <p>I think there is a dire need for web apps which allow streamers to interact with their audience better.</p>
</div>

linkitTV.whatILearned = <div>
<p>
    The biggest difficulty was learning how to use next.js framework, 
    i also had a bunch of difficulties while trying to deploy the app, 
    but those were solved after i decided to deploy it on good old heroku!
</p>
</div>

linkitTV.futurePlans = <div>
    <p>I will continue to tweak it in small ways</p>
    <p>If the app becomes popular i plan on creating additional premium features on it, and put the behind a paywall</p>
    <p>Addional features include : video suggestion monitoring, user voting on the most intresting video and login/signin functionality for saving sessions</p>
</div>

linkitTV.tools = <div className="list-stylings">
    <h2>Main tools</h2>
    <ul>
        <li>React </li>
        <li>Next.js</li>
        <li>Node</li>
        <li>Express</li>
        <li>Youtube Iframe API</li>
        <li>Socket.io</li>
    </ul>
</div>

export {imageChecker, planB, candyLand, devDocs, linkitTV}