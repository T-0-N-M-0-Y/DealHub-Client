import React from 'react';

const Home = () => {
  return (
    <>
    
      <div className="bg-gray-400 min-h-screen p-8">
      <div className="flex">
        {/* Categories */}
        <div className="w-1/4 p-4">
          <h2 className="text-2xl font-semibold mb-2">Categories</h2>

        </div>
        
        {/* Cover Page */}
        <div className="w-1/2 p-4">
          <h2 className="text-2xl font-semibold mb-2">Cover Page</h2>
          
        </div>
        
        {/*Recent Products */}
        <div className="w-1/4 p-4">
          <h2 className="text-2xl font-semibold mb-2">Recent Products</h2>
          
        </div>
      </div>
    </div>

    </>
  );
};

export default Home;
