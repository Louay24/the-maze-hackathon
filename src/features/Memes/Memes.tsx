import { memes } from './memesData';
export const Memes = () => {
  const memesLength = memes.length;
  const randomIndex = Math.floor(Math.random() * memesLength);
  const meme = memes[randomIndex].html_intro;
  return <div dangerouslySetInnerHTML={{ __html: meme }} />;
};
