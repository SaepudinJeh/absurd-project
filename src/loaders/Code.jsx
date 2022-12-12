import "./styles/code.css";

export default function Code({ status = false }) {
  return (
    <div className="mockup-code flex flex-col gap-y-2">
      <pre data-prefix="$">
        <code>npm install myself</code>
      </pre>

      <pre data-prefix=">">
        <code>get connection</code>
      </pre>

      <pre data-prefix=">" className="text-warning">
        <code>
          installing
          {!status ? (
            <span class="type">
              <span>...</span>
            </span>
          ) : null}
        </code>
      </pre>

      {status ? (
        <pre data-prefix=">" className="text-success">
          <code>Done!</code>
        </pre>
      ) : null}
    </div>
  );
}
