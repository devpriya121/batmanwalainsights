"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import BottomNav from "@/components/BottomNav"
import ReelInsights from "../page" 

const PINK = "#d939cf"
const PURPLE = "#7738fb"
const BG = "#0c0f14"
const CARD_BG = "#25282d"
const BAR_BG = "#2a2d31"

interface Post {
  id: number
  thumbnail: string | null
  views: string
  likes: number
  type: "post" | "reel" | "carousel"
}

export default function ProfilePage() {
  const [selectedReel, setSelectedReel] = useState<number | null>(null)
  const [activeNav, setActiveNav] = useState<"home" | "search" | "reels" | "profile">("profile")
  
  // Sample posts/reels data
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, thumbnail: null, views: "1.2K", likes: 234, type: "reel" },
    { id: 2, thumbnail: null, views: "856", likes: 156, type: "post" },
    { id: 3, thumbnail: null, views: "2.3K", likes: 412, type: "reel" },
    { id: 4, thumbnail: null, views: "567", likes: 89, type: "carousel" },
    { id: 5, thumbnail: null, views: "1.8K", likes: 298, type: "reel" },
    { id: 6, thumbnail: null, views: "423", likes: 67, type: "post" },
    { id: 7, thumbnail: null, views: "3.1K", likes: 521, type: "reel" },
    { id: 8, thumbnail: null, views: "789", likes: 134, type: "reel" },
    { id: 9, thumbnail: null, views: "1.5K", likes: 267, type: "post" },
    { id: 10, thumbnail: null, views: "934", likes: 178, type: "carousel" },
    { id: 11, thumbnail: null, views: "2.7K", likes: 445, type: "reel" },
    { id: 12, thumbnail: null, views: "612", likes: 98, type: "reel" },
  ])

  // Load saved thumbnail
  const [thumbnailImage, setThumbnailImage] = useState<string | null>(null)

  useEffect(() => {
    try {
      const saved = localStorage.getItem("shared-thumbnail")
      if (saved) setThumbnailImage(saved)
    } catch {}
  }, [])

  const handlePostClick = (postId: number) => {
    setSelectedReel(postId)
  }

  // If a reel is selected, show the Reel Insights
  if (selectedReel !== null) {
    return <ReelInsights />
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: BG }}>
      <div className="max-w-[420px] mx-auto pb-20">
        
        {/* Profile Header */}
        <div className="px-4 pt-4 pb-3">
          <div className="flex items-center gap-4">
            {/* Profile Picture */}
            <div className="w-[89px] h-[89px] rounded-full overflow-hidden border border-zinc-700">
              {thumbnailImage ? (
                <img src={thumbnailImage} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                  <svg width="40" height="40" fill="#666" viewBox="0 0 24 24">
                    <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z"/>
                  </svg>
                </div>
              )}
            </div>

            {/* Stats */}
            <div className="flex-1 flex justify-around text-center">
              <div>
                <div className="text-[15px] font-bold text-white">142</div>
                <div className="text-[12px] text-zinc-400">posts</div>
              </div>
              <div>
                <div className="text-[15px] font-bold text-white">12.4K</div>
                <div className="text-[12px] text-zinc-400">followers</div>
              </div>
              <div>
                <div className="text-[15px] font-bold text-white">892</div>
                <div className="text-[12px] text-zinc-400">following</div>
              </div>
            </div>
          </div>

          {/* Bio and Name */}
          <div className="mt-4">
            <h1 className="text-[14px] font-semibold text-white">batmanwala</h1>
            <p className="text-[14px] text-zinc-300 mt-1">Content Creator 🎬</p>
            <p className="text-[14px] text-zinc-400 mt-1">Making reels that matter ✨</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mt-4">
            <button 
              className="flex-1 py-1.5 rounded-lg font-semibold text-[13px] text-white transition-opacity hover:opacity-80"
              style={{ backgroundColor: CARD_BG, border: "1px solid #3a3a3c" }}
            >
              Edit profile
            </button>
            <button 
              className="flex-1 py-1.5 rounded-lg font-semibold text-[13px] text-white transition-opacity hover:opacity-80"
              style={{ backgroundColor: CARD_BG, border: "1px solid #3a3a3c" }}
            >
              Share profile
            </button>
            <button 
              className="w-[38px] h-[34px] rounded-lg flex items-center justify-center transition-opacity hover:opacity-80"
              style={{ backgroundColor: CARD_BG, border: "1px solid #3a3a3c" }}
            >
              <svg width="18" height="18" fill="#8a8a8a" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Highlights */}
        <div className="px-4 py-3 flex gap-4 overflow-x-auto" style={{ borderTop: "1px solid #2a2d33", borderBottom: "1px solid #2a2d33" }}>
          {["🎬", "💡", "🔥", "✨", "➕"].map((emoji, i) => (
            <div key={i} className="flex flex-col items-center gap-1 shrink-0">
              <div className="w-[56px] h-[56px] rounded-full flex items-center justify-center text-[24px]" style={{ backgroundColor: CARD_BG, border: i === 4 ? "2px dashed #3a3a3c" : "none" }}>
                {emoji}
              </div>
              <span className="text-[10px] text-zinc-400">{["Reels", "Tips", "Trending", "Story", "New"][i]}</span>
            </div>
          ))}
        </div>

        {/* Tabs - Posts / Reels / Tagged */}
        <div className="flex" style={{ borderBottom: "1px solid #2a2d33" }}>
          {[
            { id: "posts", icon: (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
              </svg>
            )},
            { id: "reels", icon: (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-2-9.5l6 4-6 4z"/>
              </svg>
            )},
            { id: "tagged", icon: (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 3H3v18h18V3zM9 17H7v-6h2v6zm4 0h-2V9h2v8zm4 0h-2v-4h2v4z"/>
              </svg>
            )}
          ].map((tab) => (
            <button
              key={tab.id}
              className="flex-1 py-3 flex items-center justify-center gap-1.5 transition-colors"
              style={{ borderTop: tab.id === "posts" ? "1px solid white" : "1px solid transparent" }}
            >
              <span style={{ color: tab.id === "posts" ? "white" : "#8a8a8a" }}>{tab.icon}</span>
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-3 gap-0.5 p-0.5">
          {posts.map((post) => (
            <div
              key={post.id}
              className="aspect-square relative overflow-hidden cursor-pointer group"
              style={{ backgroundColor: CARD_BG }}
              onClick={() => handlePostClick(post.id)}
            >
              {/* Thumbnail */}
              {thumbnailImage ? (
                <img src={thumbnailImage} alt="Post" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-zinc-800">
                  <span className="text-3xl">🎬</span>
                </div>
              )}

              {/* Overlay with stats */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="flex items-center gap-1 text-white">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <span className="text-[12px] font-semibold">{post.likes}</span>
                </div>
              </div>

              {/* Views badge for reels */}
              {post.type === "reel" && (
                <div className="absolute top-2 right-2 flex items-center gap-0.5 bg-black/60 rounded-full px-2 py-0.5">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                  </svg>
                  <span className="text-[10px] text-white font-medium">{post.views}</span>
                </div>
              )}

              {/* Carousel indicator */}
              {post.type === "carousel" && (
                <div className="absolute bottom-2 right-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                    <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeNav} onTabChange={setActiveNav} />
    </div>
  )
}
