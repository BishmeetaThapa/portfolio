import React from "react";

const Qualification = () => {
  return (
    <section id="qualification" className="py-16 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-10">
          My Qualifications
        </h2>

        {/* Qualification List */}
        <div className="space-y-8">

          {/* SEE */}
          <div>
            <h3 className="text-xl font-semibold">
              School Level (SEE)
            </h3>
            <p className="text-lg font-medium mt-1 text-gray-700">
              Laligurans Academy
            </p>
            <p className="text-gray-500">
              Completed • Sarlahi, Bayalbash
            </p>
          </div>

          {/* +2 */}
          <div>
            <h3 className="text-xl font-semibold">
              +2 Level
            </h3>
            <p className="text-lg font-medium mt-1 text-gray-700">
              Pentagon International College
            </p>
            <p className="text-gray-500">
              Completed • Tinkune, Kathmandu
            </p>
          </div>

          {/* Bachelor */}
          <div>
            <h3 className="text-xl font-semibold">
              Bachelor in Information Communication and Technology
            </h3>
            <p className="text-lg font-medium mt-1 text-gray-700">
              Janajyoti Multiple Campus
            </p>
            <p className="text-gray-500">
              Completed • Sarlahi, Lalbandi
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Qualification;
