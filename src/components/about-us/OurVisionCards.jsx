function OurVisionCards({ headingTitle, children }) {
  return (
    <>
      <div className="shadow mt-5 ">
        <div className="bg_dark_blue d-flex align-items-center p-3 px-4 gap-2 text-white">
          <span>
            <img src="https://alpaindia.org/_next/static/media/setting_icon.ce98834e.svg" />
          </span>
          <h5 className="m-0">{headingTitle}</h5>
        </div>
        <div className="mb-5 px-3 ">
          <p> &nbsp; </p>
          {children}
        </div>
      </div>
    </>
  );
}

export default OurVisionCards;
