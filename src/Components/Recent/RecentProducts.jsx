const RecentProducts = () => {
  return (
    <>
      <h1 className="bg-red-600 text-white py-4  px-6 tracking-widest text-sm  mt-1 font-semibold">
        Recent Products
      </h1>
      <div className="bg-white rounded-lg shadow-lg p-4 max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800">Product Name</h2>
        <div className="my-4">
          <img
            src="https://t3.ftcdn.net/jpg/04/02/19/28/360_F_402192887_UeLVHA5bc6tlK0B3TSKeDGw7sWHsECjY.jpg"
            alt="Card Image"
            className="mx-auto rounded-lg"
          />
        </div>
        <p className="text-gray-600 mt-2">
          This is a basic card created using Tailwind CSS in React.
        </p>
      </div>

      {/* <div className="bg-white rounded-lg shadow-lg p-4 max-w-md my-3">
                <h2 className="text-2xl font-semibold text-gray-800">Product Name</h2>
                <div className="my-4">
                    <img src="https://t3.ftcdn.net/jpg/04/02/19/28/360_F_402192887_UeLVHA5bc6tlK0B3TSKeDGw7sWHsECjY.jpg" alt="Card Image" className="mx-auto rounded-lg" />
                </div>
                <p className="text-gray-600 mt-2">This is a basic card created using Tailwind CSS in React.</p>
            </div> */}
    </>
  );
};

export default RecentProducts;
