import React from 'react';

const frontVsBackend = {}

frontVsBackend.title = "Developer development"

frontVsBackend.content = <div className="Blog-content">
    <img src="https://www.bitdegree.org/tutorials/wp-content/uploads/2018/11/Front-End-vs-Back-End-Developer-The-Guide-to-Choose-Which-Is-For-You.jpg"/>
    <p className="Blog-text">
    After some inner battles and fears i finally have the guts to call myself a real developer and have become confident in my own abilities.
    Becouse of that, i have written about a few tips which i picked up along the way
     </p>
    <h6 className="Blog-subheader">Front end vs backend</h6>
    <p className="Blog-text">
    As with a lot of people who first get in to web development i started out with front end development projects.
    I looked at backend development as something only the expert developers could handle.
    After playing around with frontend for a long time, i gathered up the courage to try building something with node, express and postgres.
    I was in for a big suprise, it wasnt really that difficult after all.
    I think that guides and tutorials shouldn't separate those two subjects as much.
    If i had a time machine i would have learned them both at the same time, rather than only playing around with frontend. 
    The one important tip i can give is that remember that frontend should be lightweight and only concerned about the visual aspect.
    Whenever you are creating a function always ask yourself if i could be doing this in the backend.
    </p>

    <h6 className="Blog-subheader">Understanding the big picture</h6>
    <p className="Blog-text">
    <a href="https://en.wikipedia.org/wiki/Software_development">Wikipedia </a> has a comprehesive look at the entire software development process.
    It also heavily emphasizes the importance of the design process.
    Learning the design process is often overlooked by developers, and to be honest i have only recently learned about the value it can bring to you.
    Be sure to take a step back and look at the project you are building.
    <a href="https://en.wikipedia.org/wiki/Tunnel_vision_(metaphor)"> Tunnel vision </a> is often the cause of unmotivation and other external development issues.
    Ask yourself what problems are you hoping to solve with it and how it fits into the current software ecosystem.
    Great ideas are often born after you take a break and do something relaxing for a couple of days.
    Once you come back to your work, you usually have a new perspective.
    </p>

    <h6 className="Blog-subheader">Steal the design</h6>
    <p className="Blog-text">
    Designing the visual aspect of your website can be very time consuming.
    Whenever i work on the design aspect of a project i always try to steal as many aspects as i can from other sites.
    I am currently working on a website which has similiar features as github.
    So i simply recreated their design for my site with slight alterations.
    Popular sites often follow the latest design trends and have resources to optimize their <a href="https://en.wikipedia.org/wiki/User_experience">user experience </a> as much as possible.
    Let them do all the hard work of figuring out what design works, and simply recreate it to suit your needs.
    </p>
</div>

const notJustCoding = {}

notJustCoding.title = "It's not all about coding"

notJustCoding.content = <div className="Blog-content">
    <img src="https://onmogul.s3.amazonaws.com/uploads/story/thumbnail/66940/e7edf92a90.jpg"/>
    <p className="Blog-text">
    I think there is one aspect of programming that every tutorial, teacher and article seems to miss.
    The importance of documenting your projects.
    <ul className="Blog-list">Here is a few of the benefits :
        <li>It allows people who aren't programmers to understand what you are building </li>
        <li>Potential employers would love to see your process of designing a project</li>
        <li>You start to understand your project a lot better, allowing you to see it's strengths and weaknesses</li>
        <li>It will create a trail of your own accomplishments and growth, giving you a more clear sense of your own abilities</li>
        
    </ul>
    </p>
    <h6 className="Blog-subheader">Why design docs matter</h6>

    <p className="Blog-text">
    Developers need to accept the fact that not everyone is a developer. 
    I often have a hard time trying to explain to my friends and family members what it is that i actually do. 
    <a className="" href="https://en.wikipedia.org/wiki/Curse_of_knowledge"> curse of knowledge </a> occurs when you simply assume that the other person has the same background to understand what you are talking about.
    This is a very common ilness among programmers, becouse we spend so much time talking with other developers.
    Remember that the sign of an true expert is not how much information you can attain, but how much of it you can convey to other people.
    Conflicts can occur if you are working on a project with multiple people and some of the team members don't understand programming.
    I was once building a game project and the team leader didn't understand much about programming.
    At the time i was very frustrated, but later on i have realized that the whole issue could have been prevented with some coherent design documentation.
    </p>

    <h6 className="Blog-subheader">What is good documentation</h6>

    <p className="Blog-text">
    As i said before, a lot of conflicts occur when developers meet people with regular human beings.
    That's why your project documentation should be readable by not just developers, but everyone else too.
    <a href="https://en.wikipedia.org/wiki/Software_design">Here </a> is a great article on the basics of software design.
    Remember that your brain can process images 60,000 times faster than it can process words.
    Therefore images are great tool when using words gets too complicated.
    Design documentation shouldn't contain code, unless it's absolutely nececcary.
    </p>
</div>


export {frontVsBackend, notJustCoding}