import React from 'react'

const Badge = ({ children }) => {
  return (
    <div className="bg-[#E5E7EB] dark:bg-[#374151] rounded-[12px] py-[4px] px-[20px] w-min whitespace-nowrap">
      {children}
    </div>
  )
}

export default Badge
