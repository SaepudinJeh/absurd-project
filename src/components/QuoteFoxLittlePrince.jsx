import prince from "../assets/images/prince.png";

export default function QuoteFoxLittlePrince() {
  return (
    <div className="w-full h-screen">
      <div className="flex flex-col items-center justify-center h-full w-full gap-y-4">
        <img src={prince} alt="" className="w-72" />
        <div className="flex flex-col items-center justify-center text-base text-center mx-auto">
          <p>But if you tame me, than we shall need other</p>
          <p>To me, you will be unique in all the world</p>
          <p>To you, I shall be unique in all the world</p>
        </div>

        <span className="text-sm">The little Prince</span>
      </div>
    </div>
  );
}
