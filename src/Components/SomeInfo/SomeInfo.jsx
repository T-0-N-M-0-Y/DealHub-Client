const SomeInfo = () => {
  return (
    <div className="border-y-2 my-10 py-10 flex justify-center">
      <div>
        <div className="flex items-center py-2">
          <img
            src="https://wpbingosite.com/wordpress/dimita/wp-content/uploads/2019/12/like.svg"
            alt=""
            className="w-10 h-10 mx-5"
          />
          <div>
            <h1 className="font-bold text-md">100% SATISFACTION</h1>
            <h1>If you are unable</h1>
          </div>
        </div>
        <div className="flex items-center py-2 my-4">
          <img
            src="https://wpbingosite.com/wordpress/dimita/wp-content/uploads/2019/12/money.svg"
            alt=""
            className="w-10 h-10 mx-5"
          />
          <div>
            <h1 className="font-bold text-md">SAVE 20% YOU</h1>
            <h1>Use credit card</h1>
          </div>
        </div>
        <div className="flex items-center py-2">
          <img
            src="https://wpbingosite.com/wordpress/dimita/wp-content/uploads/2019/12/plane.svg"
            alt=""
            className="w-10 h-10 mx-5"
          />
          <div>
            <h1 className="font-bold text-md">FAST SHIPMENT</h1>
            <h1>Load any computer’s</h1>
          </div>
        </div>
        <div className="flex items-center py-2 my-4">
          <img
            src="data:image/png;base64,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"
            alt=""
            className="w-10 h-10 mx-5"
          />
          <div>
            <h1 className="font-bold text-md">60-DAY MONEY</h1>
            <h1>If you are unable</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SomeInfo;
