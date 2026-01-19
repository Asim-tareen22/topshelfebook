'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast progress bar
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Quick exit
          return 100;
        }
        return p + 2; // 2% per 40ms = ~2 seconds total
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 bg-[#0A0A0A] flex items-center justify-center z-[99999] overflow-hidden"
    >
      {/* Minimal Animated Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-red-500/20 rounded-full"
          initial={{
            x: `${Math.random() * 100}vw`,
            y: '100vh',
            opacity: 0
          }}
          animate={{
            y: '-100vh',
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.2,
            ease: 'linear',
          }}
        />
      ))}

      {/* Glow Background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[600px] h-[600px] bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 blur-[120px] rounded-full" />
      </motion.div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-center">

        {/* Book Card - Fade Up Animation */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{
            duration: 0.8,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
          className="relative"
          style={{ perspective: '1500px' }}
        >
          {/* Rotating Glow Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-[500px] h-[500px] border-2 border-dashed border-red-500/10 rounded-full" />
          </motion.div>

          {/* Book Image Card */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotateY: [0, 5, 0, -5, 0],
            }}
            transition={{
              y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
              rotateY: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="relative w-80 h-[480px] rounded-3xl overflow-hidden shadow-2xl"
            style={{
              transformStyle: 'preserve-3d',
              boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
            }}
          >
            {/* Book Cover Image */}
            <div className="relative w-full h-full">
              <Image
                src="/Assets/1-1-180x300.webp"
                alt="Loading Book"
                fill
                className="object-cover"
                priority
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Animated Border */}
              <motion.div
                animate={{
                  background: [
                    'linear-gradient(0deg, #ef4444, #f97316, #eab308)',
                    'linear-gradient(360deg, #ef4444, #f97316, #eab308)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 opacity-50"
                style={{
                  WebkitMaskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  padding: '2px',
                  borderRadius: '1.5rem',
                }}
              />

              {/* Shine Effect */}
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: 'linear',
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
              />

              {/* Loading Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.4, type: 'spring', damping: 12 }}
                className="absolute top-6 left-6 bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 rounded-full"
              >
                <span className="text-black text-xs font-black flex items-center gap-2">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  >
                    ⚡
                  </motion.span>
                  LOADING
                </span>
              </motion.div>

              {/* Bottom Info */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-0 left-0 right-0 p-8"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: 0.6 + i * 0.1,
                        type: 'spring',
                        damping: 10,
                      }}
                    >
                      <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </motion.div>
                  ))}
                </div>

                <h3 className="text-3xl font-black text-white mb-2 drop-shadow-lg">
                  The Midnight Library
                </h3>
                <p className="text-gray-300 text-lg font-semibold">by Matt Haig</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Floating Sparkles */}
          {[
            { x: -120, y: -80, delay: 0 },
            { x: 120, y: -100, delay: 0.3 },
            { x: -100, y: 100, delay: 0.6 },
            { x: 130, y: 90, delay: 0.9 },
          ].map((pos, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                y: [0, -30, -60],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: pos.delay,
              }}
              style={{
                position: 'absolute',
                left: `calc(50% + ${pos.x}px)`,
                top: `calc(50% + ${pos.y}px)`,
              }}
              className="text-yellow-400 text-2xl"
            >
              ✨
            </motion.div>
          ))}
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 w-96"
        >
          {/* Percentage Display */}
          <div className="flex justify-between items-center mb-3">
            <motion.span
              key={Math.floor(progress / 10)}
              initial={{ scale: 1.3 }}
              animate={{ scale: 1 }}
              className="text-yellow-300 text-2xl font-black"
              style={{
                textShadow: '0 0 20px rgba(251, 191, 36, 0.5)',
              }}
            >
              {Math.round(progress)}%
            </motion.span>

            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-yellow-200/60 text-xs italic font-semibold"
            >
              Preparing your experience...
            </motion.span>
          </div>

          {/* Progress Bar Container */}
          <div className="relative h-2.5 bg-red-950/30 rounded-full overflow-hidden border border-yellow-900/20 shadow-inner">
            {/* Progress Fill */}
            <motion.div
              className="absolute top-0 left-0 h-full rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{
                background: 'linear-gradient(90deg, #fbbf24 0%, #f59e0b 50%, #ef4444 100%)',
                boxShadow: '0 0 15px rgba(251, 191, 36, 0.6)',
              }}
            >
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.6) 50%, transparent 100%)',
                }}
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </motion.div>

            {/* Progress Dot */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full"
              style={{
                left: `calc(${progress}% - 10px)`,
                background: 'radial-gradient(circle, #fff 0%, #fbbf24 100%)',
                boxShadow: '0 0 20px rgba(251, 191, 36, 1)',
              }}
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div>

        {/* Brand Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.h2
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="text-5xl font-black bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent bg-[length:200%_auto]"
          >
            TOP SHELF
          </motion.h2>
          <p className="text-yellow-200/70 text-sm font-bold mt-2 tracking-wider">
            PREMIUM BOOKS
          </p>
        </motion.div>

        {/* Subtle Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1 }}
          className="mt-8 text-yellow-200/50 text-xs italic max-w-md text-center"
        >
          "A reader lives a thousand lives before he dies..."
        </motion.p>
      </div>
    </motion.div>
  );
}