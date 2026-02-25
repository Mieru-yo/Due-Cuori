import { useEffect } from "react";
import "./ImageModal.css";

interface ImageModalProps {
  readonly isOpen: boolean;
  readonly imageUrl: string;
  readonly imageAlt: string;
  readonly onClose: () => void;
}

export function ImageModal({ isOpen, imageUrl, imageAlt, onClose }: ImageModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    globalThis.addEventListener("keydown", handleEscape);
    return () => globalThis.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="image-modal" onClick={onClose}>
      <div className="image-modal-backdrop" />
      <button className="image-modal-close" onClick={onClose} aria-label="Close modal">
        ✕
      </button>
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageUrl} alt={imageAlt} className="image-modal-img" />
      </div>
    </div>
  );
}
