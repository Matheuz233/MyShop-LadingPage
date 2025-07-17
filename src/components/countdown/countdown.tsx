import { useCallback, useEffect, useMemo, useState } from 'react';
import { Button } from '../ui/button';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const targetDate = useMemo(() => new Date('2025-08-01T23:59:59').getTime(), []);

  const updateTime = useCallback(() => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  }, [targetDate]);

  useEffect(() => {
    updateTime(); // Set initial time immediately
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [updateTime]);

  const formatNumber = useCallback((num: number) => {
    return num.toString().padStart(2, '0');
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-black-100 mb-2">
          Special Offer Title
        </h3>
        <p className="font-sans text-black-100 text-opacity-[80%]">
          Deal Expires: February 4, 2028
        </p>
      </div>

      <div className="flex justify-center items-center space-x-4 mb-8">
        <div className="text-center min-w-[80px]">
          <div className="font-sans text-5xl font-extrabold text-black-100 will-change-contents">
            {formatNumber(timeLeft.days)}
          </div>
          <div className="text-sm text-gray-600 mt-1">Days</div>
        </div>

        <div className="font-sans text-4xl font-extrabold text-gray-400">:</div>

        <div className="text-center min-w-[80px]">
          <div className="font-sans text-5xl font-extrabold text-black-100 will-change-contents">
            {formatNumber(timeLeft.hours)}
          </div>
          <div className="text-sm text-gray-600 mt-1">Hours</div>
        </div>

        <div className="font-sans text-4xl font-extrabold text-gray-400">:</div>

        <div className="text-center min-w-[80px]">
          <div className="font-sans text-5xl font-extrabold text-black-100 will-change-contents">
            {formatNumber(timeLeft.minutes)}
          </div>
          <div className="text-sm text-gray-600 mt-1">Minutes</div>
        </div>

        <div className="font-sans text-4xl font-extrabold text-gray-100">:</div>

        <div className="text-center min-w-[80px]">
          <div className="font-sans text-5xl font-extrabold text-black-100 will-change-contents">
            {formatNumber(timeLeft.seconds)}
          </div>
          <div className="text-sm text-gray-600 mt-1">Seconds</div>
        </div>
      </div>

      <Button variant="primary">
        Button
      </Button>
    </div>
  );
};

export default Countdown