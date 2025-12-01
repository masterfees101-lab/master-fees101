export default function DashboardCard({ disabled, icon, title, subtitle, onClick, className }) {
  return (
    <div
      className={`bg-(--primary-color) shadow cursor-pointer w-2xs h-96 ${className}`}
      onClick={onClick}
      aria-disabled={disabled}
    >
      {disabled ? (
        <div className="text-[#929191] shadow-inner flex flex-col h-full justify-center items-center bg-[#F6F8F9]">
          <h3 className="text-2xl font-bold">
            Coming Soon
          </h3>
        </div>
      ) : (
        <div className="w-full h-full text-center flex flex-col">

          <div className="mt-8">
            <img
              src={icon}
              alt={title}
              className="w-20 h-20 inline-block"
            />
          </div>

          <div className="flex flex-col items-center justify-center h-full gap-2 mb-12 pb-16">
            <h3 className="text-2xl font-bold text-white">
              {title}
            </h3>
            <p className="text-xs text-[#BCBCBC]">
              {subtitle}
            </p>
          </div>

        </div>
      )}
    </div>
  );
}
