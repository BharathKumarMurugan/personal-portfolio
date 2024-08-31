function ScrollDown() {
  return (
    <div className="home__scroll">
        <a href="" className="home__scroll-button button__flex">
            <box-icon name='mouse' ></box-icon>
            <span className="home__scroll-name">Scroll Down</span>
            <span className="home__scroll-arrow">
                <box-icon name='chevrons-down'></box-icon>
            </span>
        </a>
    </div>
  )
}

export default ScrollDown