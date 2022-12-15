export default function Galeries({}) {
  return (
    <div className="w-full h-fit overflow-hidden">
      <div className="mx-auto text-center py-4">
        <h1 className="pt-3">My Galeries</h1>
        <p className="text-center text-xs">
          Jadi jelema mah kudu jujur jeung hampang birit méh loba nu mikaresep
        </p>
      </div>
      <div className="columns-3 md:columns-4 overflow-hidden">
        <img
          src="https://picsum.photos/seed/picsum/200/300"
          className="my-3 ml-4 rounded-lg shadow-lg shadow-amber-700/50"
          alt=""
          loading="lazy"
        />
        <img
          src="https://picsum.photos/seed/picsum/200/600"
          className="my-3 ml-4 rounded-lg shadow-lg shadow-amber-700/50"
          alt=""
          loading="lazy"
        />
        <img
          src="https://picsum.photos/seed/picsum/600/300"
          className="my-3 ml-4 rounded-lg shadow-lg shadow-amber-700/50"
          alt=""
          loading="lazy"
        />
        <img
          src="https://picsum.photos/seed/picsum/200/300"
          className="my-3 ml-4 rounded-lg shadow-lg shadow-amber-700/50"
          alt=""
          loading="lazy"
        />
        <img
          src="https://picsum.photos/seed/picsum/200/300"
          className="my-3 ml-4 rounded-lg shadow-lg shadow-amber-700/50"
          alt=""
          loading="lazy"
        />
        <img
          src="https://picsum.photos/seed/picsum/200/300"
          className="my-3 ml-4 rounded-lg shadow-lg shadow-amber-700/50"
          alt=""
          loading="lazy"
        />
        <img
          src="https://picsum.photos/seed/picsum/200/300"
          className="my-3 ml-4 rounded-lg shadow-lg shadow-amber-700/50"
          alt=""
          loading="lazy"
        />
      </div>
    </div>
  );
}
