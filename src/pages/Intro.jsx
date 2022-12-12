import { useMemo, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import Code from "../loaders/Code";
import Typing from "../loaders/Typing";

export default function Intro({}) {
  const controllers = new AbortController();

  const navigate = useNavigate();

  const [install, setInstall] = useState(false);
  const [statusInstall, setStatusInstall] = useState(false);

  const handleNext = () => {
    setInstall(true);

    setTimeout(() => {
      setStatusInstall(true);
    }, 5000);
  };

  useMemo(() => {
    if (statusInstall) {
      setTimeout(() => {
        navigate("/my-book");
      }, 1000);
    }
  }, [statusInstall]);

  return (
    <div className="w-full flex-col gap-y-10 h-screen bg-gradient-to-t from-gray-700 to-black justify-center items-center flex">
      {!install ? (
        <>
          <Typing />

          <button
            onClick={handleNext}
            className="bg-white px-4 py-1.5 rounded-full glass hover:text-white duration-300"
            name="button next"
          >
            Next
          </button>
        </>
      ) : (
        <Code status={statusInstall} />
      )}
    </div>
  );
}
