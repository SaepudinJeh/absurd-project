import React from "react";
import HTMLFlipBook from "react-pageflip";
import bgImage from "../assets/images/bg_cover.jpg";
import flower from "../assets/images/flower.png";
import bear from "../assets/images/bear.png";
import { useNavigate } from "react-router-dom";

export default function BookStory({}) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/sertificate");
  };

  return (
    <div className="w-full flex items-center justify-center h-screen bg-amber-50">
      <HTMLFlipBook
        width={550}
        height={733}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        maxShadowOpacity={0.7}
        showCover={true}
        mobileScrollSupport={true}
        className="demo-book"
      >
        <PageCover img={bear} desc="It's just you in my universe">
          Rafflesia bloem
        </PageCover>

        <PageCover img={flower} desc="Naar oneindigheid en verder" />

        <Page number={1}>Lorem ipsum...</Page>
        <Page number={2}>Lorem ipsum...</Page>
        <Page number={3}>Lorem ipsum...</Page>
        <Page number={4}>Lorem ipsum...</Page>
        <Page number={5}>Lorem ipsum...</Page>

        <PageCover
          img={flower}
          desc="Naar oneindigheid en verder"
          navigate={handleNavigate}
        />
      </HTMLFlipBook>
    </div>
  );
}

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page font-labelle text-amber-800 text-xl" ref={ref}>
      <div
        className="page-content h-full"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h2 className="page-header">Page header - {props.number}</h2>
        <div className="page-image"></div>
        <div className="page-text">{props.children}</div>
        <div className="page-footer">{props.number + 1}</div>
      </div>
    </div>
  );
});

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div
        className="page-content h-full flex flex-col gap-y-6 justify-center items-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="w-48">
          <img src={props.img} alt="img-cover" loading="lazy" />
        </div>

        <div className="flex flex-col text-amber-800 text-center font-labelle">
          {props?.children ? (
            <h2 className="text-5xl text-amber">{props.children}</h2>
          ) : null}

          {props?.desc ? <h4 className="text-amber">{props.desc}</h4> : null}

          {props?.navigate ? (
            <button onClick={props?.navigate} className="mt-7">
              Next
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
});
