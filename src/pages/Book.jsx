import React, { lazy, Suspense } from "react";
import HTMLFlipBook from "react-pageflip";
import bgImage from "../assets/images/bg_cover.jpg";
import flower from "../assets/images/flower.png";
import flower_prince from "../assets/images/prince_flower.png";
import alip from "../assets/images/alip_1.png";
import { useNavigate } from "react-router-dom";

const Galeries = lazy(() => import("../components/Galeries"));
const QuoteTheLittePrince = lazy(() =>
  import("../components/QuoteFoxLittlePrince")
);
const QuoteFlowerTheLittePrince = lazy(() =>
  import("../components/QuoteFlowerPrince")
);

const QuoteTheLittePrinceEnd = lazy(() =>
  import("../components/QuotePrinceEnd")
);

export default function BookStory({}) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/your-flowers");
  };

  return (
    <div className="w-full flex items-center justify-center h-screen bg-amber-50 overflow-hidden">
      <HTMLFlipBook
        width={500}
        height={533}
        size="fixed"
        minWidth={315}
        maxWidth={1000}
        minHeight={300}
        maxHeight={1533}
        maxShadowOpacity={0.7}
        showCover={true}
        mobileScrollSupport={true}
        className="demo-book overflow-hidden"
      >
        <PageCover img={alip} shadow sepia desc="It's just you in my universe">
          Rode Roos
        </PageCover>

        <PageCover img={flower_prince} desc="Rode roos" />

        <Page number={1}>
          <Suspense fallback={<div>Loading ....</div>}>
            <QuoteTheLittePrince />
          </Suspense>
        </Page>
        <Page number={2}>
          <Suspense fallback={<div>Loading ....</div>}>
            <QuoteFlowerTheLittePrince />
          </Suspense>
        </Page>
        <Page number={3}>
          <Suspense fallback={<div>Loading ....</div>}>
            <QuoteTheLittePrinceEnd />
          </Suspense>
        </Page>
        <Page number={4}>
          <Suspense fallback={<div>Loading ....</div>}>
            <Galeries />
          </Suspense>
        </Page>

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
    <div
      className="page font-labelle text-amber-800 text-xl overflow-hidden"
      ref={ref}
    >
      <div
        className="page-content h-full overflow-y-auto"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div>{props?.children}</div>
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
          <img
            src={props.img}
            alt="img-cover"
            loading="lazy"
            className={`${props?.sepia && "sepia"}`}
          />
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
