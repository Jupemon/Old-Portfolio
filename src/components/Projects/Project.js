import React from 'react';
import './Projects.css'
import BackgroundImage from '../Backgroundimage/Backgroundimage';
import Section from '../Section/Section';
import candy2 from '../../images/candy2.png'
import candy1 from '../../images/candy1.PNG'
import planb2 from '../../images/planb2.PNG'
import planb1 from '../../images/planb1.PNG'
import imageChecker1 from '../../images/imgchecker1.PNG';
import imageChecker2 from '../../images/imgchecker2.PNG';
import devDocs1 from '../../images/devdocs1.PNG';
import devDocs2 from '../../images/devdocs2.PNG';
import linkitTV1 from '../../images/linkittv1.PNG'
import linkitTV2 from '../../images/linkittv2.PNG'
import {imageChecker, planB, candyLand, devDocs, linkitTV} from './Descriptions';

console.log(planB, planB.description)

const Project = (props) => {
    if (props.route === "planB") {
        return (
            <div className="foggy">
            <h1 className="project-title" id="links" >{planB.title}</h1>
            {planB.links}
            <BackgroundImage img={planb1} content={planB.description} title={"Description"} id={"description"} gitHub={""} viewProject={""}/>
            <BackgroundImage img={planb2} content={planB.tools} title={"Tools used"} id={"tools"}/>
            <BackgroundImage img={planb1} content={planB.functionality} title={"Functionality"} id={"functionality"}/>
            </div>
        )
    }
    if (props.route==="imageChecker") {
        return (
            <div className="foggy">
            <h1 className="project-title" id="links">{imageChecker.title}</h1>
            {imageChecker.links}
            <BackgroundImage img={imageChecker1} content={imageChecker.description} title={"Description"} id={"description"}/>
            <BackgroundImage img={imageChecker2} content={imageChecker.tools} title={"Tools used"} id={"tools"}/>
            <BackgroundImage img={imageChecker1} content={imageChecker.functionality} title={"Functionality"} id={"functionality"}/>
            <BackgroundImage img={imageChecker2} content={imageChecker.whatILearned} title={"What i learned?"} id={"whatILearned"}/>
            </div>
        )
    }
    if (props.route==="candyLand") {
        return (
            <div className="foggy">
            <h1 className="project-title" id="links">{candyLand.title}</h1>
            <div>
            {candyLand.links}
            </div>
            <BackgroundImage img={candy1} content={candyLand.description} title={"Description"} id={"description"}/>
            <BackgroundImage img={candy2} content={candyLand.tools} title={"Tools used"} id={"tools"}/>
            <BackgroundImage img={candy1} content={candyLand.functionality} title={"Functionality"} id={"functionality"}/>
            <BackgroundImage img={candy2} content={candyLand.whatILearned} title={"What i learned?"} id={"whatILearned"}/>
            <BackgroundImage img={candy1} content={candyLand.whyCreateIt} title={"Why create it?"} id={"whyCreateIt"}/>
            <BackgroundImage img={candy2} content={candyLand.futurePlans} title={"Future plans"} id={"futurePlans"}/>
            </div>
        )
    }
    if (props.route==="devDocs") {
        return (
            <div className="foggy">
            <h1 className="project-title" id="links">{devDocs.title}</h1>
            <div>
            {devDocs.links}
            </div>
            <BackgroundImage img={devDocs1} content={devDocs.description} title={"Description"} id={"description"}/>
            <BackgroundImage img={devDocs2} content={devDocs.tools} title={"Tools used"} id={"tools"}/>
            <BackgroundImage img={devDocs1} content={devDocs.functionality} title={"Functionality"} id={"functionality"}/>
            <BackgroundImage img={devDocs2} content={devDocs.whatILearned} title={"What i learned?"} id={"whatILearned"}/>
            <BackgroundImage img={devDocs1} content={devDocs.whyCreateIt} title={"Why create it?"} id={"whyCreateIt"}/>
            <BackgroundImage img={devDocs2} content={devDocs.futurePlans} title={"Future plans"} id={"futurePlans"}/>
            </div>
        )
    }
    if (props.route==="LinkitTV") {
        return (
            <div className="foggy">
            <h1 className="project-title" id="links">{linkitTV.title}</h1>
            <div>
            {linkitTV.links}
            </div>
            <BackgroundImage img={linkitTV1} content={linkitTV.description} title={"Description"} id={"description"}/>
            <BackgroundImage img={linkitTV2} content={linkitTV.tools} title={"Tools used"} id={"tools"}/>
            <BackgroundImage img={linkitTV2} content={linkitTV.whatILearned} title={"What i learned?"} id={"whatILearned"}/>
            <BackgroundImage img={linkitTV1} content={linkitTV.whyCreateIt} title={"Why create it?"} id={"whyCreateIt"}/>
            <BackgroundImage img={linkitTV2} content={linkitTV.futurePlans} title={"Future plans"} id={"futurePlans"}/>
            </div>
        )
    }
    else {
        return null;
    }
}
 
export default Project;