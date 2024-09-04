const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <span className="about__icon">
                <box-icon name='medal'></box-icon>
            </span>
            <h3 className="about__title">
                Experience
            </h3>
            <span className="about__subtitle">
                8 Years
            </span>
        </div>

        <div className="about__box">
            <span className="about__icon">
                <box-icon name='briefcase-alt-2'></box-icon>
            </span>
            <h3 className="about__title">
                Completed
            </h3>
            <span className="about__subtitle">
                35+ Projects
            </span>
        </div>

        <div className="about__box">
            <span className="about__icon">
                <box-icon name='support' ></box-icon>
            </span>
            
            <h3 className="about__title">
                Support
            </h3>
            <span className="about__subtitle">
                No support
            </span>
        </div>


    </div>
  )
}

export default Info