export default function BlogCard({ props }) {
  console.log("props ========>>>>>>>>", props);

  return (
    <div className="blog-card">
      {/* Blog Card Banner */}
      <div className="blog-card-banner">
        <img
          src={props?.img}
          alt={"Blog Image"}
          width="250"
          className="blog-banner-img"
        />
      </div>

      {/* Blog Content Wrapper */}
      <div className="blog-content-wrapper">
        <button className="blog-topic text-tiny">{props?.btn}</button>

        <h3>
          <a href="#" className="h3">
            {props?.title}
          </a>
        </h3>

        <p className="blog-text">{props?.description}</p>

        {/* Author Details */}
        <div className="wrapper-flex">
          <div className="profile-wrapper">
            <img
              src={props?.author?.authorImg}
              alt="Author"
              width="50"
            />
          </div>

          <div className="wrapper">
            <a href="#" className="h4">
              {props?.author?.authorName || "Author Name"}
            </a>

            <p className="text-sm">
              <time dateTime={props?.author?.authorDate || ""}>
                {props?.author?.authorDate || "Unknown Date"}
              </time>
              <span className="separator"></span>
              <ion-icon name="time-outline"></ion-icon>
              <time dateTime="PT3M">{props?.author?.authorTime || "0 min"}</time>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
