import "../../styles/loader.css";

/** 
    Using native css imports for animation styles to avoid library bloat.
**/

function Loader() {
    return (
        <div className="flex h-full w-full items-center bg-green-500 justify-center gap-1">
            {[0, 1, 2].map((i) => (
                <div
                    key={i}
                    className={`w-full h-full rounded-full bg-red-500 loader-dot`}
                    style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
            ))}
        </div>
    );
}

export default Loader;
