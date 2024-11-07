import React from 'react'

const Loader = () => {
    return (
        <div className="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-transparent">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
        </div>
      );
}

export default Loader