export default function BlogCard({ img, btn, title, description, author }) {
  return (
    <div className="blog-card">
      {/* Blog Card Banner */}
      <div className="blog-card-banner">
        <img
          src={img}
          alt={title || "Blog Image"}
          width="250"
          className="blog-banner-img"
        />
      </div>

      {/* Blog Content Wrapper */}
      <div className="blog-content-wrapper">
        <button className="blog-topic text-tiny">{btn}</button>

        <h3>
          <a href="#" className="h3">
            {title}
          </a>
        </h3>

        <p className="blog-text">{description}</p>

        {/* Author Details */}
        <div className="wrapper-flex">
          <div className="profile-wrapper">
            <img
              src={author?.authorImg}
              alt="Author"
              width="50"
            />
          </div>

          <div className="wrapper">
            <a href="#" className="h4">
              {author?.authorName || "Author Name"}
            </a>

            <p className="text-sm">
              <time dateTime={author?.authorDate || ""}>
                {author?.authorDate || "Unknown Date"}
              </time>
              <span className="separator"></span>
              <ion-icon name="time-outline"></ion-icon>
              <time dateTime="PT3M">{author?.authorTime || "0 min"}</time>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
