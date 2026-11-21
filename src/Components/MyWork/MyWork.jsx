import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
    return (
        <div id='work' className="mywork">
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork-container">
                {mywork_data.map((work, index) => {
                    return <img key={index} src={work.w_img} alt="" />
                })}
            </div>
            <div className="mywork-presentations">
                <h2>Presentations</h2>
                <a
                    href={`${import.meta.env.BASE_URL}presentation.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="presentation-link"
                >
                    View my presentation (PDF)
                    <img src={arrow_icon} alt="" />
                </a>
            </div>



        </div>
    )
}

export default MyWork