import React, { Component } from "react";
import Layout from "../components/layout"
import Menu from '../components/menu'
import "../styles/projects.css"
import SEO from "../components/seo"
import axios from 'axios'
import ProjectDetailPage from "../components/projectdetailpage";

class ProjectsPage extends Component {

    state = {
        navActive: false,
        projects: [],
        id: false,
        projectTitle: '',
        projectBody: '',
        projectSynopsis: '',
        images: '',
    }

    setStateId = (item) => {
        let projectTitle = item.data.title
        let projectBody = item.data.body
        let projectSynopsis = item.data.synopsis
        let images = item.data.images
        this.setState({
            id: true,
            projectTitle: projectTitle,
            projectBody: projectBody,
            projectSynopsis: projectSynopsis,
            projectImages: images
        })
    }

    getNavState = () => {
        this.setState(state => ({ navActive: !state.navActive }));
        console.log('State change ! ! ! ');
    }

    componentDidMount() {
        axios.get('https://undefined-baas.firebaseapp.com/api/projects').then((snap) => {
            // console.log(snap.data.data)
            this.setState({
                projects: snap.data.data
            })
        })
    }

    render() {
        if (!this.state.id) {
            return (
                <Layout>
                    <SEO title="Home" />
                    <Menu menustate={this.state.navActive} toggleNav={this.getNavState} />
                    <div className={'main-container-project-list'}>
                        {/* <a href="/#`" className="undefined-copyright-contact">_defined</a> */}
                        <div className="toggle-nav reduce-width-float add-fixed" onClick={this.getNavState}>
                            <div className="nav-line-top" />
                            <div className="nav-line-bottom" />
                        </div>

                        {this.state && this.state.projects && this.state.projects.map((item, index) => {
                            return (
                                <div className="project-list-container" key={index}>
                                    <h2 className="project-list-title">{item.data.title}</h2>
                                    <div className="project-list-row">
                                        <img src={item.data.images[0] ? item.data.images[0] : 'https://firebasestorage.googleapis.com/v0/b/undefined-baas.appspot.com/o/resized%2Ftumblr_n7jz4u5Fgd1ql2g28o1_500_1280x1280.jpg?alt=media&token=16672718-2b3c-493f-a1f0-f6cab1d8eaaa'} className="project-list-image" alt={'project-img'} />
                                        <p className="action-button-page-section edit-height" onClick={() => this.setStateId(item)}>View project</p>
                                    </div>
                                    <p className="project-list-slug">{item.data.synopsis ? item.data.synopsis : ''}</p>
                                </div>
                            )
                        })}
                    </div>
                </Layout>
            );
        } else {
            console.log(this.state.images)
            return (
                <ProjectDetailPage projecttitle={this.state.projectTitle} projectbody={this.state.projectBody} projectsynopsis={this.state.projectSynopsis} projectimages={this.state.projectImages}>
                </ProjectDetailPage>
            )
        }
    }
}

export default ProjectsPage
