import { useState } from 'react';

const CouponInput = ({ onApplyCoupon, couponApplied, couponError }) => {
    const [couponCode, setCouponCode] = useState('');

    const handleApplyCoupon = () => {
        onApplyCoupon(couponCode.trim());
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleApplyCoupon();
        }
    };

    return (
        <div className="my-8 p-6 border border-color3 rounded-lg bg-gray-50">
            <h3 className="text-color4 text-lg font-semibold mb-4">Have a Coupon?</h3>

            <div className="flex flex-col sm:flex-row gap-3 mb-3">
                <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter coupon code"
                    disabled={couponApplied}
                    className="flex-1 px-4 py-3 border border-color3 rounded text-color4 disabled:bg-gray-200 disabled:text-gray-500 focus:outline-none focus:ring-2 focus:ring-color2"
                />
                <button
                    onClick={handleApplyCoupon}
                    disabled={couponApplied || !couponCode.trim()}
                    className="px-6 py-3 bg-color2 text-white rounded font-medium transition-colors duration-300 hover:bg-color3 disabled:bg-gray-400 disabled:cursor-not-allowed sm:w-auto w-full"
                >
                    {couponApplied ? 'Applied' : 'Apply'}
                </button>
            </div>

            {couponApplied && (
                <p className="text-green-600 font-medium text-sm flex items-center gap-2">
                    <span>✅</span>
                    Coupon successfully applied! You got 13.2% off
                </p>
            )}

            {couponError && (
                <p className="text-red-600 font-medium text-sm flex items-center gap-2">
                    <span>❌</span>
                    Sorry, invalid coupon
                </p>
            )}
        </div>
    );
};

export default CouponInput;