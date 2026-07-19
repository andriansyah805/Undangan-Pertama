import { motion } from "framer-motion";
import { FaEnvelopeOpenText } from "react-icons/fa";

export default function Cover({ onOpen }) {
  return (
    <motion.section
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 overflow-hidden bg-gradient-to-br from-[#fdf8f2] via-[#f7efe3] to-[#ead8c3]"
    >
      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-amber-200/30 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-rose-200/30 blur-3xl" />

      {/* Ornamen */}
      <div className="absolute inset-0 bg-[url('/ornament.png')] opacity-5 bg-center bg-cover"></div>

      <div className="relative flex h-full items-center justify-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            w-full
            max-w-md
            rounded-[40px]
            border border-white/50
            bg-white/40
            backdrop-blur-xl
            shadow-2xl
            px-10
            py-14
            text-center
          "
        >
          {/* Arabic */}
          <p className="text-lg text-amber-800 mb-8">
            بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
          </p>

          <div className="w-20 h-px bg-amber-400 mx-auto mb-8"></div>

          <p className="uppercase tracking-[0.35em] text-xs text-gray-500 mb-8">
            The Wedding Of
          </p>

          <h1 className="font-serif text-6xl text-[#7a4b2f]">
            Septian
          </h1>

          <div className="my-4 text-amber-500 text-2xl">&</div>

          <h1 className="font-serif text-6xl text-[#7a4b2f]">
            Nabila
          </h1>

          <div className="w-20 h-px bg-amber-400 mx-auto my-8"></div>

          <p className="uppercase tracking-[0.25em] text-xs text-gray-500">
            Jumat
          </p>

          <p className="mt-3 text-2xl font-medium text-gray-700">
            26 Juni 2026
          </p>

          <p className="mt-2 text-gray-500">
            Sape • Kabupaten Bima
          </p>

          <button
            onClick={onOpen}
            className="
              mt-12
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-gradient-to-r
              from-amber-500
              to-yellow-600
              px-8
              py-4
              text-white
              tracking-widest
              uppercase
              text-sm
              shadow-xl
              hover:scale-105
              hover:shadow-2xl
              transition-all
              duration-300
            "
          >
            <FaEnvelopeOpenText />
            Buka Undangan
          </button>

        </motion.div>

      </div>
    </motion.section>
  );
}