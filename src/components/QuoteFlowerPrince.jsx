import prince from "../assets/images/prince_2.png";

export default function QuoteFlowerLittlePrince() {
  return (
    <div className="w-full h-screen">
      <div className="flex flex-col items-center justify-center h-full w-full gap-y-4">
        <img src={prince} alt="" className="w-36" />
        <div className="flex flex-col items-center justify-center text-center text-base px-10">
          <p className="px-16">
            It is such a mysterious place, the land of tears.
          </p>
        </div>

        <span className="text-sm">The little Prince</span>
      </div>
    </div>
  );
}
