import React from "react";
import { UploadIcon } from "lucide-react";

export default function ImportCustomers() {
  return (
    <div className="border border-[#003630] rounded-xl w-full p-8 h-full bg-white flex flex-col items-center justify-center relative">
      <h2 className="absolute top-6 left-6 text-xl font-bold text-[#003630]">
        Import Customer Data
      </h2>

      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-32 h-32 rounded-full border border-gray-400 mb-6 flex items-center justify-center bg-gray-50">
          {/* Placeholder for upload illustration */}
          <div className="w-24 h-24 rounded-full border border-gray-300"></div>
        </div>

        <p className="text-sm text-gray-600 mb-4">
          Download the sample CSV file to view the structure of your upload file
        </p>

        <button className="bg-[#B6F09C] text-[#003630] px-12 py-2 rounded-lg font-bold hover:bg-[#a5e08b] transition-colors mb-12">
          Import
        </button>

        <div className="w-3/4 border border-[#003630] rounded-lg p-6 mt-8">
          <h3 className="font-bold text-[#003630] text-sm mb-2">
            Import Instructions
          </h3>
          <ol className="list-decimal list-inside text-xs text-gray-600 space-y-1">
            <li>Upload a CSV file</li>
            <li>Ensure the file is formatted correctly</li>
            <li>Click Import</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
