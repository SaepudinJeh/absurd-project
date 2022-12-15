import "../styles/flowers.css";

export default function Flower({}) {
  return (
    <div className="bg-flowers flex flex-col gap-y-10 pt-32">
      <div className="flower">
        <div className="f-wrapper">
          <div className="flower__line"></div>
          <div className="f">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__leaf flower__leaf--5"></div>
            <div className="flower__leaf flower__leaf--6"></div>
            <div className="flower__leaf flower__leaf--7"></div>
            <div className="flower__leaf flower__leaf--8 flower__fall-down--yellow"></div>
          </div>
        </div>

        <div className="f-wrapper f-wrapper--2">
          <div className="flower__line"></div>
          <div className="f">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__leaf flower__leaf--5"></div>
            <div className="flower__leaf flower__leaf--6"></div>
            <div className="flower__leaf flower__leaf--7"></div>
            <div className="flower__leaf flower__leaf--8 flower__fall-down--pink"></div>
          </div>
        </div>

        <div className="f-wrapper f-wrapper--3">
          <div className="flower__line"></div>
          <div className="f">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__leaf flower__leaf--5"></div>
            <div className="flower__leaf flower__leaf--6"></div>
            <div className="flower__leaf flower__leaf--7"></div>
            <div className="flower__leaf flower__leaf--8 flower__fall-down--purple"></div>
          </div>
        </div>
        <div className="flower__glass"></div>
      </div>

      <div className="font-labelle text-white text-center">
        <h2 className="text-3xl">Wkwkwkwkw</h2>
        <p>
          Semoga dan semoganya <b>kamu</b> :)
        </p>

        <button className="mt-7 text-xl">Next</button>
      </div>
    </div>
  );
}
