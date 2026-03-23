import { motion } from "framer-motion";

import img1 from "@/assets/im1.jpeg";
import img2 from "@/assets/im2.jpeg";
import img3 from "@/assets/im3.jpeg";
import img4 from "@/assets/im4.jpeg";
import img5 from "@/assets/im5.jpeg";

type Props = {
  gear5: boolean;
};

const images = [img1, img2, img3, img4, img5];

const OnePiecePassionSection: React.FC<Props> = ({ gear5 }) => {
  return (
    <section
      id="passion"
      className={`py-28 relative overflow-hidden ${
        gear5
          ? "bg-gradient-to-br from-white via-gray-100 to-gray-200 text-black"
          : "bg-black text-white"
      }`}
    >
      {/* 🖤 LIGHT TEXTURE */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/paper.png')]"></div>

      <div className="container relative z-10 text-center">

        {/* 🎨 TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-5xl font-extrabold mb-6 ${
            gear5 ? "text-black" : "text-white"
          }`}
        >
          Drawing 🎨
        </motion.h2>

        {/* ✨ EMOTIONAL STORY */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`max-w-2xl mx-auto mb-14 leading-relaxed text-lg ${
            gear5 ? "text-gray-700" : "text-gray-400"
          }`}
        >
          Whenever I feel low or lost, I turn to drawing.  
          It helps me express what words cannot.  
          Every sketch becomes a piece of my emotions,  
          bringing calm, clarity, and strength back into my life.
        </motion.p>

        {/* 🖼️ GRID */}
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              whileHover={{
                scale: 1.06,
                rotate: 1,
              }}
              className={`
                relative overflow-hidden rounded-xl
                border-[4px]
                ${gear5 ? "border-gray-300" : "border-white"}
                shadow-lg
              `}
            >
              {/* 🖼️ IMAGE */}
              <img
                src={img}
                alt={`art-${index}`}
                className="w-full h-80 object-cover transition duration-500"
              />

              {/* ✨ SOFT LIGHT EFFECT */}
              <div className="absolute inset-0 opacity-0 hover:opacity-10 bg-white transition duration-500"></div>
            </motion.div>
          ))}

        </div>

        {/* 💬 BEAUTIFUL QUOTE */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-lg italic text-gray-500 max-w-xl mx-auto"
        >
          “Art is not what you see, but what you make others feel.”  
        </motion.p>

      </div>
    </section>
  );
};

export default OnePiecePassionSection;