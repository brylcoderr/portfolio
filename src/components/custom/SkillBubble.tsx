'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { skillBubbleStyle, skillDescriptionStyle } from '@/styles/style'

interface SkillBubbleProps {
  skill: string
  description: string
}

export function SkillBubble({ skill, description }: SkillBubbleProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.1 }}
    >
      <div className={skillBubbleStyle() + " text-sm"}>
        <span>{skill}</span>
      </div>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={skillDescriptionStyle() + " w-64"}
        >
          {description}
        </motion.div>
      )}
    </motion.div>
  )
}

