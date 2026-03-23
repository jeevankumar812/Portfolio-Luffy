import { useState } from "react";
import skull from "@/assets/op.png";

type BountyProps = {
  gear5: boolean;
};

const BountyPoster: React.FC<BountyProps> = ({ gear5 }) => {
  const [rotating, setRotating] = useState(false);
  const [claimed, setClaimed] = useState(false);

  const handleUnlock = () => {
    if (rotating || claimed) return;

    setRotating(true);

    setTimeout(() => {
      setRotating(false);
      setClaimed(true);

      window.open("/resume.pdf", "_blank");
    }, 1500);
  };

  return (
    <section
      id="bounty"
      className={`py-24 flex justify-center items-center transition-all duration-700 ${
        gear5
          ? "bg-gradient-to-br from-white via-gray-100 to-gray-200"
          : "bg-black"
      }`}
    >
      <div
        className={`relative p-8 max-w-md w-full rounded-md border-[6px] text-black ${
          gear5
            ? "bg-white border-gray-400 shadow-[0_0_30px_rgba(0,0,0,0.15)]"
            : "bg-yellow-200 border-black shadow-[0_0_40px_rgba(255,200,100,0.4)]"
        }`}
      >
        {/* 🔥 TITLE */}
        <h2 className="text-4xl font-black text-center tracking-widest">
          WANTED
        </h2>

        <p className="text-center text-sm tracking-widest font-semibold">
          DEAD OR ALIVE
        </p>

        {/* 🖼️ IMAGE */}
        <div className="text-center mt-6">
          <img
            src="/profile.jpeg"
            alt="profile"
            className={`w-40 h-36 mx-auto border-4 object-cover ${
              gear5 ? "border-gray-400" : "border-black"
            }`}
          />

          <h3 className="text-3xl font-black mt-4 tracking-wide">
            Jeevan Kumar
          </h3>

          <p className="text-lg font-semibold">
            Backend Pirate ⚔️
          </p>
        </div>

        {/* ⚔️ CRIMES */}
        <div className="mt-6 text-sm">
          <p className="font-bold mb-2">CRIMES:</p>
          <ul className="list-disc ml-5 space-y-1">
            <li>Built scalable backend systems</li>
            <li>Mastered MERN stack</li>
            <li>Solved 1000+ DSA problems</li>
          </ul>
        </div>

        {/* ☠️ SKULL + GESTURE */}
        <div className="mt-8 flex justify-center items-center gap-4 relative">
          
          {!claimed && (
            <div className="flex items-center gap-2 animate-pulse">
              <span className="text-sm font-bold tracking-wide text-red-600">
                Claim Your Bounty
              </span>
              <span className="text-2xl animate-bounce">👉</span>
            </div>
          )}

          {!claimed ? (
            <img
              src={skull}
              alt="skull"
              onClick={handleUnlock}
              className={`
                w-16 h-16 cursor-pointer transition-all duration-300
                hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,0,0,0.7)]
                ${rotating ? "spin-once-slow" : ""}
              `}
            />
          ) : (
            <div className="text-green-700 font-bold text-lg">
              ☠️ Bounty Claimed!
            </div>
          )}
        </div>

        {/* 🔥 BORDER EFFECT */}
        <div className="absolute inset-0 border-[3px] opacity-20 border-black pointer-events-none"></div>
      </div>
    </section>
  );
};

export default BountyPoster;