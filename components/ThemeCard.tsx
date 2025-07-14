export const ThemeCard = ({ name, emoji, colors, font, tags, isSelected, onSelect }: any) => (
  <div
    className={`rounded-2xl shadow-md p-4 w-60 h-38 flex flex-col justify-between cursor-pointer transition transform hover:scale-102 relative ${colors} ${font} ${isSelected ? '' : ''}`}
    onClick={onSelect}
  >
    {/* Checkmark overlay */}
    {isSelected && (
      <div className="absolute top-2 right-3 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
        <svg 
          className="w-4 h-4 text-white" 
          fill="none" 
          stroke="white" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 13l4 4L19 7" 
          />
        </svg>
      </div>
    )}
    
    <div className="text-xl font-bold flex items-center gap-2">
      <span>{emoji}</span> <span>{name}</span>
    </div>
    {/* <div>
      <p className="text-sm opacity-80">BrandName</p>
      <p className="text-xs mt-1 opacity-60">Your headline goes here</p>
    </div> */}
    <div className="flex flex-wrap gap-1 text-xs mt-2">
      {tags.map((tag: string) => (
        <span
          key={tag}
          className="bg-white/20 px-3 py-1 rounded-md backdrop-blur-sm border border-solid border-neutral-100"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);