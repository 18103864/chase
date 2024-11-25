'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Twitter, Send } from 'lucide-react'
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

  const startChase = () => {
    setIsChasing(true)
    setShowJacketQuestion(true)
  }

  const memes = [
    { src: pump, alt: "livestream", caption: "PumpFun Livestreams are moderated?" },
    { src: bro, alt: "bro", caption: "It is on Bro" },
    { src: dev, alt: "dev should code", caption: "Devs must code!" },
    // { src: "/placeholder.svg?height=300&width=300", alt: "Goose chasing person", caption: "When you forget to buy $CHASE" },
    // { src: "/placeholder.svg?height=300&width=300", alt: "Goose looking at crypto charts", caption: "Analyzing $CHASE market trends" },
    // { src: "/placeholder.svg?height=300&width=300", alt: "Goose in a suit", caption: "$CHASE CEO announcing new partnerships" },
    // { src: "/placeholder.svg?height=300&width=300", alt: "Goose with a megaphone", caption: "HONK if you love $CHASE!" },
    // { src: "/placeholder.svg?height=300&width=300", alt: "Goose doing yoga", caption: "Staying flexible in the $CHASE market" }
  ]

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
              <a href="#" className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors">
                <Send className="w-6 h-6" />
              </a>
            </div>
          </header>

          {/* Hero Section */}
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
              $CHASE: WHERE HODLING MEETS CARDIO
            </h1>
            <p className="text-xl text-black mb-8">
                CA: xxxxxxxxxxxxxxxxxxxxxxx
              <br />
              (Running is futile, the goose will always chase)
            </p>

            <motion.button
              className="bg-orange-500 text-white px-8 py-4 rounded-full text-2xl mb-8 hover:bg-orange-600 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={startChase}
            >
              {isChasing ? "KEEP RUNNING!" : "START THE CHASE"}
            </motion.button>

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
                alt="What's in the jacket?"
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
                      SPOILER: ITS $CHASE TOKENS
                    </h3>
                    <p className="text-xl">
                      The goose knows you are holding. The goose always knows. 👀
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </section>

          {/* Goose Anatomy Section */}
          <section className="container mx-auto px-4 py-12 text-center">
            <h2 className="text-4xl md:text-5xl text-black mb-8">
              KNOW YOUR ENEMY: ANATOMY OF A $CHASE GOOSE
            </h2>
            <div className="relative inline-block">
              <Image 
                src={anatomy}
                alt="Anatomy of a Goose"
                width={500}
                height={500}
                className="mx-auto mb-8 rounded-lg shadow-lg"
              />
              <motion.div
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full" />
              </motion.div>
            </div>
            <p className="text-xl text-black mb-8">
              Warning: $CHASE geese are evolving. They now come equipped with laser eyes and rocket-powered chaos flippers.
            </p>
          </section>

          {/* Main CTA */}
          <section className="container mx-auto px-4 py-12 text-center">
            <div className="max-w-4xl mx-auto bg-black p-8 rounded-2xl shadow-lg text-white">
              <h2 className="text-3xl md:text-4xl mb-6">
                JOIN THE $CHASE: WHERE EVERY DAY IS LEG DAY AND EVERY INVESTMENT IS A WILD GOOSE CHASE!
              </h2>
              <p className="text-xl">
                Don&apos;t be a sitting duck - grab your $CHASE before it grabs you!
              </p>
            </div>
          </section>

          {/* Goose Memes Section */}
          <section className="container mx-auto px-4 py-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl md:text-7xl text-black mb-8">
                GOOSE MEMES
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {memes.map((meme, i) => (
                  <motion.div
                    key={i}
                    className="bg-white p-4 rounded-xl shadow-lg border-2 border-black w-full h-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image 
                      src={meme.src}
                      alt={meme.alt}
                      width={300}
                      height={300}
                      className="mx-auto mb-4 rounded-lg w-full h-full"
                    />
                    {/* <p className="text-xl text-orange-500">{meme.caption}</p> */}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Warning Section */}
          <section className=" mx-auto px-4 py-12 text-center bg-orange-500 text-white">
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <h2 className="text-3xl md:text-4xl mb-4">
                WARNING: $CHASE SIDE EFFECTS MAY INCLUDE
              </h2>
              <ul className="text-xl list-disc list-inside">
                <li>Uncontrollable honking</li>
                <li>Sudden urges to chase strangers</li>
                <li>Developing an irrational fear of bread</li>
                <li>Compulsive jacket checking</li>
                <li>Mistaking your reflection for a rival goose</li>
              </ul>
            </motion.div>
          </section>

          {/* Footer */}
          <footer className=" mx-auto p-4 text-center text-white bg-black">
            <p className="text-sm">
              © 2024 $CHASE. Peace was never an option. HONK!
            </p>
            <p className="text-xs mt-2">
              Disclaimer: $CHASE is not responsible for any goose-related injuries, property damage, or sudden desires to interrogate strangers about their jacket contents.
            </p>
          </footer>
        </div>
      )}
    </>
  )
}

