import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalize(string: string) {
  return string?.split(' ').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join(' ') || '';
}

export const renderContent = (content: ContentBlock[], classes?: string) => {
  return content.map((block, index) => {
    switch (block.type) {
      case 'paragraph':
        return <p key={index} className={`mb-4 ${classes}`}>
          {
            block.children.map(child => child.text).join('')
          }
        </p>;
      case 'heading':
        return <h2 key={index} className="text-2xl font-bold my-4">
          {
            block.children.map(child => child.text).join('')
          }
        </h2>;
      default:
        return null;
    }
  });
};
