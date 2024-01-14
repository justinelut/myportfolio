// truncateText.ts
interface TruncateTextOptions {
    text: string;
    maxWords: number;
  }
  
  const truncateText = ({ text, maxWords }: TruncateTextOptions): string => {
    const words = text.split(' ');
  
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
  
    return text;
  };
  
  export default truncateText;
  