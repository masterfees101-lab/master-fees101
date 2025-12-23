function PaginationBar() {
  return (
    <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
      <div className="flex items-center gap-2">
        <span>Rows per page</span>
        <select className="border rounded-lg px-2 py-1">
          <option>10</option>
          <option>20</option>
          <option>50</option>
        </select>
        <span>of 140 rows</span>
      </div>

      <div className="flex items-center gap-2">
        <button className="px-2">«</button>
        <button className="px-4.5 py-3 bg-[#003049] text-white rounded-full">
          1
        </button>
        <button className="px-2">2</button>
        <button className="px-2">3</button>
        <span>…</span>
        <button className="px-2">10</button>
        <button className="px-2">»</button>
      </div>
    </div>
  );
}

export default PaginationBar;
