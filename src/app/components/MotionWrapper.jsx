// 'use client';

// import { motion } from 'framer-motion';

// const BackgroundMotion = ({ children }) => {
//   return (
//     <div className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-black">

//       {/* Animated Glow */}
//       <motion.div
//         className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
//         animate={{
//           scale: [1, 1.15, 1],
//           opacity: [0.5, 0.8, 0.5],
//         }}
//         transition={{
//           duration: 6,
//           repeat: Infinity,
//           ease: 'easeInOut',
//         }}
//       >
//         <div
//           className="
//             w-[900px]
//             h-[900px]
//             rounded-full
//             blur-[120px]
//             bg-gradient-to-r
//             from-pink-400/70
//             via-red-400/70
//             to-orange-400/70
//             dark:from-red-500/70
//             dark:via-pink-500/70
//             dark:to-orange-400/70
//           "
//         />
//       </motion.div>

//       {/* Overlay */}
//       <div className="absolute inset-0 z-[1] bg-[linear-gradient(to_right,transparent,rgba(255,0,0,0.2),transparent)] dark:bg-[linear-gradient(to_right,transparent,rgba(255,0,0,0.1),transparent)] pointer-events-none" />

//       {/* Main Content */}
//       <div className="relative z-10">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default BackgroundMotion;

'use client';

import { motion } from 'framer-motion';

const BackgroundMotion = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-white dark:bg-black">

      {/* Animated Glow */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div
          className="
            w-[900px]
            h-[900px]
            rounded-full
            blur-[120px]
            bg-gradient-to-r
            from-pink-400/60
            via-red-400/60
            to-orange-400/60
            dark:from-red-400/40
            dark:via-pink-400/40
            dark:to-orange-400/40
          "
        />
      </motion.div>

      {/* Overlay */}
      <div className="fixed inset-0 z-[1] pointer-events-none bg-[linear-gradient(to_right,transparent,rgba(255,0,0,0.1),transparent)] dark:bg-[linear-gradient(to_right,transparent,rgba(255,0,0,0.05),transparent)]" />

      {/* Main Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundMotion;