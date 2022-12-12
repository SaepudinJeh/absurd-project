import "./styles/code.css";

export default function LoadingText({}) {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-gray-200">
      <h1>
        Loading{" "}
        <span class="type">
          <span>...</span>
        </span>
      </h1>
    </div>
  );
}
