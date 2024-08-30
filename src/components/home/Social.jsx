function Social() {
  return (
    <div className="home__social">
        <a href="https://linkedin.com/in/bharathkumarmurugan" className="home__social-icon" target="_blank">
            <box-icon type='logo' name='linkedin-square'></box-icon>
        </a>
        <a href="https://github.com/bharathkumarmurugan" className="home__social-icon" target="_blank">
            <box-icon name='github' type='logo' ></box-icon>
        </a>
        <a href="https://www.google.com/maps/@13.082680,80.270721,11.5z" className="home__social-icon" target="_blank">
            <box-icon name='map-pin' type='solid' ></box-icon>
        </a>
    </div>
  )
}

export default Social