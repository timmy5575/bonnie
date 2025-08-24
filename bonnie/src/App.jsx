import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [step, setStep] = useState(0);

  const notes = [
    "Every moment with you feels magical ✨",
    "i'm always proud of you 💕",
    "I feel so lucky to have you 💖",
    "you are always special to me 💜",
  ];

  const handleNext = () => {
    if (step < notes.length) {
      setStep(step + 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-700 via-pink-500 to-purple-900 text-white p-6">
      {/* Heading */}
      <motion.h1
        className="text-3xl md:text-5xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
         A Special Letter for You 
         bonnie
      </motion.h1>

      {/* Envelope */}
      <div
        onClick={handleNext}
        className="relative w-64 h-40 md:w-80 md:h-52 cursor-pointer group"
      >
        {/* Envelope body */}
        <div className="absolute inset-0 bg-pink-300 border-4 border-white rounded-lg shadow-xl" />

        {/* Envelope flap */}
        <div className="absolute top-0 left-0 w-0 h-0 
          border-l-[128px] md:border-l-[160px] border-l-transparent
          border-r-[128px] md:border-r-[160px] border-r-transparent
          border-b-[80px] md:border-b-[100px] border-b-pink-400 
          rounded-t-lg shadow-lg
        " />

        {/* Tap to open */}
        {step === 0 && (
          <motion.p
            className="absolute inset-0 flex items-center justify-center font-semibold text-purple-800"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            💖 Tap to Open 💖
          </motion.p>
        )}
      </div>

      {/* Notes appearing one by one */}
      <div className="mt-10 w-full max-w-md space-y-4">
        <AnimatePresence>
          {notes.slice(0, step).map((note, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white text-purple-800 rounded-2xl shadow-lg p-4 text-center font-medium"
            >
              {note}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* End message */}
      {step === notes.length && (
        <motion.p
          className="mt-8 text-2xl md:text-3xl font-bold text-pink-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          💜 I Love You 💜
        </motion.p>
      )}
    </div>
  );
}

