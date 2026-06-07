"use client"

import React from "react"
import { usePathname } from "next/navigation"

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M21.743 11.432l-9-8.038c-.379-.338-.883-.538-1.404-.538-.52 0-1.025.2-1.404.538l-9 8.038c-.305.271-.485.648-.485 1.07v9.975c0 .828.672 1.5 1.5 1.5h3.75v-6.375c0-.414.336-.75.75-.75s.75.336.75.75v6.375h3.75v-6.375c0-.414.336-.75.75-.75s.75.336.75.75v6.375h3.75c.828 0 1.5-.672 1.5-1.5v-9.975c0-.422-.18-.799-.487-1.07z"/>
  </svg>
)

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
  </svg>
)

const ReelsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-2-9.5l6 4-6 4z"/>
  </svg>
)

const ProfileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z"/>
  </svg>
)

interface BottomNavProps {
  activeTab: "home" | "search" | "reels" | "profile"
  onTabChange: (tab: "home" | "search" | "reels" | "profile") => void
}

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const pathname = usePathname()
  
  const tabs = [
    { id: "home" as const, icon: <HomeIcon />, label: "Home" },
    { id: "search" as const, icon: <SearchIcon />, label: "Search" },
    { id: "reels" as const, icon: <ReelsIcon />, label: "Reels" },
    { id: "profile" as const, icon: <ProfileIcon />, label: "Profile" },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50" style={{ backgroundColor: "#0c0f14", borderTop: "1px solid #2a2d33" }}>
      <div className="flex justify-around items-center h-[52px] max-w-[420px] mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className="flex flex-col items-center justify-center w-16 h-full transition-colors"
            style={{ color: activeTab === tab.id ? "white" : "#8a8a8a" }}
          >
            <div className="scale-[0.9]">{tab.icon}</div>
            <span className="text-[10px] mt-0.5">{tab.label}</span>
          </button>
        ))}
      </div>
      {/* Safe area for iPhone */}
      <div style={{ paddingBottom: "env(safe-area-inset-bottom)" }} />
    </div>
  )
}
// Home icon variant for bottom nav
const HomeFilledIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M21.743 11.432l-9-8.038c-.379-.338-.883-.538-1.404-.538-.52 0-1.025.2-1.404.538l-9 8.038c-.305.271-.485.648-.485 1.07v9.975c0 .828.672 1.5 1.5 1.5h3.75v-6.375c0-.414.336-.75.75-.75s.75.336.75.75v6.375h3.75v-6.375c0-.414.336-.75.75-.75s.75.336.75.75v6.375h3.75c.828 0 1.5-.672 1.5-1.5v-9.975c0-.422-.18-.799-.487-1.07z"/>
  </svg>
)
