import React from 'react';
import { motion } from 'framer-motion';

export default function UnityAd() {
  return (
    <div className='w-full h-screen bg-gradient-to-br from-black via-blue-950 to-purple-900 text-white flex items-center justify-center'>

      <div className='max-w-4xl text-center p-8 space-y-6'>

        <motion.h1
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className='text-6xl font-black'
        >
          JOIN UNITY ROLEPLAY
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='text-2xl text-cyan-300'
        >
          Your Story Starts Here
        </motion.p>

        <div className='grid grid-cols-2 gap-4 text-xl pt-6'>
          <div>👮 Police</div>
          <div>🚑 EMS</div>
          <div>🏙️ Civilians</div>
          <div>💰 Businesses</div>
          <div>🚓 Criminals</div>
          <div>🛡️ Staff Team</div>
        </div>

        <div className='pt-8 space-y-2'>
          <div>✅ Active Community</div>
          <div>✅ Realistic RP</div>
          <div>✅ Economy System</div>
        </div>

        <div className='pt-10'>
          <a
            href="https://discord.gg/Gv7RJnaj"
            target="_blank"
            className='text-3xl text-yellow-300 font-bold'
          >
            Join Discord
          </a>
        </div>

      </div>
    </div>
  );
}
