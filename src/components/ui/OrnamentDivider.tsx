interface OrnamentDividerProps {
  className?: string;
}

export function OrnamentDivider({ className = "" }: OrnamentDividerProps) {
  return (
    <div className={`ornament-divider ${className}`}>
      &#10022; &#10022; &#10022;
    </div>
  );
}
