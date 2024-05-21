import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export const ProjectCard = ({title, description, imgUrl}) => {

    return(

            <div className="proj-imgbx">
                <img src={imgUrl} alt="project card"/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
    )
}