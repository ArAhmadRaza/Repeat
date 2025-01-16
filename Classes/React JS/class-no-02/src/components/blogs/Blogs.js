import BlogCard from "../blogCard/BlogCard";
import { blogsData,sideButtonText, sideTagsText } from "../../constant/constant";
import Button from "../button/Button"
import SideButton from "../sideButton/SideButton"
import SideTags from "../sideTags/SideTags";





export default function Blogs() {
  return (
    <div className="main">
      <div className="container">
        <div className="blog">
          <h2 className="h2">Latest Blog Post</h2>

          <div className="blog-card-group">
  {blogsData.map((props) => (
    <BlogCard key={props.title} props={props} />
  ))}

          </div>

          <Button text="Learn more" />
        </div>

        <div className="aside">
          <div className="topics">
            <h2 className="h2">Topics</h2>

          {sideButtonText.map((text, index) => {
            return (
              <SideButton key={index} text={text} />
            );
          })}


          </div>

          <div className="tags">
            <h2 className="h2">Tags</h2>

            <div className="wrapper">
              {sideTagsText.map((item , index) => {
                return (
                  <SideTags key={index} text={item} />
                );
              })}





            </div>
          </div>

          <div className="contact">
            <h2 className="h2">Let's Talk</h2>

            <div className="wrapper">
              <p>
                Do you want to learn more about how I can help your company
                overcome problems? Let us have a conversation.
              </p>

              <ul className="social-link">
                <li>
                  <a href="#" className="icon-box discord">
                    <ion-icon name="logo-discord"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="icon-box twitter">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="icon-box facebook">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="newsletter">
            <h2 className="h2">Newsletter</h2>

            <div className="wrapper">
              <p>
                Subscribe to our newsletter to be among the first to keep up
                with the latest updates.
              </p>

              <form action="#">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />

                <Button text="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
