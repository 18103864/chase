'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Twitter, Send, LineChart } from 'lucide-react'
import LoadingScreen from '../components/LoadingScreen'
import banner from '@/public/images/banner.jpg'
import bigmeme from '@/public/images/bigmeme.jpg'
import anatomy from '@/public/images/anatomy.jpg'
import pump from '@/public/images/meme1.jpg'
import bro from '@/public/images/meme2.jpg'
import dev from '@/public/images/meme3.jpg'


export default function ChaseCoin() {
  const [isLoading, setIsLoading] = useState(true)
  const [isChasing, setIsChasing] = useState(false)
  const [honks, setHonks] = useState(0)
  const [showJacketQuestion, setShowJacketQuestion] = useState(false)

  useEffect(() => {
    if (isChasing) {
      const interval = setInterval(() => {
        setHonks(prev => prev + 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [isChasing])


  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      {!isLoading && (
        <div className="min-h-screen bg-white text-black overflow-x-hidden">
          {/* Header with logo and social links */}
          <header className=" mx-auto p-4 flex justify-between items-center bg-black text-white">
            <div className="flex items-center gap-2">
              <span className="text-3xl">$CHASE</span>
            </div>
            <div className="flex gap-4">
              <a href="https://x.com/GooseChaseOnSOL" target="_blank" rel="noopener noreferrer" className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://t.me/GooseChasePORTAL" target="_blank" rel="noopener noreferrer" className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors">
                <Send className="w-6 h-6" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors">
                <LineChart className="w-6 h-6" />
              </a>
            </div>
          </header>


          {/* Hero Sectionn */}
          <section className="container mx-auto px-4 py-12 text-center relative">
            <motion.div
              animate={{ x: isChasing ? [0, -10, 10, -10, 10, 0] : 0 }}
              transition={{ duration: 0.5, repeat: isChasing ? Infinity : 0 }}
            >
              <Image 
                src={banner}
                alt="Goose Chase"
                width={800}
                height={400}
                className="mx-auto mb-8 rounded-lg shadow-lg"
              />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl text-black mb-4 leading-tight">
              GOOSE CHASE ON SOL
            </h1>
            <p className="text-xl text-black mb-8">
              CA: GVWwA2YZQNoCFYMUcmEA5ZvaBwW5tChGvZbaB47Kpump
              <br />
              <nav className="flex items-center justify-center gap-4 mt-2">
                <a href="https://t.me/GooseChasePORTAL" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-orange-500">
                  <Send className="w-5 h-5" />
                  Telegram
                </a>
                <a href="https://x.com/GooseChaseOnSOL" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-orange-500">
                  <Twitter className="w-5 h-5" />
                  Twitter
                </a>
                {/* <a href="https://dexscreener.com/solana/xxxxx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-orange-500">
                  <LineChart className="w-5 h-5" />
                  DEXSCREENER
                </a> */}
              </nav>
              <br />
              HONK HONK!
            </p>
            <a 
              href="https://dexscreener.com/solana/xxxxx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full text-xl hover:bg-orange-600 transition-colors"
            >
              Get $CHASE
            </a>
            <AnimatePresence>
              {isChasing && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-2xl text-orange-500"
                >
                  Honks chasing you: {honks}
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {/* Interrogation Section */}
          <section className="container mx-auto px-4 py-12 text-center bg-black text-white">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image 
                src={bigmeme}
                alt="Do you have a bag of $CHASE anon?"
                width={800}
                height={400}
                className="mx-auto mb-8 rounded-lg shadow-lg"
              />
              <AnimatePresence>
                {showJacketQuestion && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="bg-white text-black p-6 rounded-xl max-w-2xl mx-auto shadow-md"
                  >
                    <h3 className="text-3xl text-orange-500 mb-4">
                      WHY DONT YOU HAVE A BAG OF $CHASE ANON!?
                    </h3>
                    <p className="text-xl">
                      The goose knows you are holding. The goose always knows. 👀
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </section>

          {/* Main CTA */}
          <section className="container mx-auto px-4 py-12 text-center">
            <div className="max-w-4xl mx-auto bg-black p-8 rounded-2xl shadow-lg text-white">
              <h2 className="text-3xl md:text-4xl mb-6">
                JOIN THE $CHASE!
              </h2>
            </div>
          </section>

          {/* Footer */}
          <footer className=" mx-auto p-4 text-center text-white bg-black">
            <p className="text-xs mt-2">
              Disclaimer: $CHASE is a meme token for entertainment purposes only. This is not financial advice. Trading cryptocurrencies involves substantial risk - please do your own research and trade responsibly.
            </p>
          </footer>
        </div>
      )}
    </>
  )
}
