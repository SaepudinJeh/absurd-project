import prince from "../assets/images/prince_3.png";

export default function QuoteLittlePrinceEnd() {
  return (
    <div className="w-full h-screen">
      <div className="flex flex-col items-center justify-center h-full w-full gap-y-4">
        <img src={prince} alt="" className="w-72" />
        <div className="flex flex-col items-center justify-center text-center text-base px-10">
          <p className="px-16">
            It is the time you have wasted for your rose that makes your rose so
            important
          </p>
        </div>

        <span className="text-sm">The little Prince</span>
      </div>
    </div>
  );
}
