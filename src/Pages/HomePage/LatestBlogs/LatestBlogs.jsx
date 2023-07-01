import React from "react";

const LatestBlogs = () => {
  return (
    <div className="mt-20 font-displayOne">
      <div className="mb-10">
        <hr className="border-b-0 border-gray-300 " />

        <h1 className="text-6xl font-semibold">
          Latest <span className="font-displayTwo">Blogs</span> are here.
        </h1>

        <div className="avatar-group -space-x-6">
          <div className="avatar">
            <div className="w-12">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
